# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: projectWorkSpaceERP\HCM\CoreHR\HireAnEmployee.test.ts >> Hire an Employee
- Location: tests\projectWorkSpaceERP\HCM\CoreHR\HireAnEmployee.test.ts:9:6

# Error details

```
TimeoutError: locator.click: Timeout 120000ms exceeded.
Call log:
  - waiting for getByText('Communication Info').first()

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic:
    - link "Skip to main content" [ref=e2] [cursor=pointer]:
      - /url: "#"
    - generic:
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
                  - combobox "Search:" [expanded] [active] [ref=e45]:
                    - generic [ref=e49]:
                      - generic [ref=e50]:
                        - text: Search
                        - link "Personalize Global Search" [ref=e51] [cursor=pointer]:
                          - /url: "#"
                          - img [ref=e52]
                      - generic [ref=e63]:
                        - list [ref=e65]:
                          - heading [level=6] [ref=e66]: Recent Items
                          - listitem [ref=e67]:
                            - generic [ref=e71] [cursor=pointer]: Hire an Employee
                          - listitem [ref=e72]:
                            - generic [ref=e76] [cursor=pointer]: Overview
                          - listitem [ref=e77]:
                            - generic [ref=e81] [cursor=pointer]: Search Person
                          - listitem [ref=e82]:
                            - generic [ref=e86] [cursor=pointer]: Shop
                          - listitem [ref=e87]:
                            - generic [ref=e91] [cursor=pointer]: Monitor Processes
                          - listitem [ref=e92]:
                            - generic [ref=e96] [cursor=pointer]: "Supplier: 3MG Company929278"
                          - listitem [ref=e97]:
                            - generic [ref=e101] [cursor=pointer]: "Supplier: 3M Company.LLT.Com"
                          - listitem [ref=e102]:
                            - generic [ref=e106] [cursor=pointer]: Manage Suppliers
                          - heading [level=6] [ref=e107]: Recent Searches
                          - listitem [ref=e108]:
                            - generic [ref=e112] [cursor=pointer]: monitor | All
                          - listitem [ref=e113]:
                            - generic [ref=e117] [cursor=pointer]: supplier | All
                          - listitem [ref=e118]:
                            - generic [ref=e122] [cursor=pointer]: tools | All
                          - listitem [ref=e123]:
                            - generic [ref=e127] [cursor=pointer]: Procurement | All
                          - listitem [ref=e128]:
                            - generic [ref=e132] [cursor=pointer]: BPM worklist | All
                          - listitem [ref=e133]:
                            - generic [ref=e137] [cursor=pointer]: Tasks | All
                          - listitem [ref=e138]:
                            - generic [ref=e142] [cursor=pointer]: secuirty | All
                        - generic:
                          - list
                  - generic: "Search:"
              - link "Home" [ref=e147] [cursor=pointer]:
                - /url: "#"
                - img [ref=e148]
              - link "Favorites and Recent Items" [ref=e159] [cursor=pointer]:
                - /url: "#"
                - img [ref=e160]
              - link "Watchlist" [ref=e171] [cursor=pointer]:
                - /url: "#"
                - img [ref=e172]
              - generic [ref=e183]:
                - link "Notifications (65 unread)" [ref=e184] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e185]
                - generic "Notifications (65 unread)" [ref=e194] [cursor=pointer]: "65"
              - link "Access Accessibility Settings":
                - /url: "#"
            - link "Settings and Actions" [ref=e203] [cursor=pointer]:
              - /url: "#"
              - img "Settings and Actions" [ref=e207]
          - generic [ref=e227]:
            - heading "Good afternoon, Trainee User Functional" [level=1] [ref=e232]
            - generic [ref=e245]:
              - generic [ref=e246]:
                - img [ref=e248]
                - tablist "Navigation Tabs" [ref=e254]:
                  - tab "Me" [selected] [ref=e255]:
                    - link "Me" [ref=e256] [cursor=pointer]:
                      - /url: "#"
                  - tab "My Client Groups" [ref=e257]:
                    - link "My Client Groups" [ref=e258] [cursor=pointer]:
                      - /url: "#"
                  - tab "Redwood Sales" [ref=e259]:
                    - link "Redwood Sales" [ref=e260] [cursor=pointer]:
                      - /url: "#"
                  - tab "Contract Management" [ref=e261]:
                    - link "Contract Management" [ref=e262] [cursor=pointer]:
                      - /url: "#"
                  - tab "Supply Chain Planning" [ref=e263]:
                    - link "Supply Chain Planning" [ref=e264] [cursor=pointer]:
                      - /url: "#"
                  - tab "Budgetary Control" [ref=e265]:
                    - link "Budgetary Control" [ref=e266] [cursor=pointer]:
                      - /url: "#"
                  - tab "General Accounting" [ref=e267]:
                    - link "General Accounting" [ref=e268] [cursor=pointer]:
                      - /url: "#"
                  - tab "Receivables" [ref=e269]:
                    - link "Receivables" [ref=e270] [cursor=pointer]:
                      - /url: "#"
                  - tab "Procurement" [ref=e271]:
                    - link "Procurement" [ref=e272] [cursor=pointer]:
                      - /url: "#"
                  - tab "Supply Chain Execution" [ref=e273]:
                    - link "Supply Chain Execution" [ref=e274] [cursor=pointer]:
                      - /url: "#"
                  - tab "Projects" [ref=e275]:
                    - link "Projects" [ref=e276] [cursor=pointer]:
                      - /url: "#"
                  - tab "Product Management" [ref=e277]:
                    - link "Product Management" [ref=e278] [cursor=pointer]:
                      - /url: "#"
                  - tab "Intercompany Accounting" [ref=e279]:
                    - link "Intercompany Accounting" [ref=e280] [cursor=pointer]:
                      - /url: "#"
                  - tab "Payables" [ref=e281]:
                    - link "Payables" [ref=e282] [cursor=pointer]:
                      - /url: "#"
                  - tab "Expenses" [ref=e283]:
                    - link "Expenses" [ref=e284] [cursor=pointer]:
                      - /url: "#"
                  - tab "Fixed Assets" [ref=e285]:
                    - link "Fixed Assets" [ref=e286] [cursor=pointer]:
                      - /url: "#"
                  - tab "Lease Accounting" [ref=e287]:
                    - link "Lease Accounting" [ref=e288] [cursor=pointer]:
                      - /url: "#"
                  - tab "Supplier Portal" [ref=e289]:
                    - link "Supplier Portal" [ref=e290] [cursor=pointer]:
                      - /url: "#"
                  - tab "Customer Data Management" [ref=e291]:
                    - link "Customer Data Management" [ref=e292] [cursor=pointer]:
                      - /url: "#"
                  - tab "Cash Management" [ref=e293]:
                    - link "Cash Management" [ref=e294] [cursor=pointer]:
                      - /url: "#"
                  - tab "Order Management" [ref=e295]:
                    - link "Order Management" [ref=e296] [cursor=pointer]:
                      - /url: "#"
                  - tab "Tools" [ref=e297]:
                    - link "Tools" [ref=e298] [cursor=pointer]:
                      - /url: "#"
                  - tab "Risk Management" [ref=e299]:
                    - link "Risk Management" [ref=e300] [cursor=pointer]:
                      - /url: "#"
                  - tab "Configuration" [ref=e301]:
                    - link "Configuration" [ref=e302] [cursor=pointer]:
                      - /url: "#"
                  - tab "Others" [ref=e303]:
                    - link "Others" [ref=e304] [cursor=pointer]:
                      - /url: "#"
              - tabpanel "Me" [ref=e308]:
                - generic:
                  - generic [ref=e309]:
                    - heading "Quick Actions" [level=2] [ref=e311]
                    - generic [ref=e312]:
                      - link "AI Chat" [ref=e322] [cursor=pointer]:
                        - /url: "#"
                      - link "Personal Details" [ref=e329] [cursor=pointer]:
                        - /url: "#"
                      - link "Identification Info" [ref=e338] [cursor=pointer]:
                        - /url: "#"
                      - link "Contact Info" [ref=e347] [cursor=pointer]:
                        - /url: "#"
                      - link "Family and Emergency Contacts" [ref=e356] [cursor=pointer]:
                        - /url: "#"
                      - link "My Organization Chart" [ref=e365] [cursor=pointer]:
                        - /url: "#"
                      - link "My Public Info" [ref=e372] [cursor=pointer]:
                        - /url: "#"
                      - link "Change Photo" [ref=e381] [cursor=pointer]:
                        - /url: "#"
                      - link "Share Data Access" [ref=e389] [cursor=pointer]:
                        - /url: "#"
                      - link "Document Records" [ref=e398] [cursor=pointer]:
                        - /url: "#"
                      - link "Show more quick actions" [ref=e400] [cursor=pointer]:
                        - /url: "#"
                        - text: Show More
                  - generic [ref=e401]:
                    - heading "Apps" [level=2] [ref=e403]
                    - generic [ref=e404]:
                      - link "Directory" [ref=e412] [cursor=pointer]:
                        - /url: "#"
                      - link "Journeys" [ref=e422] [cursor=pointer]:
                        - /url: "#"
                      - link "Pay" [ref=e430] [cursor=pointer]:
                        - /url: "#"
                      - link "Time and Absences" [ref=e436] [cursor=pointer]:
                        - /url: "#"
                      - link "Personal Information" [ref=e442] [cursor=pointer]:
                        - /url: "#"
                      - link "My Activity Center" [ref=e449] [cursor=pointer]:
                        - /url: "#"
                      - link "Learning" [ref=e455] [cursor=pointer]:
                        - /url: "#"
                      - link "Roles and Delegations" [ref=e461] [cursor=pointer]:
                        - /url: "#"
                      - link "My Dashboard" [ref=e472] [cursor=pointer]:
                        - /url: "#"
                      - link "Expenses Copy" [ref=e480] [cursor=pointer]:
                        - /url: "#"
                      - link "Expenses" [ref=e488] [cursor=pointer]:
                        - /url: "#"
                      - link "Personalize Springboard" [ref=e490] [cursor=pointer]:
                        - /url: "#"
            - generic [ref=e501]:
              - heading "Things to Finish" [level=2] [ref=e510]
              - generic [ref=e514]:
                - generic [ref=e515]:
                  - generic [ref=e517]:
                    - generic "Summary" [ref=e518]:
                      - generic [ref=e521]:
                        - generic [ref=e523]:
                          - generic [ref=e524]: Assigned to Me
                          - link "65" [ref=e526] [cursor=pointer]:
                            - /url: "#"
                        - generic [ref=e528]:
                          - generic [ref=e529]: Created by Me
                          - link "58" [ref=e531] [cursor=pointer]:
                            - /url: "#"
                    - generic [ref=e532]:
                      - heading "2 days ago" [level=1] [ref=e533]
                      - link "Close" [ref=e534] [cursor=pointer]:
                        - /url: "#"
                        - img "Close" [ref=e535]
                      - generic [ref=e537]:
                        - generic [ref=e538]:
                          - generic [ref=e540]: FYI
                          - link "Document (Purchase Order) Test ATC28 Implemented" [ref=e542] [cursor=pointer]:
                            - /url: "#"
                        - generic "Trainee User Functional" [ref=e543]
                        - button "Dismiss" [ref=e544]
                    - generic [ref=e545]:
                      - heading "2 days ago" [level=1] [ref=e546]
                      - link "Close" [ref=e547] [cursor=pointer]:
                        - /url: "#"
                        - img "Close" [ref=e548]
                      - generic [ref=e550]:
                        - generic [ref=e551]:
                          - generic [ref=e553]: FYI
                          - link "Document (Purchase Order) Test ATC27 Implemented" [ref=e555] [cursor=pointer]:
                            - /url: "#"
                        - generic "Trainee User Functional" [ref=e556]
                        - button "Dismiss" [ref=e557]
                    - generic [ref=e558]:
                      - heading "2 days ago" [level=1] [ref=e559]
                      - link "Close" [ref=e560] [cursor=pointer]:
                        - /url: "#"
                        - img "Close" [ref=e561]
                      - generic [ref=e563]:
                        - generic [ref=e564]:
                          - generic [ref=e566]: FYI
                          - link "Document (Purchase Order) Test ATC26 Implemented" [ref=e568] [cursor=pointer]:
                            - /url: "#"
                        - generic "Trainee User Functional" [ref=e569]
                        - button "Dismiss" [ref=e570]
                    - generic [ref=e571]:
                      - heading "2 days ago" [level=1] [ref=e572]
                      - link "Close" [ref=e573] [cursor=pointer]:
                        - /url: "#"
                        - img "Close" [ref=e574]
                      - generic [ref=e576]:
                        - generic [ref=e577]:
                          - generic [ref=e579]: FYI
                          - link "Document (Purchase Order) Test ATC25 Implemented" [ref=e581] [cursor=pointer]:
                            - /url: "#"
                        - generic "Trainee User Functional" [ref=e582]
                        - button "Dismiss" [ref=e583]
                    - generic [ref=e584]:
                      - heading "2 days ago" [level=1] [ref=e585]
                      - link "Close" [ref=e586] [cursor=pointer]:
                        - /url: "#"
                        - img "Close" [ref=e587]
                      - generic [ref=e589]:
                        - generic [ref=e590]:
                          - generic [ref=e592]: FYI
                          - link "Document (Purchase Order) Test ATC24 Implemented" [ref=e594] [cursor=pointer]:
                            - /url: "#"
                        - generic "Trainee User Functional" [ref=e595]
                        - button "Dismiss" [ref=e596]
                    - generic [ref=e597]:
                      - heading "2 days ago" [level=1] [ref=e598]
                      - link "Close" [ref=e599] [cursor=pointer]:
                        - /url: "#"
                        - img "Close" [ref=e600]
                      - generic [ref=e602]:
                        - generic [ref=e603]:
                          - generic [ref=e605]: FYI
                          - link "Supplier Profile Change Request 109006 for Test ATC ASL1 Was Approved" [ref=e607] [cursor=pointer]:
                            - /url: "#"
                        - button "Dismiss" [ref=e609]
                    - generic [ref=e610]:
                      - heading "2 days ago" [level=1] [ref=e611]
                      - link "Close" [ref=e612] [cursor=pointer]:
                        - /url: "#"
                        - img "Close" [ref=e613]
                      - generic [ref=e615]:
                        - generic [ref=e616]:
                          - generic [ref=e618]: FYI
                          - link "Supplier Profile Change Request 109005 for Test ATC ASL1 Was Approved" [ref=e620] [cursor=pointer]:
                            - /url: "#"
                        - button "Dismiss" [ref=e622]
                    - generic [ref=e623]:
                      - heading "2 days ago" [level=1] [ref=e624]
                      - link "Close" [ref=e625] [cursor=pointer]:
                        - /url: "#"
                        - img "Close" [ref=e626]
                      - generic [ref=e628]:
                        - generic [ref=e629]:
                          - generic [ref=e631]: FYI
                          - link "Document (Purchase Order) Test ATC23 Implemented" [ref=e633] [cursor=pointer]:
                            - /url: "#"
                        - generic "Trainee User Functional" [ref=e634]
                        - button "Dismiss" [ref=e635]
                    - generic [ref=e636]:
                      - heading "2 days ago" [level=1] [ref=e637]
                      - link "Close" [ref=e638] [cursor=pointer]:
                        - /url: "#"
                        - img "Close" [ref=e639]
                      - generic [ref=e641]:
                        - generic [ref=e642]:
                          - generic [ref=e644]: FYI
                          - link "Document (Consignment Agreement) Test ATC5 Implemented" [ref=e646] [cursor=pointer]:
                            - /url: "#"
                        - generic "Trainee User Functional" [ref=e647]
                        - button "Dismiss" [ref=e648]
                    - generic [ref=e649]:
                      - heading "2 days ago" [level=1] [ref=e650]
                      - link "Close" [ref=e651] [cursor=pointer]:
                        - /url: "#"
                        - img "Close" [ref=e652]
                      - generic [ref=e654]:
                        - generic [ref=e655]:
                          - generic [ref=e657]: FYI
                          - link "Document (Purchase Order) Test ATC22 Implemented" [ref=e659] [cursor=pointer]:
                            - /url: "#"
                        - generic "Trainee User Functional" [ref=e660]
                        - button "Dismiss" [ref=e661]
                  - link "Next":
                    - /url: "#"
                    - img "Next" [ref=e662] [cursor=pointer]
                - link "Show More" [ref=e672] [cursor=pointer]:
                  - /url: "#"
            - generic [ref=e685]:
              - heading "News and Announcements" [level=2] [ref=e690]
              - generic [ref=e697]:
                - generic [ref=e699]: Article 13/3/25
                - link "LTI Announcement" [ref=e701] [cursor=pointer]:
                  - /url: "#"
                  - generic [ref=e702]: LTI Announcement
            - generic [ref=e715]:
              - heading "Analytics" [level=2] [ref=e722]
              - generic [ref=e724]:
                - generic [ref=e729]:
                  - link "Project Management Infolets" [ref=e732] [cursor=pointer]:
                    - /url: "#"
                  - link "Cash Management Infolets" [ref=e735] [cursor=pointer]:
                    - /url: "#"
                  - link "General Accounting Infolets" [ref=e738] [cursor=pointer]:
                    - /url: "#"
                  - link "Service Infolets" [ref=e741] [cursor=pointer]:
                    - /url: "#"
                  - link "Source to Settle Infolets" [ref=e744] [cursor=pointer]:
                    - /url: "#"
                  - link "Innovate to Commercialize Infolets" [ref=e747] [cursor=pointer]:
                    - /url: "#"
                  - link "Plan to Produce Infolets" [ref=e750] [cursor=pointer]:
                    - /url: "#"
                  - link "Order to Cash Infolets" [ref=e753] [cursor=pointer]:
                    - /url: "#"
                - generic [ref=e762]:
                  - generic [ref=e764]: Refresh to load content.
                  - button "Refresh" [ref=e766]
      - iframe [ref=e769]:
        
```

# Test source

```ts
  1   | import { expect, Page } from "@playwright/test";
  2   | import { DatasetRow } from "../../../../utils/excelDataValidator";
  3   | import { CommonFunctions } from "../../common/CommonFunctions";
  4   | 
  5   |       const Test="Test";
  6   |       const FirstNum = Math.floor(Math.random() * 100);
  7   |       const First_Name=Test+"_"+FirstNum;
  8   |       const LastNum = Math.floor(Math.random() * 100);
  9   |       const Last_Name=Test+"_"+LastNum;
  10  |       const Employee=Last_Name+", "+First_Name;
  11  |       console.log("Employee Name is: " + Employee);
  12  |       const EmployeeName="Test_30, Test_90";
  13  |       
  14  | export class CoreHrResuableFunctions {
  15  |   constructor(private page: Page) {}
  16  |  
  17  |   async hireEmployee_whatInfoDoYouWantToManage(record: DatasetRow) {
  18  | 
  19  |     if (record.PersonalDetails) {
  20  |     
  21  |     if (true) {
> 22  |       await this.page.getByText("Communication Info").nth(0).click();
      |                                                              ^ TimeoutError: locator.click: Timeout 120000ms exceeded.
  23  |     }
  24  |     if (true) {
  25  |       await this.page.getByText("Address").nth(0).click();
  26  |     }
  27  |     if (true) {
  28  |       await this.page.getByText("Legislative Info").nth(0).click();
  29  |     }
  30  |     if (true) {
  31  |       await this.page.getByText("Citizenship Info").nth(0).click();
  32  |     }
  33  |     if (true) {
  34  |       await this.page.getByText("Passport Info").nth(0).click();
  35  |     }
  36  |     if (true) {
  37  |       await this.page.getByText("Driver's Licenses").nth(0).click();
  38  |     }
  39  |     
  40  |     if (true) {
  41  |       await this.page.getByText("Visas and Permits").nth(0).click();
  42  |     }
  43  |     if (true) {
  44  |       await this.page.getByText("Family and Emergency Contacts").nth(0).click();
  45  |     }
  46  |     if (false) {
  47  |       await this.page.getByText("Assign Managers").nth(0).click();
  48  |     }
  49  |     if (true) {
  50  |       await this.page.getByText("Work Relationship Info").nth(0).click();
  51  |     }
  52  |     if (true) {
  53  |       await this.page.getByText("Payroll Details").nth(0).click();
  54  |     }
  55  |     if (false) {
  56  |       await this.page.getByText("Salary").nth(0).click();
  57  |     }
  58  |     if (true) {
  59  |       await this.page.getByText("Compensation").nth(0).click();
  60  |     }
  61  |     if (true) {
  62  |       await this.page.getByText("Add Direct Reports").nth(0).click();
  63  |     }
  64  |     if (true) {
  65  |       await this.page.getByText("Comments and Attachments").nth(0).click();
  66  |     }
  67  | 
  68  |     await this.page.locator("//span[text()='Contin']").click();
  69  | 
  70  |   }
  71  |   
  72  |   }
  73  |   async hireEmployee_WhenAndWhy(record: DatasetRow) {
  74  |     
  75  |     if (record.HireDate) {
  76  |       const formattedDate = new Date((record.HireDate - 25569) * 86400 * 1000).toLocaleDateString('en-US');
  77  |       await this.page.getByLabel("When is the employee hire date?").clear();
  78  |       await this.page.getByLabel("When is the employee hire date?").type(formattedDate.toString());
  79  | 
  80  |     }
  81  |     if (record.Action) {
  82  |       await this.page.getByLabel("What's the way to hire an employee?").nth(1).fill(record.Action);
  83  |       
  84  |     }
  85  |     if(record.LegalEmployer) {
  86  |       await this.page.waitForLoadState("networkidle");
  87  |       await this.page.getByLabel("Legal Employer").nth(1).type(record.LegalEmployer,{delay:100});
  88  |       await this.page.getByLabel("Legal Employer").nth(1).press('Enter');
  89  |     }
  90  |   }
  91  |   async hireEmployee_ToBeVisibleContinue()
  92  |    {
  93  |     const Continue=await this.page.locator("//button[text()='Continue']").isVisible();
  94  |     if (Continue==true) {
  95  |       await expect(this.page.locator("//button[text()='Continue']")).toBeVisible();
  96  |       await this.page.locator("//button[text()='Continue']").click();
  97  |       await this.page.locator("//button[text()='Continue']").waitFor();
  98  |       console.log("Clicked on Continue button");
  99  |       await this.page.waitForLoadState("networkidle");
  100 |       await this.page.waitForTimeout(3000);
  101 |     }
  102 |     else {
  103 |       await expect(this.page.locator("//button[text()='Contin']")).toBeVisible();
  104 |       await this.page.locator("//button[text()='Contin']").click();
  105 |       await this.page.locator("//button[text()='Contin']").waitFor();
  106 |       console.log("Clicked on Contin button");
  107 |       await this.page.waitForLoadState("networkidle");
  108 |      
  109 |        await this.page.waitForTimeout(3000);
  110 |     }
  111 |   }
  112 |   async hireEmployee_PersonalDetails(record: DatasetRow)
  113 |    {
  114 |     
  115 |     if (record.FirstName) {
  116 |       await this.page.getByLabel("First Name").fill(First_Name);
  117 |       console.log("First Name is: " + First_Name);
  118 |     }
  119 |     if (record.LastName) {
  120 |       await this.page.getByLabel('Family Name').nth(0).fill(Last_Name);
  121 |       console.log("Family Name is: " + Last_Name);
  122 |     }
```