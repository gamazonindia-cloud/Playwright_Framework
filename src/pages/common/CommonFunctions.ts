import { Page } from "@playwright/test";
import { format as DateFormat } from "date-fns";
import Keyword_Library from "../../keywords/FusionKeywords";
import { DatasetRow } from "../../../utils/excelDataValidator";
import { HealEngine } from "../../../utils/HealEngine";
import dotenv from "dotenv";

dotenv.config();

const config = require("./config.dev.global.js");

class CommonFunctions {
  private page: Page;
  private heal: HealEngine;

  constructor(page: Page) {
    this.page = page;
    this.heal = new HealEngine(page);
  }

  async login(record: DatasetRow) {
    Keyword_Library.SetPage(this.page);

    await Keyword_Library.OpenBrowser({ url: config.baseURL });
    await this.page.waitForLoadState("domcontentloaded");

    await this.heal.fill(
      'input:visible',
      "Username",
      `${record.UserName}`
    );

    await this.heal.fill(
      'input[type="password"]:visible',
      "Password",
      `${record.Password}`
    );

    await this.heal.click(
      'button:has-text("Next")',
      "Next"
    );
  }

  async loginWithPasscode(record: DatasetRow) {
    Keyword_Library.SetPage(this.page);

    await Keyword_Library.OpenBrowser({ url: config.baseURL });
    await this.page.waitForLoadState("domcontentloaded");

    await this.heal.fill(
      'input:visible',
      "Username",
      `${record.UserName}`
    );

    await this.heal.fill(
      'input[type="password"]:visible',
      "Password",
      `${record.Password}`
    );

    await this.heal.click(
      'button:has-text("Next")',
      "Next"
    );

    await this.page.waitForLoadState("domcontentloaded");

    await this.heal.waitAndClick(
      'text="Try another way"',
      "Try another way"
    );

    await this.heal.waitAndClick(
      'text="Bypass Code"',
      "Bypass Code"
    );

    await this.heal.fill(
      'input[type="text"]:visible, input[type="tel"]:visible, input[type="number"]:visible',
      "Bypass code",
      `${record.bypasscode}`
    );

    await this.heal.click(
      'button:has-text("Verify")',
      "Verify"
    );
  }

  async navigateToMenuItem(menuItem1: string, menuItem2: string) {
    Keyword_Library.SetPage(this.page);

    await this.heal.click(
      '[aria-label="Navigator"]',
      "Navigator"
    );

    await this.heal.click(
      'text=Show More',
      "Show More"
    );

    await this.page.waitForTimeout(3000);

    await this.heal.click(
      `//div/span[text()='${menuItem1}']/following::span[text()='${menuItem2}']`,
      menuItem2
    );
  }

  async navigateToItemFromHomePage(menuItem1: string, menuItem2: string) {
    Keyword_Library.SetPage(this.page);

    await this.page.waitForLoadState("domcontentloaded");

    await this.heal.click(
      '[aria-label="Home"]',
      "Home"
    );

    await this.heal.click(
      `//a[text()='${menuItem1}']`,
      menuItem1
    );

    await this.page.waitForLoadState("domcontentloaded");

    await this.heal.click(
      `(//a[text()='${menuItem2}'])[1]`,
      menuItem2
    );
  }

  async navigateToItemFromHomePageShowMore(menuItem1: string, menuItem2: string) {
    Keyword_Library.SetPage(this.page);

    await this.heal.click('[aria-label="Home"]', "Home");

    await this.heal.click(
      `//a[text()='${menuItem1}']`,
      menuItem1
    );

    await this.page.waitForTimeout(2000);

    await this.heal.click(
      "(//a[text()='Show More'])[3]",
      "Show More"
    );

    await this.page.waitForTimeout(2000);

    await this.heal.click(
      `(//a[text()='${menuItem2}'])[2]`,
      menuItem2
    );
  }

  async selectTaskFromTasksPanel(parentTask: string, childTask: string) {
    Keyword_Library.SetPage(this.page);

    await this.heal.click(
      "//img[@alt='Tasks']",
      "Tasks"
    );

    const taskLocatorXpath = `//*[text()='${parentTask}']/following::a[text()='${childTask}']`;

    await this.heal.waitAndClick(
      taskLocatorXpath,
      childTask
    );
  }

  async getCurrentDate(dateFormat: string) {
    const today = new Date();
    const formattedDate = DateFormat(today, dateFormat);
    console.log(formattedDate);
    return formattedDate;
  }

  async splitText(text: string, delimiter: string, index: number) {
    const textArray = text.split(delimiter);
    console.log("Split Text Array: ", textArray[index]);
    return textArray[index];
  }

  async openFilePath(filePath: string) {
    const { exec } = require("child_process");

    exec(`start "" "${filePath}"`, (err: Error | null) => {
      if (err) {
        console.error("Error opening file:", err);
      } else {
        console.log("File opened successfully!");
      }
    });
  }

  async autoDataGeneration(
    Length: number,
    Prefix: string,
    Suffix: string,
    Allowuppercase: boolean,
    Allowlowercase: boolean,
    Allownumbers: boolean,
    AllowSpecialChars: boolean
  ) {
    const generatedLength = Length - Prefix.length - Suffix.length;

    let characters = "";

    if (Allowuppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (Allowlowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (Allownumbers) characters += "0123456789";
    if (AllowSpecialChars) characters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (generatedLength < 0) {
      throw new Error("Length should be greater than Prefix + Suffix length");
    }

    if (!characters) {
      throw new Error("At least one character type should be allowed");
    }

    let result = Prefix;

    for (let i = 0; i < generatedLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    result += Suffix;

    return result;
  }
}

export { CommonFunctions };