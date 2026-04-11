import { test, expect } from "@playwright/test";
import { ExcelDataValidator } from "../../utils/excelDataValidator";
import * as path from "path";
import { TestPageReusableFunctions } from "../../src/pages/Testing/TestingPage/TestPageReusableFunctions";
import { TestPage } from "../../src/pages/Testing/TestingPage/Test";
test("Purchase Item", async ({ page }) => {
  const excelPath = path.join(__dirname, "/Test.xlsx");

  // Fetch only enabled datasets
  const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  const firstRecord = enabledDatasets[0];
  const TestFL = new TestPage(page);
  await TestFL.test_Login(firstRecord);




});