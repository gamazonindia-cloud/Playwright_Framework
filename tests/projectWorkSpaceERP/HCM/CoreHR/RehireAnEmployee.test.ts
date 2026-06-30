import { test } from "@playwright/test";
import { ExcelDataValidator } from "../../../../utils/excelDataValidator";
import * as path from "path";
import { CommonFunctions } from "../../../../src/pages/common/CommonFunctions";
import { CoreHrResuableFunctions } from "../../../../src/pages/hcm/CoreHR/CoreHrResuableFunctions";

test("Rehire an Employee", async ({ page }, testInfo) => {
  test.setTimeout(1200000);

  const excelPath = path.join(__dirname, "/RehireAnEmployeeTestData.xlsx");

  const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  const firstRecord = enabledDatasets[0];

  const commonFunctions = new CommonFunctions(page);
  const hireEmployee_ReusableFunction = new CoreHrResuableFunctions(page);

  await page.setDefaultTimeout(120000);

  async function captureScreenshot(stepName: string) {
    await page.screenshot({
      path: testInfo.outputPath(`${stepName.replace(/[^a-zA-Z0-9]/g, "_")}.png`),
      fullPage: true,
    });
  }

  async function runStep(stepName: string, action: () => Promise<void>) {
    await test.step(stepName, async () => {
      try {
        await action();
        await captureScreenshot(`${stepName}_Passed`);
      } catch (error) {
        await captureScreenshot(`${stepName}_Failed`);
        throw error;
      }
    });
  }

  await runStep("Login", async () => {
    await commonFunctions.login(firstRecord);
  });

  await runStep("Navigate_To_Person_Management", async () => {
    await commonFunctions.navigateToItemFromHomePage(
      "My Client Groups",
      "Person Management"
    );
  });

  await runStep("Hire_Employee_Person_Management", async () => {
    await hireEmployee_ReusableFunction.hireEmployee_PersonManagement(
      firstRecord
    );
  });

  await runStep("Rehire_Action", async () => {
    await hireEmployee_ReusableFunction.RehireAction();
  });

  await runStep("Rehire_Create_Work_Relationship", async () => {
    await hireEmployee_ReusableFunction.Rehire_CreateWorkRelationship(
      firstRecord
    );
  });

  await runStep("Rehire_Next_1", async () => {
    await hireEmployee_ReusableFunction.Rehire_Next();
  });

  await runStep("Rehire_Home_Address", async () => {
    await hireEmployee_ReusableFunction.Rehire_HomeAddress(firstRecord);
  });

  await runStep("Rehire_Next_2", async () => {
    await hireEmployee_ReusableFunction.Rehire_Next();
  });
});