# Self-Healing & AI Test Case Framework

A comprehensive keyword-driven testing framework with **self-healing locators** and **AI-assisted test case generation**.

## Overview

This framework adds three powerful capabilities on top of your existing Excel-driven, keyword-based automation:

### 1. **Self-Healing Locators**
- Centralized locator registry with primary selectors + ordered fallbacks
- Automatic fallback resolution when selectors break
- DOM-based healing using attribute similarity matching (Levenshtein distance)
- Per-step healing instrumentation and reporting
- Configurable healing score thresholds

### 2. **AI-Assisted Test Case Generation**
- Generate keyword-driven test steps from natural language requirements
- Support for Gherkin (BDD) input format
- Automatic keyword suggestion and parameter extraction
- Validation against keyword catalog before execution
- Review workflow: pending → validated → approved → executed

### 3. **Enhanced Keyword Executor**
- Wraps keyword execution with locator resolution
- Automatic healing fallback on selector failure
- Detailed healing reports (selector used, fallback index, healing score)
- Test step tracing and error attribution

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Excel Test Data                           │
│              (Enabled Datasets + Steps Sheet)               │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│              AI Test Case Generator (Optional)              │
│   Requirement/Gherkin → KeywordSteps + Locator Names       │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│         Enhanced Keyword Executor with Healing              │
│  - Resolves Locator Names via LocatorResolver               │
│  - Falls back to Fallbacks                                  │
│  - Heals broken selectors with DOM similarity              │
│  - Logs all attempts + scores                               │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│              Playwright Page + Keywords                     │
│         (click, type, select, assert, etc.)                │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│   Healing Reports + AI Suggestions + Test Results          │
│           (JSON/HTML for review & promotion)               │
└─────────────────────────────────────────────────────────────┘
```

---

## Files

### Core Utilities

| File | Purpose |
|------|---------|
| `utils/locators.ts` | Centralized locator registry (primary + fallbacks) |
| `utils/locatorResolver.ts` | Resolves logical names to selectors; implements healing |
| `utils/keywordExecutorWithHealing.ts` | Enhanced executor with healing instrumentation |
| `utils/aiTestCaseGenerator.ts` | AI-assisted test case generation from requirements/Gherkin |

### Test Examples

| File | Purpose |
|------|---------|
| `tests/projectWorkSpace/ERP Test Cases/selfHealingAndAI.e2e.spec.ts` | Demo test showing all features |

---

## Quick Start

### 1. Define Locators

Edit `utils/locators.ts` to add your app's elements:

```typescript
export const locators: LocatorRegistry = {
  'login.username': {
    primary: '[data-testid="username"]',
    fallbacks: ['#username', 'input[name="username"]'],
    description: 'Username input on login page',
  },
  'login.password': {
    primary: '[data-testid="password"]',
    fallbacks: ['#password', 'input[name="password"]'],
    description: 'Password input on login page',
  },
  // ... more elements
};
```

### 2. Use Enhanced Keyword Executor

```typescript
import { KeywordExecutor, TestDefinition } from '../../../utils/keywordExecutorWithHealing';

test('Login with self-healing', async ({ page }) => {
  const executor = new KeywordExecutor(page, {
    healingEnabled: true,
    minHealingScore: 0.7, // 70% similarity threshold
  });

  const testDef: TestDefinition = {
    name: 'Login Test',
    steps: [
      {
        keyword: 'navigate',
        params: { url: 'https://app.example.com/login' },
      },
      {
        keyword: 'type',
        locatorName: 'login.username', // Will be resolved + healed if needed
        params: { value: 'testuser' },
      },
      {
        keyword: 'type',
        locatorName: 'login.password',
        params: { value: 'password123' },
      },
      {
        keyword: 'click',
        locatorName: 'login.submit',
      },
    ],
  };

  await executor.executeTest(testDef);

  // Get healing summary
  const summary = executor.getHealingSummary();
  console.log(summary); // { totalAttempts, healed, failed, avgScore }

  // Export reports
  const reports = executor.exportHealingReports();
  // Save to reports/healing-reports.json for review
});
```

### 3. Generate Test Cases from AI

```typescript
import {
  generateTestCaseFromRequirement,
  generateTestCaseFromGherkin,
  validateTestCase,
  saveForReview,
} from '../../../utils/aiTestCaseGenerator';

// From natural language requirement
const requirement = `
  User logs in with "testuser" and "password123"
  User verifies the welcome message
`;
const testCase = generateTestCaseFromRequirement('Login Test', requirement);

// Validate
const validation = validateTestCase(testCase);
if (validation.valid) {
  console.log('✅ Test case is valid');
} else {
  console.log('❌ Issues:', validation.issues);
}

// Save for review (pending approval)
saveForReview(testCase); // → reports/ai-suggestions/...json
```

### 4. Gherkin Support

```typescript
const gherkin = `
  Feature: User Login
  Scenario: Successful login
    Given user is on login page
    When user enters "testuser" in username field
    And user enters "password123" in password field
    Then user sees welcome message
`;

const testCase = generateTestCaseFromGherkin(gherkin);
saveForReview(testCase);
```

---

## Self-Healing Flow

When a keyword step references a `locatorName`:

1. **Try Primary Selector** (e.g., `[data-testid="username"]`)
   - If found and visible → **Success** ✅

2. **Try Fallback Selectors** (in order)
   - If found → **Success** ✅ (fallback index logged)

3. **All Failed → Attempt Healing**
   - Scan DOM for elements with similar attributes (id, name, placeholder, aria-label)
   - Score candidates using Levenshtein distance
   - If score ≥ threshold (default 0.7) → **Healed** 🔧
   - Otherwise → **Failed** ❌

### Healing Report Example

```json
{
  "keyword": "type",
  "locatorName": "login.username",
  "resolutionResult": {
    "selector": "input#user-field", // Found via healing
    "locatorName": "login.username",
    "fallbackIndex": -1, // -1 means healing, 0+ means fallback
    "healingApplied": true,
    "healingScore": 0.85, // 85% similarity
    "attemptedSelectors": [
      "[data-testid=\"username\"]",
      "#username",
      "input[name=\"username\"]"
    ]
  },
  "success": true
}
```

---

## AI Test Case Generation

### Supported Input Formats

1. **Natural Language Requirements**
   ```typescript
   const req = `
     User navigates to login page
     User enters "testuser" in username field
     User clicks login button
   `;
   const testCase = generateTestCaseFromRequirement('Test', req);
   ```

2. **Gherkin (BDD)**
   ```typescript
   const gherkin = `
     Feature: Login
     Scenario: Successful login
       Given user is on login page
       When user enters credentials
       Then user sees dashboard
   `;
   const testCase = generateTestCaseFromGherkin(gherkin);
   ```

### Generated Test Case Structure

```typescript
{
  testName: 'Login Test',
  description: 'Generated from requirements...',
  steps: [
    {
      step: 1,
      keyword: 'navigate',
      description: 'navigate action: User navigates to login page',
      confidence: 0.7,
    },
    {
      step: 2,
      keyword: 'type',
      locatorName: 'login.username',
      value: 'testuser',
      confidence: 0.9,
    },
  ],
  validationStatus: 'pending', // pending → validated → approved → executed
}
```

### Validation

```typescript
const validation = validateTestCase(testCase);
console.log(validation.valid); // true/false
console.log(validation.issues); // ['Step 1: Unknown keyword...']
```

### Approval Workflow

```
1. Generate: generateTestCaseFromRequirement/Gherkin
   ↓ Saved to: reports/ai-suggestions/<name>_<timestamp>.json
   
2. Review: Open file, check steps, locators, parameters
   ↓
   
3. Approve: approveTestCase(suggestedPath, targetDir)
   ↓ Moved to: tests/approved-ai-cases/<name>_<timestamp>.json
   
4. Execute: convertToKeywordSteps(testCase) → KeywordExecutor
   ↓ Run with healing + reporting
```

---

## Configuration

### Locator Resolver Options

```typescript
const executor = new KeywordExecutor(page, {
  healingEnabled: true,           // Enable/disable healing
  minHealingScore: 0.7,           // Similarity threshold (0-1)
});
```

### Resolver Options

```typescript
await resolveLocator(locatorName, page, {
  healingEnabled: true,
  minHealingScore: 0.7,
  timeout: 5000,
});
```

---

## Reporting & Review

### Healing Reports

Auto-generated after each test run:

```typescript
const summary = executor.getHealingSummary();
// { totalAttempts: 5, healed: 1, failed: 0, avgScore: 0.92 }

const reports = executor.exportHealingReports();
// { timestamp, summary, reports: [...] }
```

### AI Suggestions for Review

All AI-generated test cases saved to:
```
reports/ai-suggestions/<name>_<timestamp>.json
```

Structure:
```json
{
  "testName": "Login Test",
  "validationStatus": "pending",
  "validationIssues": [],
  "steps": [...],
  "notes": "AI-generated test case. Review and approve before execution."
}
```

---

## Best Practices

1. **Locators Registry**
   - Keep primary selectors as specific as possible (prefer `data-testid` or `id`)
   - Add fallbacks in order of reliability (specific → generic)
   - Document with descriptions

2. **Self-Healing**
   - Set healing score threshold conservatively (0.7–0.85)
   - Review healed selectors before promoting to registry
   - Maintain an audit trail (export healing reports)

3. **AI Test Generation**
   - Start with clear, structured requirements
   - Review generated tests before approval
   - Validate against keyword catalog
   - Use Gherkin for business-readable scenarios

4. **Test Data**
   - Keep `singleTestCase.xlsx` with enabled/disabled datasets
   - Add a `Steps` sheet for keyword-driven tests
   - Parameterize tests with dataset placeholders (e.g., `{{UserName}}`)

---

## Example: Full Integration

See `tests/projectWorkSpace/ERP Test Cases/selfHealingAndAI.e2e.spec.ts` for:
- ✅ AI test case generation from requirements
- ✅ AI test case generation from Gherkin
- ✅ Self-healing with locator resolver
- ✅ Healing report export
- ✅ Parameterized tests with Excel data
- ✅ AI-generated steps ready for executor

Run:
```bash
npx playwright test selfHealingAndAI.e2e.spec.ts
```

---

## Next Steps

1. **Update Page Objects** to use keywords that accept params (selector, value)
2. **Add More Locators** for your app's pages and elements
3. **Create Test Cases** using AI generation or manually
4. **Promote Healed Selectors** from healing reports into `locators.ts`
5. **Set Up CI/CD** to run tests headless and upload healing reports

---

## Troubleshooting

### Healing Score Always 0
- Check that the `healingEnabled` flag is `true`
- Verify DOM elements have recognizable attributes (id, name, placeholder, aria-label)
- Increase `minHealingScore` threshold if needed

### AI Test Case Has Issues
- Run `validateTestCase()` to see exact problems
- Check that required keywords exist in `keywordCatalog`
- Ensure requirement text is clear and contains action keywords

### Selectors Not Resolving
- Verify locator name exists in `locators.ts`
- Check primary and fallback selectors are correct
- Use browser DevTools to confirm selectors match
- Enable healing if you want DOM-based recovery

---

## License

Part of NueraQA System Accelerator
