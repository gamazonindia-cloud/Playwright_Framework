import { createBdd } from "playwright-bdd";
//import { test } from "../../../bddTest";
import { test } from "../../../baseTest";
import { withHealing } from "healwright";
import * as path from "path";
import { attachAllureScreenshot } from "../../../utils/allureScreenshotHelper";
import { ExcelDataValidator } from "../../../utils/excelDataValidator";
import { CommonFunctions } from "../../../src/pages/common/CommonFunctions";
import { CoreHrResuableFunctions } from "../../../src/pages/hcm/CoreHR/CoreHrResuableFunctions";

const { Given, When, Then } = createBdd(test);

let commonFunctions: CommonFunctions;
let coreHrReusableFunction: CoreHrResuableFunctions;
let firstRecord: any;
let modelName: string;  

const fileToUpload =
  "C:\\Users\\10854578\\Downloads\\Software_Testing_Concepts_Session Deck.pptx";
  
  async function capture(
  page: any,
  stepName: string
) {
  await page.waitForTimeout(1000);

  await attachAllureScreenshot(
    page,
    stepName
  );
}

Given("User logs into Oracle application", async ({ page }) => {

  const excelPath = path.join(
  __dirname,
  "../../../features/HCM/CoreHR/WorkForceModelTestData.xlsx"
);

  const enabledDatasets =
    ExcelDataValidator.getEnabledDatasets(excelPath);

  firstRecord = enabledDatasets[0];

  modelName = `PW_${Date.now()}`;

  withHealing(page);

  commonFunctions = new CommonFunctions(page);

  coreHrReusableFunction =
    new CoreHrResuableFunctions(page);

  await commonFunctions.loginWithPasscode(firstRecord);

  await page.waitForLoadState("domcontentloaded");

  try {
    await page.waitForLoadState("networkidle", {
      timeout: 15000,
    });
  } catch {
    console.log("Network idle not reached, continuing...");
  }

  await page.waitForTimeout(7000);
  await capture(page, "Login_Successful");

});

When(
  "User navigates to Person Management",
  async ({ page }) => {

    try {

      await commonFunctions.navigateToItemFromHomePage(
        "My Client Groups",
        "Person Management"
      );

    } catch (error) {

      console.log("Retrying Person Management navigation...");

      await page.waitForTimeout(7000);

      await commonFunctions.navigateToItemFromHomePage(
        "My Client Groups",
        "Person Management"
      );

    }
await capture(page, "Person_Management");
  }
);

When(
  "User searches and opens employee record",
  async ({ page }) => {

    await coreHrReusableFunction.hireEmployee_PersonManagement(
      firstRecord
    );
    await capture(page, "Record_Searched_Successfully");
    await coreHrReusableFunction.hireEmployee_OpneEmployee();
    await capture(page, "Employee_Record_Opened_Successfully");
  }
);

When(
  "User opens Workforce Modeling task",
  async ({ page }) => {

    await page
      .locator("//img[@title='Tasks']/parent::a")
      .click();
await capture(page, "Tasks_Clicked");
    const workforceModeling = page.locator(
      "//a[normalize-space()='Workforce Modeling']"
    );

    await workforceModeling.scrollIntoViewIfNeeded();

    await workforceModeling.click();
    await capture(page, "Workforce_Modeling_Clicked");

  }
);

When(
  "User creates a new workforce model",
  async ({ page }) => {

    await page
      .locator("//button[normalize-space()='Create Model']")
      .click();
await capture(page, "Create_Model_Clicked");
  }
);

When(
  "User enters workforce model details",
  async ({ page }) => {

    const effectiveDate = page.locator(
      "//input[@placeholder='d/m/yy']"
    );

    await effectiveDate.click();

    await effectiveDate.fill("07/07/2026");
await capture(page, "Effective_Date_Entered");
    await page
      .locator(
        "//label[normalize-space()='Model Name']/following::input[1]"
      )
      .fill(modelName);
await capture(page, `Model_Name_Entered_${modelName}`);
    await page
      .locator(
        "//label[normalize-space()='Purpose']/following::textarea[1]"
      )
      .fill(
        `Automation workforce model created by Playwright - ${modelName}`
      );
await capture(page, "Purpose_Entered");
  }
);

When(
  "User uploads supporting attachment",
  async ({ page }) => {

    await page
      .locator("//img[@title='Manage Attachments']")
      .click();
await capture(page, "Manage_Attachments_Clicked");
    await page
      .locator("//input[@type='file']")
      .setInputFiles(fileToUpload);
await capture(page, "File_Uploaded");
    await page
      .getByRole("button", { name: "OK" })
      .click();
await capture(page, "Attachment_OK_Clicked");
  }
);

When(
  "User reviews and submits the workforce model",
  async ({ page }) => {

    await page
      .locator("//a[normalize-space()='Continue']")
      .click();
await capture(page, "Continue_Clicked");
    await page
      .locator(
        "//span[normalize-space()='Review and Submit']/parent::a"
      )
      .click();
await capture(page, "Review_And_Submit_Clicked");
    await page
      .locator("//a[normalize-space()='Submit']")
      .click();
await capture(page, "Submit_Clicked");
  }
);

Then(
  "Workforce model should be created successfully",
  async ({ page }) => {

    await page
      .locator(
        `//a[.//span[normalize-space()='${modelName}']]`
      )
      .click();
await capture(page, "Created_Model_Opened");
  }
);