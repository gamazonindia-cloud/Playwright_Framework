
import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://playwright.dev/');
  }

  async getStarted() {
    await Promise.all([
      this.page.waitForNavigation(),
      this.page.getByRole('link', { name: 'Get started' }).click(),
    ]);
  }

  async isInstallationHeadingVisible() {
    // Wait for the heading to be visible and return true if found
    try {
      await this.page.getByRole('heading', { name: 'Installation' }).waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }
}
