import { expect, Page } from "@playwright/test";
import { DatasetRow } from "../../../../utils/excelDataValidator";
import { CommonFunctions } from "../../common/CommonFunctions";

      const Test="Test";
      const FirstNum = Math.floor(Math.random() * 100);
      const First_Name=Test+"_"+FirstNum;
      const LastNum = Math.floor(Math.random() * 100);
      const Last_Name=Test+"_"+LastNum;
      const Employee=Last_Name+", "+First_Name;
      console.log("Employee Name is: " + Employee);
      const EmployeeName=Employee;
      
export class CoreHrResuableFunctions {
  constructor(private page: Page) {}
 
  async hireEmployee_whatInfoDoYouWantToManage(record: DatasetRow) {

    if (record.PersonalDetails) {
    
    if (true) {
      await this.page.getByText("Communication Info").nth(0).click();
    }
    if (true) {
      await this.page.getByText("Address").nth(0).click();
    }
    if (true) {
      await this.page.getByText("Legislative Info").nth(0).click();
    }
    if (true) {
      await this.page.getByText("Citizenship Info").nth(0).click();
    }
    if (true) {
      await this.page.getByText("Passport Info").nth(0).click();
    }
    if (true) {
      await this.page.getByText("Driver's Licenses").nth(0).click();
    }
    
    if (true) {
      await this.page.getByText("Visas and Permits").nth(0).click();
    }
    if (true) {
      await this.page.getByText("Family and Emergency Contacts").nth(0).click();
    }
    if (false) {
      await this.page.getByText("Assign Managers").nth(0).click();
    }
    if (true) {
      await this.page.getByText("Work Relationship Info").nth(0).click();
    }
    if (true) {
      await this.page.getByText("Payroll Details").nth(0).click();
    }
    if (false) {
      await this.page.getByText("Salary").nth(0).click();
    }
    if (true) {
      await this.page.getByText("Compensation").nth(0).click();
    }
    if (true) {
      await this.page.getByText("Add Direct Reports").nth(0).click();
    }
    if (true) {
      await this.page.getByText("Comments and Attachments").nth(0).click();
    }

    await this.page.locator("//span[text()='Contin']").click();

  }
  
  }
  async hireEmployee_WhenAndWhy(record: DatasetRow) {
    
    if (record.HireDate) {
      const formattedDate = new Date((record.HireDate - 25569) * 86400 * 1000).toLocaleDateString('en-US');
      await this.page.getByLabel("When is the employee hire date?").clear();
      await this.page.getByLabel("When is the employee hire date?").type(formattedDate.toString());

    }
    if (record.Action) {
      await this.page.getByLabel("What's the way to hire an employee?").nth(1).fill(record.Action);
      
    }
    if(record.LegalEmployer) {
      await this.page.waitForTimeout(3000);
      await this.page.getByLabel("Legal Employer").nth(1).type(record.LegalEmployer,{delay:200});
      await this.page.getByLabel("Legal Employer").nth(1).press('Enter');
    }
  }
  async hireEmployee_ToBeVisibleContinue()
   {
    const Continue=await this.page.locator("//button[text()='Continue']").isVisible();
    if (Continue==true) {
      await expect(this.page.locator("//button[text()='Continue']")).toBeVisible();
      await this.page.locator("//button[text()='Continue']").click();
      await this.page.locator("//button[text()='Continue']").waitFor();
      console.log("Clicked on Continue button");
      await this.page.waitForLoadState("networkidle");
      await this.page.waitForTimeout(3000);
    }
    else {
      await expect(this.page.locator("//button[text()='Contin']")).toBeVisible();
      await this.page.locator("//button[text()='Contin']").click();
      await this.page.locator("//button[text()='Contin']").waitFor();
      console.log("Clicked on Contin button");
      await this.page.waitForLoadState("networkidle");
     
       await this.page.waitForTimeout(3000);
    }
  }
  async hireEmployee_PersonalDetails(record: DatasetRow)
   {
    
    if (record.FirstName) {
      await this.page.getByLabel("First Name").fill(First_Name);
      console.log("First Name is: " + First_Name);
    }
    if (record.LastName) {
      await this.page.getByLabel('Family Name').nth(0).fill(Last_Name);
      console.log("Family Name is: " + Last_Name);
    }
    if (record.Gender) {
      await this.page.locator("(//label[text()='Gender']//following::a)[1]").click();
      await this.page.locator("//li[text()='"+record.Gender+"']").click();

    }
    if (record.DateofBirth) {
      const formattedDate = new Date((record.DateofBirth - 25569) * 86400 * 1000).toLocaleDateString('en-US');
      await this.page.getByLabel("Date of Birth").fill(formattedDate);
    }
    if (record.Country) {

      await this.page.getByLabel("Country").nth(1).clear();
      await this.page.getByLabel("Country").nth(1).type(record.Country,{delay:300});
      await this.page.waitForTimeout(3000);
      await this.page.getByLabel("Country").nth(1).press('Enter');
      
    }
  }
    
  async hireEmployee_CommunicationInfo(record: DatasetRow)
  {
    
    if (record.Type) {
      await this.page.locator("(//label[text()='Type']//following::input)[1]").click();
      await this.page.locator("//li[text()='"+record.Type+"']").click();
      await this.page.waitForTimeout(3000);
    }
    if(record.AreaCode){
      const ac=parseInt(record.AreaCode);
      await this.page.getByLabel("Area Code").fill(ac.toString());
    }
    if(record.Number){
      const num=parseInt(record.Number);
      await this.page.getByLabel("Number").fill(num.toString());
    }
   console.log("hireEmployee_CommunicationInfo executed");
  }
  async hireEmployee_Addresses(record: DatasetRow)
  {
 
    if (record.Country) {
      await this.page.getByLabel("Country").nth(1).clear();
      await this.page.getByLabel("Country").nth(1).type(record.Country,{delay:300});
      await this.page.getByLabel("Country").nth(1).press('Enter');
      await this.page.waitForTimeout(3000);
    }
    if (record.Type1) {
      await this.page.locator("(//label[text()='Type']//following::input)[1]").click();
      await this.page.locator("//li[text()='"+record.Type1+"']").click();
    }
    if (record.AddressLine1) {
      const str = String(record.AddressLine1);
      await this.page.getByLabel("Address Line 1").fill(str);
    }
    if (record.City) {
      await this.page.getByLabel("City").fill(record.City);
    }
    if (record.ZIPCode) {
      const zip=parseInt(record.ZIPCode);
      await this.page.getByLabel("Postal Code").clear();
      await this.page.getByLabel("Postal Code").type(zip.toString(),{delay:300});
      await this.page.getByLabel("Postal Code").press('Enter');
      await this.page.waitForTimeout(3000);
      
    }
    console.log("hireEmployee_Addresses executed");
  }
  async hireEmployee_LegislativeInfo(record: DatasetRow)
  {
   
    if (record.MaritalStatus) {
      await this.page.locator("(//label[text()='Marital Status']//following::input)[1]").click();
      await this.page.locator("//li[text()='"+record.MaritalStatus+"']").click();
    }
    console.log("hireEmployee_LegislativeInfo executed");

  }
  async hireEmployee_CitizenshipInfo(record: DatasetRow)
  {
    console.log("hireEmployee_CitizenshipInfo executed");
  }
  async hireEmployee_VisasAndPermits(record: DatasetRow)
  {
    
   
    console.log("hireEmployee_VisasAndPermits executed");

  }
  
  async hireEmployee_FamilyAndEmergencyContacts(record: DatasetRow)
  {
    console.log("hireEmployee_FamilyAndEmergencyContacts executed");
  }
   async hireEmployee_PassportInfo(record: DatasetRow)
  {
   
    console.log("hireEmployee_PassportInfo executed");

  }
  async hireEmployee_DriversLicenses(record: DatasetRow)
  {
   
    console.log("hireEmployee_Driver's Licenses executed");

  }
  async hireEmployee_EmploymentDetails(record: DatasetRow)
  {
      await this.page.waitForTimeout(3000); 
    if (record.BusinessUnit) {
      await this.page.getByLabel("Business Unit").nth(1).type(record.BusinessUnit,{delay:200});
      await this.page.getByLabel("Business Unit").nth(1).press('Enter');
      await this.page.waitForTimeout(3000); 
    }
    if (record.Job) {
      await this.page.getByLabel("Job").nth(0).type(record.Job,{delay:200});
      await this.page.getByLabel("Job").nth(0).press('Enter');
      
    }
    if (record.Grade) {
      await this.page.getByLabel("Grade").nth(0).type(record.Grade,{delay:200});
      await this.page.getByLabel("Grade").nth(0).press('Enter');
      
    }
    if (record.Location) {
      await this.page.getByLabel("Location").nth(0).type(record.Location,{delay:200});
      await this.page.getByLabel("Location").nth(0).press('Enter');
     
    }
    if (record.AssignmentStatus) {
      await this.page.waitForTimeout(3000);
      await this.page.locator("(//label[text()='Assignment Status']//following::input)[1]").selectOption(record.CumminsAssignmentStatus);
      await this.page.waitForTimeout(3000);  
    }
    console.log("hireEmployee_EmploymentDetails executed");
  }

  async hireEmployee_AssignManagers(record: DatasetRow)
  {
    
    if (record.Name) {
      await this.page.getByLabel("Add").nth(0).click();
      await this.page.getByLabel("Name").nth(0).type(record.Name);
    }
    if (record.Type2) {
      await this.page.getByLabel("Name").nth(0).type(record.Type2);
    }
    console.log("hireEmployee_AssignManagers executed");
  }
  async hireEmployee_WorkRelationshipInfo(record: DatasetRow)
  {
   
    console.log("hireEmployee_WorkRelationshipInfo executed");

  }
  async hireEmployee_PayrollDetails(record: DatasetRow)
  {
    console.log("hireEmployee_PayrollDetails executed");
  }
  async hireEmployee_Salary(record: DatasetRow)
  {
    if (record.SalaryBasis) {
      await this.page.waitForTimeout(3000);
      await this.page.getByLabel("Name").nth(0).type(record.SalaryBasis);
      
    }
    if (record.SalaryAmount) {
      const Amount=String(record.SalaryAmount);
      await this.page.getByLabel("Name").nth(0).type(Amount.toString());
      
    }
    console.log("hireEmployee_Salary executed");
  }
  async hireEmployee_Submit()
  {
      await this.page.locator("//span[text()='Sub']").click();
    await this.page.waitForTimeout(30000);
    console.log("hireEmployee_Submit executed");

      }
  async hireEmployee_PersonManagement(record:DatasetRow)
  {
      
      await this.page.getByLabel("Name").fill(EmployeeName);
      if(record.Include_terminated_work_relationships)
      {
        await this.page.locator("//label[text()='Include terminated work relationships']").click();
      }
      await this.page.locator("//button[text()='Search']").click();
      await this.page.waitForTimeout(2000);
    console.log("hireEmployee_PersonManagement executed");
  }
  async hireEmployee_OpneEmployee()
  {
      await this.page.locator("//a[text()='"+EmployeeName+"']").click();
      await this.page.waitForTimeout(5000);
    console.log("hireEmployee_OpneEmployee executed");
  }
  async hireEmployee_ValidateEmployee()
  {
      const emp = await this.page.getByLabel("Hire").isVisible();
      if (emp) {
        console.log("Employee is visible");
      } else {
        console.log("Employee is not visible"); 
      }
    console.log("hireEmployee_OpneEmployee executed");
  }
  async SearchTerminateEmployment()
  {
      await this.page.locator("//input[@placeholder='Search by Name, Local Title, Work Email, or WWID']").fill(EmployeeName);
      await this.page.waitForTimeout(2000);
      await this.page.locator("//input[@placeholder='Search by Name, Local Title, Work Email, or WWID']").press('Enter');
      
  }
  async TerminateEmployment(record: DatasetRow)
  {
    console.log("hireEmployee_TerminateEmployment executed");
      await this.page.locator("(//span[text()='Termination Notification Date']/following::input)[1]").fill(record.TerminationNotificationDate);
      await this.page.locator("(//span[text()='Termination Date']/following::input)[1]").fill(record.TerminationDate);
     
  }
  async RehireAction()
  {
      await this.page.locator("//img[@title='Actions']").click();
      await this.page.locator("(//td[text()='Personal and Employment'])[2]").click();
      await this.page.locator("(//td[text()='Create Work Relationship'])[2]").click();
      await this.page.waitForTimeout(5000);
  }
  async Rehire_CreateWorkRelationship(record:DatasetRow)
  {
      await this.page.locator("(//label[text()='Action']/following::a)[1]").click();
      await this.page.locator("//li[text()='"+record.Action+"']").click(record.Action);
      await this.page.waitForTimeout(2000);
      await this.page.locator("(//label[text()='Action Reason']/following::a)[1]").click();
      await this.page.locator("//li[text()='"+record.ActionReason+"']").click();
  }
  async Rehire_Next()
  {
      await this.page.locator("//span[text()='Ne']").click();
      await this.page.waitForTimeout(2000);
  }
  async Rehire_HomeAddress(record)
  {
    const AddressLine1=record.AddressLine1;
    const strAddressLine1 = AddressLine1.toString();
    const ZipCode=record.ZipCode;
    const strZipCode = ZipCode.toString();
    await this.page.getByLabel("Address Line 1").fill(strAddressLine1);
    await this.page.getByLabel("ZIP Code").fill(strZipCode);
    await this.page.getByLabel("ZIP Code").press('Enter');
    await this.page.waitForTimeout(5000);
  }
}