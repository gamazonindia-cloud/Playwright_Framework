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
    await Keyword_Library.OpenBrowser({ url: config.cuURL });
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

  async navigateToMenuItem(menuItem1: string, menuItem2: string) {
    Keyword_Library.SetPage(this.page);

    await this.page.getByLabel("Navigator").click();
    await Keyword_Library.Web_ClickByText({
      label: "Show More",
      partial: true,
      index: 0,
    });

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
  
  async getCurrentDate() {
    const today = new Date();
    const formattedDate = DateFormat(today, 'dd-MMM-yyyy');
    console.log(formattedDate);

  }
}

export { CommonFunctions };
