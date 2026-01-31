import { test, expect } from "@playwright/test";
import { ExcelDataValidator } from "../../../../utils/excelDataValidator";
import * as path from "path";
import { CommonFunctions } from "../../../../src/pages/common/CommonFunctions";
import { CoreHrResuableFunctions } from "../../../../src/pages/hcm/CoreHR/CoreHrResuableFunctions";
test("Terminate an Employee", async ({ page }) => {
  test.setTimeout(1200000);
  const excelPath = path.join(__dirname, "/TerminateAnEmployeeTestData.xlsx");

  // Fetch only enabled datasets
  const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  const firstRecord = enabledDatasets[0];
  const commonFunctions = new CommonFunctions(page);
  const hireEmployee_ReusableFunction=new CoreHrResuableFunctions(page);
  await page.setDefaultTimeout(120000);
  await commonFunctions.login(firstRecord);
  await commonFunctions.navigateToItemFromHomePage("My Client Groups", "Terminate Employment");
  await hireEmployee_ReusableFunction.SearchTerminateEmployment();
  await hireEmployee_ReusableFunction.TerminateEmployment(firstRecord);
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  



});