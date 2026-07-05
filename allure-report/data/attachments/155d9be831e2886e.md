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
  - waiting for locator('//span[normalize-space()=\'Review and Submit\']/parent::a')
    - waiting for" https://fa-epvg-test-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/faces/FndOverview?fnd=%3B%3B%3B%3Bfalse%3B256%3B%3B%3B&fndGlobalItemNodeId=itemNode_workforce_management_person_management&_afrLoop=71840…" navigation to finish...
    - navigated to "https://fa-epvg-test-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/faces/FndOverview?_afrLoop=7184026892799531&fnd=%3B%3B%3B%3Bfalse%3B256%3B%3B%3B&fndGlobalItemNodeId=itemNode_workforce_management_person…"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Skip to main content" [ref=e3] [cursor=pointer]:
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
          - link "Search" [ref=e33] [cursor=pointer]:
            - /url: "#"
            - img [ref=e34]
          - link "Home" [ref=e45] [cursor=pointer]:
            - /url: "#"
            - img [ref=e46]
          - link "Favorites and Recent Items" [ref=e57] [cursor=pointer]:
            - /url: "#"
            - img [ref=e58]
          - link "Watchlist" [ref=e69] [cursor=pointer]:
            - /url: "#"
            - img [ref=e70]
          - generic [ref=e81]:
            - link "Notifications (87 unread)" [ref=e82] [cursor=pointer]:
              - /url: "#"
              - img [ref=e83]
            - generic "Notifications (87 unread)" [ref=e92] [cursor=pointer]: "87"
          - link "Access Accessibility Settings":
            - /url: "#"
        - link "Settings and Actions" [ref=e101] [cursor=pointer]:
          - /url: "#"
          - img "Settings and Actions" [ref=e105]
      - generic [ref=e132]:
        - link "Search Person" [ref=e140] [cursor=pointer]:
          - /url: "#"
        - generic [ref=e158]:
          - generic [ref=e176]:
            - 'generic "Person Management: Search" [ref=e177]':
              - 'heading "Person Management: Search" [level=1] [ref=e178]'
            - link "Help" [ref=e179] [cursor=pointer]:
              - /url: "#"
              - img "Help" [ref=e180]
          - generic [ref=e206]:
            - search [ref=e208]:
              - generic [ref=e209]:
                - button "Collapse Search" [expanded] [ref=e210]
                - generic "Search" [ref=e211]:
                  - heading "Search" [level=1] [ref=e212]
                - button "Advanced" [ref=e213]
                - text: Saved Search
                - combobox "Saved Search" [ref=e215] [cursor=pointer]: All People
                - generic: Saved Search
              - generic [ref=e217]:
                - generic [ref=e218]: "* Required"
                - generic [ref=e219]: "** At least one is required"
                - generic [ref=e220]:
                  - generic [ref=e221]:
                    - generic [ref=e222]: "**"
                    - text: Name
                    - generic [ref=e223]:
                      - textbox "Name" [ref=e224]
                      - generic: Name
                    - generic [ref=e225]: "**"
                    - text: Person Number
                    - generic [ref=e226]:
                      - textbox "Person Number" [ref=e227]
                      - generic: Person Number
                    - generic [ref=e228]: "**"
                    - text: National ID
                    - generic [ref=e229]:
                      - textbox "National ID" [ref=e230]
                      - generic: National ID
                    - generic [ref=e231]: "**"
                    - text: Keywords
                    - generic [ref=e232]:
                      - textbox "Keywords" [ref=e233]
                      - generic: Keywords
                    - generic [ref=e236]:
                      - checkbox "Include terminated work relationships" [ref=e237]
                      - generic [ref=e238] [cursor=pointer]: Include terminated work relationships
                    - text: "*Effective As-of Date"
                    - generic [ref=e239]:
                      - textbox "Effective As-of Date" [ref=e240]:
                        - /placeholder: d/m/yy
                        - text: 29/6/26
                      - generic: Press down arrow to access Calendar
                      - generic: Effective As-of Date
                      - generic "Select Date" [ref=e241]
                  - button "Search" [ref=e242]
                  - button "Reset" [ref=e243]
                  - button "Save..." [ref=e244]
            - generic [ref=e246]:
              - generic [ref=e247]:
                - button "Collapse Search Results" [expanded] [ref=e248]
                - generic "Search Results" [ref=e249]:
                  - heading "Search Results" [level=1] [ref=e250]
                - link "Help" [ref=e251] [cursor=pointer]:
                  - /url: "#"
                  - img "Help" [ref=e252]
              - generic [ref=e267]:
                - generic [ref=e270]:
                  - menubar [ref=e271]:
                    - menuitem "Actions" [ref=e272]:
                      - link "Actions" [ref=e273]:
                        - /url: "#"
                    - menuitem "View" [ref=e275]:
                      - link "View" [ref=e276]:
                        - /url: "#"
                    - menuitem "Format" [ref=e278]:
                      - link "Format" [ref=e279]:
                        - /url: "#"
                  - generic [ref=e281]:
                    - button "Export to Excel" [ref=e282]:
                      - img "Export to Excel" [ref=e283]
                    - generic: Export to Excel
                - generic [ref=e285]:
                  - generic [ref=e286]:
                    - table "This table contains column headers corresponding to the data body table below" [ref=e287]:
                      - rowgroup [ref=e290]:
                        - row:
                          - columnheader
                        - row [ref=e291]:
                          - columnheader [ref=e292]
                    - table "This table contains column headers corresponding to the data body table below" [ref=e295]:
                      - rowgroup [ref=e317]:
                        - row:
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                          - columnheader
                        - row "Name Person Number National ID Department Location User Person Type Job Position Primary Phone Primary Email Business Unit Town or City Country Assignment Number Assignment Name Assignment Status Termination Date System Person Type Worker Number Actions" [ref=e318]:
                          - columnheader "Name" [ref=e319]:
                            - generic [ref=e320]: Name
                          - columnheader "Person Number" [ref=e321]:
                            - generic [ref=e322]: Person Number
                          - columnheader "National ID" [ref=e323]:
                            - generic [ref=e324]: National ID
                          - columnheader "Department" [ref=e325]:
                            - generic [ref=e326]: Department
                          - columnheader "Location" [ref=e327]:
                            - generic [ref=e328]: Location
                          - columnheader "User Person Type" [ref=e329]:
                            - generic [ref=e330]: User Person Type
                          - columnheader "Job" [ref=e331]:
                            - generic [ref=e332]: Job
                          - columnheader "Position" [ref=e333]:
                            - generic [ref=e334]: Position
                          - columnheader "Primary Phone" [ref=e335]:
                            - generic [ref=e336]: Primary Phone
                          - columnheader "Primary Email" [ref=e337]:
                            - generic [ref=e338]: Primary Email
                          - columnheader "Business Unit" [ref=e339]:
                            - generic [ref=e340]: Business Unit
                          - columnheader "Town or City" [ref=e341]:
                            - generic [ref=e342]: Town or City
                          - columnheader "Country" [ref=e343]:
                            - generic [ref=e344]: Country
                          - columnheader "Assignment Number" [ref=e345]:
                            - generic [ref=e346]: Assignment Number
                          - columnheader "Assignment Name" [ref=e347]:
                            - generic [ref=e348]: Assignment Name
                          - columnheader "Assignment Status" [ref=e349]:
                            - generic [ref=e350]: Assignment Status
                          - columnheader "Termination Date" [ref=e351]:
                            - generic [ref=e352]: Termination Date
                          - columnheader "System Person Type" [ref=e353]:
                            - generic [ref=e354]: System Person Type
                          - columnheader "Worker Number" [ref=e355]:
                            - generic [ref=e356]: Worker Number
                          - columnheader "Actions" [ref=e357]:
                            - generic [ref=e358]: Actions
                  - generic [ref=e359]:
                    - table "Search Results"
                    - row "No search conducted." [ref=e360]:
                      - cell "No search conducted." [ref=e361]
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
  32 |   await commonFunctions.navigateToItemFromHomePage("My Client Groups", "Person Management");
  33 |   await attachScreenshot(healingPage, testInfo, 'Person Management');
  34 |   await hireEmployee_ReusableFunction.hireEmployee_PersonManagement(firstRecord);
  35 |   await attachScreenshot(healingPage, testInfo, 'Record Searched SUccessfully');
  36 |   await hireEmployee_ReusableFunction.hireEmployee_OpneEmployee();
  37 |   await attachScreenshot(healingPage, testInfo, 'Employee Record Opened Successfully');
  38 |   
  39 | //await page.locator("//a[@title='Navigator']").click();
  40 | await page.locator("//img[@title='Tasks']/parent::a").click();
  41 | await page.locator("//a[normalize-space()='Workforce Modeling']").scrollIntoViewIfNeeded
  42 |   await page.locator("//a[normalize-space()='Workforce Modeling']").click();
  43 |    await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  44 |   
  45 |  // await page.locator("//span[normalize-space()='Workforce Modeling']").click();
  46 |    await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  47 | 
  48 | 
  49 |   await page.locator("//button[normalize-space()='Create Model']").click();
  50 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  51 | 
  52 | await page.locator("//input[@placeholder='d/m/yy']").click();
  53 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  54 | 
  55 | await page.locator("//input[@placeholder='d/m/yy']").fill("01/01/2024");
  56 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  57 | const modelName = "playwright" ;
  58 | await page.locator("//label[normalize-space()='Model Name']/following::input[1]").fill(modelName);
  59 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  60 | 
  61 | await page.locator("//label[normalize-space()='Purpose']/following::textarea[1]").click();
  62 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  63 | 
  64 | await page.locator("//img[@title='Manage Attachments']").click();
  65 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  66 | 
  67 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  68 | await page.locator("//input[@type='file']").setInputFiles("C:/Users/girdh/Downloads/ec6117e5d3a7e19f.webm");
  69 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  70 | 
  71 | await page.getByRole('button', { name: 'OK' }).click();
  72 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  73 | 
  74 | await page.locator("//a[normalize-space()='Continue']").click();
  75 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  76 | 
  77 | 
> 78 | await page.locator("//span[normalize-space()='Review and Submit']/parent::a").click();
     |                                                                               ^ TimeoutError: locator.click: Timeout 120000ms exceeded.
  79 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  80 | 
  81 | await page.locator("//a[normalize-space()='Submit']").click();
  82 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  83 | 
  84 | await page.locator(`//a[.//span[normalize-space()="${modelName}"]]`).click();
  85 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  86 | 
  87 | })
```