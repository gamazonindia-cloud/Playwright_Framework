import { test } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

test.describe('End-to-End Payment Flow', () => {

  test('Create PrePayment Invoice', async ({ page }) => {
    // steps
  });

  test('Create Payment', async ({ page }) => {
    // steps
  });

});