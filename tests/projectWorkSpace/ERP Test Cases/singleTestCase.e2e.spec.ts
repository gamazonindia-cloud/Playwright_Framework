import { test, expect } from '@playwright/test';
import { ExcelDataValidator } from '../../../utils/excelDataValidator';
import * as path from 'path';

test.describe('Single Test Case - Data Layer', () => {

  test('Fetch all enabled datasets (Enabled = TRUE)', async ({ page }) => {
    const excelPath = path.join(__dirname, '../../testData/singleTestCase.xlsx');

    // Fetch only enabled datasets
    const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
    const headers = ExcelDataValidator.getHeaders(excelPath);

    console.log(`\n✅ Total Enabled Datasets: ${enabledDatasets.length}\n`);

    enabledDatasets.forEach((dataset, index) => {
      console.log(`[${index + 1}] ${dataset.Dataset}`);
      headers.forEach((header) => {
        console.log(`   ${header}: ${dataset[header]}`);
      });
      console.log();
    });
     console.log(`\n\nMethod 2: Get first record`);
    const firstRecord = enabledDatasets[0];
    console.log(`  Dataset: ${firstRecord.Dataset}`);
    console.log(`  UserName: ${firstRecord.UserName}`);
    console.log(`  Info: ${firstRecord.Info}`);
    console.log(`  Password: ${firstRecord.Password}`);
    expect(enabledDatasets.length).toBeGreaterThan(0);
  });

});
