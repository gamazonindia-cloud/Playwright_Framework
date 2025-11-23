import { test, expect } from '@playwright/test';

test('Integration Sample Test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const link = await page.getByRole('link', { name: 'Get started' });
  await expect(link).toBeVisible();
});
