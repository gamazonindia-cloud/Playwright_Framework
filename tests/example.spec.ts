import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';

test('Sample: Home page flow using POM', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.getStarted();
  const visible = await home.isInstallationHeadingVisible();
  expect(visible).toBeTruthy();
});
