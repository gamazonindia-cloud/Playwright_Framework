import { test, expect } from "@playwright/test";
import { ExcelDataValidator } from "../../../../utils/excelDataValidator.js";
import * as path from "path";
import { CommonFunctions } from "../../../../src/pages/common/CommonFunctions";
import { InvoicePageReusableFunctions } from "../../../../src/pages/finance/AP/InvoicePageReusableFunctions";
test("Create PrePayment Invoice", async ({ page }) => {
  const excelPath = path.join(__dirname, "/CreatePrePaymentInvoiceData.xlsx");

  // Fetch only enabled datasets
  const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  const headers = ExcelDataValidator.getHeaders(excelPath);

  console.log(`\n✅ Total Enabled Datasets: ${enabledDatasets.length}\n`);
  console.log(`\n\nMethod 2: Get first record`);
  const firstRecord = enabledDatasets[0];
  
  const commonFunctions = new CommonFunctions(page);
  const invoicePage = new InvoicePageReusableFunctions(page);
  await commonFunctions.login(firstRecord);
  await commonFunctions.navigateToMenuItem("Payables", "Invoices");
  await commonFunctions.selectTastkFromTasksPanel("Invoices", "Create Invoice");
  //await invoicePage.createInvoiceHeader(firstRecord);
  //await invoicePage.createInvoiceLine(firstRecord);
  //await invoicePage.saveInvoice();
  await invoicePage.validateInvoiceAndReleaseHold();
  await invoicePage.saveInvoice();
  await invoicePage.postToLedgerAndViewAccounting();
  await invoicePage.saveAndCloseInvoice();
  await commonFunctions.selectTastkFromTasksPanel("Invoices", "Manage Invoices");
  await invoicePage.manageInvoice();
  await invoicePage.validateInvoice();




  



});
