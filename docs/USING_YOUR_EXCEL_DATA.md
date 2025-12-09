# Using Your Excel Data Format - Complete Guide

## Your Excel File Structure

**File:** `tests/testData/singleTestCase.xlsx`

```
UserName | Password
abc      | xys
```

This is a **row-based data format** where:
- **Column headers**: Field names (UserName, Password)
- **Data row**: Values for the test (abc, xys)

---

## How to Use Your Data

### Method 1: Simple Data Extraction

```typescript
import { ExcelParser } from '../utils/excelParser';

// Parse Excel file
const testData = ExcelParser.parseExcelSingleTestCase('tests/testData/singleTestCase.xlsx');

// Access your data
console.log(testData.data.UserName);  // Output: abc
console.log(testData.data.Password);  // Output: xys
```

**Result:**
```javascript
{
  name: "singleTestCase",
  data: {
    UserName: "abc",
    Password: "xys"
  }
}
```

---

## Complete Test Example

```typescript
import { test, expect } from '@playwright/test';
import { ExcelParser } from '../utils/excelParser';

test('Login with Excel data', async ({ page }) => {
  // 1. Load data from Excel
  const testData = ExcelParser.parseExcelSingleTestCase('tests/testData/singleTestCase.xlsx');
  
  // 2. Navigate to login page
  await page.goto('https://your-app.com/login');
  
  // 3. Use Excel data in your test
  await page.fill('input[name="username"]', testData.data.UserName);  // Types: abc
  await page.fill('input[name="password"]', testData.data.Password);  // Types: xys
  await page.click('button[type="submit"]');
  
  // 4. Verify login success
  await expect(page).toHaveURL(/dashboard/);
});
```

---

## Using with Keyword-Driven Tests

You can combine your Excel data with the keyword executor:

```typescript
import { test } from '@playwright/test';
import { ExcelParser } from '../utils/excelParser';
import { KeywordExecutor } from '../utils/keywordExecutor';

test('Login using keywords + Excel data', async ({ page }) => {
  // Load data from Excel
  const testData = ExcelParser.parseExcelSingleTestCase('tests/testData/singleTestCase.xlsx');
  
  // Create test definition using your data
  const testDef = {
    name: 'Login Test',
    description: 'Login with data from Excel',
    steps: [
      {
        keyword: 'Navigate',
        params: { url: 'https://your-app.com/login' }
      },
      {
        keyword: 'Web_TypeByText',
        params: { 
          locatorLabel: 'Username', 
          text: testData.data.UserName  // Uses: abc
        }
      },
      {
        keyword: 'Web_TypeByText',
        params: { 
          locatorLabel: 'Password', 
          text: testData.data.Password  // Uses: xys
        }
      },
      {
        keyword: 'Web_ClickByText',
        params: { text: 'Login' }
      }
    ]
  };
  
  // Execute
  const executor = new KeywordExecutor(page);
  await executor.executeTest(testDef);
});
```

---

## Multiple Test Cases

### Option 1: Multiple Rows in Same File

**Excel Structure:**
```
UserName | Password | TestName
abc      | xys      | ValidLogin
invalid  | wrong    | InvalidLogin
admin    | admin123 | AdminLogin
```

**Code:**
```typescript
// Parse as multiple steps (each row becomes a step)
const testDef = ExcelParser.parseExcelMultipleSteps('tests/testData/loginTests.xlsx');

// Or manually iterate through rows
const workbook = XLSX.readFile('tests/testData/loginTests.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const allData = XLSX.utils.sheet_to_json(sheet);

// Run test for each row
for (const row of allData) {
  await page.fill('input[name="username"]', row.UserName);
  await page.fill('input[name="password"]', row.Password);
  // ... rest of test
}
```

### Option 2: Separate Files Per Test

```
tests/testData/
├── TC001_ValidLogin.xlsx    (UserName: abc, Password: xys)
├── TC002_InvalidLogin.xlsx  (UserName: invalid, Password: wrong)
└── TC003_AdminLogin.xlsx    (UserName: admin, Password: admin123)
```

**Code:**
```typescript
// Parse all files
const testDataDir = 'tests/testData';
const allTests = ExcelParser.parseExcelDirectory(testDataDir);

// Run each test
for (const testData of allTests) {
  await page.fill('input[name="username"]', testData.data.UserName);
  await page.fill('input[name="password"]', testData.data.Password);
  // ... rest of test
}
```

---

## Adding More Fields to Your Excel

You can add any fields you want:

```
UserName | Password | URL                     | ExpectedResult
abc      | xys      | https://app.com/login  | dashboard
invalid  | wrong    | https://app.com/login  | error-message
```

**Access in code:**
```typescript
const testData = ExcelParser.parseExcelSingleTestCase('test.xlsx');

await page.goto(testData.data.URL);
await page.fill('input[name="username"]', testData.data.UserName);
await page.fill('input[name="password"]', testData.data.Password);

// Verify expected result
await expect(page).toHaveURL(new RegExp(testData.data.ExpectedResult));
```

---

## Data-Driven Testing Pattern

```typescript
test.describe('Data-Driven Login Tests', () => {
  // Load all test data once
  const testDataPath = 'tests/testData/loginScenarios.xlsx';
  const workbook = XLSX.readFile(testDataPath);
  const allTestData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

  // Create one test for each row
  allTestData.forEach((data: any, index: number) => {
    test(`Login test ${index + 1}: ${data.UserName}`, async ({ page }) => {
      await page.goto('https://app.com/login');
      await page.fill('input[name="username"]', data.UserName);
      await page.fill('input[name="password"]', data.Password);
      await page.click('button[type="submit"]');
      
      if (data.ExpectedResult === 'success') {
        await expect(page).toHaveURL(/dashboard/);
      } else {
        await expect(page.locator('.error')).toBeVisible();
      }
    });
  });
});
```

---

## API Reference

### parseExcelSingleTestCase(excelPath, testName?)

Extracts the **first row of data** from an Excel file.

**Parameters:**
- `excelPath` (string) - Path to Excel file
- `testName` (string, optional) - Name for the test (defaults to filename)

**Returns:**
```typescript
{
  name: string,
  data: {
    [columnName: string]: any
  }
}
```

**Example:**
```typescript
const result = ExcelParser.parseExcelSingleTestCase('test.xlsx');
// result.data.UserName = "abc"
// result.data.Password = "xys"
```

---

## Common Patterns

### Pattern 1: Simple Login Test
```typescript
const testData = ExcelParser.parseExcelSingleTestCase('login.xlsx');
await page.fill('input[name="username"]', testData.data.UserName);
await page.fill('input[name="password"]', testData.data.Password);
```

### Pattern 2: Form Filling
```typescript
const testData = ExcelParser.parseExcelSingleTestCase('employeeData.xlsx');
await page.fill('input[name="firstName"]', testData.data.FirstName);
await page.fill('input[name="lastName"]', testData.data.LastName);
await page.fill('input[name="email"]', testData.data.Email);
await page.fill('input[name="phone"]', testData.data.Phone);
```

### Pattern 3: Configuration Data
```typescript
const config = ExcelParser.parseExcelSingleTestCase('config.xlsx');
await page.goto(config.data.BaseURL);
await page.fill('input[name="apiKey"]', config.data.APIKey);
```

---

## Your Working Test

Run your test to see it in action:

```bash
npx playwright test singleTestCase.e2e.spec.ts
```

**Output:**
```
📊 Test Data Loaded from Excel:
  TestName: LoginTest
  UserName: abc
  Password: xys
✅ Test data successfully used in test!
```

---

## Summary

✅ Your Excel format: `UserName | Password` with values `abc | xys`
✅ Parser method: `parseExcelSingleTestCase()`
✅ Returns: `{ name: string, data: { UserName: string, Password: string } }`
✅ Usage: `testData.data.UserName` → "abc"
✅ Working test: `tests/.../singleTestCase.e2e.spec.ts`

**You can now use your Excel data directly in your tests!**
