# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: projectWorkSpaceERP\HCM\CoreHR\HireAnEmployee.test.ts >> Hire an Employee
- Location: tests\projectWorkSpaceERP\HCM\CoreHR\HireAnEmployee.test.ts:9:6

# Error details

```
Error: Next button/link should be visible

expect(locator).toBeVisible() failed

Locator: button:has-text("Next"), input[value="Next"], text=Next >> nth=0
Expected: visible
Error: Unexpected token "=" while parsing css selector "button:has-text("Next"), input[value="Next"], text=Next". Did you mean to CSS.escape it?

Call log:
  - Next button/link should be visible with timeout 30000ms
  - waiting for button:has-text("Next"), input[value="Next"], text=Next >> nth=0

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
          - textbox "Username" [ref=e34]:
            - /placeholder: ""
            - text: Trainee User Functional
        - generic [ref=e37]:
          - generic [ref=e40]: Password
          - textbox "Password" [active] [ref=e41]:
            - /placeholder: ""
            - text: "@+34Ll8I_|ib"
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
  1   | import { Page, expect } from "@playwright/test";
  2   | import { withHealing } from "healwright";
  3   | import { format as DateFormat } from "date-fns";
  4   | import Keyword_Library from "../../keywords/FusionKeywords";
  5   | import { DatasetRow } from "../../../utils/excelDataValidator";
  6   | import dotenv from "dotenv";
  7   | 
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
  19  |   private async fillFirstVisibleInput(value: string, fieldName: string) {
  20  |     const input = this.page.locator("input:visible").first();
  21  |     await expect(input, `${fieldName} should be visible`).toBeVisible({
  22  |       timeout: 30000,
  23  |     });
  24  |     await input.fill(value);
  25  |   }
  26  | 
  27  |   private async fillVisiblePassword(value: string) {
  28  |     const password = this.page.locator('input[type="password"]:visible').first();
  29  |     await expect(password, "Password input should be visible").toBeVisible({
  30  |       timeout: 30000,
  31  |     });
  32  |     await password.fill(value);
  33  |   }
  34  | 
  35  |   private async clickButtonByText(text: string) {
  36  |     const button = this.page
  37  |       .locator(`button:has-text("${text}"), input[value="${text}"], text=${text}`)
  38  |       .first();
  39  | 
> 40  |     await expect(button, `${text} button/link should be visible`).toBeVisible({
      |                                                                   ^ Error: Next button/link should be visible
  41  |       timeout: 30000,
  42  |     });
  43  | 
  44  |     await button.click();
  45  |   }
  46  | 
  47  |   async login(record: DatasetRow) {
  48  |     Keyword_Library.SetPage(this.page);
  49  | 
  50  |     await Keyword_Library.OpenBrowser({ url: config.baseURL });
  51  |     await this.page.waitForLoadState("domcontentloaded");
  52  | 
  53  |     await this.fillFirstVisibleInput(`${record.UserName}`, "Username input");
  54  |     await this.fillVisiblePassword(`${record.Password}`);
  55  |     await this.clickButtonByText("Next");
  56  |   }
  57  | 
  58  |   async loginWithPasscode(record: DatasetRow) {
  59  |     Keyword_Library.SetPage(this.page);
  60  | 
  61  |     await Keyword_Library.OpenBrowser({ url: config.baseURL });
  62  |     await this.page.waitForLoadState("domcontentloaded");
  63  | 
  64  |     await this.fillFirstVisibleInput(`${record.UserName}`, "Username input");
  65  |     await this.fillVisiblePassword(`${record.Password}`);
  66  |     await this.clickButtonByText("Next");
  67  | 
  68  |     await this.page.waitForLoadState("domcontentloaded");
  69  | 
  70  |     await this.page
  71  |       .locator('text="Try another way"')
  72  |       .first()
  73  |       .waitFor({ state: "visible", timeout: 30000 });
  74  | 
  75  |     await this.page.locator('text="Try another way"').first().click();
  76  | 
  77  |     await this.page
  78  |       .locator('text="Bypass Code"')
  79  |       .first()
  80  |       .waitFor({ state: "visible", timeout: 30000 });
  81  | 
  82  |     await this.page.locator('text="Bypass Code"').first().click();
  83  | 
  84  |     const code = String(record.bypasscode);
  85  | 
  86  |     const bypassInput = this.page
  87  |       .locator('input[type="text"]:visible, input[type="tel"]:visible, input[type="number"]:visible')
  88  |       .first();
  89  | 
  90  |     await expect(bypassInput, "Bypass code input should be visible").toBeVisible({
  91  |       timeout: 30000,
  92  |     });
  93  | 
  94  |     await bypassInput.fill(code);
  95  | 
  96  |     await this.clickButtonByText("Verify");
  97  |   }
  98  | 
  99  |   async navigateToMenuItem(menuItem1: string, menuItem2: string) {
  100 |     Keyword_Library.SetPage(this.page);
  101 | 
  102 |     await this.page.heal
  103 |       .locator('[aria-label="Navigator"]', "Navigator button")
  104 |       .click();
  105 | 
  106 |     await this.page.heal
  107 |       .locator('text=Show More', "Show More link")
  108 |       .click();
  109 | 
  110 |     await this.page.waitForTimeout(3000);
  111 | 
  112 |     await this.page.heal
  113 |       .locator(
  114 |         `//div/span[text()='${menuItem1}']/following::span[text()='${menuItem2}']`,
  115 |         "Menu navigation link"
  116 |       )
  117 |       .click();
  118 |   }
  119 | 
  120 |   async navigateToItemFromHomePage(menuItem1: string, menuItem2: string) {
  121 |     Keyword_Library.SetPage(this.page);
  122 | 
  123 |     await this.page.waitForLoadState("domcontentloaded");
  124 | 
  125 |     await this.page.heal
  126 |       .locator('[aria-label="Home"]', "Home button")
  127 |       .click();
  128 | 
  129 |     await this.page.heal
  130 |       .locator(`//a[text()='${menuItem1}']`, "Primary menu item")
  131 |       .click();
  132 | 
  133 |     await this.page.waitForLoadState("domcontentloaded");
  134 | 
  135 |     await this.page.heal
  136 |       .locator(`(//a[text()='${menuItem2}'])[1]`, "Secondary menu item")
  137 |       .click();
  138 |   }
  139 | 
  140 |   async navigateToItemFromHomePageShowMore(
```