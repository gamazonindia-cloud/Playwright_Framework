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

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Skip to main content" [ref=e3] [cursor=pointer]:
    - /url: "#"
  - generic [ref=e4]:
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
              - link "Notifications (86 unread)" [ref=e82] [cursor=pointer]:
                - /url: "#"
                - img [ref=e83]
              - generic "Notifications (86 unread)" [ref=e92] [cursor=pointer]: "86"
            - link "Access Accessibility Settings":
              - /url: "#"
          - link "Settings and Actions" [ref=e101] [cursor=pointer]:
            - /url: "#"
            - img "Settings and Actions" [ref=e105]
        - generic [ref=e125]:
          - generic [ref=e143]:
            - generic [ref=e149]:
              - generic [ref=e162]: TT
              - link "More Information" [ref=e167] [cursor=pointer]:
                - /url: "#"
                - img "More Information" [ref=e168]
            - generic [ref=e170]:
              - generic [ref=e178]:
                - 'generic "Test_90 Test_30: Person Management" [ref=e179]':
                  - 'heading "Test_90 Test_30: Person Management" [level=1] [ref=e180]'
                - button "Close" [ref=e182]
              - generic [ref=e190]:
                - generic [ref=e192]: Person Number
                - generic [ref=e193]: "135"
          - generic [ref=e205]:
            - generic [ref=e210]:
              - generic [ref=e212]:
                - link "Employment" [ref=e213] [cursor=pointer]:
                  - /url: "#"
                - link "Close Tab" [ref=e214] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e216]:
                - link "Workforce Modeling" [ref=e217] [cursor=pointer]:
                  - /url: "#"
                - link "Close Tab" [ref=e218] [cursor=pointer]:
                  - /url: "#"
            - generic [ref=e231]:
              - generic [ref=e249]:
                - generic "Create Workforce Model" [ref=e250]:
                  - heading "Create Workforce Model" [level=1] [ref=e251]
                - generic [ref=e253]:
                  - button "Save and Close" [ref=e254]:
                    - generic [ref=e255]: Save and Close
                  - generic: Save and Close
                  - button "Continue" [ref=e256]:
                    - generic [ref=e257]: Continue
                  - generic: Save and Continue
                  - button "Cancel" [ref=e258]:
                    - generic [ref=e259]: Cancel
                  - generic: Cancel
              - generic [ref=e276]:
                - text: "*Effective Date"
                - textbox "Effective Date" [ref=e277]:
                  - /placeholder: d/m/yy
                  - text: 1/1/24
                - generic: Press down arrow to access Calendar
                - generic "Select Date" [ref=e278]
                - text: "*Model Name"
                - textbox "Model Name" [active] [ref=e279]
                - text: Author Trainee User Functional Purpose
                - textbox "Purpose" [ref=e280]
                - text: Justification
                - generic [ref=e282]:
                  - link "ec6117e5d3a7e19f.webm" [ref=e287] [cursor=pointer]:
                    - /url: /hcmUI/content/conn/FusionAppsContentRepository/uuid/dDocID:4136498?download&XFND_SCHEME_ID=1&XFND_CERT_FP=ED0308D85C6B50369F9EFB1BDF820988E0FCE9E4&XFND_RANDOM=6684110085893531418&XFND_EXPIRES=1782670464855&XFND_SIGNATURE=yp1Hlnmx~W277GX~S9JVpzQYc~~tyLNwsduBkmsfL9QWs9-eji30Px08LohtAajzfT9sB2xss5kpHsG0DA2Rzdp~sKAI3zPUIZsiqcICYyshHhljYEJGEvcVLpJ7VvxSdNVkFbJJn05283qzgIyvNW~iCIxO8v6DGDOFCBCD0eJu-OOvIT56E412zMcMKB5~7~EXJRzpc~JRb2qQxUz1l2MDYU-kDqcDKhRQ2AFKC8nBbpFBGeH2bqUTrGXJ2KVbW-cp5EYvwAFlZdsBvM8Oft8PwvDsCmCWuwnTog~IkkGmpNFwVmNpTZuC-ms2Tpb5t2nxWcJU~P0Ed69qQX70JQ__&Id=4136498
                  - link "Manage Attachments" [ref=e288] [cursor=pointer]:
                    - /url: "#"
                    - img "Manage Attachments" [ref=e289]
                  - link "Delete Attachment" [ref=e290] [cursor=pointer]:
                    - /url: "#"
                    - img "Delete Attachment" [ref=e291]
                - text: "*Top Manager"
                - generic [ref=e293]:
                  - combobox "Top Manager" [ref=e294]: Functional, Trainee User
                  - generic: Top Manager
                  - generic "Top Manager" [ref=e297]
                  - generic: Autocompletes on TAB
                - text: "*"
                - generic [ref=e299]:
                  - checkbox "Open Model to Top Manager or Position" [checked] [ref=e300]
                  - generic [ref=e301] [cursor=pointer]: Open Model to Top Manager or Position
          - generic [ref=e307]:
            - generic "Tasks" [ref=e309]:
              - link "Tasks" [ref=e310] [cursor=pointer]:
                - /url: "#"
                - img "Tasks" [ref=e311]
            - generic "Search" [ref=e313]:
              - link "Search" [ref=e314] [cursor=pointer]:
                - /url: "#"
                - img "Search" [ref=e315]
            - generic "Representatives" [ref=e317]:
              - link "Representatives" [ref=e318] [cursor=pointer]:
                - /url: "#"
                - img "Representatives" [ref=e319]
    - generic [ref=e320]:
      - iframe [ref=e322]:
        
      - generic [ref=e329]:
        - img "Error" [ref=e330]
        - text: "Error: A value is required."
        - generic [ref=e331]: You must enter a value.
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
  67 | await page.locator("//input[@type='file']").click();
  68 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  69 | await page.locator("//input[@type='file']").setInputFiles("C:/Users/girdh/Downloads/ec6117e5d3a7e19f.webm");
  70 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  71 | 
  72 | await page.getByRole('button', { name: 'OK' }).click();
  73 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  74 | 
  75 | await page.locator("//a[normalize-space()='Continue']").click();
  76 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  77 | 
  78 | 
> 79 | await page.locator("//span[normalize-space()='Review and Submit']/parent::a").click();
     |                                                                               ^ TimeoutError: locator.click: Timeout 120000ms exceeded.
  80 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  81 | 
  82 | await page.locator("//a[normalize-space()='Submit']").click();
  83 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  84 | 
  85 | await page.locator("//a[.//span[normalize-space()='dssdfd']]").click();
  86 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  87 | 
  88 | })
```