import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';

test('Home page flow (real browser)', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto(); // Navigates to https://playwright.dev/
  await home.getStarted(); // Clicks the "Get started" link
  const visible = await home.isInstallationHeadingVisible(); // Checks if "Installation" heading is visible
  expect(visible).toBeTruthy();
});
