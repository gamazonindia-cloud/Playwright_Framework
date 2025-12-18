import { Page } from '@playwright/test';
import { keywords, KeywordParams } from './keywords';
import { resolveLocator, ResolutionResult } from './locatorResolver';

/**
 * Healing report for a single keyword execution
 */
export interface HealingReport {
  keyword: string;
  locatorName?: string;
  resolutionResult?: ResolutionResult;
  success: boolean;
  error?: string;
  duration: number;
}

/**
 * Test step definition
 */
export interface TestStep {
  keyword: string;
  params?: KeywordParams;
  description?: string;
  locatorName?: string; // Logical locator name (for self-healing)
}

/**
 * Test definition structure
 */
export interface TestDefinition {
  name: string;
  description?: string;
  steps: TestStep[];
}

/**
 * Enhanced keyword executor with self-healing
 */
export class KeywordExecutor {
  private healingReports: HealingReport[] = [];
  private healingEnabled: boolean = true;
  private minHealingScore: number = 0.7;

  constructor(
    private page: Page,
    options?: {
      healingEnabled?: boolean;
      minHealingScore?: number;
    }
  ) {
    if (options?.healingEnabled !== undefined) {
      this.healingEnabled = options.healingEnabled;
    }
    if (options?.minHealingScore !== undefined) {
      this.minHealingScore = options.minHealingScore;
    }
  }

  /**
   * Execute a single keyword step with healing instrumentation
   */
  async executeStep(step: TestStep): Promise<any> {
    const keyword = keywords[step.keyword];

    if (!keyword) {
      throw new Error(`Keyword "${step.keyword}" not found`);
    }

    const startTime = Date.now();

    try {
      console.log(
        `Executing: ${step.keyword}${step.description ? ' - ' + step.description : ''}`
      );

      let params = step.params || {};

      // If a locator name is provided, resolve it with healing
      if (step.locatorName) {
        const resolution = await resolveLocator(step.locatorName, this.page, {
          healingEnabled: this.healingEnabled,
          minHealingScore: this.minHealingScore,
        });

        this.recordHealingReport(step.keyword, step.locatorName, resolution, true, null);

        if (!resolution.selector) {
          throw new Error(
            `Failed to resolve locator "${step.locatorName}": ${resolution.error}`
          );
        }

        // Replace selector param with resolved selector
        params = { ...params, selector: resolution.selector };
      }

      const result = await keyword(this.page, params);
      return result;
    } catch (error) {
      const duration = Date.now() - startTime;
      this.recordHealingReport(
        step.keyword,
        step.locatorName,
        undefined,
        false,
        String(error)
      );
      console.error(`Failed at step: ${step.keyword} - ${String(error)}`);
      throw error;
    }
  }

  /**
   * Execute a full test with healing instrumentation
   */
  async executeTest(testDef: TestDefinition): Promise<void> {
    console.log(`\n=== Starting Test: ${testDef.name} ===`);
    if (testDef.description) {
      console.log(`Description: ${testDef.description}`);
    }

    for (const step of testDef.steps) {
      try {
        await this.executeStep(step);
      } catch (error) {
        console.error(`Test failed at step: ${step.keyword}`);
        throw error;
      }
    }

    console.log(`\n=== Test Completed: ${testDef.name} ===`);
  }

  /**
   * Record healing attempt for reporting
   */
  private recordHealingReport(
    keyword: string,
    locatorName: string | undefined,
    resolution: ResolutionResult | undefined,
    success: boolean,
    error: string | null
  ): void {
    this.healingReports.push({
      keyword,
      locatorName,
      resolutionResult: resolution,
      success,
      error: error || undefined,
      duration: 0, // Will be set by caller if needed
    });
  }

  /**
   * Get all healing reports for this execution
   */
  getHealingReports(): HealingReport[] {
    return this.healingReports;
  }

  /**
   * Get healing report summary
   */
  getHealingSummary(): {
    totalAttempts: number;
    healed: number;
    failed: number;
    avgScore: number;
  } {
    const healed = this.healingReports.filter(r => r.resolutionResult?.healingApplied).length;
    const totalHealing = this.healingReports.filter(r => r.resolutionResult).length;
    const avgScore =
      totalHealing > 0
        ? this.healingReports
            .filter(r => r.resolutionResult)
            .reduce((sum, r) => sum + (r.resolutionResult?.healingScore || 0), 0) /
          totalHealing
        : 0;

    return {
      totalAttempts: this.healingReports.length,
      healed,
      failed: this.healingReports.filter(r => !r.success).length,
      avgScore,
    };
  }

  /**
   * Export healing reports as JSON for further review/promotion
   */
  exportHealingReports(): object {
    return {
      timestamp: new Date().toISOString(),
      summary: this.getHealingSummary(),
      reports: this.healingReports,
    };
  }
}
