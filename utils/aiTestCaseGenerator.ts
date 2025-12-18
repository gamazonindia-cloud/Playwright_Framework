/**
 * AI-Assisted Test Case Generator
 * Generates keyword-driven test steps from requirements or Gherkin
 */

import { listLocators } from './locators';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Schema for AI-generated test step
 */
export interface AIGeneratedStep {
  step: number;
  keyword: string;
  locatorName?: string;
  selector?: string;
  value?: string;
  assertion?: string;
  description: string;
  confidence: number; // 0-1
  source: string; // Which requirement line it came from
}

/**
 * Schema for AI-generated test case
 */
export interface AIGeneratedTestCase {
  testName: string;
  description: string;
  requirementSource: string;
  generatedAt: string;
  steps: AIGeneratedStep[];
  validationStatus: 'pending' | 'validated' | 'approved' | 'rejected';
  notes?: string;
}

/**
 * Keyword catalog extracted from your keywords.ts
 */
const keywordCatalog = [
  { keyword: 'navigate', params: ['url'], description: 'Navigate to a URL' },
  { keyword: 'click', params: ['locatorName', 'selector'], description: 'Click an element' },
  { keyword: 'type', params: ['locatorName', 'selector', 'value'], description: 'Type into an input' },
  { keyword: 'select', params: ['locatorName', 'selector', 'value'], description: 'Select from dropdown' },
  { keyword: 'assertText', params: ['locatorName', 'selector', 'expectedText'], description: 'Assert text content' },
  { keyword: 'assertVisible', params: ['locatorName', 'selector'], description: 'Assert element is visible' },
  { keyword: 'waitFor', params: ['locatorName', 'selector', 'timeout'], description: 'Wait for element' },
  { keyword: 'screenshot', params: ['filename'], description: 'Take screenshot' },
  { keyword: 'setCookie', params: ['name', 'value'], description: 'Set a cookie' },
  { keyword: 'fillForm', params: ['locatorName', 'selector', 'data'], description: 'Fill form with object data' },
];

/**
 * Simple keyword suggestion based on requirement text
 * (Real implementation would use LLM API)
 */
function suggestKeywords(requirement: string): string[] {
  const suggestions: string[] = [];
  const lower = requirement.toLowerCase();

  if (lower.includes('navigate') || lower.includes('go to') || lower.includes('open')) {
    suggestions.push('navigate');
  }
  if (lower.includes('click') || lower.includes('button') || lower.includes('press')) {
    suggestions.push('click');
  }
  if (lower.includes('type') || lower.includes('enter') || lower.includes('fill') || lower.includes('input')) {
    suggestions.push('type');
  }
  if (lower.includes('select') || lower.includes('dropdown') || lower.includes('choose')) {
    suggestions.push('select');
  }
  if (lower.includes('assert') || lower.includes('verify') || lower.includes('check')) {
    suggestions.push('assertText');
  }
  if (lower.includes('visible') || lower.includes('displayed')) {
    suggestions.push('assertVisible');
  }
  if (lower.includes('wait') || lower.includes('loading')) {
    suggestions.push('waitFor');
  }
  if (lower.includes('screenshot') || lower.includes('capture')) {
    suggestions.push('screenshot');
  }

  return suggestions.length > 0 ? suggestions : ['type', 'click'];
}

/**
 * Extract element references from requirement (e.g., "username field", "login button")
 */
function extractElementRefs(requirement: string): string[] {
  const locatorNames = listLocators();
  const found: string[] = [];

  locatorNames.forEach(name => {
    const parts = name.split('.');
    const shortName = parts[parts.length - 1].replace(/[-_]/g, ' ');

    if (requirement.toLowerCase().includes(shortName.toLowerCase())) {
      found.push(name);
    }
  });

  return found;
}

/**
 * Generate test steps from a single requirement line
 */
function generateStepsForRequirement(
  requirement: string,
  stepOffset: number = 0
): AIGeneratedStep[] {
  const steps: AIGeneratedStep[] = [];
  const keywords = suggestKeywords(requirement);
  const elements = extractElementRefs(requirement);

  let stepNum = stepOffset + 1;

  keywords.forEach(keyword => {
    const element = elements.length > 0 ? elements[0] : undefined;

    const step: AIGeneratedStep = {
      step: stepNum++,
      keyword,
      locatorName: element,
      description: `${keyword} action: ${requirement.slice(0, 50)}...`,
      confidence: 0.7, // Default moderate confidence
      source: requirement,
    };

    // Add heuristic value extraction
    if (keyword === 'type' && requirement.includes('"')) {
      const match = requirement.match(/"([^"]+)"/);
      if (match) {
        step.value = match[1];
        step.confidence = 0.9; // Higher confidence when value is explicit
      }
    }

    steps.push(step);
  });

  return steps;
}

/**
 * Generate test case from requirement text or Gherkin
 */
export function generateTestCaseFromRequirement(
  testName: string,
  requirementText: string
): AIGeneratedTestCase {
  const lines = requirementText.split('\n').filter(l => l.trim().length > 0);
  const allSteps: AIGeneratedStep[] = [];
  let stepNum = 0;

  lines.forEach(line => {
    const lineSteps = generateStepsForRequirement(line, stepNum);
    allSteps.push(...lineSteps);
    stepNum += lineSteps.length;
  });

  return {
    testName,
    description: `Generated from requirements: ${lines[0]?.slice(0, 50) || 'N/A'}`,
    requirementSource: requirementText,
    generatedAt: new Date().toISOString(),
    steps: allSteps,
    validationStatus: 'pending',
    notes: 'AI-generated test case. Review and approve before execution.',
  };
}

/**
 * Generate from Gherkin (simple parser)
 */
export function generateTestCaseFromGherkin(gherkinText: string): AIGeneratedTestCase {
  const lines = gherkinText.split('\n');
  let testName = 'Test Case';
  const allSteps: AIGeneratedStep[] = [];
  let stepNum = 1;

  lines.forEach(line => {
    line = line.trim();

    if (line.startsWith('Feature:')) {
      testName = line.replace('Feature:', '').trim();
    } else if (line.startsWith('Scenario:')) {
      testName = line.replace('Scenario:', '').trim();
    } else if (line.startsWith('Given ') || line.startsWith('When ') || line.startsWith('Then ') || line.startsWith('And ')) {
      const stepText = line.replace(/^(Given|When|Then|And)\s+/, '');
      const steps = generateStepsForRequirement(stepText, stepNum - 1);
      allSteps.push(...steps);
      stepNum += steps.length;
    }
  });

  return {
    testName,
    description: `Generated from Gherkin: ${testName}`,
    requirementSource: gherkinText,
    generatedAt: new Date().toISOString(),
    steps: allSteps,
    validationStatus: 'pending',
    notes: 'Gherkin-based test case. Review and approve before execution.',
  };
}

/**
 * Validate generated test case against keyword catalog
 */
export function validateTestCase(testCase: AIGeneratedTestCase): {
  valid: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  const validKeywords = keywordCatalog.map(k => k.keyword);

  testCase.steps.forEach((step, idx) => {
    if (!validKeywords.includes(step.keyword)) {
      issues.push(`Step ${idx + 1}: Unknown keyword "${step.keyword}"`);
    }

    if (step.confidence < 0.5) {
      issues.push(`Step ${idx + 1}: Low confidence (${step.confidence})`);
    }

    // Validate required params based on keyword
    const keywordDef = keywordCatalog.find(k => k.keyword === step.keyword);
    if (keywordDef) {
      keywordDef.params.forEach(param => {
        if (param !== 'selector' && !step[param as keyof AIGeneratedStep]) {
          issues.push(`Step ${idx + 1}: Missing required parameter "${param}" for "${step.keyword}"`);
        }
      });
    }
  });

  return {
    valid: issues.length === 0,
    issues,
  };
}

/**
 * Save generated test case for review
 */
export function saveForReview(testCase: AIGeneratedTestCase, outputDir: string = './reports/ai-suggestions'): string {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const fileName = `${testCase.testName.replace(/\s+/g, '_')}_${Date.now()}.json`;
  const filePath = path.join(outputDir, fileName);

  const validation = validateTestCase(testCase);
  const output = {
    ...testCase,
    validationStatus: validation.valid ? 'validated' : 'pending',
    validationIssues: validation.issues,
  };

  fs.writeFileSync(filePath, JSON.stringify(output, null, 2));
  console.log(`Test case saved to: ${filePath}`);

  return filePath;
}

/**
 * Approve a test case for execution by adding it to the actual test registry
 */
export function approveTestCase(testCasePath: string, targetDir: string = './tests/approved-ai-cases'): void {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const testCase = JSON.parse(fs.readFileSync(testCasePath, 'utf-8')) as AIGeneratedTestCase;
  testCase.validationStatus = 'approved';

  const approvedPath = path.join(targetDir, path.basename(testCasePath));
  fs.writeFileSync(approvedPath, JSON.stringify(testCase, null, 2));

  console.log(`Test case approved and moved to: ${approvedPath}`);
}

/**
 * Convert approved test case to keyword steps for executor
 */
export function convertToKeywordSteps(testCase: AIGeneratedTestCase) {
  return testCase.steps.map(step => ({
    keyword: step.keyword,
    locatorName: step.locatorName,
    params: {
      selector: step.selector,
      value: step.value,
      expectedText: step.assertion,
    },
    description: step.description,
  }));
}
