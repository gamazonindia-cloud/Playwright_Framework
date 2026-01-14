import { Page } from '@playwright/test';

export class FixedAssetResuableFunctions {
  constructor(private page: Page) {}

  async addAsset(book: string, assetType: string, category: string, description: string, cost: number, unit: number, expenseAccount: string, location: string ) {
    await this.page.selectOption("//label[text()='Book']", book);
    await this.page.selectOption("//label[text()='Asset Type']", assetType);
    await this.page.getByLabel('Category').fill(category);
    await this.page.getByLabel('Description').fill(description);
    await this.page.getByLabel('Cost').fill(cost.toString());
    await this.page.getByLabel('Unit').fill(unit.toString());
    await this.page.getByLabel('Expense Account').fill(expenseAccount);
    await this.page.getByLabel('Location').fill(location);

  }
}
