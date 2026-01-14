import { test, expect } from "@playwright/test";
import { ExcelDataValidator } from "../../../../utils/excelDataValidator";
import * as path from "path";
import { CommonFunctions } from "../../../../src/pages/common/CommonFunctions";
import { FixedAssetResuableFunctions } from "../../../../src/pages/finance/FA/FixedAssetResuableFunctions";

test.only("Add an Asset", async ({ page }) => {
  const excelPath = path.join(__dirname, "/Add An Asset TestData.xlsx");

  // Fetch only enabled datasets
  const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  const headers = ExcelDataValidator.getHeaders(excelPath);

  console.log(`\n✅ Total Enabled Datasets: ${enabledDatasets.length}\n`);
  console.log(`\n\nMethod 2: Get first record`);
  const firstRecord = enabledDatasets[0];
  console.log(`  Dataset: ${firstRecord.Dataset}`);
  console.log(`  UserName: ${firstRecord.UserName}`);
  console.log(`  Password: ${firstRecord.Password}`);
  console.log(`  Book: ${firstRecord.Book}`);
  console.log(`  AssetType: ${firstRecord.AssetType}`);
  console.log(`  Category: ${firstRecord.Category}`);
  const commonFunctions = new CommonFunctions(page);
  const fixedAssetFunctions = new FixedAssetResuableFunctions(page);
  await commonFunctions.login(
    firstRecord.UserName.toString(),
    firstRecord.Password
  );
  await commonFunctions.navigateToMenuItem("Fixed Assets", "Assets");
  await commonFunctions.selectTastkFromTasksPanel("Transactions", "Add Asset");
  await fixedAssetFunctions.addAsset(
    firstRecord.Book,
    firstRecord.AssetType,
    firstRecord.Category,
    firstRecord.Description,
    firstRecord.Cost,
    firstRecord.Unit,
    firstRecord.ExpenseAccount,
    firstRecord.Location
  );


});
