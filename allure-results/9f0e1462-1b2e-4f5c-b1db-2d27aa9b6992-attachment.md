# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: projectWorkSpaceERP\HCM\CoreHR\HireAnEmployee.test.ts >> Hire an Employee
- Location: tests\projectWorkSpaceERP\HCM\CoreHR\HireAnEmployee.test.ts:9:6

# Error details

```
TypeError: loc.waitFor is not a function
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
  24  |     await this.page.heal.fill(
  25  |       '[aria-label="User ID"]',
  26  |       "User ID input",
  27  |       `${record.UserName}`
  28  |     );
  29  | 
  30  |     await this.page.heal.fill(
  31  |       '[aria-label="Password"]',
  32  |       "Password input",
  33  |       `${record.Password}`
  34  |     );
  35  | 
  36  |     await this.page.heal.click(
  37  |       'text=Sign In',
  38  |       "Sign In button"
  39  |     );
  40  |   }
  41  | 
  42  |   async loginWithPasscode(record: DatasetRow) {
  43  |     Keyword_Library.SetPage(this.page);
  44  | 
  45  |     await Keyword_Library.OpenBrowser({ url: config.baseURL });
  46  |     await this.page.waitForLoadState("networkidle");
  47  | 
> 48  |     await this.page.heal.fill(
      |                          ^ TypeError: loc.waitFor is not a function
  49  |       '[aria-label="Username"]',
  50  |       "Username input",
  51  |       `${record.UserName}`
  52  |     );
  53  | 
  54  |     await this.page.heal.fill(
  55  |       '[aria-label="Password"]',
  56  |       "Password input",
  57  |       `${record.Password}`
  58  |     );
  59  | 
  60  |     await this.page.heal.click(
  61  |       'text=Next',
  62  |       "Next button"
  63  |     );
  64  | 
  65  |     await this.page.waitForLoadState("networkidle");
  66  | 
  67  |     await this.page.heal.click(
  68  |       'text=Try another way',
  69  |       "Try another way link"
  70  |     );
  71  | 
  72  |     await this.page.waitForLoadState("networkidle");
  73  | 
  74  |     await this.page.heal.click(
  75  |       'text=Bypass Code',
  76  |       "Bypass Code link"
  77  |     );
  78  | 
  79  |     await this.page.waitForLoadState("networkidle");
  80  | 
  81  |     const code = parseInt(record.bypasscode);
  82  | 
  83  |     await this.page.heal.fill(
  84  |       "//oj-idaas-custom-text[text()='Enter the bypass code.']/following::input",
  85  |       "Bypass code input",
  86  |       code.toString()
  87  |     );
  88  | 
  89  |     await this.page.heal.click(
  90  |       'text=Verify',
  91  |       "Verify button"
  92  |     );
  93  |   }
  94  | 
  95  |   async navigateToMenuItem(menuItem1: string, menuItem2: string) {
  96  |     Keyword_Library.SetPage(this.page);
  97  | 
  98  |     await this.page.heal.click(
  99  |       '[aria-label="Navigator"]',
  100 |       "Navigator button"
  101 |     );
  102 | 
  103 |     await this.page.heal.click(
  104 |       'text=Show More',
  105 |       "Show More link"
  106 |     );
  107 | 
  108 |     await this.page.waitForTimeout(3000);
  109 | 
  110 |     await this.page.heal.click(
  111 |       `//div/span[text()='${menuItem1}']/following::span[text()='${menuItem2}']`,
  112 |       "Menu navigation link"
  113 |     );
  114 |   }
  115 | 
  116 |   async navigateToItemFromHomePage(menuItem1: string, menuItem2: string) {
  117 |     Keyword_Library.SetPage(this.page);
  118 | 
  119 |     await this.page.waitForLoadState("networkidle");
  120 | 
  121 |     await this.page.heal.click(
  122 |       '[aria-label="Home"]',
  123 |       "Home button"
  124 |     );
  125 | 
  126 |     await this.page.heal.click(
  127 |       `//a[text()='${menuItem1}']`,
  128 |       "Primary menu item"
  129 |     );
  130 | 
  131 |     await this.page.waitForLoadState("networkidle");
  132 | 
  133 |     await this.page.heal.click(
  134 |       `(//a[text()='${menuItem2}'])[1]`,
  135 |       "Secondary menu item"
  136 |     );
  137 |   }
  138 | 
  139 |   async navigateToItemFromHomePageShowMore(menuItem1: string, menuItem2: string) {
  140 |     Keyword_Library.SetPage(this.page);
  141 | 
  142 |     await this.page.heal.click(
  143 |       '[aria-label="Home"]',
  144 |       "Home button"
  145 |     );
  146 | 
  147 |     await this.page.heal.click(
  148 |       `//a[text()='${menuItem1}']`,
```