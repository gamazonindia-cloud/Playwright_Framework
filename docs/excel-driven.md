# Excel-Driven Testing Guide

## Overview
Your framework now supports Excel files as test input! This makes it easy for non-technical users to create and maintain tests.

## Excel Format

### Simple Test Format
Create an Excel file with these columns:

| StepNumber | Keyword | Description | param1 | param2 | param3 |
|------------|---------|-------------|--------|--------|--------|
| 1 | OpenBrowser | Open website | url=https://playwright.dev/ | | |
| 2 | Wait | Wait for load | milliseconds=2000 | | |
| 3 | Web_ClickByText | Click link | label=Get started | partial=false | index=0 |

**Column Definitions:**
- `StepNumber`: Optional step number for reference
- `Keyword`: The keyword to execute (must match keywords.ts)
- `Description`: Optional description of the step
- Additional columns become parameters (e.g., `url`, `label`, `value`)

### Data-Driven Format (Two Sheets)

**Sheet 1: "TestSteps"**
| StepNumber | Keyword | Description | param columns |
|------------|---------|-------------|---------------|
| Steps with {{placeholders}} for data |

**Sheet 2: "TestData"**
| TestCase | username | password | expectedResult |
|----------|----------|----------|----------------|
| TC001 | user1@test.com | pass123 | Success |
| TC002 | user2@test.com | pass456 | Success |

The framework will create one test per data row, replacing {{username}}, {{password}}, etc.

## Usage

### 1. Parse Excel to JSON (one-time)
```typescript
import { ExcelParser } from './utils/excelParser';

ExcelParser.parseExcelToJsonFile(
  'tests/testData/myTest.xlsx',
  'tests/definitions/myTest.test.json'
);
```

### 2. Run Excel Test Directly
```typescript
import { test } from '@playwright/test';
import { KeywordExecutor } from './utils/keywordExecutor';
import { ExcelParser } from './utils/excelParser';

test('My Excel Test', async ({ page }) => {
  const testDef = ExcelParser.parseExcelToTestDefinition('tests/testData/myTest.xlsx');
  const executor = new KeywordExecutor(page);
  await executor.executeTest(testDef);
});
```

### 3. Data-Driven Excel Tests
```typescript
const testDefinitions = ExcelParser.parseExcelDataDriven('tests/testData/dataDrivenTest.xlsx');

testDefinitions.forEach((testDef) => {
  test(testDef.name, async ({ page }) => {
    const executor = new KeywordExecutor(page);
    await executor.executeTest(testDef);
  });
});
```

## Example Excel Templates

### Template 1: Simple Navigation Test
| Keyword | Description | url | label | partial | index |
|---------|-------------|-----|-------|---------|-------|
| OpenBrowser | Open site | https://playwright.dev/ | | | |
| Wait | Wait | | | | |
| Web_ClickByText | Click link | | Get started | false | 0 |
| isTextPresentOnScreen | Verify text | | Installation | false | 0 |

### Template 2: Form Filling Test
| Keyword | Description | label | value | partial | index |
|---------|-------------|-------|-------|---------|-------|
| Web_TypeByText | Enter username | Username | john@test.com | false | 0 |
| Web_TypeByText | Enter password | Password | myPass123 | false | 0 |
| Web_ClickByText | Click submit | Sign In | | false | 0 |

## Benefits
✅ Non-developers can create tests  
✅ Easy to maintain and update  
✅ Version control friendly  
✅ Data-driven testing support  
✅ No coding required  

## Next Steps
1. Create Excel templates for your common test scenarios
2. Train your team to use Excel for test creation
3. Your no-code UI can generate Excel files automatically!
