import { Page, TestInfo } from '@playwright/test';

export async function attachScreenshot(
  page: Page,
  testInfo: TestInfo,
  name: string
) {
  const screenshot = await page.screenshot({
    fullPage: true,
  });

  const safeName = name.replace(/[^a-zA-Z0-9._-]+/g, '_');

  await testInfo.attach(`screenshot/${safeName}`, {
    body: screenshot,
    contentType: 'image/png',
  });
}