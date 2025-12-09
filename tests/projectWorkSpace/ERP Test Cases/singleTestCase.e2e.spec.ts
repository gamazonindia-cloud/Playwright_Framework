import { test, expect } from '@playwright/test';
import { ExcelParser } from '../../../utils/excelParser';
import * as path from 'path';

test.describe('Single Test Case - Fetch Excel Data by Dataset', () => {
  test('Multiple Business Units Dataset Testing', async ({ page }) => {
    const excelPath = path.join(__dirname, '../../testData/singleTestCase.xlsx');

    const testData = ExcelParser.parseExcelSingleTestCase(excelPath, 'Dataset', 'France');

    console.log('\n📊 Fetched Dataset: CA BU');
    console.log('  Data:', JSON.stringify(testData.data));
    await page.goto('https://playwright.dev');
    console.log('✅ CA BU dataset fetched successfully!');
  });
});
