import { Page } from "@playwright/test";
import { DatasetRow } from "../../../../utils/excelDataValidator";
import { CommonFunctions } from "../../common/CommonFunctions";
import keywords from "../../../keywords/FusionKeywords";

export class FixedAssetResuableFunctions {
  constructor(private page: Page) {}
  public commonFunctions = new CommonFunctions(this.page);

  async addAsset(record: DatasetRow) {
    if (record.Book) {
      await this.page.selectOption("//label[text()='Book']", record.Book);
    }
    if (record.AssetType) {
      await this.page.selectOption("//label[text()='Asset Type']", record.AssetType);
    }
    if (record.Category) {
      await this.page.getByLabel("Category").fill(record.Category);
    }
    if (record.Description) {
      await this.page.getByLabel("Description").fill(record.Description);
      await this.page.getByLabel("Description").press("Enter");
    }
    if (record.Cost) {
      await this.page.getByLabel("Cost").fill(record.Cost.toString());
      await this.page.getByLabel("Cost").press("Tab");
    }
    if (record.Unit) {
      await this.page.getByLabel("Unit").fill(record.Unit.toString());
    }
    if (record.ExpenseAccount) {
      await this.page.getByLabel("Expense Account").fill(record.ExpenseAccount);
    }
    if (record.Location) {
      await this.page.getByLabel("Location").fill(record.Location);
      await this.page.getByLabel("Location").press("Enter");
    }
    //await this.page.locator("//div[text()='Add Asset']").click();
    await this.page.waitForTimeout(500); // Wait for 1 second to ensure data is processed
    //  if (record.Cost) {
    //   await this.page.getByLabel("Cost").fill(record.Cost.toString());
    //   await this.page.getByLabel("Cost").press("Tab");
    // }
      await this.page.locator("//button[text()='Ne']").click();
      // Generic page load wait - works for any page transition
      await this.page.waitForLoadState('load');
      await this.page.waitForTimeout(10000);
  }

  async addAssetDescriptiveDetails(record: DatasetRow)
   {
    if (record.InServiceDate) {
      await this.page.getByLabel("In Service Date").fill(record.InServiceDate);
    }
      if (record.Cost) {
      await this.page.getByLabel("Cost").fill(record.Cost.toString());
      await this.page.getByLabel("Cost").press("Tab");
    }
    if (record.TagNumber) {
      await this.page.getByLabel("Tag Number").waitFor({ state: 'visible' });
      await this.page.getByLabel("Tag Number").fill(record.TagNumber.toString());
    }
    if (record.InvestmentLaw) {
      await this.page.getByLabel("Investment Law").fill(record.InvestmentLaw);
    }
    if (record.SerialNumber) {
      await this.page.getByLabel("Serial Number").fill(record.SerialNumber);
    }
    if (record.PropertyType) {
      await this.page.getByLabel("Property Type").fill(record.PropertyType);
    }
    if (record.ParentAssetNumber) {
      await this.page.getByLabel("Parent Asset Number").fill(record.ParentAssetNumber);
    }
    if (record.PropertyClass) {
      await this.page.getByLabel("Property Class").fill(record.PropertyClass);
    }
    if (record.Manufacturer) {
      await this.page.getByLabel("Manufacturer").fill(record.Manufacturer);
    }
    if (record.Model) {
      await this.page.getByLabel("Model").fill(record.Model);
    }
    if (record.Commitment) {
      await this.page.getByLabel("Commitment").fill(record.Commitment);
    }
    if (record.Ownership) {
      await this.page.getByLabel("Ownership").fill(record.Ownership);
    }
    if (record.Bought) {
      await this.page.getByLabel("Bought").fill(record.Bought);
    }
    if (record.AssetKey) {
      await this.page.getByLabel("Asset Key").fill(record.AssetKey);
    }
    if (record.RegionalInformation) {
      await this.page.getByLabel("Regional Information").fill(record.RegionalInformation);
    }

    await this.page.locator("//span[text()='Sub']").click();
  }

  async verifyAssetAdded(record: DatasetRow) {

    await this.commonFunctions.selectTastkFromTasksPanel("General", "Inquire Assets");
    const bookXpath = `//label[text()="Book"]`;
    console.log(`Book Locator Xpath: ${bookXpath}`);
  //  await this.page.locator(bookXpath).nth(1).selectOption(record.Book);
  await this.page.getByLabel("Employee Name").nth(0).waitFor({ state: 'visible' });
  await this.page.getByLabel("Book").nth(0).click();
    await this.page.getByLabel("Book").nth(0).selectOption(record.Book);
    await this.page.waitForLoadState('domcontentloaded');
    console.log(`Selecting Book: ${record.Book}`);
    if (record.TagNumber) {
      await this.page.getByLabel("Tag Number").fill(record.TagNumber.toString());
    }
    await this.page.locator("//button[text()='Search']").click();
    await this.page.waitForLoadState('domcontentloaded');
    const assetExists = await this.page.isVisible(`text=${record.TagNumber}`);
    if (!assetExists) {
      throw new Error("Asset was not added successfully");
    }
    
  }
}
