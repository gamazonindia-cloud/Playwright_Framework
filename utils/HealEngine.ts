import { Page, Locator, expect } from "@playwright/test";
import { withHealing, HealPage } from "healwright";

export class HealEngine {
  private healPage: HealPage;

  constructor(private page: Page) {
    this.healPage = withHealing(page);

    console.log("SELF_HEAL:", process.env.SELF_HEAL);
    console.log("AI_PROVIDER:", process.env.AI_PROVIDER);
    console.log("AI_MODEL:", process.env.AI_MODEL);
  }

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
      await this.healPage.heal.click(
        this.page.locator(selector),
        description
      );
    } catch {
      console.log(`Fallback healing for: ${description}`);

      const healed = await this.findByFallback(description);
      await healed.click();
    }
  }

  async fill(
    selector: string,
    description: string,
    value: string
  ) {
    try {
      await this.healPage.heal.fill(
        this.page.locator(selector),
        description,
        value
      );
    } catch {
      console.log(`Fallback healing for: ${description}`);

      const healed = await this.findByFallback(description);
      await healed.fill(value);
    }
  }

  async waitAndClick(
    selector: string,
    description: string,
    timeout = 30000
  ) {
    try {
      await this.page.locator(selector).waitFor({
        state: "visible",
        timeout
      });

      await this.healPage.heal.click(
        this.page.locator(selector),
        description
      );
    } catch {
      console.log(`Fallback healing for: ${description}`);

      const healed = await this.findByFallback(description);
      await healed.click();
    }
  }
}