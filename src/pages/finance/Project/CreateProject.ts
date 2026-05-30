import { Page } from "@playwright/test";
import { DatasetRow } from "../../../../utils/excelDataValidator";
import { CommonFunctions } from "../../common/CommonFunctions";

      const Test="Test";
      const Number = Math.floor(Math.random() * 10000);
      const Project_Name=Test+"_"+Number;
      const ProjectNumber = "7373";
      console.log("Project Name is "+Project_Name);
      console.log("Project Number is "+ProjectNumber);

export class CreateProject {
  constructor(private page: Page) {}
  public commonFunctions = new CommonFunctions(this.page);

  async createProjectFromTemplate(firstRecord: DatasetRow) {
    
    await this.page.getByAltText("Create").click();

    await this.page.waitForTimeout(3000);
    if (firstRecord.SourceTemplate) {
      await this.page.getByLabel("Source Template").nth(0).type(firstRecord.SourceTemplate, { delay: 200 });
      await this.page.getByLabel("Source Template").nth(0).press("Enter");
      await this.page.waitForTimeout(3000);
    }
      await this.page.getByLabel("Project Name").nth(0).type(Project_Name);
      await this.page.getByLabel("Project Number").nth(0).type(ProjectNumber.toString());
    if (firstRecord.ProjectStartDate) {
      const formattedDate = new Date((firstRecord.ProjectStartDate - 25569) * 86400 * 1000).toLocaleDateString('en-US');
      await this.page.getByLabel("Project Start Date").clear();
      await this.page.getByLabel("Project Start Date").nth(0).type(formattedDate);
    }
    if (firstRecord.ProjectFinishDate) {
      const formattedDate = new Date((firstRecord.ProjectFinishDate - 25569) * 86400 * 1000).toLocaleDateString('en-US');
      await this.page.getByLabel("Project Finish Date").nth(0).type(formattedDate);
    }
    if (firstRecord.ProjectStatus) {
      await this.page.getByLabel("Project Status").nth(0).selectOption(firstRecord.ProjectStatus);
    }
    if (firstRecord.WSPGlobalServiceOfferings) {
      await this.page.getByLabel("WSP-Global Service Offerings").nth(0).fill(firstRecord.WSPGlobalServiceOfferings);
    }
    if (firstRecord.ProjectManager) {
      await this.page.getByLabel("Project Manager").nth(0).fill(firstRecord.ProjectManager);
      await this.page.getByLabel("Project Manager").nth(0).press("Enter");
    }
    if (firstRecord.ProjectCustomer) {
      await this.page.getByLabel("Project Customer").nth(0).fill(firstRecord.ProjectCustomer);
    }
    if (firstRecord.ProjectDescription) {
      await this.page.getByLabel("Project Description").nth(0).fill(firstRecord.ProjectDescription);
    }

    await this.page.getByRole('button', { name: 'Save and Continue' }).click();
    await this.page.waitForTimeout(5000);
    await this.page.getByRole('button', { name: 'Save and Close' }).click();
    await this.page.waitForTimeout(3000);
    for(let i=0;i<=3;i++){
    await this.page.waitForTimeout(28000);
    await this.page.reload();
    await this.page.waitForTimeout(2000);
    }
    const projectVisible = await this.page.getByRole('button', { name: 'Yes' }).isVisible();
    if(projectVisible){
      await this.page.getByRole('button', { name: 'Yes' }).click();
    }
  }
   async SearchProject() {
    
    await this.page.getByPlaceholder("Project Name or Number").type(ProjectNumber.toString());
    await this.page.waitForTimeout(5000);
    await this.page.getByPlaceholder("Project Name or Number").press("Enter");
    await this.page.waitForTimeout(7000);
   }
    async ValidateProject() {
      await this.page.click("text=" + ProjectNumber);
      await this.page.waitForTimeout(2000);
      await this.page.click("text=Project Overview");
      await this.page.waitForTimeout(2000);
      const projectNumber = await this.page.getByText(ProjectNumber.toString()).nth(1).isVisible();
      await console.log("Project Number visible is "+projectNumber);
      if(projectNumber){
        console.log("Project created successfully...");
      }
        else{
          console.log("Project creation failed...");
        }
    } 
    async ProjectClassifications(firstRecord: DatasetRow) {
      await this.page.getByRole('button', { name: 'Edit' }).nth(1).click();
      await this.page.getByAltText("Add").click();
      await this.page.waitForLoadState("networkidle");
      await this.page.locator("//span[text()='Class Category']//following::select").click();
      await this.page.waitForLoadState("networkidle");
      await console.log("Class Category is "+firstRecord.CategoryName);
      await console.log("Class Category is "+firstRecord.ClassCode);
      await this.page.locator("//span[text()='Class Category']//following::option[text()='"+firstRecord.CategoryName+"']").click();
      await this.page.locator("(//span[text()='Class Code']//following::input)[3]").type(firstRecord.ClassCode);
      await this.page.locator("(//span[text()='Class Code']//following::input)[3]").press("Enter");
      await this.page.getByRole('button', { name: 'Save and Close' }).click();
      
    }   
    async ChangeProjectStatus(firstRecord: DatasetRow) {
      await this.page.click("text=Change Status");
      await this.page.getByLabel("To").selectOption(firstRecord.ProjectStatus);
      await this.page.getByRole('button', { name: 'Save and Close' }).click();
      const Status = await this.page.getByText(firstRecord.ProjectStatus).isVisible();
      await console.log("Project Status visible is "+Status);
      if(Status){
        console.log("Project Status changed successfully...");
      }
        else{
          console.log("Project Status change failed...");
        }
      }  
    

   
}
