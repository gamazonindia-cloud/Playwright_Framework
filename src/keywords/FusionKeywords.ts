import { Page, expect, Locator } from "@playwright/test";

// Constants
const DEFAULT_TIMEOUT = 70000;

// Keyword interface for type safety
export interface KeywordParams {
  [key: string]: any;
}

// Global page variable for optional page parameter
let globalPage: Page;

// Utility: Wait for app to be ready (spinners, loading indicators)
async function waitForAppReady(page: Page) {
  const spinnerLocator = page.locator(".x1gf, .spinner, .loading-icon");
  try {
    await spinnerLocator.waitFor({ state: "hidden", timeout: 15000 });
  } catch {
    console.warn("⚠️ Spinner not found or still visible after timeout.");
  }
  await page.waitForTimeout(300);
}

// Utility: Highlight element for debugging
export async function highlight(locator: Locator) {
  try {
    await locator.evaluate((el) => {
      el.style.border = "3px solid red";
      el.style.backgroundColor = "yellow";
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
    await locator.evaluate((el) => {
      el.style.border = "";
      el.style.backgroundColor = "";
    });
  } catch (err) {
    console.warn("⚠️ Could not highlight element");
  }
}

// Utility: Log steps
function logStep(message: string, keyword: string) {
  console.log(`[${keyword}] ${message}`);
}

// Enhanced keyword library with parameterized actions
const keywords = {
  // Set the global page
  SetPage: (page: Page) => {
    globalPage = page;
  },

  // ===== NAVIGATION KEYWORDS =====

  OpenBrowser: async (params: KeywordParams, page?: Page) => {
    if (!page) page = globalPage;
    const url = params.url;
    try {
      await page.goto(url);
      logStep(`Navigated to ${url}`, "OpenBrowser");
      return true;
    } catch (error) {
      console.error(`❌ Failed to open browser: ${error.message}`);
      logStep(`❌ Failed to navigate to ${url}`, "OpenBrowser");
      return false;
    }
  },

  // ===== CLICK KEYWORDS =====

  Web_ClickByText: async (params: KeywordParams, page?: Page) => {
    if (!page) page = globalPage;
    await waitForAppReady(page);
    const { label, partial = false, index = 0 } = params;

    try {
      const element = page.getByText(label, { exact: !partial }).nth(index);
      await element.waitFor({ state: "visible", timeout: DEFAULT_TIMEOUT });
      await highlight(element);
      await element.click();
      logStep(`✅ Clicked ${label}`, "Web_ClickByText");
      return true;
    } catch (standardError) {
      console.warn(`⚠️ Playwright getByText failed: ${standardError}`);
    }

    // Fallback 2: Attributes
    try {
      const attrLocator = page
        .locator(
          `[title="${label}"], [alt="${label}"], [aria-label="${label}"]`
        )
        .first();
      await attrLocator.waitFor({ state: "visible", timeout: DEFAULT_TIMEOUT });
      await highlight(attrLocator);
      await attrLocator.click();
      logStep(
        `✅ Clicked '${label}' via attribute selector`,
        "Web_ClickByText"
      );
      return true;
    } catch (attrError) {
      console.warn(`⚠️ Attribute fallback failed`);
    }

    console.error(`❌ Element not found for label: ${label}`);
    logStep(`❌ Could not find or click '${label}'`, "Web_ClickByText");
    return false;
  },

  Web_ClickByAltOrTitle: async (page: Page, params: KeywordParams) => {
    await waitForAppReady(page);
    const { label, partial = false, index = 0 } = params;

    try {
      let locator;
      if (partial) {
        locator = page.locator(`[alt*="${label}"], [title*="${label}"]`);
      } else {
        locator = page.locator(`[alt="${label}"], [title="${label}"]`);
      }

      const target = locator.nth(index);
      await target.waitFor({ state: "visible", timeout: DEFAULT_TIMEOUT });
      await highlight(target);
      await target.click();
      logStep(
        `✅ Clicked element with alt/title: "${label}"`,
        "Web_ClickByAltOrTitle"
      );
      return true;
    } catch (error) {
      logStep(`❌ Failed to click element: ${label}`, "Web_ClickByAltOrTitle");
      return false;
    }
  },

  Web_ClickByXPath: async (page: Page, params: KeywordParams) => {
    await waitForAppReady(page);
    const { xpath, index = 0, timeout = DEFAULT_TIMEOUT } = params;

    try {
      const locator = page.locator(`xpath=${xpath}`).nth(index);
      const count = await locator.count();
      if (count === 0) {
        throw new Error(`❌ No elements found for XPath: ${xpath}`);
      }

      await locator.waitFor({ state: "visible", timeout });
      await locator.scrollIntoViewIfNeeded();
      await highlight(locator);
      await locator.click({ timeout });
      logStep(`✅ Clicked on XPath: ${xpath}`, "Web_ClickByXPath");
      return true;
    } catch (error) {
      console.error(
        `❌ Failed to click XPath: ${xpath}. Reason: ${error.message}`
      );
      logStep(`❌ Failed to click XPath: ${xpath}`, "Web_ClickByXPath");
      throw error;
    }
  },

  // ===== INPUT/TYPE KEYWORDS =====

  Web_TypeByText: async (params: KeywordParams, page?: Page) => {
    if (!page) page = globalPage;
    await waitForAppReady(page);
    const { label, value, partial = false, index = 0 } = params;

    try {
      const field = page.getByLabel(label, { exact: !partial }).nth(index);
      await field.waitFor({ state: "visible", timeout: DEFAULT_TIMEOUT });
      await highlight(field);
      await field.fill(value);
      logStep(`✅ Typed '${value}' in ${label}`, "Web_TypeByText");
      return true;
    } catch (labelError) {
      console.warn(`⚠️ Label match failed for '${label}'`);

      try {
        const inputs = page
          .locator(
            `input[placeholder*="${label}"], textarea[placeholder*="${label}"]`
          )
          .nth(index);
        await inputs.waitFor({ state: "visible", timeout: DEFAULT_TIMEOUT });
        await highlight(inputs);
        await inputs.fill(value);
        logStep(
          `✅ Typed '${value}' in placeholder '${label}'`,
          "Web_TypeByText"
        );
        return true;
      } catch (placeholderError) {
        console.error(
          `❌ Failed to type in '${label}': ${placeholderError.message}`
        );
        logStep(
          `❌ Field not found for label/placeholder: ${label}`,
          "Web_TypeByText"
        );
        return false;
      }
    }
  },

  // ===== DROPDOWN/SELECT KEYWORDS =====

  Web_SelectDropdownByText: async (page: Page, params: KeywordParams) => {
    await waitForAppReady(page);
    const { label, value, partial = false, index = 0 } = params;

    try {
      const selectorParts = [
        `select[alt${partial ? "*=" : "="}"${label}"]`,
        `select[title${partial ? "*=" : "="}"${label}"]`,
        `div[alt${partial ? "*=" : "="}"${label}"]`,
        `div[title${partial ? "*=" : "="}"${label}"]`,
      ];
      let dropdown = page.locator(selectorParts.join(", ")).nth(index);

      if ((await dropdown.count()) === 0) {
        dropdown = page.getByLabel(label, { exact: !partial }).nth(index);
      }

      await dropdown.waitFor({ state: "visible", timeout: DEFAULT_TIMEOUT });
      await highlight(dropdown);

      const tagName = await dropdown.evaluate((el) => el.tagName.toLowerCase());
      if (tagName === "select") {
        await dropdown.selectOption({ label: value });
      } else {
        await dropdown.click();
        await page
          .getByRole("option", { name: value, exact: !partial })
          .click();
      }

      logStep(`✅ Selected '${value}' in ${label}`, "Web_SelectDropdownByText");
      return true;
    } catch (primaryError) {
      console.warn(`⚠️ Primary match failed for '${label}'`);

      try {
        const fallbackParts = [
          `select[placeholder*="${label}"]`,
          `select[name*="${label}"]`,
          `div[placeholder*="${label}"]`,
          `div[name*="${label}"]`,
        ];
        const dropdown = page.locator(fallbackParts.join(", ")).nth(index);

        await dropdown.waitFor({ state: "visible", timeout: DEFAULT_TIMEOUT });
        await highlight(dropdown);

        const tagName = await dropdown.evaluate((el) =>
          el.tagName.toLowerCase()
        );
        if (tagName === "select") {
          await dropdown.selectOption({ label: value });
        } else {
          await dropdown.click();
          await page
            .getByRole("option", { name: value, exact: !partial })
            .click();
        }

        logStep(
          `✅ Selected '${value}' in fallback '${label}'`,
          "Web_SelectDropdownByText"
        );
        return true;
      } catch (fallbackError) {
        console.error(
          `❌ Failed to select in '${label}': ${fallbackError.message}`
        );
        logStep(
          `❌ Dropdown not found for label: ${label}`,
          "Web_SelectDropdownByText"
        );
        return false;
      }
    }
  },

  Web_SelectDropdownByIndex: async (page: Page, params: KeywordParams) => {
    await waitForAppReady(page);
    const { label, optionIndex, partial = false, index = 0 } = params;

    try {
      const dropdown = partial
        ? page.getByLabel(label, { exact: false }).nth(index)
        : page.getByLabel(label, { exact: true }).nth(index);

      await dropdown.waitFor({ state: "visible", timeout: DEFAULT_TIMEOUT });
      await highlight(dropdown);
      await dropdown.selectOption({ index: optionIndex });
      logStep(
        `✅ Selected index ${optionIndex} from '${label}'`,
        "Web_SelectDropdownByIndex"
      );
      return true;
    } catch (err) {
      console.warn(`⚠️ getByLabel failed for '${label}', trying XPath...`);
    }

    const xpathLocator = page
      .locator(
        `//label[normalize-space(text())="${label}"]/following::select[1]`
      )
      .nth(index);
    try {
      await xpathLocator.waitFor({
        state: "visible",
        timeout: DEFAULT_TIMEOUT,
      });
      await highlight(xpathLocator);
      await xpathLocator.selectOption({ index: optionIndex });
      logStep(
        `✅ Selected index ${optionIndex} via XPath for label '${label}'`,
        "Web_SelectDropdownByIndex"
      );
      return true;
    } catch (err) {
      throw new Error(
        `❌ Could not select index ${optionIndex} from dropdown '${label}'`
      );
    }
  },

  // ===== VALIDATION KEYWORDS =====

  isTextPresentOnScreen: async (page: Page, params: KeywordParams) => {
    await waitForAppReady(page);
    const { label, partial = false, index = 0 } = params;

    try {
      const element = page.getByText(label, { exact: !partial }).nth(index);
      const isVisible = await element
        .waitFor({ state: "visible", timeout: DEFAULT_TIMEOUT })
        .then(() => true)
        .catch(() => false);

      if (isVisible) {
        await highlight(element);
        logStep(`✅ Text '${label}' is present`, "isTextPresentOnScreen");
        return true;
      } else {
        console.warn(`⚠️ Text '${label}' not found`);
        logStep(
          `❌ Text '${label}' is not found on the screen`,
          "isTextPresentOnScreen"
        );
        return false;
      }
    } catch (error) {
      console.error(
        `⚠️ Error while verifying text '${label}': ${error.message}`
      );
      logStep(`❌ Error checking '${label}'`, "isTextPresentOnScreen");
      return false;
    }
  },

  "Verify Text": async (page: Page, params: KeywordParams) => {
    const element = page.locator(params.selector);
    await expect(element).toHaveText(params.expectedText);
    logStep(`✅ Verified text: ${params.expectedText}`, "Verify Text");
    return true;
  },

  "Verify Visible": async (page: Page, params: KeywordParams) => {
    const element = page.locator(params.selector);
    await expect(element).toBeVisible();
    logStep(`✅ Verified visible: ${params.selector}`, "Verify Visible");
    return true;
  },

  "Verify Title": async (page: Page, params: KeywordParams) => {
    await expect(page).toHaveTitle(new RegExp(params.title));
    logStep(`✅ Verified title: ${params.title}`, "Verify Title");
    return true;
  },

  // ===== TABLE KEYWORDS =====

  Web_TypeTextInTableCell: async (page: Page, params: KeywordParams) => {
    await waitForAppReady(page);
    const {
      tableSelector,
      columnName,
      rowNumber,
      value,
      partial = false,
    } = params;

    try {
      const tableLocator = page.locator(tableSelector);
      const headers = await tableLocator.locator("thead tr th").allInnerTexts();

      let colIndex = headers.findIndex((h) => h.trim() === columnName);

      if (colIndex === -1 && partial) {
        colIndex = headers.findIndex((h) =>
          h.toLowerCase().includes(columnName.toLowerCase())
        );
      }

      if (colIndex === -1) {
        console.error(`❌ Column "${columnName}" not found`);
        logStep(
          `❌ Column "${columnName}" not found`,
          "Web_TypeTextInTableCell"
        );
        return false;
      }

      const cell = tableLocator.locator(
        `tbody tr:nth-child(${rowNumber}) td:nth-child(${colIndex + 1})`
      );
      await cell.waitFor({ state: "visible", timeout: DEFAULT_TIMEOUT });
      await highlight(cell);

      const inputField = cell.locator("input, textarea");
      if ((await inputField.count()) > 0) {
        await inputField.fill(value);
        logStep(
          `✅ Typed '${value}' into ${columnName} (Row ${rowNumber})`,
          "Web_TypeTextInTableCell"
        );
      } else {
        await cell.click({ clickCount: 2 });
        await page.keyboard.type(value);
        logStep(
          `✅ Typed '${value}' into ${columnName} (Row ${rowNumber}) - direct edit`,
          "Web_TypeTextInTableCell"
        );
      }

      return true;
    } catch (error) {
      console.error(`❌ Failed to type in table cell: ${error.message}`);
      logStep(
        `❌ Failed to type '${value}' in ${columnName} (Row ${rowNumber})`,
        "Web_TypeTextInTableCell"
      );
      return false;
    }
  },

  // ===== WAIT KEYWORDS =====

  Wait: async (page: Page, params: KeywordParams) => {
    await page.waitForTimeout(params.milliseconds);
    logStep(`Waited ${params.milliseconds}ms`, "Wait");
  },

  "Wait For Selector": async (page: Page, params: KeywordParams) => {
    await page.waitForSelector(params.selector, {
      timeout: params.timeout || DEFAULT_TIMEOUT,
    });
    logStep(`Waited for selector: ${params.selector}`, "Wait For Selector");
  },
};

export default keywords;
