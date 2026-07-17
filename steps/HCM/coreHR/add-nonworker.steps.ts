import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../../../baseTest";
import { withHealing } from "healwright";
import { ExcelDataValidator } from "../../../utils/excelDataValidator";
import { attachScreenshot } from "../../../utils/screenshotHelper";

import * as path from "path";

import { CommonFunctions } from "../../../src/pages/common/CommonFunctions";

import {
  CoreHrResuableFunctions,
  NonWorkerPersonNumber
} from "../../../src/pages/hcm/CoreHR/CoreHrResuableFunctions";

const { Given, When, Then, Before } = createBdd(test);

let healingPage: any;
let commonFunctions: CommonFunctions;
let coreHrReusableFunctions: CoreHrResuableFunctions;
let firstRecord: any;

Before(async ({ page }) => {

  test.setTimeout(1200000);

  healingPage = withHealing(page);

  commonFunctions =
    new CommonFunctions(healingPage);

  coreHrReusableFunctions =
    new CoreHrResuableFunctions(page);

  const excelPath = path.join(
  __dirname,
  "../../../features/HCM/CoreHR/AddNonWorkerTestData.xlsx"
);

const enabledDatasets =
  ExcelDataValidator.getEnabledDatasets(excelPath);

  firstRecord = enabledDatasets[0];

  await healingPage.setDefaultTimeout(120000);
});

Given(
  "user login to the application with passcode for nonworker",
  async ({ $testInfo }) => {

    await commonFunctions.loginWithPasscode(firstRecord);

    await attachScreenshot(
      healingPage,
      $testInfo,
      "01_Login_Successful"
    );
  }
);

When(
  "user navigates to Add a Nonworker",
  async ({ $testInfo }) => {

  await commonFunctions.navigateToItemFromHomePageShowMore(
  "My Client Groups",
  "Add a Nonworker"
);

    await attachScreenshot(
      healingPage,
      $testInfo,
      "02_Add_Nonworker_Navigation"
    );
  }
);

When(
  "user completes the When and Why section for nonworker",
  async ({ $testInfo }) => {

    await coreHrReusableFunctions
      .addNonWorker_WhenAndWhy(firstRecord);

    await attachScreenshot(
      healingPage,
      $testInfo,
      "03_WhenAndWhy"
    );
  }
);

When(
  "user completes the Personal Details section for nonworker",
  async ({ $testInfo }) => {

    await coreHrReusableFunctions
      .addNonWorker_PersonalDetails(firstRecord);

    await attachScreenshot(
      healingPage,
      $testInfo,
      "04_Personal_Details"
    );
  }
);

When(
  "user completes the Assignment section for nonworker",
  async ({ $testInfo }) => {

    await coreHrReusableFunctions
      .addNonWorker_Assignment(firstRecord);

    await attachScreenshot(
      healingPage,
      $testInfo,
      "05_Assignment"
    );
  }
);

When(
  "user submits the Nonworker record",
  async ({ $testInfo }) => {

    await coreHrReusableFunctions
      .addNonWorker_Submit();

    await attachScreenshot(
      healingPage,
      $testInfo,
      "06_Submit_Nonworker"
    );
  }
);

Then(
  "user validates the created nonworker in Person Management",
  async ({ $testInfo }) => {

    await commonFunctions.navigateToItemFromHomePage(
      "My Client Groups",
      "Person Management"
    );

    await coreHrReusableFunctions
      .addNonWorker_SearchInPersonManagement();

    await coreHrReusableFunctions
      .addNonWorker_ValidatePersonNumber();

    expect(NonWorkerPersonNumber)
      .toMatch(/\d{4,}/);

    await attachScreenshot(
      healingPage,
      $testInfo,
      "07_Person_Management"
    );
  }
);