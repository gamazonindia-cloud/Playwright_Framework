import { test, expect } from "@playwright/test";
import { ExcelDataValidator } from "../../../../utils/excelDataValidator";
import * as path from "path";
import { CommonFunctions } from "../../../../src/pages/common/CommonFunctions";
import { FixedAssetResuableFunctions } from "../../../../src/pages/finance/FA/FixedAssetResuableFunctions";
import { CoreHrResuableFunctions } from "../../../../src/pages/hcm/CoreHR/CoreHrResuableFunctions";
test("Hire an Employee", async ({ page }) => {
  test.setTimeout(1200000);
  const excelPath = path.join(__dirname, "/HireAnEmployeeTestData.xlsx");

  // Fetch only enabled datasets
  const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  const firstRecord = enabledDatasets[0];
  const commonFunctions = new CommonFunctions(page);
  const hireEmployee_ReusableFunction=new CoreHrResuableFunctions(page);
  await page.setDefaultTimeout(120000);
  await commonFunctions.login(firstRecord);
  await commonFunctions.navigateToItemFromHomePage("My Client Groups", "Hire an Employee");
  await hireEmployee_ReusableFunction.hireEmployee_WhenAndWhy(firstRecord);
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await hireEmployee_ReusableFunction.hireEmployee_PersonalDetails(firstRecord);
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await hireEmployee_ReusableFunction.hireEmployee_CommunicationInfo(firstRecord);
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await hireEmployee_ReusableFunction.hireEmployee_Addresses(firstRecord);
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await hireEmployee_ReusableFunction.hireEmployee_LegislativeInfo(firstRecord);
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await hireEmployee_ReusableFunction.hireEmployee_CitizenshipInfo(firstRecord);
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await hireEmployee_ReusableFunction.hireEmployee_VisasAndPermits(firstRecord);
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await hireEmployee_ReusableFunction.hireEmployee_FamilyAndEmergencyContacts(firstRecord);
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await hireEmployee_ReusableFunction.hireEmployee_EmploymentDetails(firstRecord);
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await hireEmployee_ReusableFunction.hireEmployee_AssignManagers(firstRecord);
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await hireEmployee_ReusableFunction.hireEmployee_PayrollDetails(firstRecord);
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await hireEmployee_ReusableFunction.hireEmployee_Salary(firstRecord);
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await hireEmployee_ReusableFunction.hireEmployee_Submit(); 
  await commonFunctions.navigateToItemFromHomePage("My Client Groups", "Person Management");
  await hireEmployee_ReusableFunction.hireEmployee_PersonManagement(firstRecord);
  await hireEmployee_ReusableFunction.hireEmployee_OpneEmployee();
  await hireEmployee_ReusableFunction.hireEmployee_ValidateEmployee();




});