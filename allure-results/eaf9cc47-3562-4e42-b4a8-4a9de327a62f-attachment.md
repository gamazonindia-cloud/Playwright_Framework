# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ..\.features-gen\features\HCM\CoreHR\WorkForceModel.feature.spec.js >> Workforce Model >> Create Workforce Model for an Employee
- Location: .features-gen\features\HCM\CoreHR\WorkForceModel.feature.spec.js:6:7

# Error details

```
Error: Unable to heal locator for: Username
```

# Test source

```ts
  1  | import { Page, Locator, expect } from "@playwright/test";
  2  | 
  3  | export class HealEngine {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   private getLocator(selector: string): Locator {
  7  |     return this.page.locator(selector).first();
  8  |   }
  9  | 
  10 |   private async findByFallback(description: string): Promise<Locator> {
  11 |     const candidates = [
  12 |       this.page.getByRole("button", { name: description }).first(),
  13 |       this.page.getByRole("link", { name: description }).first(),
  14 |       this.page.getByLabel(description).first(),
  15 |       this.page.getByPlaceholder(description).first(),
  16 |       this.page.getByText(description, { exact: false }).first(),
  17 |       this.page.locator(`input:visible`).first(),
  18 |       this.page.locator(`button:visible`).first(),
  19 |     ];
  20 | 
  21 |     for (const locator of candidates) {
  22 |       try {
  23 |         await expect(locator).toBeVisible({ timeout: 2000 });
  24 |         return locator;
  25 |       } catch {}
  26 |     }
  27 | 
> 28 |     throw new Error(`Unable to heal locator for: ${description}`);
     |           ^ Error: Unable to heal locator for: Username
  29 |   }
  30 | 
  31 |   async click(selector: string, description: string) {
  32 |     try {
  33 |       const loc = this.getLocator(selector);
  34 |       await expect(loc).toBeVisible({ timeout: 5000 });
  35 |       await loc.click();
  36 |     } catch {
  37 |       console.log(`Healing click locator for: ${description}`);
  38 |       const healed = await this.findByFallback(description);
  39 |       await healed.click();
  40 |     }
  41 |   }
  42 | 
  43 |   async fill(selector: string, description: string, value: string) {
  44 |     try {
  45 |       const loc = this.getLocator(selector);
  46 |       await expect(loc).toBeVisible({ timeout: 5000 });
  47 |       await loc.fill(value);
  48 |     } catch {
  49 |       console.log(`Healing fill locator for: ${description}`);
  50 |       const healed = await this.findByFallback(description);
  51 |       await healed.fill(value);
  52 |     }
  53 |   }
  54 | 
  55 |   async waitAndClick(selector: string, description: string, timeout = 30000) {
  56 |     try {
  57 |       const loc = this.getLocator(selector);
  58 |       await expect(loc).toBeVisible({ timeout });
  59 |       await loc.click();
  60 |     } catch {
  61 |       console.log(`Healing waitAndClick locator for: ${description}`);
  62 |       const healed = await this.findByFallback(description);
  63 |       await healed.click();
  64 |     }
  65 |   }
  66 | }
```