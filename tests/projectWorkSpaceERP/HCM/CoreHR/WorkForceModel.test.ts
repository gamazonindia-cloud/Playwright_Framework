import { test, expect } from "@playwright/test";
import { withHealing } from "healwright";
import { ExcelDataValidator } from "../../../../utils/excelDataValidator";
import * as path from "path";
import { CommonFunctions } from "../../../../src/pages/common/CommonFunctions";
import { CoreHrResuableFunctions } from "../../../../src/pages/hcm/CoreHR/CoreHrResuableFunctions";
import { attachScreenshot } from "../../../../utils/screenshotHelper";

test.only("Work Force Model", async ({ page }, testInfo) => {
  test.setTimeout(1200000);

  const excelPath = path.join(__dirname, "/WorkForceModelTestData.xlsx");
  const healingPage = withHealing(page);

  const STEP_WAIT = 4000;
  const modelName = `PW_${Date.now()}`;
  const fileToUpload = "C:/Users/girdh/Downloads/ec6117e5d3a7e19f.webm";

  const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  const firstRecord = enabledDatasets[0];

  // IMPORTANT: pass raw page, not healingPage, to avoid double wrapping
  const commonFunctions = new CommonFunctions(page);
  const hireEmployee_ReusableFunction = new CoreHrResuableFunctions(page);

  await page.setDefaultTimeout(120000);

  async function capture(stepName: string) {
    await page.waitForTimeout(STEP_WAIT);
    await attachScreenshot(healingPage, testInfo, stepName);
  }

  async function retryStep(stepName: string, action: () => Promise<void>) {
    try {
      await action();
      await capture(stepName);
    } catch (error) {
      await attachScreenshot(
        healingPage,
        testInfo,
        `${stepName}_FAILED_First_Attempt`
      );

      console.log(`Retrying step: ${stepName}`);
      await page.waitForTimeout(5000);

      await action();
      await capture(`${stepName}_Retry_Success`);
    }
  }

  await retryStep("Login_Successful", async () => {
    await commonFunctions.loginWithPasscode(firstRecord);
  });

  await retryStep("Person_Management", async () => {
    await commonFunctions.navigateToItemFromHomePage(
      "My Client Groups",
      "Person Management"
    );
  });

  await retryStep("Record_Searched_Successfully", async () => {
    await hireEmployee_ReusableFunction.hireEmployee_PersonManagement(
      firstRecord
    );
  });

  await retryStep("Employee_Record_Opened_Successfully", async () => {
    await hireEmployee_ReusableFunction.hireEmployee_OpneEmployee();
  });

  await retryStep("Tasks_Clicked", async () => {
    await page.locator("//img[@title='Tasks']/parent::a").click();
  });

  await retryStep("Workforce_Modeling_Clicked", async () => {
    const workforceModeling = page.locator(
      "//a[normalize-space()='Workforce Modeling']"
    );
    await workforceModeling.scrollIntoViewIfNeeded();
    await workforceModeling.click();
  });

  await retryStep("Create_Model_Clicked", async () => {
    await page.locator("//button[normalize-space()='Create Model']").click();
  });

  await retryStep("Effective_Date_Entered", async () => {
    const effectiveDate = page.locator("//input[@placeholder='d/m/yy']");
    await effectiveDate.click();
    await effectiveDate.fill("07/07/2026");
  });

  await retryStep(`Model_Name_Entered_${modelName}`, async () => {
    await page
      .locator("//label[normalize-space()='Model Name']/following::input[1]")
      .fill(modelName);
  });

  await retryStep("Purpose_Entered", async () => {
    await page
      .locator("//label[normalize-space()='Purpose']/following::textarea[1]")
      .fill(`Automation workforce model created by Playwright - ${modelName}`);
  });

  await retryStep("Manage_Attachments_Clicked", async () => {
    await page.locator("//img[@title='Manage Attachments']").click();
  });

  await retryStep("File_Uploaded", async () => {
    await page.locator("//input[@type='file']").setInputFiles(fileToUpload);
  });

  await retryStep("Attachment_OK_Clicked", async () => {
    await page.getByRole("button", { name: "OK" }).click();
  });

  await retryStep("Continue_Clicked", async () => {
    await page.locator("//a[normalize-space()='Continue']").click();
  });

  await retryStep("Review_And_Submit_Clicked", async () => {
    await page
      .locator("//span[normalize-space()='Review and Submit']/parent::a")
      .click();
  });

  await retryStep("Submit_Clicked", async () => {
    await page.locator("//a[normalize-space()='Submit']").click();
  });

  await retryStep("Created_Model_Opened", async () => {
    await page
      .locator(`//a[.//span[normalize-space()="${modelName}"]]`)
      .click();
  });
});