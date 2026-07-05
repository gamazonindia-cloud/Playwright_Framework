//import { test, expect } from "@playwright/test";
import { test } from "../../../../baseTest";
import { expect } from "@playwright/test";

import { withHealing } from "healwright";
import { ExcelDataValidator } from "../../../../utils/excelDataValidator";
import * as path from "path";
import { CommonFunctions } from "../../../../src/pages/common/CommonFunctions";
import { CoreHrResuableFunctions } from "../../../../src/pages/hcm/CoreHR/CoreHrResuableFunctions";
import { attachScreenshot } from '../../../../utils/screenshotHelper';

test.only("Hire an Employee", async ({ page }, testInfo) => {
  test.setTimeout(1200000);
  const excelPath = path.join(__dirname, "/HireAnEmployeeTestData.xlsx");

  // Wrap the Playwright page with healwright
  const healingPage = withHealing(page);

  // Fetch only enabled datasets
  const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  const firstRecord = enabledDatasets[0];

  // Pass the healing-enabled page into your helper classes
  const commonFunctions = new CommonFunctions(healingPage);
  const hireEmployee_ReusableFunction = new CoreHrResuableFunctions(healingPage);

  await healingPage.setDefaultTimeout(120000);

  await commonFunctions.loginWithPasscode(firstRecord);
  await attachScreenshot(healingPage, testInfo, 'Login_Successful');

  await commonFunctions.navigateToItemFromHomePage("My Client Groups", "Hire an Employee");
  await attachScreenshot(healingPage, testInfo, 'Hire an Employee');

  await hireEmployee_ReusableFunction.hireEmployee_whatInfoDoYouWantToManage(firstRecord);
  await attachScreenshot(healingPage, testInfo, 'firstRecord');
  await hireEmployee_ReusableFunction.hireEmployee_WhenAndWhy(firstRecord);
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_PersonalDetails(firstRecord);
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_CommunicationInfo(firstRecord);
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_Addresses(firstRecord);
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_LegislativeInfo(firstRecord);
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_CitizenshipInfo(firstRecord);
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_PassportInfo(firstRecord);
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_DriversLicenses(firstRecord);
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_VisasAndPermits(firstRecord);
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_FamilyAndEmergencyContacts(firstRecord);
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_EmploymentDetails(firstRecord);
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_Submit(); 
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');

  await commonFunctions.navigateToItemFromHomePage("My Client Groups", "Person Management");
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_PersonManagement(firstRecord);
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_OpneEmployee();
  await attachScreenshot(healingPage, testInfo, '02 - Hire an Employee');
  await hireEmployee_ReusableFunction.hireEmployee_ValidateEmployee();
  await attachScreenshot(healingPage, testInfo, 'Employee Validation_Successful');
});
