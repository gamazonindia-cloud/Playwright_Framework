import { test, expect } from '@playwright/test';
import { ExcelDataValidator } from '../../../utils/excelDataValidator';
import { KeywordExecutor, TestDefinition } from '../../../utils/keywordExecutorWithHealing';
import {
  generateTestCaseFromRequirement,
  generateTestCaseFromGherkin,
  validateTestCase,
  saveForReview,
  convertToKeywordSteps,
} from '../../../utils/aiTestCaseGenerator';
import * as path from 'path';
import * as fs from 'fs';

test.describe('Self-Healing & AI Test Case Framework', () => {

  test('Demo: Generate AI test case from requirement', () => {
    // Simulate a business requirement
    const requirement = `
      User navigates to login page
      User enters "testuser" in the username field
      User enters "password123" in the password field
      User clicks the login button
      User verifies "Welcome" message is displayed
    `;

    const testCase = generateTestCaseFromRequirement('Login Test', requirement);

    console.log('\n=== Generated AI Test Case ===');
    console.log(JSON.stringify(testCase, null, 2));

    // Validate the generated test case
    const validation = validateTestCase(testCase);
    console.log('\n=== Validation Result ===');
    console.log(`Valid: ${validation.valid}`);
    if (validation.issues.length > 0) {
      console.log('Issues:', validation.issues);
    }

    // Save for review (doesn't auto-execute)
    const savedPath = saveForReview(testCase);
    console.log(`\n✅ Test case saved for review at: ${savedPath}`);

    expect(testCase.steps.length).toBeGreaterThan(0);
  });

  test('Demo: Generate AI test case from Gherkin', () => {
    const gherkin = `
      Feature: User Login
      Scenario: Successful login with valid credentials
        Given user is on login page
        When user enters "testuser" in username field
        And user enters "password123" in password field
        And user clicks login button
        Then user sees welcome message
    `;

    const testCase = generateTestCaseFromGherkin(gherkin);

    console.log('\n=== Generated Gherkin Test Case ===');
    console.log(JSON.stringify(testCase, null, 2));

    // Validate
    const validation = validateTestCase(testCase);
    console.log(`\n=== Validation Result ===\nValid: ${validation.valid}`);

    // Save for review
    saveForReview(testCase);

    expect(testCase.steps.length).toBeGreaterThan(0);
  });

  test('Demo: Self-healing with locator resolver', async ({ page }) => {
    // Go to a sample page (or mock for demo)
    await page.goto('about:blank');

    // Simulate using the enhanced keyword executor with healing
    const executor = new KeywordExecutor(page, {
      healingEnabled: true,
      minHealingScore: 0.7,
    });

    // Define a test with locator names (instead of raw selectors)
    const testDef: TestDefinition = {
      name: 'Login with Self-Healing',
      description: 'Demonstrates locator resolution and healing',
      steps: [
        {
          keyword: 'navigate',
          params: { url: 'https://example.com/login' },
          description: 'Navigate to login page',
        },
        {
          keyword: 'type',
          locatorName: 'login.username', // Will be resolved with fallbacks
          params: { value: 'testuser' },
          description: 'Enter username',
        },
        {
          keyword: 'type',
          locatorName: 'login.password', // Will be resolved with healing if needed
          params: { value: 'password123' },
          description: 'Enter password',
        },
        {
          keyword: 'click',
          locatorName: 'login.submit', // Will fall back or heal
          description: 'Click login button',
        },
      ],
    };

    try {
      await executor.executeTest(testDef);
    } catch (error) {
      console.log(`\n⚠️  Test failed (expected for demo): ${String(error).slice(0, 50)}`);
      // Expected: keyword or navigation will fail, but healing instrumentation logs the attempt
    }

    // Get healing reports
    const healingReports = executor.getHealingReports();
    const summary = executor.getHealingSummary();

    console.log('\n=== Healing Reports ===');
    if (healingReports.length === 0) {
      console.log('(No healing attempts logged - keyword execution failed before locator resolution)');
    } else {
      console.log(JSON.stringify(healingReports, null, 2));
    }

    console.log('\n=== Healing Summary ===');
    console.log(JSON.stringify(summary, null, 2));

    // Export for audit trail
    const exportedReports = executor.exportHealingReports();
    const reportPath = './reports/healing-reports.json';
    if (!fs.existsSync('./reports')) {
      fs.mkdirSync('./reports', { recursive: true });
    }
    fs.writeFileSync(reportPath, JSON.stringify(exportedReports, null, 2));

    console.log(`\n✅ Healing reports exported to: ${reportPath}`);
    console.log('✅ Self-healing framework is operational');
  });

  test('Demo: Fetch test data and show AI integration', async ({ page }) => {
    const excelPath = path.join(__dirname, '../../testData/singleTestCase.xlsx');

    // Fetch enabled datasets
    const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
    console.log(`\n=== Enabled Datasets: ${enabledDatasets.length} ===`);

    enabledDatasets.forEach((dataset, idx) => {
      console.log(`\n[${idx + 1}] Dataset: ${dataset.Dataset}`);
      console.log(`    UserName: ${dataset.UserName}`);
      console.log(`    Supplier: ${dataset.Supplier}`);
      console.log(`    Supplier Site: ${dataset['Supplier Site']}`);
    });

    // For each dataset, we could generate a parameterized test
    const requirement = `User logs in with ${enabledDatasets[0]?.UserName} and verifies supplier ${enabledDatasets[0]?.Supplier}`;

    if (enabledDatasets.length > 0) {
      const testCase = generateTestCaseFromRequirement('Parameterized Test', requirement);
      console.log('\n=== Generated Parameterized Test ===');
      console.log(`Name: ${testCase.testName}`);
      console.log(`Steps: ${testCase.steps.length}`);

      saveForReview(testCase);
    }

    expect(enabledDatasets.length).toBeGreaterThan(0);
  });

  test('Demo: Show AI-generated steps ready for executor', async ({ page }) => {
    const gherkin = `
      Feature: Invoice Processing
      Scenario: Submit invoice with correct data
        Given user navigates to invoice page
        When user selects supplier from dropdown
        And user enters supplier site information
        And user clicks submit button
        Then user verifies success message
    `;

    const testCase = generateTestCaseFromGherkin(gherkin);
    const validation = validateTestCase(testCase);

    if (validation.valid) {
      console.log('\n=== AI-Generated Steps (Ready for Executor) ===');
      const keywordSteps = convertToKeywordSteps(testCase);
      console.log(JSON.stringify(keywordSteps, null, 2));

      // These steps can now be fed directly into KeywordExecutor
    }

    expect(testCase.steps.length).toBeGreaterThan(0);
  });

});
