import { test, expect } from '@playwright/test';
import { ExcelDataValidator } from '../../../../utils/excelDataValidator';
import * as path from 'path';
import { LoginToOracleApplication } from '../../../../src/pages/common/LoginToOracleApplication';


  test('Fetch all enabled datasets (Enabled = TRUE)', async ({ page }) => {
    const excelPath = path.join(__dirname, '/CreateInvoiceTestData.xlsx');

    // Fetch only enabled datasets
    const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
    const headers = ExcelDataValidator.getHeaders(excelPath);

    console.log(`\n✅ Total Enabled Datasets: ${enabledDatasets.length}\n`);
    console.log(`\n\nMethod 2: Get first record`);
    const firstRecord = enabledDatasets[0];
    console.log(`  Dataset: ${firstRecord.Dataset}`);
    console.log(`  UserName: ${firstRecord.UserName}`);
    console.log(`  Info: ${firstRecord.Info}`);
    console.log(`  Password: ${firstRecord.Password}`);
    const loginToOracleApplication = new LoginToOracleApplication(page);
    await loginToOracleApplication.login(firstRecord.UserName, firstRecord.Password);    

  });