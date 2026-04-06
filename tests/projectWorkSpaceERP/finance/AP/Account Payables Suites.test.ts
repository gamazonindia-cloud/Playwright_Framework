import { test, expect } from '@playwright/test';

test('Create Payment with Same currency as Invoice Currency', async ({ page }) => {
  console.log('Create Payment with Same currency as Invoice Currency');
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});

test('Create PrePayment Invoice', async ({ page }) => {
  console.log('Create PrePayment Invoice');
  await page.goto('https://example.com');
  await expect(page).toHaveURL(/example/);
});