import { test, expect } from "@playwright/test";
import { ExcelDataValidator } from "../../../../utils/excelDataValidator";
import * as path from "path";
import { CommonFunctions } from "../../../../src/pages/common/CommonFunctions";
import { FixedAssetResuableFunctions } from "../../../../src/pages/finance/FA/FixedAssetResuableFunctions";
import { InvoicePageReusableFunctions } from "../../../../src/pages/finance/AP/InvoicePageReusableFunctions";
test.only("Create an Invoice", async ({ page }) => {
  const excelPath = path.join(__dirname, "/CreaetInvoiceTestData.xlsx");

  // Fetch only enabled datasets
  const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  const headers = ExcelDataValidator.getHeaders(excelPath);

  console.log(`\n✅ Total Enabled Datasets: ${enabledDatasets.length}\n`);
  console.log(`\n\nMethod 2: Get first record`);
  const firstRecord = enabledDatasets[0];
  
  const commonFunctions = new CommonFunctions(page);
  const fixedAssetFunctions = new FixedAssetResuableFunctions(page);
  const invoicePage = new InvoicePageReusableFunctions(page);
  await commonFunctions.login(firstRecord);
  await commonFunctions.navigateToMenuItem("Payables", "Invoices");
  await commonFunctions.selectTastkFromTasksPanel("Invoices", "Create Invoice");
  await invoicePage.createInvoiceHeader(firstRecord);
  
  


});
