# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: projectWorkSpaceERP\HCM\CoreHR\WorkForceModel.test.ts >> Work Force Model
- Location: tests\projectWorkSpaceERP\HCM\CoreHR\WorkForceModel.test.ts:9:6

# Error details

```
TimeoutError: locator.fill: Timeout 120000ms exceeded.
Call log:
  - waiting for getByLabel('Name')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic:
    - link "Skip to main content" [ref=e2] [cursor=pointer]:
      - /url: "#"
    - generic [ref=e5]:
      - generic [ref=e6]:
        - img "Warning" [ref=e7]
        - text: LTIMindtree Limited Test Environment
      - generic [ref=e11]:
        - generic [ref=e16]:
          - link "Navigator" [ref=e19] [cursor=pointer]:
            - /url: "#"
            - img [ref=e20]
          - link "Oracle Logo Home" [ref=e29] [cursor=pointer]:
            - /url: "#"
          - generic [ref=e30]:
            - generic [ref=e33]:
              - link "Search" [ref=e34] [cursor=pointer]:
                - /url: "#"
                - img [ref=e35]
              - generic [ref=e44]:
                - combobox "Search:" [ref=e45]
                - generic: "Search:"
            - link "Home" [ref=e50] [cursor=pointer]:
              - /url: "#"
              - img [ref=e51]
            - link "Favorites and Recent Items" [ref=e62] [cursor=pointer]:
              - /url: "#"
              - img [ref=e63]
            - link "Watchlist" [ref=e74] [cursor=pointer]:
              - /url: "#"
              - img [ref=e75]
            - generic [ref=e86]:
              - link "Notifications (65 unread)" [ref=e87] [cursor=pointer]:
                - /url: "#"
                - img [ref=e88]
              - generic "Notifications (65 unread)" [ref=e97] [cursor=pointer]: "65"
            - link "Access Accessibility Settings":
              - /url: "#"
          - link "Settings and Actions" [ref=e106] [cursor=pointer]:
            - /url: "#"
            - img "Settings and Actions" [ref=e110]
        - generic [ref=e130]:
          - heading "Good afternoon, Trainee User Functional" [level=1] [ref=e135]
          - generic [ref=e148]:
            - generic [ref=e149]:
              - img [ref=e151]
              - tablist "Navigation Tabs" [ref=e157]:
                - tab "Me" [selected] [ref=e158]:
                  - link "Me" [ref=e159] [cursor=pointer]:
                    - /url: "#"
                - tab "My Client Groups" [ref=e160]:
                  - link "My Client Groups" [ref=e161] [cursor=pointer]:
                    - /url: "#"
                - tab "Redwood Sales" [ref=e162]:
                  - link "Redwood Sales" [ref=e163] [cursor=pointer]:
                    - /url: "#"
                - tab "Contract Management" [ref=e164]:
                  - link "Contract Management" [ref=e165] [cursor=pointer]:
                    - /url: "#"
                - tab "Supply Chain Planning" [ref=e166]:
                  - link "Supply Chain Planning" [ref=e167] [cursor=pointer]:
                    - /url: "#"
                - tab "Budgetary Control" [ref=e168]:
                  - link "Budgetary Control" [ref=e169] [cursor=pointer]:
                    - /url: "#"
                - tab "General Accounting" [ref=e170]:
                  - link "General Accounting" [ref=e171] [cursor=pointer]:
                    - /url: "#"
                - tab "Receivables" [ref=e172]:
                  - link "Receivables" [ref=e173] [cursor=pointer]:
                    - /url: "#"
                - tab "Procurement" [ref=e174]:
                  - link "Procurement" [ref=e175] [cursor=pointer]:
                    - /url: "#"
                - tab "Supply Chain Execution" [ref=e176]:
                  - link "Supply Chain Execution" [ref=e177] [cursor=pointer]:
                    - /url: "#"
                - tab "Projects" [ref=e178]:
                  - link "Projects" [ref=e179] [cursor=pointer]:
                    - /url: "#"
                - tab "Product Management" [ref=e180]:
                  - link "Product Management" [ref=e181] [cursor=pointer]:
                    - /url: "#"
                - tab "Intercompany Accounting" [ref=e182]:
                  - link "Intercompany Accounting" [ref=e183] [cursor=pointer]:
                    - /url: "#"
                - tab "Payables" [ref=e184]:
                  - link "Payables" [ref=e185] [cursor=pointer]:
                    - /url: "#"
                - tab "Expenses" [ref=e186]:
                  - link "Expenses" [ref=e187] [cursor=pointer]:
                    - /url: "#"
                - tab "Fixed Assets" [ref=e188]:
                  - link "Fixed Assets" [ref=e189] [cursor=pointer]:
                    - /url: "#"
                - tab "Lease Accounting" [ref=e190]:
                  - link "Lease Accounting" [ref=e191] [cursor=pointer]:
                    - /url: "#"
                - tab "Supplier Portal" [ref=e192]:
                  - link "Supplier Portal" [ref=e193] [cursor=pointer]:
                    - /url: "#"
                - tab "Customer Data Management" [ref=e194]:
                  - link "Customer Data Management" [ref=e195] [cursor=pointer]:
                    - /url: "#"
                - tab "Cash Management" [ref=e196]:
                  - link "Cash Management" [ref=e197] [cursor=pointer]:
                    - /url: "#"
                - tab "Order Management" [ref=e198]:
                  - link "Order Management" [ref=e199] [cursor=pointer]:
                    - /url: "#"
                - tab "Tools" [ref=e200]:
                  - link "Tools" [ref=e201] [cursor=pointer]:
                    - /url: "#"
                - tab "Risk Management" [ref=e202]:
                  - link "Risk Management" [ref=e203] [cursor=pointer]:
                    - /url: "#"
                - tab "Configuration" [ref=e204]:
                  - link "Configuration" [ref=e205] [cursor=pointer]:
                    - /url: "#"
                - tab "Others" [ref=e206]:
                  - link "Others" [ref=e207] [cursor=pointer]:
                    - /url: "#"
            - tabpanel "Me" [ref=e211]:
              - generic:
                - generic [ref=e212]:
                  - heading "Quick Actions" [level=2] [ref=e214]
                  - generic [ref=e215]:
                    - link "AI Chat" [ref=e225] [cursor=pointer]:
                      - /url: "#"
                    - link "Personal Details" [ref=e232] [cursor=pointer]:
                      - /url: "#"
                    - link "Identification Info" [ref=e241] [cursor=pointer]:
                      - /url: "#"
                    - link "Contact Info" [ref=e250] [cursor=pointer]:
                      - /url: "#"
                    - link "Family and Emergency Contacts" [ref=e259] [cursor=pointer]:
                      - /url: "#"
                    - link "My Organization Chart" [ref=e268] [cursor=pointer]:
                      - /url: "#"
                    - link "My Public Info" [ref=e275] [cursor=pointer]:
                      - /url: "#"
                    - link "Change Photo" [ref=e284] [cursor=pointer]:
                      - /url: "#"
                    - link "Share Data Access" [ref=e292] [cursor=pointer]:
                      - /url: "#"
                    - link "Document Records" [ref=e301] [cursor=pointer]:
                      - /url: "#"
                    - link "Show more quick actions" [ref=e303] [cursor=pointer]:
                      - /url: "#"
                      - text: Show More
                - generic [ref=e304]:
                  - heading "Apps" [level=2] [ref=e306]
                  - generic [ref=e307]:
                    - link "Directory" [ref=e315] [cursor=pointer]:
                      - /url: "#"
                    - link "Journeys" [ref=e325] [cursor=pointer]:
                      - /url: "#"
                    - link "Pay" [ref=e333] [cursor=pointer]:
                      - /url: "#"
                    - link "Time and Absences" [ref=e339] [cursor=pointer]:
                      - /url: "#"
                    - link "Personal Information" [ref=e345] [cursor=pointer]:
                      - /url: "#"
                    - link "My Activity Center" [ref=e352] [cursor=pointer]:
                      - /url: "#"
                    - link "Learning" [ref=e358] [cursor=pointer]:
                      - /url: "#"
                    - link "Roles and Delegations" [ref=e364] [cursor=pointer]:
                      - /url: "#"
                    - link "My Dashboard" [ref=e375] [cursor=pointer]:
                      - /url: "#"
                    - link "Expenses Copy" [ref=e383] [cursor=pointer]:
                      - /url: "#"
                    - link "Expenses" [ref=e391] [cursor=pointer]:
                      - /url: "#"
                    - link "Personalize Springboard" [ref=e393] [cursor=pointer]:
                      - /url: "#"
          - generic [ref=e404]:
            - heading "Things to Finish" [level=2] [ref=e413]
            - generic [ref=e417]:
              - generic [ref=e418]:
                - generic [ref=e420]:
                  - generic "Summary" [ref=e421]:
                    - generic [ref=e424]:
                      - generic [ref=e426]:
                        - generic [ref=e427]: Assigned to Me
                        - link "65" [ref=e429] [cursor=pointer]:
                          - /url: "#"
                      - generic [ref=e431]:
                        - generic [ref=e432]: Created by Me
                        - link "58" [ref=e434] [cursor=pointer]:
                          - /url: "#"
                  - generic [ref=e435]:
                    - heading "2 days ago" [level=1] [ref=e436]
                    - link "Close" [ref=e437] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e438]
                    - generic [ref=e440]:
                      - generic [ref=e441]:
                        - generic [ref=e443]: FYI
                        - link "Document (Purchase Order) Test ATC28 Implemented" [ref=e445] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e446]
                      - button "Dismiss" [ref=e447]
                  - generic [ref=e448]:
                    - heading "2 days ago" [level=1] [ref=e449]
                    - link "Close" [ref=e450] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e451]
                    - generic [ref=e453]:
                      - generic [ref=e454]:
                        - generic [ref=e456]: FYI
                        - link "Document (Purchase Order) Test ATC27 Implemented" [ref=e458] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e459]
                      - button "Dismiss" [ref=e460]
                  - generic [ref=e461]:
                    - heading "2 days ago" [level=1] [ref=e462]
                    - link "Close" [ref=e463] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e464]
                    - generic [ref=e466]:
                      - generic [ref=e467]:
                        - generic [ref=e469]: FYI
                        - link "Document (Purchase Order) Test ATC26 Implemented" [ref=e471] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e472]
                      - button "Dismiss" [ref=e473]
                  - generic [ref=e474]:
                    - heading "2 days ago" [level=1] [ref=e475]
                    - link "Close" [ref=e476] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e477]
                    - generic [ref=e479]:
                      - generic [ref=e480]:
                        - generic [ref=e482]: FYI
                        - link "Document (Purchase Order) Test ATC25 Implemented" [ref=e484] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e485]
                      - button "Dismiss" [ref=e486]
                  - generic [ref=e487]:
                    - heading "2 days ago" [level=1] [ref=e488]
                    - link "Close" [ref=e489] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e490]
                    - generic [ref=e492]:
                      - generic [ref=e493]:
                        - generic [ref=e495]: FYI
                        - link "Document (Purchase Order) Test ATC24 Implemented" [ref=e497] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e498]
                      - button "Dismiss" [ref=e499]
                  - generic [ref=e500]:
                    - heading "2 days ago" [level=1] [ref=e501]
                    - link "Close" [ref=e502] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e503]
                    - generic [ref=e505]:
                      - generic [ref=e506]:
                        - generic [ref=e508]: FYI
                        - link "Supplier Profile Change Request 109006 for Test ATC ASL1 Was Approved" [ref=e510] [cursor=pointer]:
                          - /url: "#"
                      - button "Dismiss" [ref=e512]
                  - generic [ref=e513]:
                    - heading "2 days ago" [level=1] [ref=e514]
                    - link "Close" [ref=e515] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e516]
                    - generic [ref=e518]:
                      - generic [ref=e519]:
                        - generic [ref=e521]: FYI
                        - link "Supplier Profile Change Request 109005 for Test ATC ASL1 Was Approved" [ref=e523] [cursor=pointer]:
                          - /url: "#"
                      - button "Dismiss" [ref=e525]
                  - generic [ref=e526]:
                    - heading "2 days ago" [level=1] [ref=e527]
                    - link "Close" [ref=e528] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e529]
                    - generic [ref=e531]:
                      - generic [ref=e532]:
                        - generic [ref=e534]: FYI
                        - link "Document (Purchase Order) Test ATC23 Implemented" [ref=e536] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e537]
                      - button "Dismiss" [ref=e538]
                  - generic [ref=e539]:
                    - heading "2 days ago" [level=1] [ref=e540]
                    - link "Close" [ref=e541] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e542]
                    - generic [ref=e544]:
                      - generic [ref=e545]:
                        - generic [ref=e547]: FYI
                        - link "Document (Consignment Agreement) Test ATC5 Implemented" [ref=e549] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e550]
                      - button "Dismiss" [ref=e551]
                  - generic [ref=e552]:
                    - heading "2 days ago" [level=1] [ref=e553]
                    - link "Close" [ref=e554] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e555]
                    - generic [ref=e557]:
                      - generic [ref=e558]:
                        - generic [ref=e560]: FYI
                        - link "Document (Purchase Order) Test ATC22 Implemented" [ref=e562] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e563]
                      - button "Dismiss" [ref=e564]
                - link "Next":
                  - /url: "#"
                  - img "Next" [ref=e565] [cursor=pointer]
              - link "Show More" [ref=e575] [cursor=pointer]:
                - /url: "#"
          - generic [ref=e588]:
            - heading "News and Announcements" [level=2] [ref=e593]
            - generic [ref=e600]:
              - generic [ref=e602]: Article 13/3/25
              - link "LTI Announcement" [ref=e604] [cursor=pointer]:
                - /url: "#"
                - generic [ref=e605]: LTI Announcement
          - generic [ref=e618]:
            - heading "Analytics" [level=2] [ref=e625]
            - generic [ref=e627]:
              - generic [ref=e632]:
                - link "Project Management Infolets" [ref=e635] [cursor=pointer]:
                  - /url: "#"
                - link "Cash Management Infolets" [ref=e638] [cursor=pointer]:
                  - /url: "#"
                - link "General Accounting Infolets" [ref=e641] [cursor=pointer]:
                  - /url: "#"
                - link "Service Infolets" [ref=e644] [cursor=pointer]:
                  - /url: "#"
                - link "Source to Settle Infolets" [ref=e647] [cursor=pointer]:
                  - /url: "#"
                - link "Innovate to Commercialize Infolets" [ref=e650] [cursor=pointer]:
                  - /url: "#"
                - link "Plan to Produce Infolets" [ref=e653] [cursor=pointer]:
                  - /url: "#"
                - link "Order to Cash Infolets" [ref=e656] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e665]:
                - generic [ref=e667]: Refresh to load content.
                - button "Refresh" [ref=e669]
```

# Test source

```ts
  208 | 
  209 |   }
  210 |   
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
> 308 |       await this.page.getByLabel("Name").fill(EmployeeName);
      |                                          ^ TimeoutError: locator.fill: Timeout 120000ms exceeded.
  309 |       if(record.Include_terminated_work_relationships)
  310 |       {
  311 |         await this.page.locator("//label[text()='Include terminated work relationships']").click();
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