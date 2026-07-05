import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../../../baseTest";
import { withHealing } from "healwright";
import { ExcelDataValidator } from "../../../utils/excelDataValidator";
import * as path from "path";
import { CommonFunctions } from "../../../src/pages/common/CommonFunctions";
import { CoreHrResuableFunctions } from "../../../src/pages/hcm/CoreHR/CoreHrResuableFunctions";
import { attachScreenshot } from "../../../utils/screenshotHelper";

const { Given, When, Then, Before } = createBdd(test);

// Shared context across steps within a scenario
let healingPage: any;
let commonFunctions: CommonFunctions;
let hireEmployee_ReusableFunction: CoreHrResuableFunctions;
let firstRecord: any;

Before(async ({ page }) => {
  test.setTimeout(1200000);

  const excelPath = path.join(
    __dirname,
    "../../../features/HCM/CoreHR/HireAnEmployeeTestData.xlsx"
  );

  healingPage = withHealing(page);

  const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  firstRecord = enabledDatasets[0];

  commonFunctions = new CommonFunctions(healingPage);
  hireEmployee_ReusableFunction = new CoreHrResuableFunctions(healingPage);

  await healingPage.setDefaultTimeout(120000);
});

/* ---------------- GIVEN ---------------- */

Given("user login to the application with passcode", async ({ page, $testInfo }) => {
  await commonFunctions.loginWithPasscode(firstRecord);
  await attachScreenshot(healingPage, $testInfo, "01_Login_Successful");
});

/* ---------------- WHEN (also serves Then navigation) ---------------- */

When(
  'user navigates to {string} and opens {string}',
  async ({ page, $testInfo }, menu: string, item: string) => {
    await commonFunctions.navigateToItemFromHomePage(menu, item);
    await attachScreenshot(healingPage, $testInfo, `Nav_${item}`);
  }
);

When("user selects what info to manage", async ({ page, $testInfo }) => {
  await hireEmployee_ReusableFunction.hireEmployee_whatInfoDoYouWantToManage(firstRecord);
  await attachScreenshot(healingPage, $testInfo, "02_WhatInfoToManage");
});

When("user fills in the When and Why section", async ({ page, $testInfo }) => {
  await hireEmployee_ReusableFunction.hireEmployee_WhenAndWhy(firstRecord);
  await attachScreenshot(healingPage, $testInfo, "03_WhenAndWhy");
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
});

When("user fills in the Personal Details section", async ({ page, $testInfo }) => {
  await hireEmployee_ReusableFunction.hireEmployee_PersonalDetails(firstRecord);
  await attachScreenshot(healingPage, $testInfo, "04_PersonalDetails");
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
});

When("user fills in the Communication Info section", async ({ page, $testInfo }) => {
  await hireEmployee_ReusableFunction.hireEmployee_CommunicationInfo(firstRecord);
  await attachScreenshot(healingPage, $testInfo, "05_CommunicationInfo");
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
});

When("user fills in the Addresses section", async ({ page, $testInfo }) => {
  await hireEmployee_ReusableFunction.hireEmployee_Addresses(firstRecord);
  await attachScreenshot(healingPage, $testInfo, "06_Addresses");
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
});

When("user fills in the Legislative Info section", async ({ page, $testInfo }) => {
  await hireEmployee_ReusableFunction.hireEmployee_LegislativeInfo(firstRecord);
  await attachScreenshot(healingPage, $testInfo, "07_LegislativeInfo");
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
});

When("user fills in the Citizenship Info section", async ({ page, $testInfo }) => {
  await hireEmployee_ReusableFunction.hireEmployee_CitizenshipInfo(firstRecord);
  await attachScreenshot(healingPage, $testInfo, "08_CitizenshipInfo");
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
});

When("user fills in the Passport Info section", async ({ page, $testInfo }) => {
  await hireEmployee_ReusableFunction.hireEmployee_PassportInfo(firstRecord);
  await attachScreenshot(healingPage, $testInfo, "09_PassportInfo");
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
});

When("user fills in the Drivers Licenses section", async ({ page, $testInfo }) => {
  await hireEmployee_ReusableFunction.hireEmployee_DriversLicenses(firstRecord);
  await attachScreenshot(healingPage, $testInfo, "10_DriversLicenses");
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
});

When("user fills in the Visas and Permits section", async ({ page, $testInfo }) => {
  await hireEmployee_ReusableFunction.hireEmployee_VisasAndPermits(firstRecord);
  await attachScreenshot(healingPage, $testInfo, "11_VisasAndPermits");
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
});

When("user fills in the Family and Emergency Contacts section", async ({ page, $testInfo }) => {
  await hireEmployee_ReusableFunction.hireEmployee_FamilyAndEmergencyContacts(firstRecord);
  await attachScreenshot(healingPage, $testInfo, "12_FamilyAndEmergencyContacts");
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
});

When("user fills in the Employment Details section", async ({ page, $testInfo }) => {
  await hireEmployee_ReusableFunction.hireEmployee_EmploymentDetails(firstRecord);
  await attachScreenshot(healingPage, $testInfo, "13_EmploymentDetails");
  await hireEmployee_ReusableFunction.hireEmployee_ToBeVisibleContinue();
});

// When("user submits the Hire an Employee form", async ({ page, $testInfo }) => {
//   await hireEmployee_ReusableFunction.hireEmployee_Submit();
//   await attachScreenshot(healingPage, $testInfo, "14_HireSubmitted");
// });

When("user submits the Hire an Employee form", async ({ page, $testInfo }) => {
  await hireEmployee_ReusableFunction.hireEmployee_Submit();
  
  // 🆕 Handle conditional Potential Matches popup
  await hireEmployee_ReusableFunction.handlePotentialMatchesPopup();
  
  await attachScreenshot(healingPage, $testInfo, "14_HireSubmitted");
});

/* ---------------- THEN ---------------- */

Then("user searches the newly hired employee in Person Management", async ({ page, $testInfo }) => {
  await hireEmployee_ReusableFunction.hireEmployee_PersonManagement(firstRecord);
  await attachScreenshot(healingPage, $testInfo, "15_PersonManagementSearch");
});

Then("user opens the employee record", async ({ page, $testInfo }) => {
  await hireEmployee_ReusableFunction.hireEmployee_OpneEmployee();
  await attachScreenshot(healingPage, $testInfo, "16_EmployeeOpened");
});

Then("user validates the employee details", async ({ page, $testInfo }) => {
  await hireEmployee_ReusableFunction.hireEmployee_ValidateEmployee();
  await attachScreenshot(healingPage, $testInfo, "17_Employee_Validation_Successful");
});