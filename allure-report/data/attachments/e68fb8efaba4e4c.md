# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: projectWorkSpaceERP\HCM\CoreHR\WorkForceModel.test.ts >> Work Force Model
- Location: tests\projectWorkSpaceERP\HCM\CoreHR\WorkForceModel.test.ts:9:6

# Error details

```
Error: ENOENT: no such file or directory, stat 'C:\Users\girdh\Downloads\ec6117e5d3a7e19f.webm'
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
              - link "Notifications (104 unread)" [ref=e82] [cursor=pointer]:
                - /url: "#"
                - img [ref=e83]
              - generic "Notifications (104 unread)" [ref=e92] [cursor=pointer]: "104"
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
                  - text: 7/7/26
                - generic: Press down arrow to access Calendar
                - generic "Select Date" [ref=e278]
                - text: "*Model Name"
                - textbox "Model Name" [ref=e279]: PW_1782810052354
                - text: Author Trainee User Functional Purpose
                - textbox "Purpose" [ref=e280]: Automation workforce model created by Playwright - PW_1782810052354
                - text: Justification
                - generic [ref=e282]:
                  - text: None
                  - link "Manage Attachments" [ref=e283]:
                    - /url: "#"
                    - img "Manage Attachments" [ref=e284]
                - text: "*Top Manager"
                - generic [ref=e286]:
                  - combobox "Top Manager" [ref=e287]: Functional, Trainee User
                  - generic: Top Manager
                  - generic "Top Manager" [ref=e290]
                  - generic: Autocompletes on TAB
                - text: "*"
                - generic [ref=e292]:
                  - checkbox "Open Model to Top Manager or Position" [checked] [ref=e293]
                  - generic [ref=e294] [cursor=pointer]: Open Model to Top Manager or Position
          - generic [ref=e300]:
            - generic "Tasks" [ref=e302]:
              - link "Tasks" [ref=e303] [cursor=pointer]:
                - /url: "#"
                - img "Tasks" [ref=e304]
            - generic "Search" [ref=e306]:
              - link "Search" [ref=e307] [cursor=pointer]:
                - /url: "#"
                - img "Search" [ref=e308]
            - generic "Representatives" [ref=e310]:
              - link "Representatives" [ref=e311] [cursor=pointer]:
                - /url: "#"
                - img "Representatives" [ref=e312]
    - generic [ref=e313]:
      - iframe [ref=e315]:
        
      - generic [ref=e320]:
        - generic [ref=e321]: Attachments
        - link "Close" [ref=e323]:
          - /url: "#"
        - generic [ref=e326]:
          - generic [ref=e329]:
            - menubar [ref=e330]:
              - menuitem "Actions" [active] [ref=e331]:
                - link "Actions" [ref=e332]:
                  - /url: "#"
              - menuitem "View" [ref=e334]:
                - link "View" [ref=e335]:
                  - /url: "#"
            - generic [ref=e337]:
              - button "Add" [ref=e338]:
                - img "Add" [ref=e339]
              - generic: Add
              - button "Delete" [ref=e340]:
                - img "Delete" [ref=e341]
              - generic: Delete
          - generic [ref=e344]:
            - generic [ref=e345]:
              - table "This table contains column headers corresponding to the data body table below" [ref=e346]:
                - rowgroup [ref=e349]:
                  - row:
                    - columnheader
                  - row [ref=e350]:
                    - columnheader [ref=e351]
              - table "This table contains column headers corresponding to the data body table below" [ref=e354]:
                - rowgroup [ref=e362]:
                  - row:
                    - columnheader
                    - columnheader
                    - columnheader
                    - columnheader
                    - columnheader
                    - columnheader
                  - row "Type *File Name or URL Title Description Attached By Attached Date" [ref=e363]:
                    - columnheader "Type" [ref=e364]:
                      - generic [ref=e365]: Type
                    - columnheader "*File Name or URL" [ref=e366]:
                      - generic [ref=e367]: "*File Name or URL"
                    - columnheader "Title" [ref=e368]:
                      - generic [ref=e369]: Title
                    - columnheader "Description" [ref=e370]:
                      - generic [ref=e371]: Description
                    - columnheader "Attached By" [ref=e372]:
                      - generic [ref=e373]: Attached By
                    - columnheader "Attached Date" [ref=e374]:
                      - generic [ref=e375]: Attached Date
            - table "Attachment Table" [ref=e377]:
              - rowgroup [ref=e381]:
                - row "File Type File Name Title Description Trainee User Functional 30/6/26 2:32 PM" [ref=e382]:
                  - cell [ref=e383]
                  - cell "File Type File Name Title Description Trainee User Functional 30/6/26 2:32 PM" [ref=e384]:
                    - table [ref=e386]:
                      - rowgroup [ref=e394]:
                        - row "File Type File Name Title Description Trainee User Functional 30/6/26 2:32 PM" [ref=e395]:
                          - cell "File Type" [ref=e396]:
                            - generic [ref=e399]:
                              - combobox "Type" [ref=e401] [cursor=pointer]: File
                              - generic: Type
                          - cell "File Name" [ref=e403]:
                            - generic [ref=e405]:
                              - button "File Name" [ref=e406]
                              - generic: File Name
                          - cell "Title" [ref=e407]:
                            - generic [ref=e409]:
                              - textbox "Title" [ref=e410]
                              - generic: Title
                          - cell "Description" [ref=e411]:
                            - generic [ref=e413]:
                              - textbox "Description" [ref=e414]
                              - generic: Description
                          - cell "Trainee User Functional" [ref=e415]
                          - cell "30/6/26 2:32 PM" [ref=e416]
          - generic [ref=e421]:
            - generic [ref=e422]: Rows Selected
            - generic [ref=e423]: "1"
            - generic [ref=e424]: Columns Hidden
            - generic [ref=e425]: "1"
        - button "OK" [ref=e426]
        - button "Cancel" [ref=e427]
```

# Test source

```ts
  12  |   const excelPath = path.join(__dirname, "/WorkForceModelTestData.xlsx");
  13  |   const healingPage = withHealing(page);
  14  | 
  15  |   const STEP_WAIT = 4000;
  16  |   const modelName = `PW_${Date.now()}`;
  17  |   const fileToUpload = "C:/Users/girdh/Downloads/ec6117e5d3a7e19f.webm";
  18  | 
  19  |   const enabledDatasets = ExcelDataValidator.getEnabledDatasets(excelPath);
  20  |   const firstRecord = enabledDatasets[0];
  21  | 
  22  |   // IMPORTANT: pass raw page, not healingPage, to avoid double wrapping
  23  |   const commonFunctions = new CommonFunctions(page);
  24  |   const hireEmployee_ReusableFunction = new CoreHrResuableFunctions(page);
  25  | 
  26  |   await page.setDefaultTimeout(120000);
  27  | 
  28  |   async function capture(stepName: string) {
  29  |     await page.waitForTimeout(STEP_WAIT);
  30  |     await attachScreenshot(healingPage, testInfo, stepName);
  31  |   }
  32  | 
  33  |   async function retryStep(stepName: string, action: () => Promise<void>) {
  34  |     try {
  35  |       await action();
  36  |       await capture(stepName);
  37  |     } catch (error) {
  38  |       await attachScreenshot(
  39  |         healingPage,
  40  |         testInfo,
  41  |         `${stepName}_FAILED_First_Attempt`
  42  |       );
  43  | 
  44  |       console.log(`Retrying step: ${stepName}`);
  45  |       await page.waitForTimeout(5000);
  46  | 
  47  |       await action();
  48  |       await capture(`${stepName}_Retry_Success`);
  49  |     }
  50  |   }
  51  | 
  52  |   await retryStep("Login_Successful", async () => {
  53  |     await commonFunctions.loginWithPasscode(firstRecord);
  54  |   });
  55  | 
  56  |   await retryStep("Person_Management", async () => {
  57  |     await commonFunctions.navigateToItemFromHomePage(
  58  |       "My Client Groups",
  59  |       "Person Management"
  60  |     );
  61  |   });
  62  | 
  63  |   await retryStep("Record_Searched_Successfully", async () => {
  64  |     await hireEmployee_ReusableFunction.hireEmployee_PersonManagement(
  65  |       firstRecord
  66  |     );
  67  |   });
  68  | 
  69  |   await retryStep("Employee_Record_Opened_Successfully", async () => {
  70  |     await hireEmployee_ReusableFunction.hireEmployee_OpneEmployee();
  71  |   });
  72  | 
  73  |   await retryStep("Tasks_Clicked", async () => {
  74  |     await page.locator("//img[@title='Tasks']/parent::a").click();
  75  |   });
  76  | 
  77  |   await retryStep("Workforce_Modeling_Clicked", async () => {
  78  |     const workforceModeling = page.locator(
  79  |       "//a[normalize-space()='Workforce Modeling']"
  80  |     );
  81  |     await workforceModeling.scrollIntoViewIfNeeded();
  82  |     await workforceModeling.click();
  83  |   });
  84  | 
  85  |   await retryStep("Create_Model_Clicked", async () => {
  86  |     await page.locator("//button[normalize-space()='Create Model']").click();
  87  |   });
  88  | 
  89  |   await retryStep("Effective_Date_Entered", async () => {
  90  |     const effectiveDate = page.locator("//input[@placeholder='d/m/yy']");
  91  |     await effectiveDate.click();
  92  |     await effectiveDate.fill("07/07/2026");
  93  |   });
  94  | 
  95  |   await retryStep(`Model_Name_Entered_${modelName}`, async () => {
  96  |     await page
  97  |       .locator("//label[normalize-space()='Model Name']/following::input[1]")
  98  |       .fill(modelName);
  99  |   });
  100 | 
  101 |   await retryStep("Purpose_Entered", async () => {
  102 |     await page
  103 |       .locator("//label[normalize-space()='Purpose']/following::textarea[1]")
  104 |       .fill(`Automation workforce model created by Playwright - ${modelName}`);
  105 |   });
  106 | 
  107 |   await retryStep("Manage_Attachments_Clicked", async () => {
  108 |     await page.locator("//img[@title='Manage Attachments']").click();
  109 |   });
  110 | 
  111 |   await retryStep("File_Uploaded", async () => {
> 112 |     await page.locator("//input[@type='file']").setInputFiles(fileToUpload);
      |     ^ Error: ENOENT: no such file or directory, stat 'C:\Users\girdh\Downloads\ec6117e5d3a7e19f.webm'
  113 |   });
  114 | 
  115 |   await retryStep("Attachment_OK_Clicked", async () => {
  116 |     await page.getByRole("button", { name: "OK" }).click();
  117 |   });
  118 | 
  119 |   await retryStep("Continue_Clicked", async () => {
  120 |     await page.locator("//a[normalize-space()='Continue']").click();
  121 |   });
  122 | 
  123 |   await retryStep("Review_And_Submit_Clicked", async () => {
  124 |     await page
  125 |       .locator("//span[normalize-space()='Review and Submit']/parent::a")
  126 |       .click();
  127 |   });
  128 | 
  129 |   await retryStep("Submit_Clicked", async () => {
  130 |     await page.locator("//a[normalize-space()='Submit']").click();
  131 |   });
  132 | 
  133 |   await retryStep("Created_Model_Opened", async () => {
  134 |     await page
  135 |       .locator(`//a[.//span[normalize-space()="${modelName}"]]`)
  136 |       .click();
  137 |   });
  138 | });
```