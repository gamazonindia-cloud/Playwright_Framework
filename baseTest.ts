import { test as playwrightBase } from "@playwright/test";
import { test as bddBase } from "playwright-bdd";
import { enableClickHighlight } from "./utils/globalHighlighter";

// For BDD scenarios (feature files)
export const test = bddBase.extend<{ autoHighlight: void }>({
  autoHighlight: [
    async ({ page }, use) => {
      await enableClickHighlight(page);
      await use();
    },
    { auto: true },
  ],
});

// For legacy .test.ts files
export const legacyTest = playwrightBase.extend<{ autoHighlight: void }>({
  autoHighlight: [
    async ({ page }, use) => {
      await enableClickHighlight(page);
      await use();
    },
    { auto: true },
  ],
});

export { expect } from "@playwright/test";

// Option A — Recommended: Delete/rename old .test.ts files
// Since you're moving to BDD, rename HireAnEmployee.test.ts → HireAnEmployee.test.ts.bak (or delete it). Do the same for WorkForceModel.test.ts if it still exists.
// Option B — Keep both by exporting two tests
// If you want both regular tests and BDD tests to coexist, use this version of baseTest.ts: