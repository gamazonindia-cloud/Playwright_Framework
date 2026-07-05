import { test as base } from "playwright-bdd";
import { enableClickHighlight } from "./utils/globalHighlighter";

export const test = base.extend({
  page: async ({ page }, use) => {
    page.setDefaultTimeout(120000);
    page.setDefaultNavigationTimeout(120000);

    await enableClickHighlight(page);

    await use(page);
  },
});