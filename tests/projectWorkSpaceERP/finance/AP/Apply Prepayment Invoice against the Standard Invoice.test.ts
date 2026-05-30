import { test, expect } from "@playwright/test";
import { ExcelDataValidator } from "../../../../utils/excelDataValidator";
import * as path from "path";
import { CommonFunctions } from "../../../../src/pages/common/CommonFunctions";
import { InvoicePageReusableFunctions } from "../../../../src/pages/finance/AP/InvoicePageReusableFunctions.js";
test("Create Payment with Same currency as Invoice Currency", async ({ page }) => {
  const excelPath = path.join(__dirname, "Create Payment with Same currency as Invoice Currency Data.xlsx");

  // Fetch only enabled datasets
  let enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  if (enabledDatasets.length === 0) {
    enabledDatasets = ExcelDataValidator.readExcelData(excelPath);
  }
  const headers = ExcelDataValidator.getHeaders(excelPath);

  console.log(`\n✅ Total Enabled Datasets: ${enabledDatasets.length}\n`);
  console.log(`\n\nMethod 2: Get first record`);
  const firstRecord = enabledDatasets[0];
  
  const commonFunctions = new CommonFunctions(page);
  const invoicePage = new InvoicePageReusableFunctions(page);
  await commonFunctions.loginWithPasscode(firstRecord);
  await invoicePage.approveInvoice("OpKey_Inv_292664");
  await commonFunctions.navigateToItemFromHomePage("Payables", "Invoices");
  await commonFunctions.selectTastkFromTasksPanel("Invoices", "Create Invoice");
  await invoicePage.createInvoiceHeader(firstRecord);
  await invoicePage.createInvoiceLine(firstRecord);
  await invoicePage.saveInvoice();
  await invoicePage.validateInvoiceAndReleaseHold();
  await invoicePage.saveInvoice();
  await invoicePage.postToLedgerAndViewAccounting();
  await invoicePage.saveAndCloseInvoice();
  await commonFunctions.selectTastkFromTasksPanel("Invoices", "Manage Invoices");
  await invoicePage.manageInvoice();
  await invoicePage.validateInvoice();
  await commonFunctions.navigateToItemFromHomePage("Payables", "Payments");
  await commonFunctions.selectTastkFromTasksPanel("Payments", "Create Payment");
  await invoicePage.createPayment(firstRecord);
  await invoicePage.addInvoice();
  await invoicePage.getPaymentNumber();
  await commonFunctions.selectTastkFromTasksPanel("Payments", "Manage Payments");
  await invoicePage.managePayment();
  await invoicePage.validatePayment();

});
