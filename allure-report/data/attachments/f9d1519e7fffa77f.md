# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: projectWorkSpaceERP\HCM\CoreHR\HireAnEmployee.test.ts >> Hire an Employee
- Location: tests\projectWorkSpaceERP\HCM\CoreHR\HireAnEmployee.test.ts:9:6

# Error details

```
HealError: 
╭───────────────────────────────────────────────────────────╮
│  🔍 HEALWRIGHT: Element Not Found                       │
╰───────────────────────────────────────────────────────────╯

  ❌ Healing disabled or API key not set

  📋 Context:
     • Action: FILL
     • Looking for: "Username input"
     • Page URL: https://idcs-de49ffd09f8e4c489360c845199260bb.identity.oraclecloud.com/ui/v1/signin
     • Candidates analyzed: 0
     • Original error: locator.waitFor: Timeout 1000ms exceeded.
Call log:
  - waiting for locator('[aria-label="Username"]') to be visible


  ⚠️  No strategies were returned by AI

  💡 Tips:
     • Make sure the element exists on the page
     • Try a more specific description
     • Check if the element is visible and not hidden

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
  19  |   async login(record: DatasetRow) {
  20  |     Keyword_Library.SetPage(this.page);
  21  | 
  22  |     await Keyword_Library.OpenBrowser({ url: config.baseURL });
  23  | 
  24  |     await this.page.heal
  25  |       .locator('[aria-label="User ID"]', "User ID input")
  26  |       .fill(`${record.UserName}`);
  27  | 
  28  |     await this.page.heal
  29  |       .locator('[aria-label="Password"]', "Password input")
  30  |       .fill(`${record.Password}`);
  31  | 
  32  |     await this.page.heal
  33  |       .locator('text=Sign In', "Sign In button")
  34  |       .click();
  35  |   }
  36  | 
  37  |   async loginWithPasscode(record: DatasetRow) {
  38  |     Keyword_Library.SetPage(this.page);
  39  | 
  40  |     await Keyword_Library.OpenBrowser({ url: config.baseURL });
  41  |     await this.page.waitForLoadState("networkidle");
  42  | 
> 43  |     await this.page.heal
      |     ^ HealError: 
  44  |       .locator('[aria-label="Username"]', "Username input")
  45  |       .fill(`${record.UserName}`);
  46  | 
  47  |     await this.page.heal
  48  |       .locator('[aria-label="Password"]', "Password input")
  49  |       .fill(`${record.Password}`);
  50  | 
  51  |     await this.page.heal
  52  |       .locator('text=Next', "Next button")
  53  |       .click();
  54  | 
  55  |     await this.page.waitForLoadState("networkidle");
  56  | 
  57  |     await this.page.heal
  58  |       .locator('text=Try another way', "Try another way link")
  59  |       .click();
  60  | 
  61  |     await this.page.waitForLoadState("networkidle");
  62  | 
  63  |     await this.page.heal
  64  |       .locator('text=Bypass Code', "Bypass Code link")
  65  |       .click();
  66  | 
  67  |     await this.page.waitForLoadState("networkidle");
  68  | 
  69  |     const code = parseInt(record.bypasscode);
  70  | 
  71  |     await this.page.heal
  72  |       .locator(
  73  |         "//oj-idaas-custom-text[text()='Enter the bypass code.']/following::input",
  74  |         "Bypass code input"
  75  |       )
  76  |       .fill(code.toString());
  77  | 
  78  |     await this.page.heal
  79  |       .locator('text=Verify', "Verify button")
  80  |       .click();
  81  |   }
  82  | 
  83  |   async navigateToMenuItem(menuItem1: string, menuItem2: string) {
  84  |     Keyword_Library.SetPage(this.page);
  85  | 
  86  |     await this.page.heal
  87  |       .locator('[aria-label="Navigator"]', "Navigator button")
  88  |       .click();
  89  | 
  90  |     await this.page.heal
  91  |       .locator('text=Show More', "Show More link")
  92  |       .click();
  93  | 
  94  |     await this.page.waitForTimeout(3000);
  95  | 
  96  |     await this.page.heal
  97  |       .locator(
  98  |         `//div/span[text()='${menuItem1}']/following::span[text()='${menuItem2}']`,
  99  |         "Menu navigation link"
  100 |       )
  101 |       .click();
  102 |   }
  103 | 
  104 |   async navigateToItemFromHomePage(menuItem1: string, menuItem2: string) {
  105 |     Keyword_Library.SetPage(this.page);
  106 | 
  107 |     await this.page.waitForLoadState("networkidle");
  108 | 
  109 |     await this.page.heal
  110 |       .locator('[aria-label="Home"]', "Home button")
  111 |       .click();
  112 | 
  113 |     await this.page.heal
  114 |       .locator(`//a[text()='${menuItem1}']`, "Primary menu item")
  115 |       .click();
  116 | 
  117 |     await this.page.waitForLoadState("networkidle");
  118 | 
  119 |     await this.page.heal
  120 |       .locator(`(//a[text()='${menuItem2}'])[1]`, "Secondary menu item")
  121 |       .click();
  122 |   }
  123 | 
  124 |   async navigateToItemFromHomePageShowMore(
  125 |     menuItem1: string,
  126 |     menuItem2: string
  127 |   ) {
  128 |     Keyword_Library.SetPage(this.page);
  129 | 
  130 |     await this.page.heal
  131 |       .locator('[aria-label="Home"]', "Home button")
  132 |       .click();
  133 | 
  134 |     await this.page.heal
  135 |       .locator(`//a[text()='${menuItem1}']`, "Primary menu item")
  136 |       .click();
  137 | 
  138 |     await this.page.waitForTimeout(2000);
  139 | 
  140 |     await this.page.heal
  141 |       .locator("(//a[text()='Show More'])[3]", "Show More link")
  142 |       .click();
  143 | 
```