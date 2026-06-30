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

  ❌ 400 Unsupported parameter: 'reasoning.effort' is not supported with this model.

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
  9   | console.log("SELF_HEAL =", process.env.SELF_HEAL);
  10  | console.log("AI_PROVIDER =", process.env.AI_PROVIDER);
  11  | console.log("AI_API_KEY =", process.env.AI_API_KEY?.substring(0, 10));
  12  | console.log("AI_MODEL =", process.env.AI_MODEL);
  13  | 
  14  | const config = require("./config.dev.global.js");
  15  | 
  16  | class CommonFunctions {
  17  |   private page: ReturnType<typeof withHealing>;
  18  | 
  19  |   constructor(page: Page) {
  20  |     this.page = withHealing(page);
  21  |   }
  22  | 
  23  |   async login(record: DatasetRow) {
  24  |     Keyword_Library.SetPage(this.page);
  25  | 
  26  |     await Keyword_Library.OpenBrowser({ url: config.baseURL });
  27  |     await this.page.waitForLoadState("domcontentloaded");
  28  |     await this.page.waitForTimeout(3000);
  29  | 
  30  |     await this.page.heal
  31  |       .locator('input[placeholder="Username"]', "Username input")
  32  |       .fill(`${record.UserName}`);
  33  | 
  34  |     await this.page.heal
  35  |       .locator('input[placeholder="Password"]', "Password input")
  36  |       .fill(`${record.Password}`);
  37  | 
  38  |     await this.page.heal
  39  |       .locator('button:has-text("Next")', "Next button")
  40  |       .click();
  41  |   }
  42  | 
  43  |   async loginWithPasscode(record: DatasetRow) {
  44  |     Keyword_Library.SetPage(this.page);
  45  | 
  46  |     await Keyword_Library.OpenBrowser({ url: config.baseURL });
  47  |     await this.page.waitForLoadState("domcontentloaded");
  48  |     await this.page.waitForTimeout(3000);
  49  | 
> 50  |     await this.page.heal
      |     ^ HealError: 
  51  |       .locator('input[placeholder="Username"]', "Username input")
  52  |       .fill(`${record.UserName}`);
  53  | 
  54  |     await this.page.heal
  55  |       .locator('input[placeholder="Password"]', "Password input")
  56  |       .fill(`${record.Password}`);
  57  | 
  58  |     await this.page.heal
  59  |       .locator('button:has-text("Next")', "Next button")
  60  |       .click();
  61  | 
  62  |     await this.page.waitForLoadState("domcontentloaded");
  63  |     await this.page.waitForTimeout(3000);
  64  | 
  65  |     await this.page.heal
  66  |       .locator('text=Try another way', "Try another way link")
  67  |       .click();
  68  | 
  69  |     await this.page.waitForTimeout(2000);
  70  | 
  71  |     await this.page.heal
  72  |       .locator('text=Bypass Code', "Bypass Code link")
  73  |       .click();
  74  | 
  75  |     await this.page.waitForTimeout(2000);
  76  | 
  77  |     const code = parseInt(record.bypasscode);
  78  | 
  79  |     await this.page.heal
  80  |       .locator(
  81  |         'input[type="text"], input[type="tel"], input[type="number"]',
  82  |         "Bypass code input"
  83  |       )
  84  |       .fill(code.toString());
  85  | 
  86  |     await this.page.heal
  87  |       .locator('button:has-text("Verify"), text=Verify', "Verify button")
  88  |       .click();
  89  |   }
  90  | 
  91  |   async navigateToMenuItem(menuItem1: string, menuItem2: string) {
  92  |     Keyword_Library.SetPage(this.page);
  93  | 
  94  |     await this.page.heal
  95  |       .locator('[aria-label="Navigator"]', "Navigator button")
  96  |       .click();
  97  | 
  98  |     await this.page.heal
  99  |       .locator('text=Show More', "Show More link")
  100 |       .click();
  101 | 
  102 |     await this.page.waitForTimeout(3000);
  103 | 
  104 |     await this.page.heal
  105 |       .locator(
  106 |         `//div/span[text()='${menuItem1}']/following::span[text()='${menuItem2}']`,
  107 |         "Menu navigation link"
  108 |       )
  109 |       .click();
  110 |   }
  111 | 
  112 |   async navigateToItemFromHomePage(menuItem1: string, menuItem2: string) {
  113 |     Keyword_Library.SetPage(this.page);
  114 | 
  115 |     await this.page.waitForLoadState("domcontentloaded");
  116 | 
  117 |     await this.page.heal
  118 |       .locator('[aria-label="Home"]', "Home button")
  119 |       .click();
  120 | 
  121 |     await this.page.heal
  122 |       .locator(`//a[text()='${menuItem1}']`, "Primary menu item")
  123 |       .click();
  124 | 
  125 |     await this.page.waitForLoadState("domcontentloaded");
  126 | 
  127 |     await this.page.heal
  128 |       .locator(`(//a[text()='${menuItem2}'])[1]`, "Secondary menu item")
  129 |       .click();
  130 |   }
  131 | 
  132 |   async navigateToItemFromHomePageShowMore(
  133 |     menuItem1: string,
  134 |     menuItem2: string
  135 |   ) {
  136 |     Keyword_Library.SetPage(this.page);
  137 | 
  138 |     await this.page.heal
  139 |       .locator('[aria-label="Home"]', "Home button")
  140 |       .click();
  141 | 
  142 |     await this.page.heal
  143 |       .locator(`//a[text()='${menuItem1}']`, "Primary menu item")
  144 |       .click();
  145 | 
  146 |     await this.page.waitForTimeout(2000);
  147 | 
  148 |     await this.page.heal
  149 |       .locator("(//a[text()='Show More'])[3]", "Show More link")
  150 |       .click();
```