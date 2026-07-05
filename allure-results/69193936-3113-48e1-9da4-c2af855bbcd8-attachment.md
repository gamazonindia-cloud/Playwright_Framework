# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ..\.features-gen\features\HCM\CoreHR\WorkForceModel.feature.spec.js >> Workforce Model >> Create Workforce Model for an Employee
- Location: .features-gen\features\HCM\CoreHR\WorkForceModel.feature.spec.js:6:7

# Error details

```
Error: Playwright Test did not expect test.beforeEach() to be called here.
Most common reasons include:
- You are calling test.beforeEach() in a configuration file.
- You are calling test.beforeEach() in a file that is imported by the configuration file.
- You have two different versions of @playwright/test. This usually happens
  when one of the dependencies in your package.json depends on @playwright/test.
```

# Test source

```ts
  1 | import { test as base } from "@playwright/test";
  2 | import { enableClickHighlight } from "./utils/globalHighlighter";
  3 | 
  4 | export const test = base;
  5 | 
> 6 | test.beforeEach(async ({ page }) => {
    |      ^ Error: Playwright Test did not expect test.beforeEach() to be called here.
  7 |     await enableClickHighlight(page);
  8 | });
```