/**
 * Locator Resolver with Self-Healing
 * Resolves logical locator names to actual selectors with fallback + healing
 */

import { Page } from '@playwright/test';
import { getLocator } from './locators';

export interface ResolutionResult {
  selector: string;
  locatorName: string;
  fallbackIndex: number; // -1 = primary, 0+ = fallback index
  healingApplied: boolean;
  healingScore: number; // 0-1, where 1 is exact match
  attemptedSelectors: string[];
  error?: string;
}

/**
 * Simple Levenshtein distance for string similarity (0-1)
 */
function stringSimilarity(a: string, b: string): number {
  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;
  if (longer.length === 0) return 1.0;

  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
}

function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

/**
 * Try to resolve a locator with fallbacks and healing
 */
export async function resolveLocator(
  locatorName: string,
  page: Page,
  options: {
    healingEnabled?: boolean;
    minHealingScore?: number;
    timeout?: number;
  } = {}
): Promise<ResolutionResult> {
  const {
    healingEnabled = true,
    minHealingScore = 0.7,
    timeout = 5000,
  } = options;

  const definition = getLocator(locatorName);
  if (!definition) {
    return {
      selector: '',
      locatorName,
      fallbackIndex: -1,
      healingApplied: false,
      healingScore: 0,
      attemptedSelectors: [],
      error: `Locator "${locatorName}" not found in registry`,
    };
  }

  const attemptedSelectors: string[] = [];
  const selectors = [definition.primary, ...(definition.fallbacks || [])];

  // Try primary and fallbacks
  for (let i = 0; i < selectors.length; i++) {
    const selector = selectors[i];
    attemptedSelectors.push(selector);

    try {
      const element = await page.locator(selector).first();
      const visible = await element.isVisible().catch(() => false);
      if (visible || (await element.count()).then(c => c > 0).catch(() => false)) {
        return {
          selector,
          locatorName,
          fallbackIndex: i === 0 ? -1 : i - 1,
          healingApplied: false,
          healingScore: 1.0,
          attemptedSelectors,
        };
      }
    } catch {
      // Selector failed, continue
    }
  }

  // All selectors failed, attempt healing
  if (!healingEnabled) {
    return {
      selector: '',
      locatorName,
      fallbackIndex: -1,
      healingApplied: false,
      healingScore: 0,
      attemptedSelectors,
      error: `No matching selector found for "${locatorName}"; healing disabled`,
    };
  }

  return await healLocator(
    locatorName,
    definition,
    page,
    attemptedSelectors,
    minHealingScore,
    timeout
  );
}

/**
 * Attempt to heal a broken locator using DOM similarity
 */
async function healLocator(
  locatorName: string,
  definition: any,
  page: Page,
  attemptedSelectors: string[],
  minHealingScore: number,
  timeout: number
): Promise<ResolutionResult> {
  try {
    // Extract attribute hints from primary selector
    const hints = extractAttributeHints(definition.primary);

    // Query the page for elements matching the hints
    const candidates = await page.evaluate((hintObj) => {
      const els: any[] = [];
      document.querySelectorAll('input, button, select, div, span, textarea').forEach((el: any) => {
        const attrs = {
          id: el.id || '',
          name: el.name || '',
          placeholder: el.placeholder || '',
          ariaLabel: el.getAttribute('aria-label') || '',
          text: el.textContent?.slice(0, 50) || '',
          type: el.type || '',
        };
        els.push({
          selector: generateSelector(el),
          attrs,
        });
      });
      return els;
    }, hints);

    // Score candidates based on attribute similarity
    let bestCandidate: any = null;
    let bestScore = minHealingScore;

    for (const candidate of candidates) {
      let score = 0;
      if (hints.id && candidate.attrs.id && stringSimilarity(hints.id, candidate.attrs.id) > 0.6) {
        score += 0.3;
      }
      if (hints.name && candidate.attrs.name && stringSimilarity(hints.name, candidate.attrs.name) > 0.6) {
        score += 0.3;
      }
      if (hints.placeholder && candidate.attrs.placeholder && stringSimilarity(hints.placeholder, candidate.attrs.placeholder) > 0.6) {
        score += 0.2;
      }
      if (hints.ariaLabel && candidate.attrs.ariaLabel && stringSimilarity(hints.ariaLabel, candidate.attrs.ariaLabel) > 0.6) {
        score += 0.2;
      }

      if (score > bestScore) {
        bestScore = score;
        bestCandidate = candidate;
      }
    }

    if (bestCandidate) {
      return {
        selector: bestCandidate.selector,
        locatorName,
        fallbackIndex: -1,
        healingApplied: true,
        healingScore: bestScore,
        attemptedSelectors,
      };
    }

    return {
      selector: '',
      locatorName,
      fallbackIndex: -1,
      healingApplied: false,
      healingScore: 0,
      attemptedSelectors,
      error: `Healing failed: no high-confidence candidates found (min score: ${minHealingScore})`,
    };
  } catch (err) {
    return {
      selector: '',
      locatorName,
      fallbackIndex: -1,
      healingApplied: false,
      healingScore: 0,
      attemptedSelectors,
      error: `Healing error: ${String(err)}`,
    };
  }
}

/**
 * Extract attribute hints from a selector string
 */
function extractAttributeHints(selector: string): Record<string, string> {
  const hints: Record<string, string> = {};

  // data-testid="username" → { testid: 'username' }
  const testIdMatch = selector.match(/data-testid="([^"]+)"/);
  if (testIdMatch) hints.id = testIdMatch[1];

  // #username → { id: 'username' }
  const idMatch = selector.match(/#([\w-]+)/);
  if (idMatch) hints.id = idMatch[1];

  // input[name="username"] → { name: 'username' }
  const nameMatch = selector.match(/\[name="([^"]+)"\]/);
  if (nameMatch) hints.name = nameMatch[1];

  // placeholder*="User" → { placeholder: 'User' }
  const placeholderMatch = selector.match(/placeholder\*="([^"]+)"/);
  if (placeholderMatch) hints.placeholder = placeholderMatch[1];

  return hints;
}

/**
 * Generate a simple selector from a DOM element
 */
function generateSelector(el: Element): string {
  if (el.id) return `#${el.id}`;
  const name = (el as any).name;
  if (name) return `[name="${name}"]`;
  const testId = el.getAttribute('data-testid');
  if (testId) return `[data-testid="${testId}"]`;
  return '';
}
