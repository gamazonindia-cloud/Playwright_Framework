import { test, expect } from "@playwright/test";
import { ExcelDataValidator } from "../../utils/excelDataValidator";
import * as path from "path";
import { TestPageReusableFunctions } from "../../src/pages/Testing/TestingPage/TestPageReusableFunctions";
test.only("Testing", async ({ page }) => {
  const excelPath = path.join(__dirname, "/PurchaseItemTestData.xlsx");

  // Fetch only enabled datasets
  const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  const firstRecord = enabledDatasets[0];
  const shoppingApp_ReusableFunction=new TestPageReusableFunctions(page);
  await shoppingApp_ReusableFunction.test_Login(firstRecord);
  await shoppingApp_ReusableFunction.addItemIntoCart(firstRecord);
  await shoppingApp_ReusableFunction.proceedToCheckout();
  await shoppingApp_ReusableFunction.paymentDetails(firstRecord);
  await shoppingApp_ReusableFunction.validateOrder();
  await shoppingApp_ReusableFunction.downloadInvoice();


});