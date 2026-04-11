import { Page } from "@playwright/test";
import { format as DateFormat} from "date-fns";
import Keyword_Library, { highlight } from "../../keywords/FusionKeywords";
import { DatasetRow } from "../../../utils/excelDataValidator";
import { format } from "path/win32";



const config = require("./config.dev.global.js");

class CommonFunctions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(record: DatasetRow) {
   
    Keyword_Library.SetPage(this.page);
    await Keyword_Library.OpenBrowser({ url: config.baseURL });
    await Keyword_Library.Web_TypeByText({
      label: "User ID",
      value: `${record.UserName}`,
      partial: false,
      index: 0,
    });
    await Keyword_Library.Web_TypeByText({
      label: "Password",
      value: `${record.Password}`,
      partial: false,
      index: 0,
    });
    await Keyword_Library.Web_ClickByText({
      label: "Sign In",
      partial: true,
      index: 1,
    });
  }
  async loginWithPasscode(record: DatasetRow) {
   
    Keyword_Library.SetPage(this.page);
    await Keyword_Library.OpenBrowser({ url: config.baseURL });
    await Keyword_Library.Web_TypeByText({
      label: "Username",
      value: `${record.UserName}`,
      partial: false,
      index: 0,
    });
    await Keyword_Library.Web_TypeByText({
      label: "Password",
      value: `${record.Password}`,
      partial: false,
      index: 0,
    });
    await Keyword_Library.Web_ClickByText({
      label: "Next",
      partial: true,
      index: 0,
    });
    await Keyword_Library.Web_ClickByText({
      label: "Try another way",
      partial: true,
      index: 0,
    });
    await Keyword_Library.Web_ClickByText({
      label: "Bypass Code",
      partial: true,
      index: 0,
    });

    const code=parseInt(record.bypasscode);
    await this.page.locator("//oj-idaas-custom-text[text()='Enter the bypass code.']/following::input").fill(code.toString());

    await Keyword_Library.Web_ClickByText({
      label: "Verify",
      partial: true,
      index: 0,
      });
  }

  async navigateToMenuItem(menuItem1: string, menuItem2: string) {
    Keyword_Library.SetPage(this.page);

    await this.page.getByLabel("Navigator").click();
    await Keyword_Library.Web_ClickByText({label: "Show More",partial: true,index: 0,});
    const menu1Locator = this.page.locator(
      `//div/span[text()='${menuItem1}']/following::span[text()='${menuItem2}']`
    );
    await menu1Locator.click();
  }

  async navigateToItemFromHomePage(menuItem1: string, menuItem2: string) {
    Keyword_Library.SetPage(this.page);

    await this.page.getByLabel("Home").click();
    await this.page.locator("//a[text()='"+menuItem1+"']").click();
    await this.page.waitForTimeout(2000);
    await this.page.locator("(//a[text()='"+menuItem2+"'])[1]").click();
  }
  async navigateToItemFromHomePageShowMore(menuItem1: string, menuItem2: string) {
    Keyword_Library.SetPage(this.page);

    await this.page.getByLabel("Home").click();
    await this.page.locator("//a[text()='"+menuItem1+"']").click();
    await this.page.waitForTimeout(2000);
    await this.page.locator("(//a[text()='Show More'])[3]").click();
    await this.page.waitForTimeout(2000);
    await this.page.locator("(//a[text()='"+menuItem2+"'])[2]").click();
  }
  async selectTastkFromTasksPanel(parantTask: string, childTask: string) {
    Keyword_Library.SetPage(this.page);
    await this.page.locator("//img[@alt='Tasks']").click();

    const taskLocatorXpath = `//div[//span[text()="${parantTask}"]]//*[text()="${childTask}"]`;
    console.log(`Task Locator Xpath: ${taskLocatorXpath}`);
    const taskLocator = this.page.locator(taskLocatorXpath);
    await taskLocator.waitFor({ state: "visible", timeout: 30000 });
    await taskLocator.click();
  }
  
  async getCurrentDate(format:string) {
    const today = new Date();
    //** Date Format example dd/MM/yyyy **//
    const formattedDate = DateFormat(today, format);
    console.log(formattedDate);

  }
  async splitText(Text:string, Delimiter:string, Index:number) {
    const TextArray = Text.split(Delimiter);
    console.log("Split Text Array: ", TextArray[Index]);
    return TextArray[Index];
  }
  async openFilePath(filePath:string) {
        //** Path Example C:\\Document\\Form.pdf **//
        const { exec } = require('child_process');
        const Path = filePath;
        exec(`start "" "${Path}"`, (err) => {
        if (err) {
          console.error('Error opening file:', err);
        } else {
          console.log('File opened successfully!');
        }
    });
  }
  async autoDataGeneration(Length:number, Prefix:string, Suffix:string, Allowuppercase:boolean, Allowlowercase:boolean, Allownumbers:boolean, AllowSpecialChars:boolean) {
        //** Please Enter your Length **//
        const length = Length;
        const prefix = Prefix;
        const suffix = Suffix;
        const allowUppercase = Allowuppercase;
        const allowLowercase = Allowlowercase;
        const allowNumbers = Allownumbers;
        const allowSpecialChars = AllowSpecialChars;
        //** Please Enter your length **//
        let generatedLength = length - prefix.length - suffix.length;
        let characters = '';
        if (allowUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (allowLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
        if (allowNumbers) characters += '0123456789';
        if (allowSpecialChars) characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        let result = prefix;

        for (let i = 0; i < generatedLength; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters[randomIndex];
        }
        result += suffix;
        //console.log("Generated Data: ", result);
        return result;
  }
}

export { CommonFunctions };
