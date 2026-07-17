import { expect, Page } from "@playwright/test";
import { DatasetRow } from "../../../../utils/excelDataValidator";
//import { CommonFunctions } from "../../common/CommonFunctions";

      const Test="Test";
      const FirstNum = Math.floor(Math.random() * 100);
      const First_Name=Test+"_"+FirstNum;
      const LastNum = Math.floor(Math.random() * 100);
      const Last_Name=Test+"_"+LastNum;
      const Employee=Last_Name+", "+First_Name;
      console.log("Employee Name is: " + Employee);
      const EmployeeName="Test_30, Test_90";

 export let NonWorkerFirstName = "";
 export let NonWorkerLastName = "";
 export let NonWorkerName = "";
 export let NonWorkerStartDate = "";
 export let NonWorkerPersonNumber = "";

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
      await this.page.waitForLoadState("networkidle");
      await this.page.getByLabel("Legal Employer").nth(1).type(record.LegalEmployer,{delay:100});
      await this.page.getByLabel("Legal Employer").nth(1).press('Enter');
    }
  }
  // async hireEmployee_ToBeVisibleContinue()
  //  {
  //   const Continue=await this.page.locator("//button[text()='Continue']").isVisible();
  //   if (Continue==true) {
  //     await expect(this.page.locator("//button[text()='Continue']")).toBeVisible();
  //     await this.page.locator("//button[text()='Continue']").click();
  //     await this.page.locator("//button[text()='Continue']").waitFor();
  //     console.log("Clicked on Continue button");
  //     await this.page.waitForLoadState("networkidle");
  //     await this.page.waitForTimeout(3000);
  //   }
  //   else {
  //     await expect(this.page.locator("//button[text()='Contin']")).toBeVisible();
  //     await this.page.locator("//button[text()='Contin']").click();
  //     await this.page.locator("//button[text()='Contin']").waitFor();
  //     console.log("Clicked on Contin button");
  //     await this.page.waitForLoadState("networkidle");
     
  //      await this.page.waitForTimeout(3000);
  //   }
  // }
  async hireEmployee_ToBeVisibleContinue() {
  const Continue = await this.page.locator("//button[text()='Continue']").isVisible();
  if (Continue == true) {
    await expect(this.page.locator("//button[text()='Continue']")).toBeVisible();
    await this.page.locator("//button[text()='Continue']").click();
    await this.page.locator("//button[text()='Continue']").waitFor();
    console.log("Clicked on Continue button");
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForTimeout(3000);
  } else {
    await expect(this.page.locator("//button[text()='Contin']")).toBeVisible();
    await this.page.locator("//button[text()='Contin']").click();
    await this.page.locator("//button[text()='Contin']").waitFor();
    console.log("Clicked on Contin button");
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForTimeout(3000);
  }

  // 🆕 Handle conditional Potential Matches popup (appears after some Continue clicks)
  await this.handlePotentialMatchesPopup();
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
      await this.page.getByLabel("Country").nth(1).type(record.Country,{delay:100});
      await this.page.getByLabel("Country").nth(1).press('Enter');
      
    }
  }
    
  async hireEmployee_CommunicationInfo(record: DatasetRow)
  {
    
// Wait for Communication Info section to load
  await this.page.waitForLoadState("networkidle");
  await this.page.waitForTimeout(2000);

    
 if (record.Type) {
    // More specific locator - the Type dropdown in Communication section
    const typeInput = this.page.locator("//label[text()='Type']/following::input[1]").first();
    await typeInput.waitFor({ state: 'visible', timeout: 30000 });
    await typeInput.click();
    await this.page.locator(`//li[text()='${record.Type}']`).click();
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
      await this.page.getByLabel("Country").nth(1).type(record.Country,{delay:100});
      await this.page.getByLabel("Country").nth(1).press('Enter');
      await this.page.waitForLoadState("networkidle");
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
      await this.page.getByLabel("Postal Code").type(zip.toString(),{delay:100});
      await this.page.getByLabel("Postal Code").press('Enter');
      await this.page.waitForLoadState("networkidle");
      
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
    if (record.BusinessUnit) {
      await this.page.getByLabel("Business Unit").nth(1).type(record.BusinessUnit,{delay:200});
      await this.page.getByLabel("Business Unit").nth(1).press('Enter');
     
    }
    if (record.Job) {
      await this.page.getByLabel("Job").nth(0).type(record.Job,{delay:100});
      await this.page.getByLabel("Job").nth(0).press('Enter');
      
    }
    if (record.Grade) {
      await this.page.getByLabel("Grade").nth(0).type(record.Grade,{delay:100});
      await this.page.getByLabel("Grade").nth(0).press('Enter');
      
    }
    if (record.Location) {
      await this.page.getByLabel("Location").nth(0).type(record.Location,{delay:100});
      await this.page.getByLabel("Location").nth(0).press('Enter');
     
    }
    if (record.AssignmentStatus) {
      await this.page.waitForLoadState("networkidle");
      await this.page.locator("(//label[text()='Assignment Status']//following::input)[1]").selectOption(record.CumminsAssignmentStatus);
      
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
  /**
 * Handles the "Potential Matches" popup that appears conditionally
 * during Hire an Employee flow. Oracle shows this when it detects
 * existing records with similar name/DOB.
 *
 * If popup appears → selects "No match, add person" → clicks Continue.
 * If popup does NOT appear → silently skips, no error.
 */
async handlePotentialMatchesPopup(): Promise<void> {
  try {
    // Look for the popup by its unique text
    const popupIndicators = [
      this.page.locator('text=/Potential Matches/i').first(),
      this.page.locator('text=/PER-1532260/i').first(),
      this.page.locator('text=/select the person. Else select no match/i').first(),
    ];

    let popupVisible = false;
    for (const indicator of popupIndicators) {
      if (await indicator.isVisible({ timeout: 3000 }).catch(() => false)) {
        popupVisible = true;
        break;
      }
    }

    if (!popupVisible) {
      console.log("ℹ️  No Potential Matches popup — proceeding normally");
      return;
    }

    console.log("⚠️  Potential Matches popup detected — selecting 'No match, add person'");

    // Try multiple selector strategies for the radio button
    const noMatchSelectors = [
      "//label[contains(normalize-space(),'No match, add person')]",
      "//span[contains(normalize-space(),'No match, add person')]",
      "//*[contains(text(),'No match, add person')]",
    ];

    let clicked = false;
    for (const sel of noMatchSelectors) {
      const el = this.page.locator(sel).first();
      if (await el.isVisible({ timeout: 2000 }).catch(() => false)) {
        await el.click({ force: true });
        clicked = true;
        break;
      }
    }

    if (!clicked) {
      console.log("⚠️  Could not click 'No match' radio — trying first radio button");
      await this.page.locator("input[type='radio']").first().check({ force: true });
    }

    await this.page.waitForTimeout(1000);

    // Click Continue on the popup
    const continueSelectors = [
      "//button[normalize-space()='Continue']",
      "//button[contains(normalize-space(),'Continue')]",
      "//span[normalize-space()='Continue']/ancestor::button",
    ];

    for (const sel of continueSelectors) {
      const btn = this.page.locator(sel).first();
      if (await btn.isVisible({ timeout: 2000 }).catch(() => false)) {
        await btn.click();
        break;
      }
    }

    await this.page.waitForLoadState("networkidle");
    await this.page.waitForTimeout(2000);
    console.log("✅ Potential Matches popup handled successfully");

  } catch (error) {
    console.log("ℹ️  Potential Matches popup handler completed silently:", (error as Error).message);
  }
}
  async hireEmployee_Submit()
  {
      await this.page.locator("//span[text()='Sub']").click();
      await this.page.waitForLoadState("networkidle");
    console.log("hireEmployee_Submit executed");
    

// 🆕 Handle conditional "Potential Matches" popup (appears sometimes)
  await this.handlePotentialMatchesPopup()


      const yesButton = this.page.locator('text=Yes');
    if (await yesButton.isVisible()) {
      await yesButton.click();
}

      }
  async hireEmployee_PersonManagement(record:DatasetRow)
  {
      
      await this.page.getByLabel("Name").fill(EmployeeName);
      if(record.Include_terminated_work_relationships)
      {
        await this.page.locator("//label[text()='Include terminated work relationships']").click();
      }
      await this.page.locator("//button[text()='Search']").click();
      await this.page.waitForLoadState("networkidle");
    console.log("hireEmployee_PersonManagement executed");
  }
  async hireEmployee_OpneEmployee()
  {
      await this.page.locator("//a[text()='"+EmployeeName+"']").click();
      await this.page.waitForLoadState("networkidle");
    console.log("hireEmployee_OpneEmployee executed");
  }
  async hireEmployee_ValidateEmployee()
  {
      const emp = await this.page.getByLabel("Work Relationship").isVisible();
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
      //await this.page.locator("//li[text()='"+record.Action+"']").click(record.Action);
      await this.page.locator("//li[text()='"+record.Action+"']").click();
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


async selectRedwoodLovByLabel(label: string, value: string) {
  const fieldLabel = this.page.getByText(label, { exact: true }).first();

  await fieldLabel.waitFor({
    state: "visible",
    timeout: 60000,
  });

  await fieldLabel.scrollIntoViewIfNeeded();

  await fieldLabel.click({
    force: true,
  });

  await this.page.waitForTimeout(1000);

  //await this.page.keyboard.type(value);
await this.page.keyboard.insertText(value);
  await this.page.waitForTimeout(3000);

  await this.page.keyboard.press("ArrowDown");

  await this.page.keyboard.press("Enter");

  await this.page.waitForTimeout(1500);
}

async navigateToAddNonWorker() {
  await this.page.waitForLoadState("domcontentloaded");

  await this.clickOracleText("My Client Groups");

  await this.page.waitForTimeout(3000);

  const showMore = this.page
    .locator(
      "//*[normalize-space()='Show More' or @title='Show More' or @aria-label='Show More']"
    )
    .first();

  if (await showMore.isVisible({ timeout: 10000 }).catch(() => false)) {
    await showMore.scrollIntoViewIfNeeded();
    await showMore.click();
  }

  await this.page.waitForTimeout(2000);

  await this.page
    .locator(
      "//*[normalize-space()='Add a Nonworker' or normalize-space()='Add a Non-Worker' or .//*[normalize-space()='Add a Nonworker'] or .//*[normalize-space()='Add a Non-Worker']]"
    )
    .first()
    .click({ timeout: 120000 });

  await this.page.waitForLoadState("domcontentloaded");
}


async addNonWorker_WhenAndWhy(record: DatasetRow) {

  await this.page.waitForLoadState("domcontentloaded");

  const legalEmployer =
    (record as any).legalEmployer ||
    (record as any).LegalEmployer;

  const way2Add =
    (record as any).way2Add ||
    (record as any).Way2Add;

  const why2Add =
    (record as any).why2Add ||
    (record as any).Why2Add;

  const businessUnit =
    (record as any).BU ||
    (record as any).BusinessUnit;

  const nonworkerType =
    (record as any).nonworkerType ||
    (record as any).NonworkerType;

  // Info to Include -> Continue
  await this.clickOracleText("Continue");

  // Wait for When and Why page
  await this.page
  .getByRole("heading")
  .filter({ hasText: "When and why" })
  .first()
  .waitFor({
    state: "visible",
    timeout: 120000,
  });

  // Start Date
  NonWorkerStartDate =
    this.generateRandomDateBetweenYears(2025, 2026);

  const startDateField =
    this.page.getByLabel(
      "When is the nonworker start date?"
    );

  await startDateField.waitFor({
    state: "visible",
    timeout: 60000,
  });

  await startDateField.fill(NonWorkerStartDate);

  await this.page.keyboard.press("Tab");

  await this.page.waitForTimeout(1000);

  // Legal Employer
  if (legalEmployer) {
    await this.page
  .locator('//*[contains(text(),"Legal Employer")]')
  .click();

await this.page.waitForTimeout(1000);

await this.page.keyboard.insertText(legalEmployer);

await this.page.waitForTimeout(3000);

await this.page.keyboard.press("ArrowDown");

await this.page.keyboard.press("Enter");
  }

  console.log(
  await this.page.evaluate(
    () => document.activeElement?.id
  )
);

  // Way To Add
  if (way2Add) {
    await this.selectRedwoodLovByLabel(
      "What's the way to add a nonworker?",
      way2Add
    );
  }

  // Why To Add
  if (why2Add) {
    await this.selectRedwoodLovByLabel(
      "Why are you adding a nonworker?",
      why2Add
    );
  }

  // Business Unit
  if (businessUnit) {
    await this.selectRedwoodLovByLabel(
      "Business Unit",
      businessUnit
    );
  }

  // Nonworker Type
  if (nonworkerType) {
    await this.selectRedwoodLovByLabel(
      "Nonworker Type",
      nonworkerType
    );
  }

  // Continue
await this.clickOracleText("Continue");

await this.page.waitForLoadState("networkidle");
await this.page.waitForTimeout(5000);
}



async addNonWorker_PersonalDetails(record: DatasetRow) {

  const random = Date.now();

  NonWorkerFirstName =
    `${(record as any).fName}_${random}`;

  NonWorkerLastName =
    (record as any).lName;

  NonWorkerName =
    `${NonWorkerLastName}, ${NonWorkerFirstName}`;

  // First Name
  await this.page
    .getByLabel("First Name")
    .fill(NonWorkerFirstName);

  // Last Name
  await this.page
    .locator("//label[contains(normalize-space(),'Last Name')]//following::input[1]")
    .fill(NonWorkerLastName);

  // Gender
  if ((record as any).gender) {

    await this.page
      .locator("(//label[text()='Gender']//following::a)[1]")
      .click();

    await this.page
      .locator(`//li[text()='${(record as any).gender}']`)
      .click();
  }

  // Date Of Birth
  if ((record as any).dob) {

    let formattedDate = (record as any).dob;

    // Excel numeric date
    if (!isNaN(Number(formattedDate))) {
      formattedDate = new Date(
        (Number(formattedDate) - 25569) * 86400 * 1000
      ).toLocaleDateString("en-US");
    }

    await this.page
      .getByLabel("Date of Birth")
      .fill(formattedDate.toString());
  }

  console.log("NonWorker Name : " + NonWorkerName);

  await this.hireEmployee_ToBeVisibleContinue();
}


async addNonWorker_Assignment(record: DatasetRow) {

  if ((record as any).workHour) {

    const workHours =
      this.page.getByLabel("Working Hours");

    if (await workHours.isVisible().catch(() => false)) {
      await workHours.fill((record as any).workHour);
    }
  }

  if ((record as any).workHourFreq) {

    const workFrequency =
      this.page.getByLabel("Working Hours Frequency");

    if (await workFrequency.isVisible().catch(() => false)) {

      await workFrequency.fill(
        (record as any).workHourFreq
      );

      await workFrequency.press("Enter");
    }
  }
}

async addNonWorker_Submit() {

  const submitButton = this.page
    .getByRole("toolbar", { name: "Actions" })
    .getByRole("button", {
      name: "Submit",
      exact: true
    })
    .first();

  await submitButton.waitFor({
    state: "visible",
    timeout: 30000
  });

  await submitButton.scrollIntoViewIfNeeded();

  await submitButton.click();

  await this.page.waitForLoadState("networkidle");

  const yesButton =
    this.page.locator("text=Yes");

  if (await yesButton.isVisible().catch(() => false)) {
    await yesButton.click();
  }

  console.log("Nonworker submitted successfully");
}


async addNonWorker_SearchInPersonManagement() {

  let found = false;

  for (let i = 1; i <= 10; i++) {

    await this.page
      .getByLabel("Name")
      .fill(NonWorkerFirstName);

    await this.page
      .getByLabel("Effective As-of Date")
      .fill(NonWorkerStartDate);

    await this.page
      .getByLabel("Effective As-of Date")
      .press("Tab");

    await this.page
      .getByRole("button", {
        name: "Search",
        exact: true
      })
      .click();

    await this.page.waitForLoadState("networkidle");
    await this.page.waitForTimeout(3000);

    found = await this.page
      .locator("//span[@class='x2ey']//a[text()]")
      .first()
      .isVisible()
      .catch(() => false);

    if (found) {
      break;
    }

    console.log(
      `Nonworker not found - Attempt ${i}`
    );

    await this.page.waitForTimeout(10000);
  }

  if (!found) {
    throw new Error(
      `Nonworker ${NonWorkerFirstName} not found in Person Management`
    );
  }
}
// async clickOracleText(text: string) {
//   const locator = this.page
//     .locator(
//       `//*[self::button or @role='button' or self::a or self::div or self::span][normalize-space()='${text}' or .//*[normalize-space()='${text}']]`
//     )
//     .filter({ hasText: new RegExp(`^${text}$`) })
//     .first();

//   await locator.waitFor({ state: "visible", timeout: 120000 });
//   await locator.scrollIntoViewIfNeeded();
//   await locator.click({ timeout: 120000 });
// }

async clickOracleText(text: string) {

  try {
    const button = this.page.getByRole("button", {
      name: text,
      exact: true,
    });

    await button.scrollIntoViewIfNeeded();
    await button.waitFor({
      state: "visible",
      timeout: 10000,
    });

    await button.click();
    return;

  } catch (e) {
    console.log(`Role locator failed for ${text}, trying aria-label`);
  }

  const fallback = this.page.locator(`[aria-label="${text}"]`);

  await fallback.scrollIntoViewIfNeeded();

  await fallback.waitFor({
    state: "visible",
    timeout: 120000,
  });

  await fallback.click();
}
async addNonWorker_ValidatePersonNumber() {

  NonWorkerPersonNumber =
    await this.page
      .locator("//span[@class='x2ey']//a[text()]")
      .first()
      .innerText();

  expect(NonWorkerPersonNumber)
    .toMatch(/\d{4,}/);

  console.log(
    "Created Nonworker Person Number : "
    + NonWorkerPersonNumber
  );
}
generateRandomDateBetweenYears(
  startYear: number,
  endYear: number
): string {

  const start = new Date(startYear, 0, 1).getTime();
  const end = new Date(endYear, 11, 31).getTime();

  const randomTime =
    start + Math.random() * (end - start);

  const date = new Date(randomTime);

  const month =
    `${date.getMonth() + 1}`.padStart(2, "0");

  const day =
    `${date.getDate()}`.padStart(2, "0");

  return `${month}/${day}/${date.getFullYear()}`;
}
}