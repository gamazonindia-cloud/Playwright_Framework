import { test, expect } from "@playwright/test";
import { ExcelDataValidator } from "../../../../utils/excelDataValidator";
import * as path from "path";
import { CommonFunctions } from "../../../../src/pages/common/CommonFunctions";
import { FixedAssetResuableFunctions } from "../../../../src/pages/finance/FA/FixedAssetResuableFunctions";
import { CoreHrResuableFunctions } from "../../../../src/pages/hcm/CoreHR/CoreHrResuableFunctions";
test.only("Hire an Employee", async ({ page }) => {
  test.setTimeout(1200000);
  const excelPath = path.join(__dirname, "/HireAnEmployeeTestData.xlsx");

  // Fetch only enabled datasets
  const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  const firstRecord = enabledDatasets[0];
  const commonFunctions = new CommonFunctions(page);
  const fixedAssetFunctions = new FixedAssetResuableFunctions(page);
  await commonFunctions.login(firstRecord);
  const date=await commonFunctions.getCurrentDate();
  await commonFunctions.navigateToItemFromHomePage("My Client Groups", "Terminate Employment");
  const hireEmployee_ReusableFunction=new CoreHrResuableFunctions(page);
  await page.setDefaultTimeout(120000);
  await hireEmployee_ReusableFunction.hireEmployee_SearchTerminateEmployment();
  await hireEmployee_ReusableFunction.hireEmployee_TerminateEmployment(firstRecord);
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();




});