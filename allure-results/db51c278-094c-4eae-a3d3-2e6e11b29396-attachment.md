# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: projectWorkSpaceERP\HCM\CoreHR\WorkForceModel.test.ts >> Work Force Model
- Location: tests\projectWorkSpaceERP\HCM\CoreHR\WorkForceModel.test.ts:9:6

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('//span[normalize-space()=\'My Client Groups\']')
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
      - <div id="pt1:_UISnvr:0:nvpgl3" class="navmenu-header sticky x1a">…</div> from <div>…</div> subtree intercepts pointer events
  6 × retrying click action
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
      - <div id="pt1:_UISnvr:0:nvpgl3" class="navmenu-header sticky x1a">…</div> from <div>…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="pt1:_UISnvr:0:nvpgl3" class="navmenu-header sticky x1a">…</div> from <div>…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div>…</div> intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="pt1:_UISnvr:0:nvpgl3" class="navmenu-header sticky x1a">…</div> from <div>…</div> subtree intercepts pointer events
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
    - element is not stable
  88 × retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is not visible
  - retrying click action
    - waiting 500ms

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
  40 | 
> 41 |   await page.locator("//span[normalize-space()='My Client Groups']").click();
     |                                                                      ^ Error: locator.click: Test ended.
  42 |    await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  43 |   
  44 |   await page.locator("//span[normalize-space()='Workforce Modeling']").click();
  45 |    await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  46 | 
  47 | 
  48 |   await page.locator("//button[normalize-space()='Create Model']").click();
  49 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  50 | 
  51 | await page.locator("//input[@placeholder='d/m/yy']").click();
  52 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  53 | 
  54 | await page.locator("//input[@placeholder='d/m/yy']").fill("01/01/2024");
  55 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  56 | 
  57 | await page.locator("//label[normalize-space()='Model Name']/following::input[1]").click();
  58 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  59 | 
  60 | await page.locator("//label[normalize-space()='Purpose']/following::textarea[1]").click();
  61 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  62 | 
  63 | await page.locator("//img[@title='Manage Attachments']").click();
  64 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  65 | 
  66 | await page.locator("//input[@type='file']").click();
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
  78 | await page.locator("//span[normalize-space()='Review and Submit']/parent::a").click();
  79 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  80 | 
  81 | await page.locator("//a[normalize-space()='Submit']").click();
  82 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  83 | 
  84 | await page.locator("//a[.//span[normalize-space()='dssdfd']]").click();
  85 |  await attachScreenshot(healingPage, testInfo, 'Work Force Model');
  86 | 
  87 | })
```