import { test, expect } from '@playwright/test';
import { keywords } from '../../utils/keywords';

test('Keyword-driven: Home page flow', async ({ page }) => {
  await keywords['Open Home Page'](page);
  await keywords['Click Get Started'](page);
  const isVisible = await keywords['Verify Installation Heading'](page);
  expect(isVisible).toBeTruthy();
});
