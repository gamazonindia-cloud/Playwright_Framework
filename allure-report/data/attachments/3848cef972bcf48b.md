# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ..\.features-gen\features\HCM\CoreHR\HireAnEmployee.feature.spec.js >> Hire an Employee - HCM Core HR >> Hire an Employee end-to-end flow
- Location: .features-gen\features\HCM\CoreHR\HireAnEmployee.feature.spec.js:6:7

# Error details

```
TypeError: Cannot read properties of undefined (reading 'UserName')
```

# Test source

```ts
  1   | import { Page } from "@playwright/test";
  2   | import { format as DateFormat } from "date-fns";
  3   | import Keyword_Library from "../../keywords/FusionKeywords";
  4   | import { DatasetRow } from "../../../utils/excelDataValidator";
  5   | import { HealEngine } from "../../../utils/HealEngine";
  6   | import dotenv from "dotenv";
  7   | 
  8   | dotenv.config();
  9   | 
  10  | const config = require("./config.dev.global.js");
  11  | 
  12  | class CommonFunctions {
  13  |   private page: Page;
  14  |   private heal: HealEngine;
  15  | 
  16  |   constructor(page: Page) {
  17  |     this.page = page;
  18  |     this.heal = new HealEngine(page);
  19  |   }
  20  | 
  21  |   async login(record: DatasetRow) {
  22  |     Keyword_Library.SetPage(this.page);
  23  | 
  24  |     await Keyword_Library.OpenBrowser({ url: config.baseURL });
  25  |     await this.page.waitForLoadState("domcontentloaded");
  26  | 
  27  |     await this.heal.fill(
  28  |       'input:visible',
  29  |       "Username",
  30  |       `${record.UserName}`
  31  |     );
  32  | 
  33  |     await this.heal.fill(
  34  |       'input[type="password"]:visible',
  35  |       "Password",
  36  |       `${record.Password}`
  37  |     );
  38  | 
  39  |     await this.heal.click(
  40  |       'button:has-text("Next")',
  41  |       "Next"
  42  |     );
  43  |   }
  44  | 
  45  |   async loginWithPasscode(record: DatasetRow) {
  46  |     Keyword_Library.SetPage(this.page);
  47  | 
  48  |     await Keyword_Library.OpenBrowser({ url: config.baseURL });
  49  |     await this.page.waitForLoadState("domcontentloaded");
  50  | 
  51  |     await this.heal.fill(
  52  |       'input:visible',
  53  |       "Username",
> 54  |       `${record.UserName}`
      |                 ^ TypeError: Cannot read properties of undefined (reading 'UserName')
  55  |     );
  56  | 
  57  |     await this.heal.fill(
  58  |       'input[type="password"]:visible',
  59  |       "Password",
  60  |       `${record.Password}`
  61  |     );
  62  | 
  63  |     await this.heal.click(
  64  |       'button:has-text("Next")',
  65  |       "Next"
  66  |     );
  67  | 
  68  |     await this.page.waitForLoadState("domcontentloaded");
  69  | 
  70  |     await this.heal.waitAndClick(
  71  |       'text="Try another way"',
  72  |       "Try another way"
  73  |     );
  74  | 
  75  |     await this.heal.waitAndClick(
  76  |       'text="Bypass Code"',
  77  |       "Bypass Code"
  78  |     );
  79  | 
  80  |     await this.heal.fill(
  81  |       'input[type="text"]:visible, input[type="tel"]:visible, input[type="number"]:visible',
  82  |       "Bypass code",
  83  |       `${record.bypasscode}`
  84  |     );
  85  | 
  86  |     await this.heal.click(
  87  |       'button:has-text("Verify")',
  88  |       "Verify"
  89  |     );
  90  |   }
  91  | 
  92  |   async navigateToMenuItem(menuItem1: string, menuItem2: string) {
  93  |     Keyword_Library.SetPage(this.page);
  94  | 
  95  |     await this.heal.click(
  96  |       '[aria-label="Navigator"]',
  97  |       "Navigator"
  98  |     );
  99  | 
  100 |     await this.heal.click(
  101 |       'text=Show More',
  102 |       "Show More"
  103 |     );
  104 | 
  105 |     await this.page.waitForTimeout(3000);
  106 | 
  107 |     await this.heal.click(
  108 |       `//div/span[text()='${menuItem1}']/following::span[text()='${menuItem2}']`,
  109 |       menuItem2
  110 |     );
  111 |   }
  112 | 
  113 |   async navigateToItemFromHomePage(menuItem1: string, menuItem2: string) {
  114 |     Keyword_Library.SetPage(this.page);
  115 | 
  116 |     await this.page.waitForLoadState("domcontentloaded");
  117 | 
  118 |     await this.heal.click(
  119 |       '[aria-label="Home"]',
  120 |       "Home"
  121 |     );
  122 | 
  123 |     await this.heal.click(
  124 |       `//a[text()='${menuItem1}']`,
  125 |       menuItem1
  126 |     );
  127 | 
  128 |     await this.page.waitForLoadState("domcontentloaded");
  129 | 
  130 |     await this.heal.click(
  131 |       `(//a[text()='${menuItem2}'])[1]`,
  132 |       menuItem2
  133 |     );
  134 |   }
  135 | 
  136 |   async navigateToItemFromHomePageShowMore(menuItem1: string, menuItem2: string) {
  137 |     Keyword_Library.SetPage(this.page);
  138 | 
  139 |     await this.heal.click('[aria-label="Home"]', "Home");
  140 | 
  141 |     await this.heal.click(
  142 |       `//a[text()='${menuItem1}']`,
  143 |       menuItem1
  144 |     );
  145 | 
  146 |     await this.page.waitForTimeout(2000);
  147 | 
  148 |     await this.heal.click(
  149 |       "(//a[text()='Show More'])[3]",
  150 |       "Show More"
  151 |     );
  152 | 
  153 |     await this.page.waitForTimeout(2000);
  154 | 
```