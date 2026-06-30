import { Page, Locator, expect } from "@playwright/test";

export class HealEngine {
  constructor(private page: Page) {}

  private getLocator(selector: string): Locator {
    return this.page.locator(selector).first();
  }

  private async findByFallback(description: string): Promise<Locator> {
    const candidates = [
      this.page.getByRole("button", { name: description }).first(),
      this.page.getByRole("link", { name: description }).first(),
      this.page.getByLabel(description).first(),
      this.page.getByPlaceholder(description).first(),
      this.page.getByText(description, { exact: false }).first(),
      this.page.locator(`input:visible`).first(),
      this.page.locator(`button:visible`).first(),
    ];

    for (const locator of candidates) {
      try {
        await expect(locator).toBeVisible({ timeout: 2000 });
        return locator;
      } catch {}
    }

    throw new Error(`Unable to heal locator for: ${description}`);
  }

  async click(selector: string, description: string) {
    try {
      const loc = this.getLocator(selector);
      await expect(loc).toBeVisible({ timeout: 5000 });
      await loc.click();
    } catch {
      console.log(`Healing click locator for: ${description}`);
      const healed = await this.findByFallback(description);
      await healed.click();
    }
  }

  async fill(selector: string, description: string, value: string) {
    try {
      const loc = this.getLocator(selector);
      await expect(loc).toBeVisible({ timeout: 5000 });
      await loc.fill(value);
    } catch {
      console.log(`Healing fill locator for: ${description}`);
      const healed = await this.findByFallback(description);
      await healed.fill(value);
    }
  }

  async waitAndClick(selector: string, description: string, timeout = 30000) {
    try {
      const loc = this.getLocator(selector);
      await expect(loc).toBeVisible({ timeout });
      await loc.click();
    } catch {
      console.log(`Healing waitAndClick locator for: ${description}`);
      const healed = await this.findByFallback(description);
      await healed.click();
    }
  }
}