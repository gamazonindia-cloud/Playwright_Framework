import { test, expect } from "@playwright/test";
import { ExcelDataValidator } from "../../../../utils/excelDataValidator";
import * as path from "path";
import { CommonFunctions } from "../../../../src/pages/common/CommonFunctions";
import { FixedAssetResuableFunctions } from "../../../../src/pages/finance/FA/FixedAssetResuableFunctions";
import { CoreHrResuableFunctions } from "../../../../src/pages/hcm/CoreHR/CoreHrResuableFunctions";
test("Rehire an Employee", async ({ page }) => {
  test.setTimeout(1200000);
  const excelPath = path.join(__dirname, "/RehireAnEmployeeTestData.xlsx");

  // Fetch only enabled datasets
  const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  const firstRecord = enabledDatasets[0];
const commonFunctions = new CommonFunctions(page);
const hireEmployee_ReusableFunction=new CoreHrResuableFunctions(page);
await page.setDefaultTimeout(120000);
const downloadPromise = page.waitForEvent('download');
// Trigger the action that causes the download
const download = await downloadPromise;
const filePath = await download.path(); // Temporary path
const savedPath = await download.saveAs('downloads/myfile.pdf');
  
  


});