import { test, expect } from "@playwright/test";
import { ExcelDataValidator } from "../../../../utils/excelDataValidator";
import * as path from "path";
import { TestPageReusableFunctions } from "../../../../src/pages/Testing/TestingPage/TestPageReusableFunctions";
test.only("Testing", async ({ page }) => {
  const excelPath = path.join(__dirname, "/TestData.xlsx");

  // Fetch only enabled datasets
  const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  const firstRecord = enabledDatasets[0];
  const testPage_ReusableFunction=new TestPageReusableFunctions(page);
  await testPage_ReusableFunction.test_Login(firstRecord);
  await testPage_ReusableFunction.addItemIntoCart(firstRecord);
  await testPage_ReusableFunction.proceedToCheckout();
  await testPage_ReusableFunction.paymentDetails(firstRecord);
  await testPage_ReusableFunction.validateOrder();
  await testPage_ReusableFunction.downloadInvoice();

});