import { test as base } from "@playwright/test";
import { enableClickHighlight } from "./utils/globalHighlighter";

export const test = base;

test.beforeEach(async ({ page }) => {
    await enableClickHighlight(page);
});