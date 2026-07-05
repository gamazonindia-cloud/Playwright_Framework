# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: projectWorkSpaceERP\HCM\CoreHR\RehireAnEmployee.test.ts >> Rehire an Employee
- Location: tests\projectWorkSpaceERP\HCM\CoreHR\RehireAnEmployee.test.ts:6:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//label[text()=\'Include terminated work relationships\']')

```

# Test source

```ts
  211 |   async hireEmployee_FamilyAndEmergencyContacts(record: DatasetRow)
  212 |   {
  213 |     console.log("hireEmployee_FamilyAndEmergencyContacts executed");
  214 |   }
  215 |    async hireEmployee_PassportInfo(record: DatasetRow)
  216 |   {
  217 |    
  218 |     console.log("hireEmployee_PassportInfo executed");
  219 | 
  220 |   }
  221 |   async hireEmployee_DriversLicenses(record: DatasetRow)
  222 |   {
  223 |    
  224 |     console.log("hireEmployee_Driver's Licenses executed");
  225 | 
  226 |   }
  227 |   async hireEmployee_EmploymentDetails(record: DatasetRow)
  228 |   { 
  229 |     if (record.BusinessUnit) {
  230 |       await this.page.getByLabel("Business Unit").nth(1).type(record.BusinessUnit,{delay:200});
  231 |       await this.page.getByLabel("Business Unit").nth(1).press('Enter');
  232 |      
  233 |     }
  234 |     if (record.Job) {
  235 |       await this.page.getByLabel("Job").nth(0).type(record.Job,{delay:100});
  236 |       await this.page.getByLabel("Job").nth(0).press('Enter');
  237 |       
  238 |     }
  239 |     if (record.Grade) {
  240 |       await this.page.getByLabel("Grade").nth(0).type(record.Grade,{delay:100});
  241 |       await this.page.getByLabel("Grade").nth(0).press('Enter');
  242 |       
  243 |     }
  244 |     if (record.Location) {
  245 |       await this.page.getByLabel("Location").nth(0).type(record.Location,{delay:100});
  246 |       await this.page.getByLabel("Location").nth(0).press('Enter');
  247 |      
  248 |     }
  249 |     if (record.AssignmentStatus) {
  250 |       await this.page.waitForLoadState("networkidle");
  251 |       await this.page.locator("(//label[text()='Assignment Status']//following::input)[1]").selectOption(record.CumminsAssignmentStatus);
  252 |       
  253 |     }
  254 |     console.log("hireEmployee_EmploymentDetails executed");
  255 |   }
  256 | 
  257 |   async hireEmployee_AssignManagers(record: DatasetRow)
  258 |   {
  259 |     
  260 |     if (record.Name) {
  261 |       await this.page.getByLabel("Add").nth(0).click();
  262 |       await this.page.getByLabel("Name").nth(0).type(record.Name);
  263 |     }
  264 |     if (record.Type2) {
  265 |       await this.page.getByLabel("Name").nth(0).type(record.Type2);
  266 |     }
  267 |     console.log("hireEmployee_AssignManagers executed");
  268 |   }
  269 |   async hireEmployee_WorkRelationshipInfo(record: DatasetRow)
  270 |   {
  271 |    
  272 |     console.log("hireEmployee_WorkRelationshipInfo executed");
  273 | 
  274 |   }
  275 |   async hireEmployee_PayrollDetails(record: DatasetRow)
  276 |   {
  277 |     console.log("hireEmployee_PayrollDetails executed");
  278 |   }
  279 |   async hireEmployee_Salary(record: DatasetRow)
  280 |   {
  281 |     if (record.SalaryBasis) {
  282 |       await this.page.waitForTimeout(3000);
  283 |       await this.page.getByLabel("Name").nth(0).type(record.SalaryBasis);
  284 |       
  285 |     }
  286 |     if (record.SalaryAmount) {
  287 |       const Amount=String(record.SalaryAmount);
  288 |       await this.page.getByLabel("Name").nth(0).type(Amount.toString());
  289 |       
  290 |     }
  291 |     console.log("hireEmployee_Salary executed");
  292 |   }
  293 |   async hireEmployee_Submit()
  294 |   {
  295 |       await this.page.locator("//span[text()='Sub']").click();
  296 |       await this.page.waitForLoadState("networkidle");
  297 |     console.log("hireEmployee_Submit executed");
  298 |     
  299 |       const yesButton = this.page.locator('text=Yes');
  300 |     if (await yesButton.isVisible()) {
  301 |       await yesButton.click();
  302 | }
  303 | 
  304 |       }
  305 |   async hireEmployee_PersonManagement(record:DatasetRow)
  306 |   {
  307 |       
  308 |       await this.page.getByLabel("Name").fill(EmployeeName);
  309 |       if(record.Include_terminated_work_relationships)
  310 |       {
> 311 |         await this.page.locator("//label[text()='Include terminated work relationships']").click();
      |                                                                                            ^ Error: locator.click: Target page, context or browser has been closed
  312 |       }
  313 |       await this.page.locator("//button[text()='Search']").click();
  314 |       await this.page.waitForLoadState("networkidle");
  315 |     console.log("hireEmployee_PersonManagement executed");
  316 |   }
  317 |   async hireEmployee_OpneEmployee()
  318 |   {
  319 |       await this.page.locator("//a[text()='"+EmployeeName+"']").click();
  320 |       await this.page.waitForLoadState("networkidle");
  321 |     console.log("hireEmployee_OpneEmployee executed");
  322 |   }
  323 |   async hireEmployee_ValidateEmployee()
  324 |   {
  325 |       const emp = await this.page.getByLabel("Work Relationship").isVisible();
  326 |       if (emp) {
  327 |         console.log("Employee is visible");
  328 |       } else {
  329 |         console.log("Employee is not visible"); 
  330 |       }
  331 |     console.log("hireEmployee_OpneEmployee executed");
  332 |   }
  333 |   async SearchTerminateEmployment()
  334 |   {
  335 |       await this.page.locator("//input[@placeholder='Search by Name, Local Title, Work Email, or WWID']").fill(EmployeeName);
  336 |       await this.page.waitForTimeout(2000);
  337 |       await this.page.locator("//input[@placeholder='Search by Name, Local Title, Work Email, or WWID']").press('Enter');
  338 |       
  339 |   }
  340 |   async TerminateEmployment(record: DatasetRow)
  341 |   {
  342 |     console.log("hireEmployee_TerminateEmployment executed");
  343 |       await this.page.locator("(//span[text()='Termination Notification Date']/following::input)[1]").fill(record.TerminationNotificationDate);
  344 |       await this.page.locator("(//span[text()='Termination Date']/following::input)[1]").fill(record.TerminationDate);
  345 |      
  346 |   }
  347 |   async RehireAction()
  348 |   {
  349 |       await this.page.locator("//img[@title='Actions']").click();
  350 |       await this.page.locator("(//td[text()='Personal and Employment'])[2]").click();
  351 |       await this.page.locator("(//td[text()='Create Work Relationship'])[2]").click();
  352 |       await this.page.waitForTimeout(5000);
  353 |   }
  354 |   async Rehire_CreateWorkRelationship(record:DatasetRow)
  355 |   {
  356 |       await this.page.locator("(//label[text()='Action']/following::a)[1]").click();
  357 |       await this.page.locator("//li[text()='"+record.Action+"']").click(record.Action);
  358 |       await this.page.waitForTimeout(2000);
  359 |       await this.page.locator("(//label[text()='Action Reason']/following::a)[1]").click();
  360 |       await this.page.locator("//li[text()='"+record.ActionReason+"']").click();
  361 |   }
  362 |   async Rehire_Next()
  363 |   {
  364 |       await this.page.locator("//span[text()='Ne']").click();
  365 |       await this.page.waitForTimeout(2000);
  366 |   }
  367 |   async Rehire_HomeAddress(record)
  368 |   {
  369 |     const AddressLine1=record.AddressLine1;
  370 |     const strAddressLine1 = AddressLine1.toString();
  371 |     const ZipCode=record.ZipCode;
  372 |     const strZipCode = ZipCode.toString();
  373 |     await this.page.getByLabel("Address Line 1").fill(strAddressLine1);
  374 |     await this.page.getByLabel("ZIP Code").fill(strZipCode);
  375 |     await this.page.getByLabel("ZIP Code").press('Enter');
  376 |     await this.page.waitForTimeout(5000);
  377 |   }
  378 | }
```