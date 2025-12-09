# Excel File Formats for Test Cases

This document describes the two Excel formats supported by the NueraQA System Accelerator framework.

## Overview

The framework supports **two Excel file formats** to accommodate different test case structures:

1. **Single Test Case Format (Transposed)** - For simple test cases with one keyword step
2. **Multiple Steps Format (Traditional)** - For complex test cases with multiple steps

Each test case should have its **own separate Excel file**.

---

## Format 1: Single Test Case (Transposed Format)

### Purpose
Use this format when each test case has a **single keyword step** with multiple parameters.

### Structure
- **Column A**: Parameter names
- **Column B**: Parameter values

### Example File: `TC001_LoginTest.xlsx`

| Parameter | Value |
|-----------|-------|
| Keyword | Web_TypeByText |
| Description | Enter username in login form |
| locatorLabel | Username |
| text | testuser@example.com |
| timeout | 5000 |

### Usage in Code

```typescript
import { ExcelParser } from '../utils/excelParser';

const testDef = ExcelParser.parseExcelSingleTestCase(
  'path/to/TC001_LoginTest.xlsx',
  'LoginTest'
);
```

### Generated TestDefinition

```json
{
  "name": "LoginTest",
  "description": "Test case from: TC001_LoginTest.xlsx",
  "steps": [
    {
      "keyword": "Web_TypeByText",
      "description": "Enter username in login form",
      "params": {
        "locatorLabel": "testuser@example.com",
        "text": "testuser@example.com",
        "timeout": 5000
      }
    }
  ]
}
```

### Best For
- Single-step test cases
- Quick setup with transposed layout
- Minimal parameters per test

---

## Format 2: Multiple Steps (Traditional Format)

### Purpose
Use this format when a test case has **multiple sequential steps**.

### Structure
- **Column A**: StepNumber (optional)
- **Column B**: Keyword
- **Column C**: Description
- **Columns D+**: Dynamic parameters (one parameter per column)

### Example File: `TC002_CreateInvoice.xlsx`

| StepNumber | Keyword | Description | url | supplierName | amount |
|---|---|---|---|---|---|
| 1 | OpenBrowser | Open the browser |  |  |  |
| 2 | Navigate | Navigate to invoice form | https://oracle.example.com/invoices |  |  |
| 3 | Web_TypeByText | Enter supplier name |  | Acme Corp |  |
| 4 | Web_TypeByText | Enter invoice amount |  |  | 1500.00 |
| 5 | Web_ClickByText | Click submit button |  |  |  |

### Usage in Code

```typescript
import { ExcelParser } from '../utils/excelParser';

const testDef = ExcelParser.parseExcelMultipleSteps(
  'path/to/TC002_CreateInvoice.xlsx',
  'CreateInvoiceTest'
);
```

### Generated TestDefinition

```json
{
  "name": "CreateInvoiceTest",
  "description": "Test case from: TC002_CreateInvoice.xlsx",
  "steps": [
    {
      "keyword": "OpenBrowser",
      "description": "Open the browser"
    },
    {
      "keyword": "Navigate",
      "description": "Navigate to invoice form",
      "params": {
        "url": "https://oracle.example.com/invoices"
      }
    },
    {
      "keyword": "Web_TypeByText",
      "description": "Enter supplier name",
      "params": {
        "supplierName": "Acme Corp"
      }
    },
    {
      "keyword": "Web_TypeByText",
      "description": "Enter invoice amount",
      "params": {
        "amount": "1500.00"
      }
    },
    {
      "keyword": "Web_ClickByText",
      "description": "Click submit button"
    }
  ]
}
```

### Best For
- Complex test cases with 3+ steps
- Detailed step-by-step workflows
- Tests with varying parameters per step

---

## Batch Processing: Parse All Excel Files

To execute all test cases from a directory:

```typescript
import { ExcelParser } from '../utils/excelParser';

const testDefinitions = ExcelParser.parseExcelDirectory(
  'path/to/tests/testData'
);

// Execute each test
for (const testDef of testDefinitions) {
  const result = await executor.executeTest(testDef);
  console.log(`${testDef.name}: ${result ? 'PASSED' : 'FAILED'}`);
}
```

---

## File Naming Convention

Use descriptive names for test case Excel files:

```
tests/testData/
├── TC001_LoginWithValidCredentials.xlsx
├── TC002_LoginWithInvalidPassword.xlsx
├── TC003_EmployeeOnboarding.xlsx
├── TC004_CreateInvoice.xlsx
├── TC005_ApproveExpense.xlsx
└── TC006_GenerateReport.xlsx
```

### Naming Pattern
`TC[Number]_[TestCaseDescription].xlsx`

- **TC[Number]**: Unique test case identifier
- **[TestCaseDescription]**: Brief description of what the test does
- **.xlsx**: Excel format (xlsx or xls both supported)

---

## Parser Methods Reference

### `parseExcelSingleTestCase(excelPath, testName?)`

Parses a single test case with transposed format.

- **Parameters:**
  - `excelPath` (string): Path to Excel file
  - `testName` (string, optional): Name for the test (defaults to filename)
- **Returns:** `TestDefinition`

### `parseExcelMultipleSteps(excelPath, testName?)`

Parses a test case with multiple steps in traditional format.

- **Parameters:**
  - `excelPath` (string): Path to Excel file
  - `testName` (string, optional): Name for the test (defaults to filename)
- **Returns:** `TestDefinition`

### `parseExcelDirectory(dirPath)`

Parses all Excel files in a directory (each file = one test case).

- **Parameters:**
  - `dirPath` (string): Path to directory containing Excel files
- **Returns:** `TestDefinition[]`

---

## Important Notes

### Parameter Handling
- Empty cells are ignored and not included in parameters
- `null` and `undefined` values are filtered out
- All values are preserved as-is (string, number, boolean)

### Sheet Selection
- Parser uses the **first sheet** in the Excel workbook
- Only one sheet per test case file is supported

### Error Handling
- File not found: Throws error with path information
- Missing Keyword column: Test will have empty steps array
- Invalid Excel format: Throws XLSX parsing error

### Column Headers
For **Format 1** (Single Test Case):
- Column A header: "Parameter"
- Column B header: "Value"
- Additional columns ignored

For **Format 2** (Multiple Steps):
- Required: "Keyword"
- Optional: "StepNumber", "Description"
- Dynamic: Any other column name becomes a parameter

---

## Migration from JSON

If you have JSON test definitions, you can create Excel files by:

1. **Single step test** → Use Format 1 (transposed)
2. **Multiple steps test** → Use Format 2 (traditional rows)

Example JSON to Excel conversion:

**JSON:**
```json
{
  "name": "LoginTest",
  "steps": [
    {
      "keyword": "Web_TypeByText",
      "params": {
        "locatorLabel": "Username",
        "text": "testuser"
      }
    }
  ]
}
```

**Excel (Format 1):**
| Parameter | Value |
|-----------|-------|
| Keyword | Web_TypeByText |
| locatorLabel | Username |
| text | testuser |

---

## Testing Excel Formats

Use the included test spec to validate your Excel files:

```bash
npx playwright test excelDriven.e2e.spec.ts
```

This will:
1. Parse single-step test case from Excel
2. Parse multi-step test case from Excel
3. Batch-parse all Excel files from test data directory
4. Execute and report results

---

## See Also

- [Keyword-Driven Testing Guide](./keyword-driven.md)
- [Excel Integration Guide](./excel-driven.md)
- [Keyword Library Reference](../utils/keywords.ts)
