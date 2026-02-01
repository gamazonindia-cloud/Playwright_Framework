import { test, expect } from "@playwright/test";
import { ExcelDataValidator } from "../../../../utils/excelDataValidator";
import * as path from "path";
import { CommonFunctions } from "../../../../src/pages/common/CommonFunctions";
import { FixedAssetResuableFunctions } from "../../../../src/pages/finance/FA/FixedAssetResuableFunctions";

test("Add an Asset", async ({ page }) => {
  const excelPath = path.join(__dirname, "/AddAnAssetTestData.xlsx");

  // Fetch only enabled datasets
  const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  const firstRecord = enabledDatasets[0];
  const commonFunctions = new CommonFunctions(page);
  const fixedAssetFunctions = new FixedAssetResuableFunctions(page);
  await commonFunctions.login(firstRecord);
  await commonFunctions.navigateToMenuItem("Fixed Assets", "Assets");
   await commonFunctions.selectTastkFromTasksPanel("Transactions", "Add Asset");
   await fixedAssetFunctions.addAsset(firstRecord);
   await fixedAssetFunctions.addAssetDescriptiveDetails(firstRecord);
  await fixedAssetFunctions.verifyAssetAdded(firstRecord);
});
