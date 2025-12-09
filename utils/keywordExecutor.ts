import { Page } from '@playwright/test';
import { keywords, KeywordParams } from './keywords';

// Test step definition
export interface TestStep {
  keyword: string;
  params?: KeywordParams;
  description?: string;
}

// Test definition structure
export interface TestDefinition {
  name: string;
  description?: string;
  steps: TestStep[];
}

// Keyword executor engine
export class KeywordExecutor {
  constructor(private page: Page) {}

  async executeStep(step: TestStep): Promise<any> {
    const keyword = keywords[step.keyword];
    
    if (!keyword) {
      throw new Error(`Keyword "${step.keyword}" not found`);
    }

    console.log(`Executing: ${step.keyword}${step.description ? ' - ' + step.description : ''}`);
    
    if (step.params) {
      return await keyword(this.page, step.params);
    } else {
      return await keyword(this.page);
    }
  }

  async executeTest(testDef: TestDefinition): Promise<void> {
    console.log(`\n=== Starting Test: ${testDef.name} ===`);
    if (testDef.description) {
      console.log(`Description: ${testDef.description}`);
    }

    for (const step of testDef.steps) {
      try {
        await this.executeStep(step);
      } catch (error) {
        console.error(`Failed at step: ${step.keyword}`);
        throw error;
      }
    }

    console.log(`=== Test Completed: ${testDef.name} ===\n`);
  }
}
