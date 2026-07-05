import { Page } from "@playwright/test";
import * as allure from "allure-js-commons";

export async function attachAllureScreenshot(
  page: Page,
  name: string
) {
  const screenshot = await page.screenshot({
    fullPage: true,
  });

  await allure.attachment(
    name,
    screenshot,
    "image/png"
  );
}