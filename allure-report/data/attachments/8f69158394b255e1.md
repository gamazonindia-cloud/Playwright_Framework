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
  - waiting for locator('input[placeholder="Username"]') to be visible


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
        - textbox "Password" [ref=e38]:
          - /placeholder: ""
        - generic [ref=e40] [cursor=pointer]: Forgot Password?
        - button "Next" [ref=e43] [cursor=pointer]:
          - generic [ref=e46]: Next
      - link "Need help signing in?" [ref=e48] [cursor=pointer]:
        - /url: https://docs.oracle.com/en-us/iaas/Content/GSG/Tasks/signinginIdentityDomain.htm
      - group [ref=e50]:
        - generic [ref=e52]:
          - button "Cloud account details" [ref=e53] [cursor=pointer]: 
          - heading "Cloud account details" [level=3] [ref=e54]:
            - generic [ref=e55]: Cloud account details
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
  23  |     await this.page.waitForLoadState("domcontentloaded");
  24  |     await this.page.waitForTimeout(3000);
  25  | 
  26  |     await this.page.heal
  27  |       .locator('input[placeholder="Username"]', "Username input")
  28  |       .fill(`${record.UserName}`);
  29  | 
  30  |     await this.page.heal
  31  |       .locator('input[placeholder="Password"]', "Password input")
  32  |       .fill(`${record.Password}`);
  33  | 
  34  |     await this.page.heal
  35  |       .locator('button:has-text("Next")', "Next button")
  36  |       .click();
  37  |   }
  38  | 
  39  |   async loginWithPasscode(record: DatasetRow) {
  40  |     Keyword_Library.SetPage(this.page);
  41  | 
  42  |     await Keyword_Library.OpenBrowser({ url: config.baseURL });
  43  |     await this.page.waitForLoadState("domcontentloaded");
  44  |     await this.page.waitForTimeout(3000);
  45  | 
> 46  |     await this.page.heal
      |     ^ HealError: 
  47  |       .locator('input[placeholder="Username"]', "Username input")
  48  |       .fill(`${record.UserName}`);
  49  | 
  50  |     await this.page.heal
  51  |       .locator('input[placeholder="Password"]', "Password input")
  52  |       .fill(`${record.Password}`);
  53  | 
  54  |     await this.page.heal
  55  |       .locator('button:has-text("Next")', "Next button")
  56  |       .click();
  57  | 
  58  |     await this.page.waitForLoadState("domcontentloaded");
  59  |     await this.page.waitForTimeout(3000);
  60  | 
  61  |     await this.page.heal
  62  |       .locator('text=Try another way', "Try another way link")
  63  |       .click();
  64  | 
  65  |     await this.page.waitForTimeout(2000);
  66  | 
  67  |     await this.page.heal
  68  |       .locator('text=Bypass Code', "Bypass Code link")
  69  |       .click();
  70  | 
  71  |     await this.page.waitForTimeout(2000);
  72  | 
  73  |     const code = parseInt(record.bypasscode);
  74  | 
  75  |     await this.page.heal
  76  |       .locator(
  77  |         'input[type="text"], input[type="tel"], input[type="number"]',
  78  |         "Bypass code input"
  79  |       )
  80  |       .fill(code.toString());
  81  | 
  82  |     await this.page.heal
  83  |       .locator('button:has-text("Verify"), text=Verify', "Verify button")
  84  |       .click();
  85  |   }
  86  | 
  87  |   async navigateToMenuItem(menuItem1: string, menuItem2: string) {
  88  |     Keyword_Library.SetPage(this.page);
  89  | 
  90  |     await this.page.heal
  91  |       .locator('[aria-label="Navigator"]', "Navigator button")
  92  |       .click();
  93  | 
  94  |     await this.page.heal
  95  |       .locator('text=Show More', "Show More link")
  96  |       .click();
  97  | 
  98  |     await this.page.waitForTimeout(3000);
  99  | 
  100 |     await this.page.heal
  101 |       .locator(
  102 |         `//div/span[text()='${menuItem1}']/following::span[text()='${menuItem2}']`,
  103 |         "Menu navigation link"
  104 |       )
  105 |       .click();
  106 |   }
  107 | 
  108 |   async navigateToItemFromHomePage(menuItem1: string, menuItem2: string) {
  109 |     Keyword_Library.SetPage(this.page);
  110 | 
  111 |     await this.page.waitForLoadState("domcontentloaded");
  112 | 
  113 |     await this.page.heal
  114 |       .locator('[aria-label="Home"]', "Home button")
  115 |       .click();
  116 | 
  117 |     await this.page.heal
  118 |       .locator(`//a[text()='${menuItem1}']`, "Primary menu item")
  119 |       .click();
  120 | 
  121 |     await this.page.waitForLoadState("domcontentloaded");
  122 | 
  123 |     await this.page.heal
  124 |       .locator(`(//a[text()='${menuItem2}'])[1]`, "Secondary menu item")
  125 |       .click();
  126 |   }
  127 | 
  128 |   async navigateToItemFromHomePageShowMore(
  129 |     menuItem1: string,
  130 |     menuItem2: string
  131 |   ) {
  132 |     Keyword_Library.SetPage(this.page);
  133 | 
  134 |     await this.page.heal
  135 |       .locator('[aria-label="Home"]', "Home button")
  136 |       .click();
  137 | 
  138 |     await this.page.heal
  139 |       .locator(`//a[text()='${menuItem1}']`, "Primary menu item")
  140 |       .click();
  141 | 
  142 |     await this.page.waitForTimeout(2000);
  143 | 
  144 |     await this.page.heal
  145 |       .locator("(//a[text()='Show More'])[3]", "Show More link")
  146 |       .click();
```