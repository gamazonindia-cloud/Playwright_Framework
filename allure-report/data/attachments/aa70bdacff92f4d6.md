# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: projectWorkSpaceERP\HCM\CoreHR\HireAnEmployee.test.ts >> Hire an Employee
- Location: tests\projectWorkSpaceERP\HCM\CoreHR\HireAnEmployee.test.ts:9:6

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('[aria-label="Username"]') to be visible

```

# Page snapshot

```yaml
- generic [ref=e7]:
  - generic [ref=e9]:
    - img "Company Logo for ltiinfotechltd" [ref=e11]
    - generic [ref=e13]:
      - combobox [ref=e14]:
        - generic [ref=e16]: English
        - generic [ref=e17]: 
      - text: 
  - main [ref=e22]:
    - generic [ref=e23]:
      - generic [ref=e26]:
        - generic [ref=e27]: Sign in
        - generic [ref=e30]:
          - generic [ref=e33]: Username
          - textbox "Username" [active] [ref=e34]:
            - /placeholder: ""
        - generic [ref=e37]:
          - generic [ref=e40]: Password
          - textbox "Password" [ref=e41]:
            - /placeholder: ""
        - generic [ref=e43] [cursor=pointer]: Forgot Password?
        - button "Next" [ref=e46] [cursor=pointer]:
          - generic [ref=e49]: Next
      - link "Need help signing in?" [ref=e51] [cursor=pointer]:
        - /url: https://docs.oracle.com/en-us/iaas/Content/GSG/Tasks/signinginIdentityDomain.htm
      - group [ref=e53]:
        - generic [ref=e55]:
          - button "Cloud account details" [ref=e56] [cursor=pointer]: 
          - heading "Cloud account details" [level=3] [ref=e57]:
            - generic [ref=e58]: Cloud account details
```

# Test source

```ts
  1   | import { Page } from "@playwright/test";
  2   | import { withHealing } from "healwright";
  3   | import { format as DateFormat } from "date-fns";
  4   | import Keyword_Library, { highlight } from "../../keywords/FusionKeywords";
  5   | import { DatasetRow } from "../../../utils/excelDataValidator";
  6   | import { format } from "path/win32";
  7   | import dotenv from "dotenv";
  8   | dotenv.config();
  9   | 
  10  | const config = require("./config.dev.global.js");
  11  | 
  12  | class CommonFunctions {
  13  |   private page: ReturnType<typeof withHealing>;
  14  | 
  15  |   constructor(page: Page) {
  16  |     this.page = withHealing(page);
  17  |   }
  18  | 
  19  |   async login(record: DatasetRow) {
  20  |     Keyword_Library.SetPage(this.page);
  21  |     await Keyword_Library.OpenBrowser({ url: config.baseURL });
  22  |     await this.page.heal.locator('[aria-label="User ID"]', "User ID input").fill(`${record.UserName}`);
  23  |     await this.page.heal.locator('[aria-label="Password"]', "Password input").fill(`${record.Password}`);
  24  |     await this.page.heal.locator('text=Sign In', "Sign In button").click();
  25  |   }
  26  | 
  27  |   async loginWithPasscode(record: DatasetRow) {
  28  |     Keyword_Library.SetPage(this.page);
  29  |     await Keyword_Library.OpenBrowser({ url: config.baseURL });
  30  |     await this.page.waitForLoadState("networkidle");
  31  | 
> 32  |     await this.page.heal.locator('[aria-label="Username"]', "Username input").fill(`${record.UserName}`);
      |                                                                               ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
  33  |     await this.page.heal.locator('[aria-label="Password"]', "Password input").fill(`${record.Password}`);
  34  |     await this.page.heal.locator('text=Next', "Next button").click();
  35  | 
  36  |     await this.page.waitForLoadState("networkidle");
  37  |     await this.page.heal.locator('text=Try another way', "Try another way link").click();
  38  | 
  39  |     await this.page.waitForLoadState("networkidle");
  40  |     await this.page.heal.locator('text=Bypass Code', "Bypass Code link").click();
  41  | 
  42  |     await this.page.waitForLoadState("networkidle");
  43  |     const code = parseInt(record.bypasscode);
  44  |     await this.page.heal.locator(
  45  |       "//oj-idaas-custom-text[text()='Enter the bypass code.']/following::input",
  46  |       "Bypass code input"
  47  |     ).fill(code.toString());
  48  | 
  49  |     await this.page.heal.locator('text=Verify', "Verify button").click();
  50  |   }
  51  | 
  52  |   async navigateToMenuItem(menuItem1: string, menuItem2: string) {
  53  |     Keyword_Library.SetPage(this.page);
  54  |     await this.page.heal.locator('[aria-label="Navigator"]', "Navigator button").click();
  55  |     await this.page.heal.locator('text=Show More', "Show More link").click();
  56  |     await this.page.waitForTimeout(3000);
  57  |     await this.page.heal.locator(
  58  |       `//div/span[text()='${menuItem1}']/following::span[text()='${menuItem2}']`,
  59  |       "Menu navigation link"
  60  |     ).click();
  61  |   }
  62  | 
  63  |   async navigateToItemFromHomePage(menuItem1: string, menuItem2: string) {
  64  |     await this.page.waitForLoadState("networkidle");
  65  |     Keyword_Library.SetPage(this.page);
  66  | 
  67  |     await this.page.heal.locator('[aria-label="Home"]', "Home button").click();
  68  |     await this.page.heal.locator(`//a[text()='${menuItem1}']`, "Primary menu item").click();
  69  |     await this.page.waitForLoadState("networkidle");
  70  |     await this.page.heal.locator(`(//a[text()='${menuItem2}'])[1]`, "Secondary menu item").click();
  71  |   }
  72  | 
  73  |   // async getHireEmployeeButton(page: Page) {
  74  |   //   const healingPage = withHealing(page);
  75  | 
  76  |   //   const preferredLocator = healingPage.heal.locator(
  77  |   //     '(//a[contains(@href,"hiredddd")])[2]',
  78  |   //     "Second Hire Employee link by href"
  79  |   //   );
  80  | 
  81  |   //   const fallbackLocator = healingPage.heal.locator(
  82  |   //     '//a[text()="Hire an Employee"]',
  83  |   //     "Hire Employee link by text"
  84  |   //   );
  85  | 
  86  |   //   try {
  87  |   //     const count = await preferredLocator.count();
  88  |   //     if (count > 0) {
  89  |   //       return preferredLocator;
  90  |   //     }
  91  |   //   } catch {
  92  |   //     // fallback
  93  |   //   }
  94  |   //   return fallbackLocator;
  95  |   // }
  96  | 
  97  |   async navigateToItemFromHomePageShowMore(menuItem1: string, menuItem2: string) {
  98  |     Keyword_Library.SetPage(this.page);
  99  | 
  100 |     await this.page.heal.locator('[aria-label="Home"]', "Home button").click();
  101 |     await this.page.heal.locator(`//a[text()='${menuItem1}']`, "Primary menu item").click();
  102 |     await this.page.waitForTimeout(2000);
  103 |     await this.page.heal.locator("(//a[text()='Show More'])[3]", "Show More link").click();
  104 |     await this.page.waitForTimeout(2000);
  105 |     await this.page.heal.locator(`(//a[text()='${menuItem2}'])[2]`, "Secondary menu item").click();
  106 |   }
  107 | 
  108 |   async selectTaskFromTasksPanel(parentTask: string, childTask: string) {
  109 |     Keyword_Library.SetPage(this.page);
  110 |     await this.page.heal.locator("//img[@alt='Tasks']", "Tasks panel icon").click();
  111 |     const taskLocatorXpath = `//*[text()='${parentTask}']/following::a[text()='${childTask}']`;
  112 |     const taskLocator = this.page.heal.locator(taskLocatorXpath, "Task link");
  113 | 
  114 |     // Use page.waitForSelector instead of locator.waitFor
  115 |     await this.page.waitForSelector(taskLocatorXpath, { state: "visible", timeout: 30000 });
  116 |     await taskLocator.click();
  117 |   }
  118 | 
  119 |   async getCurrentDate(format: string) {
  120 |     const today = new Date();
  121 |     const formattedDate = DateFormat(today, format);
  122 |     console.log(formattedDate);
  123 |   }
  124 | 
  125 |   async splitText(Text: string, Delimiter: string, Index: number) {
  126 |     const TextArray = Text.split(Delimiter);
  127 |     console.log("Split Text Array: ", TextArray[Index]);
  128 |     return TextArray[Index];
  129 |   }
  130 | 
  131 |   async openFilePath(filePath: string) {
  132 |     const { exec } = require("child_process");
```