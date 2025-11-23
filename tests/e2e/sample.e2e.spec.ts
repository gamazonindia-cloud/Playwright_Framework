import { test, expect } from '@playwright/test';

test('E2E Sample Test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
