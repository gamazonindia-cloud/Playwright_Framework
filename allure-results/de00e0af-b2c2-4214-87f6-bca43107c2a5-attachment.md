# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: projectWorkSpaceERP\finance\AP\CreateInvoice.test.ts >> Create an Invoice
- Location: tests\projectWorkSpaceERP\finance\AP\CreateInvoice.test.ts:7:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByLabel('Navigator')

```

# Test source

```ts
  1   | import { Page } from "@playwright/test";
  2   | import { format as DateFormat} from "date-fns";
  3   | import Keyword_Library, { highlight } from "../../keywords/FusionKeywords";
  4   | import { DatasetRow } from "../../../utils/excelDataValidator";
  5   | import { format } from "path/win32";
  6   | 
  7   | 
  8   | 
  9   | const config = require("./config.dev.global.js");
  10  | 
  11  | class CommonFunctions {
  12  |   private page: Page;
  13  | 
  14  |   constructor(page: Page) {
  15  |     this.page = page;
  16  |   }
  17  | 
  18  |   async login(record: DatasetRow) {
  19  |    
  20  |     Keyword_Library.SetPage(this.page);
  21  |     await Keyword_Library.OpenBrowser({ url: config.baseURL });
  22  |     await Keyword_Library.Web_TypeByText({
  23  |       label: "User ID",
  24  |       value: `${record.UserName}`,
  25  |       partial: false,
  26  |       index: 0,
  27  |     });
  28  |     await Keyword_Library.Web_TypeByText({
  29  |       label: "Password",
  30  |       value: `${record.Password}`,
  31  |       partial: false,
  32  |       index: 0,
  33  |     });
  34  |     await Keyword_Library.Web_ClickByText({
  35  |       label: "Sign In",
  36  |       partial: true,
  37  |       index: 1,
  38  |     });
  39  |   }
  40  | 
  41  |   async navigateToMenuItem(menuItem1: string, menuItem2: string) {
  42  |     Keyword_Library.SetPage(this.page);
  43  | 
> 44  |     await this.page.getByLabel("Navigator").click();
      |                                             ^ Error: locator.click: Test ended.
  45  |     await Keyword_Library.Web_ClickByText({label: "Show More",partial: true,index: 0,});
  46  |     const menu1Locator = this.page.locator(
  47  |       `//div/span[text()='${menuItem1}']/following::span[text()='${menuItem2}']`
  48  |     );
  49  |     await menu1Locator.click();
  50  |   }
  51  | 
  52  |   async navigateToItemFromHomePage(menuItem1: string, menuItem2: string) {
  53  |     Keyword_Library.SetPage(this.page);
  54  | 
  55  |     await this.page.getByLabel("Home").click();
  56  |     await this.page.locator("//a[text()='"+menuItem1+"']").click();
  57  |     await this.page.waitForTimeout(2000);
  58  |     await this.page.locator("(//a[text()='"+menuItem2+"'])[1]").click();
  59  |   }
  60  |   async navigateToItemFromHomePageShowMore(menuItem1: string, menuItem2: string) {
  61  |     Keyword_Library.SetPage(this.page);
  62  | 
  63  |     await this.page.getByLabel("Home").click();
  64  |     await this.page.locator("//a[text()='"+menuItem1+"']").click();
  65  |     await this.page.waitForTimeout(2000);
  66  |     await this.page.locator("(//a[text()='Show More'])[3]").click();
  67  |     await this.page.waitForTimeout(2000);
  68  |     await this.page.locator("(//a[text()='"+menuItem2+"'])[2]").click();
  69  |   }
  70  |   async selectTastkFromTasksPanel(parantTask: string, childTask: string) {
  71  |     Keyword_Library.SetPage(this.page);
  72  |     await this.page.locator("//img[@alt='Tasks']").click();
  73  | 
  74  |     const taskLocatorXpath = `//div[//span[text()="${parantTask}"]]//*[text()="${childTask}"]`;
  75  |     console.log(`Task Locator Xpath: ${taskLocatorXpath}`);
  76  |     const taskLocator = this.page.locator(taskLocatorXpath);
  77  |     await taskLocator.waitFor({ state: "visible", timeout: 30000 });
  78  |     await taskLocator.click();
  79  |   }
  80  |   
  81  |   async getCurrentDate(format:string) {
  82  |     const today = new Date();
  83  |     //** Date Format example dd/MM/yyyy **//
  84  |     const formattedDate = DateFormat(today, format);
  85  |     console.log(formattedDate);
  86  | 
  87  |   }
  88  |   async splitText(Text:string, Delimiter:string, Index:number) {
  89  |     const TextArray = Text.split(Delimiter);
  90  |     console.log("Split Text Array: ", TextArray[Index]);
  91  |     return TextArray[Index];
  92  |   }
  93  |   async openFilePath(filePath:string) {
  94  |         //** Path Example C:\\Document\\Form.pdf **//
  95  |         const { exec } = require('child_process');
  96  |         const Path = filePath;
  97  |         exec(`start "" "${Path}"`, (err) => {
  98  |         if (err) {
  99  |           console.error('Error opening file:', err);
  100 |         } else {
  101 |           console.log('File opened successfully!');
  102 |         }
  103 |     });
  104 |   }
  105 |   async autoDataGeneration(Length:number, Prefix:string, Suffix:string, Allowuppercase:boolean, Allowlowercase:boolean, Allownumbers:boolean, AllowSpecialChars:boolean) {
  106 |         //** Please Enter your Length **//
  107 |         const length = Length;
  108 |         const prefix = Prefix;
  109 |         const suffix = Suffix;
  110 |         const allowUppercase = Allowuppercase;
  111 |         const allowLowercase = Allowlowercase;
  112 |         const allowNumbers = Allownumbers;
  113 |         const allowSpecialChars = AllowSpecialChars;
  114 |         //** Please Enter your length **//
  115 |         let generatedLength = length - prefix.length - suffix.length;
  116 |         let characters = '';
  117 |         if (allowUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  118 |         if (allowLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
  119 |         if (allowNumbers) characters += '0123456789';
  120 |         if (allowSpecialChars) characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  121 |         let result = prefix;
  122 | 
  123 |         for (let i = 0; i < generatedLength; i++) {
  124 |           const randomIndex = Math.floor(Math.random() * characters.length);
  125 |           result += characters[randomIndex];
  126 |         }
  127 |         result += suffix;
  128 |         //console.log("Generated Data: ", result);
  129 |         return result;
  130 |   }
  131 | }
  132 | 
  133 | export { CommonFunctions };
  134 | 
```