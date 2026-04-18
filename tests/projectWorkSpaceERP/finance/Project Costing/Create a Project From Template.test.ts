import { test, expect } from "@playwright/test";
import { ExcelDataValidator } from "../../../../utils/excelDataValidator";
import * as path from "path";
import { CommonFunctions } from "../../../../src/pages/common/CommonFunctions";
import { CreateProject } from "../../../../src/pages/finance/Project/CreateProject";
test("Create a Project From Template", async ({ page }) => {
  test.setTimeout(500000);
  const excelPath = path.join(__dirname, "/Create a Project From TemplateData.xlsx");

  // Fetch only enabled datasets
  const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  const firstRecord = enabledDatasets[0];
  const commonFunctions = new CommonFunctions(page);
  const createProject = new CreateProject(page);
  await commonFunctions.loginWithPasscode(firstRecord);
  await commonFunctions.navigateToItemFromHomePage("Projects", "Project Financial Management");
  await createProject.createProjectFromTemplate(firstRecord);
  await commonFunctions.navigateToItemFromHomePage("Projects", "Project Financial Management");
  await createProject.SearchProject();
  await createProject.ValidateProject();
 
});
