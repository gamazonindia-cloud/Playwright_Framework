# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: projectWorkSpaceERP\HCM\CoreHR\WorkForceModel.test.ts >> Work Force Model
- Location: tests\projectWorkSpaceERP\HCM\CoreHR\WorkForceModel.test.ts:9:6

# Error details

```
TimeoutError: locator.click: Timeout 120000ms exceeded.
Call log:
  - waiting for locator('//span[normalize-space()=\'My Client Groups\']')
    - waiting for" https://fa-epvg-test-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/faces/FndOverview?fnd=%252FWEB-INF%252Foracle%252Fapps%252Fhcm%252Femployment%252Fmanage%252Fui%252Fflow%252FManageEmploymentTF.xml%2523M…" navigation to finish...
    - navigated to "https://fa-epvg-test-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/faces/FndOverview?_afrLoop=7145750169797627&fnd=%252FWEB-INF%252Foracle%252Fapps%252Fhcm%252Femployment%252Fmanage%252Fui%252Fflow%252FMa…"
    - locator resolved to <span class="x3a0">My Client Groups</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div>…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div>…</div> intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="_FOpt1:_UISnvr:0:nvpgl3" class="navmenu-header sticky x1a">…</div> from <div>…</div> subtree intercepts pointer events
  5 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div>…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div>…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="_FOpt1:_UISnvr:0:nvpgl3" class="navmenu-header sticky x1a">…</div> from <div>…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="_FOpt1:_UISnvr:0:nvpgl3" class="navmenu-header sticky x1a">…</div> from <div>…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div>…</div> intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying
    - locator resolved to <span class="x3a0">My Client Groups</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    112 × waiting for element to be visible, enabled and stable
        - element is not visible
      - retrying click action
        - waiting 500ms
    - waiting for" https://fa-epvg-test-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/faces/FndOverview?_adf.ctrl-state=1b8ymq6vm8_109&pageParams=pPersonId%3D300000070906188%3BpAssignmentId%3D300000070906201%3BpEffectiveDat…" navigation to finish...

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
              - link "Notifications (86 unread)" [ref=e87] [cursor=pointer]:
                - /url: "#"
                - img [ref=e88]
              - generic "Notifications (86 unread)" [ref=e97] [cursor=pointer]: "86"
            - link "Access Accessibility Settings":
              - /url: "#"
          - link "Settings and Actions" [ref=e106] [cursor=pointer]:
            - /url: "#"
            - img "Settings and Actions" [ref=e110]
        - generic [ref=e130]:
          - heading "Good evening, Trainee User Functional" [level=1] [ref=e135]
          - generic [ref=e148]:
            - generic [ref=e149]:
              - img [ref=e151]
              - tablist "Navigation Tabs" [ref=e157]:
                - tab "Me" [ref=e158]:
                  - link "Me" [ref=e159] [cursor=pointer]:
                    - /url: "#"
                - tab "My Client Groups" [selected] [ref=e160]:
                  - link "My Client Groups" [ref=e161] [cursor=pointer]:
                    - /url: "#"
                - tab "Redwood Sales" [ref=e162]:
                  - link "Redwood Sales" [ref=e163] [cursor=pointer]:
                    - /url: "#"
                - tab "Supply Chain Planning" [ref=e164]:
                  - link "Supply Chain Planning" [ref=e165] [cursor=pointer]:
                    - /url: "#"
                - tab "Budgetary Control" [ref=e166]:
                  - link "Budgetary Control" [ref=e167] [cursor=pointer]:
                    - /url: "#"
                - tab "General Accounting" [ref=e168]:
                  - link "General Accounting" [ref=e169] [cursor=pointer]:
                    - /url: "#"
                - tab "Receivables" [ref=e170]:
                  - link "Receivables" [ref=e171] [cursor=pointer]:
                    - /url: "#"
                - tab "Procurement" [ref=e172]:
                  - link "Procurement" [ref=e173] [cursor=pointer]:
                    - /url: "#"
                - tab "Supply Chain Execution" [ref=e174]:
                  - link "Supply Chain Execution" [ref=e175] [cursor=pointer]:
                    - /url: "#"
                - tab "Projects" [ref=e176]:
                  - link "Projects" [ref=e177] [cursor=pointer]:
                    - /url: "#"
                - tab "Product Management" [ref=e178]:
                  - link "Product Management" [ref=e179] [cursor=pointer]:
                    - /url: "#"
                - tab "Intercompany Accounting" [ref=e180]:
                  - link "Intercompany Accounting" [ref=e181] [cursor=pointer]:
                    - /url: "#"
                - tab "Payables" [ref=e182]:
                  - link "Payables" [ref=e183] [cursor=pointer]:
                    - /url: "#"
                - tab "Expenses" [ref=e184]:
                  - link "Expenses" [ref=e185] [cursor=pointer]:
                    - /url: "#"
                - tab "Fixed Assets" [ref=e186]:
                  - link "Fixed Assets" [ref=e187] [cursor=pointer]:
                    - /url: "#"
                - tab "Lease Accounting" [ref=e188]:
                  - link "Lease Accounting" [ref=e189] [cursor=pointer]:
                    - /url: "#"
                - tab "Supplier Portal" [ref=e190]:
                  - link "Supplier Portal" [ref=e191] [cursor=pointer]:
                    - /url: "#"
                - tab "Customer Data Management" [ref=e192]:
                  - link "Customer Data Management" [ref=e193] [cursor=pointer]:
                    - /url: "#"
                - tab "Cash Management" [ref=e194]:
                  - link "Cash Management" [ref=e195] [cursor=pointer]:
                    - /url: "#"
                - tab "Order Management" [ref=e196]:
                  - link "Order Management" [ref=e197] [cursor=pointer]:
                    - /url: "#"
                - tab "Tools" [ref=e198]:
                  - link "Tools" [ref=e199] [cursor=pointer]:
                    - /url: "#"
                - tab "Risk Management" [ref=e200]:
                  - link "Risk Management" [ref=e201] [cursor=pointer]:
                    - /url: "#"
                - tab "Configuration" [ref=e202]:
                  - link "Configuration" [ref=e203] [cursor=pointer]:
                    - /url: "#"
                - tab "Others" [ref=e204]:
                  - link "Others" [ref=e205] [cursor=pointer]:
                    - /url: "#"
            - tabpanel "My Client Groups" [ref=e209]:
              - generic:
                - generic [ref=e210]:
                  - heading "Quick Actions" [level=2] [ref=e212]
                  - generic [ref=e213]:
                    - link "HCM Experience Design Studio" [ref=e221] [cursor=pointer]:
                      - /url: "#"
                    - link "Hire an Employee" [ref=e230] [cursor=pointer]:
                      - /url: "#"
                    - link "Add a Contingent Worker" [ref=e239] [cursor=pointer]:
                      - /url: "#"
                    - link "Add a Pending Worker" [ref=e248] [cursor=pointer]:
                      - /url: "#"
                    - link "Add a Nonworker" [ref=e257] [cursor=pointer]:
                      - /url: "#"
                    - link "Pending Workers" [ref=e268] [cursor=pointer]:
                      - /url: "#"
                    - link "Document Records" [ref=e277] [cursor=pointer]:
                      - /url: "#"
                    - link "Document Delivery Preferences" [ref=e284] [cursor=pointer]:
                      - /url: "#"
                    - link "Mass Download of Document Records" [ref=e294] [cursor=pointer]:
                      - /url: "#"
                    - link "Archived Document Records" [ref=e303] [cursor=pointer]:
                      - /url: "#"
                    - link "Person" [ref=e310] [cursor=pointer]:
                      - /url: "#"
                    - link "Personal Details" [ref=e317] [cursor=pointer]:
                      - /url: "#"
                    - link "Additional Person Info" [ref=e324] [cursor=pointer]:
                      - /url: "#"
                    - link "Employment Contracts" [ref=e335] [cursor=pointer]:
                      - /url: "#"
                    - link "Eligible Jobs" [ref=e347] [cursor=pointer]:
                      - /url: "#"
                    - link "Identification Info" [ref=e356] [cursor=pointer]:
                      - /url: "#"
                    - link "Show more quick actions" [ref=e358] [cursor=pointer]:
                      - /url: "#"
                      - text: Show More
                - generic [ref=e359]:
                  - heading "Apps" [level=2] [ref=e361]
                  - generic [ref=e362]:
                    - link "Journeys" [ref=e372] [cursor=pointer]:
                      - /url: "#"
                    - link "New Person" [ref=e380] [cursor=pointer]:
                      - /url: "#"
                    - link "Person Management" [ref=e390] [cursor=pointer]:
                      - /url: "#"
                    - link "Person Spotlight" [ref=e400] [cursor=pointer]:
                      - /url: "#"
                    - link "Absences" [ref=e406] [cursor=pointer]:
                      - /url: "#"
                    - link "Goals" [ref=e414] [cursor=pointer]:
                      - /url: "#"
                    - link "Performance" [ref=e423] [cursor=pointer]:
                      - /url: "#"
                    - link "Profiles" [ref=e429] [cursor=pointer]:
                      - /url: "#"
                    - link "Career Development" [ref=e438] [cursor=pointer]:
                      - /url: "#"
                    - link "Talent Review" [ref=e449] [cursor=pointer]:
                      - /url: "#"
                    - link "Succession Plans" [ref=e457] [cursor=pointer]:
                      - /url: "#"
                    - link "Talent Pools" [ref=e466] [cursor=pointer]:
                      - /url: "#"
                    - link "Workforce Structures" [ref=e477] [cursor=pointer]:
                      - /url: "#"
                    - link "Journeys Setup" [ref=e485] [cursor=pointer]:
                      - /url: "#"
                    - link "Mass Updates" [ref=e494] [cursor=pointer]:
                      - /url: "#"
                    - link "Payroll Activity Center" [ref=e501] [cursor=pointer]:
                      - /url: "#"
                    - link "Payroll" [ref=e508] [cursor=pointer]:
                      - /url: "#"
                    - link "Workforce Modeling" [ref=e517] [cursor=pointer]:
                      - /url: "#"
                    - link "Data Exchange" [ref=e524] [cursor=pointer]:
                      - /url: "#"
                    - link "Volunteering" [ref=e534] [cursor=pointer]:
                      - /url: "#"
                    - link "Personalize Springboard" [ref=e536] [cursor=pointer]:
                      - /url: "#"
          - generic [ref=e547]:
            - heading "Things to Finish" [level=2] [ref=e556]
            - generic [ref=e560]:
              - generic [ref=e561]:
                - generic [ref=e563]:
                  - generic "Summary" [ref=e564]:
                    - generic [ref=e567]:
                      - generic [ref=e569]:
                        - generic [ref=e570]: Assigned to Me
                        - link "86" [ref=e572] [cursor=pointer]:
                          - /url: "#"
                      - generic [ref=e574]:
                        - generic [ref=e575]: Created by Me
                        - link "38" [ref=e577] [cursor=pointer]:
                          - /url: "#"
                  - generic [ref=e578]:
                    - heading "53 minutes ago" [level=1] [ref=e579]
                    - link "Close" [ref=e580] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e581]
                    - generic [ref=e583]:
                      - generic [ref=e584]:
                        - generic [ref=e586]: Submitted
                        - link "Model Plan dssdfd Created by Author Trainee User Functional for Top Manager or Position Trainee User Functional." [ref=e588] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e589]
                  - generic [ref=e590]:
                    - heading "1 hour ago" [level=1] [ref=e591]
                    - link "Close" [ref=e592] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e593]
                    - generic [ref=e595]:
                      - generic [ref=e596]:
                        - generic [ref=e598]: Submitted
                        - link "Model Plan payroll increased Created by Author Trainee User Functional for Top Manager or Position Trainee User Functional." [ref=e600] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e601]
                  - generic [ref=e602]:
                    - heading "2 hours ago" [level=1] [ref=e603]
                    - link "Close" [ref=e604] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e605]
                    - generic [ref=e607]:
                      - generic [ref=e608]:
                        - generic [ref=e610]: Submitted
                        - link "Model Plan automation_testing_user01 Created by Author Trainee User Functional for Top Manager or Position Trainee User Functional." [ref=e612] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e613]
                  - generic [ref=e614]:
                    - heading "2 hours ago" [level=1] [ref=e615]
                    - link "Close" [ref=e616] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e617]
                    - generic [ref=e619]:
                      - generic [ref=e620]:
                        - generic [ref=e622]: Action Required
                        - 'link "Edit for WES Test, 161 (2026-06-28): Process Was Saved" [ref=e624] [cursor=pointer]':
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e625]
                  - generic [ref=e626]:
                    - heading "2 days ago" [level=1] [ref=e627]
                    - link "Close" [ref=e628] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e629]
                    - generic [ref=e631]:
                      - generic [ref=e632]:
                        - generic [ref=e634]: FYI
                        - link "Requisition Test ATC22 Approved" [ref=e636] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e637]
                      - button "Dismiss" [ref=e638]
                  - generic [ref=e639]:
                    - heading "2 days ago" [level=1] [ref=e640]
                    - link "Close" [ref=e641] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e642]
                    - generic [ref=e644]:
                      - generic [ref=e645]:
                        - generic [ref=e647]: Action Required
                        - link "Approve Requisition Test ATC22" [ref=e649] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e650]
                      - button "Approve" [ref=e651]
                      - button "Reject" [ref=e652]
                  - generic [ref=e653]:
                    - heading "2 days ago" [level=1] [ref=e654]
                    - link "Close" [ref=e655] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e656]
                    - generic [ref=e658]:
                      - generic [ref=e659]:
                        - generic [ref=e661]: FYI
                        - link "Requisition Test ATC21 Approved" [ref=e663] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e664]
                      - button "Dismiss" [ref=e665]
                  - generic [ref=e666]:
                    - heading "2 days ago" [level=1] [ref=e667]
                    - link "Close" [ref=e668] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e669]
                    - generic [ref=e671]:
                      - generic [ref=e672]:
                        - generic [ref=e674]: Action Required
                        - link "Approve Requisition Test ATC21" [ref=e676] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e677]
                      - button "Approve" [ref=e678]
                      - button "Reject" [ref=e679]
                  - generic [ref=e680]:
                    - heading "2 days ago" [level=1] [ref=e681]
                    - link "Close" [ref=e682] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e683]
                    - generic [ref=e685]:
                      - generic [ref=e686]:
                        - generic [ref=e688]: FYI
                        - link "Requisition Test ATC20 Approved" [ref=e690] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e691]
                      - button "Dismiss" [ref=e692]
                  - generic [ref=e693]:
                    - heading "2 days ago" [level=1] [ref=e694]
                    - link "Close" [ref=e695] [cursor=pointer]:
                      - /url: "#"
                      - img "Close" [ref=e696]
                    - generic [ref=e698]:
                      - generic [ref=e699]:
                        - generic [ref=e701]: Action Required
                        - link "Approve Requisition Test ATC20" [ref=e703] [cursor=pointer]:
                          - /url: "#"
                      - generic "Trainee User Functional" [ref=e704]
                      - button "Approve" [ref=e705]
                      - button "Reject" [ref=e706]
                - link "Next":
                  - /url: "#"
                  - img "Next" [ref=e707] [cursor=pointer]
              - link "Show More" [ref=e717] [cursor=pointer]:
                - /url: "#"
          - generic [ref=e730]:
            - heading "News and Announcements" [level=2] [ref=e735]
            - generic [ref=e742]:
              - generic [ref=e744]: Article 13/3/25
              - link "LTI Announcement" [ref=e746] [cursor=pointer]:
                - /url: "#"
                - generic [ref=e747]: LTI Announcement
          - generic [ref=e760]:
            - heading "Analytics" [level=2] [ref=e767]
            - generic [ref=e769]:
              - generic [ref=e774]:
                - link "Project Management Infolets" [ref=e777] [cursor=pointer]:
                  - /url: "#"
                - link "Cash Management Infolets" [ref=e780] [cursor=pointer]:
                  - /url: "#"
                - link "General Accounting Infolets" [ref=e783] [cursor=pointer]:
                  - /url: "#"
                - link "Service Infolets" [ref=e786] [cursor=pointer]:
                  - /url: "#"
                - link "Source to Settle Infolets" [ref=e789] [cursor=pointer]:
                  - /url: "#"
                - link "Innovate to Commercialize Infolets" [ref=e792] [cursor=pointer]:
                  - /url: "#"
                - link "Plan to Produce Infolets" [ref=e795] [cursor=pointer]:
                  - /url: "#"
                - link "Order to Cash Infolets" [ref=e798] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e807]:
                - generic [ref=e809]: Refresh to load content.
                - button "Refresh" [ref=e811]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { withHealing } from "healwright";
  3  | import { ExcelDataValidator } from "../../../../utils/excelDataValidator";
  4  | import * as path from "path";
  5  | import { CommonFunctions } from "../../../../src/pages/common/CommonFunctions";
  6  | import { CoreHrResuableFunctions } from "../../../../src/pages/hcm/CoreHR/CoreHrResuableFunctions";
  7  | import { attachScreenshot } from '../../../../utils/screenshotHelper';
  8  | 
  9  | test.only("Work Force Model", async ({ page }, testInfo) => {
  10 |   test.setTimeout(1200000);
  11 |   const excelPath = path.join(__dirname, "/WorkForceModelTestData.xlsx");
  12 | 
  13 |    const healingPage = withHealing(page);
  14 |   
  15 | 
  16 |   // Wrap the Playwright page with healwright
  17 |   
  18 | 
  19 |   // Fetch only enabled datasets
  20 |   const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  21 |   const firstRecord = enabledDatasets[0];
  22 | 
  23 |   // Pass the healing-enabled page into your helper classes
  24 |   const commonFunctions = new CommonFunctions(healingPage);
  25 |   const hireEmployee_ReusableFunction = new CoreHrResuableFunctions(healingPage);
  26 | 
  27 |   await healingPage.setDefaultTimeout(120000);
  28 | 
  29 |   await commonFunctions.loginWithPasscode(firstRecord);
  30 |   await attachScreenshot(healingPage, testInfo, 'Login_Successful');
  31 | 
  32 | //   await commonFunctions.navigateToItemFromHomePage("My Client Groups", "Person Management");
  33 | //   await attachScreenshot(healingPage, testInfo, 'Person Management');
  34 | //   await hireEmployee_ReusableFunction.hireEmployee_PersonManagement(firstRecord);
  35 | //   await attachScreenshot(healingPage, testInfo, 'Record Searched SUccessfully');
  36 | //   await hireEmployee_ReusableFunction.hireEmployee_OpneEmployee();
  37 | //   await attachScreenshot(healingPage, testInfo, 'Employee Record Opened Successfully');
  38 |   
> 39 |   await page.locator("//span[normalize-space()='My Client Groups']").click();
     |                                                                      ^ TimeoutError: locator.click: Timeout 120000ms exceeded.
  40 |    await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  41 |   
  42 |   await page.locator("//span[normalize-space()='Workforce Modeling']").click();
  43 |    await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  44 | 
  45 | 
  46 |   await page.locator("//button[normalize-space()='Create Model']").click();
  47 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  48 | 
  49 | await page.locator("//input[@placeholder='d/m/yy']").click();
  50 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  51 | 
  52 | await page.locator("//input[@placeholder='d/m/yy']").fill("01/01/2024");
  53 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  54 | 
  55 | await page.locator("//label[normalize-space()='Model Name']/following::input[1]").click();
  56 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  57 | 
  58 | await page.locator("//label[normalize-space()='Purpose']/following::textarea[1]").click();
  59 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  60 | 
  61 | await page.locator("//img[@title='Manage Attachments']").click();
  62 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  63 | 
  64 | await page.locator("//input[@type='file']").click();
  65 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  66 | await page.locator("//input[@type='file']").setInputFiles("C:/Users/girdh/Downloads/ec6117e5d3a7e19f.webm");
  67 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  68 | 
  69 | await page.getByRole('button', { name: 'OK' }).click();
  70 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  71 | 
  72 | await page.locator("//a[normalize-space()='Continue']").click();
  73 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  74 | 
  75 | 
  76 | await page.locator("//span[normalize-space()='Review and Submit']/parent::a").click();
  77 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  78 | 
  79 | await page.locator("//a[normalize-space()='Submit']").click();
  80 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  81 | 
  82 | await page.locator("//a[.//span[normalize-space()='dssdfd']]").click();
  83 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  84 | 
  85 | })
```