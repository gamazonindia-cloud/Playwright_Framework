# Excel Format Quick Reference

## At a Glance

| Feature | Format 1: Single Test | Format 2: Multiple Steps |
|---------|-----------|-----------|
| **Best For** | 1-step simple tests | Multi-step workflows |
| **File per** | One test case | One test case |
| **Layout** | Transposed (Parameters as rows) | Traditional (Steps as rows) |
| **Parser Method** | `parseExcelSingleTestCase()` | `parseExcelMultipleSteps()` |
| **Column A** | Parameter name | StepNumber |
| **Column B** | Parameter value | Keyword |
| **Column C** | N/A | Description |
| **Col D+** | N/A | Dynamic parameters |

---

## Format 1: Single Test (Transposed)

**When:** Simple test, 1 keyword, many parameters

```
Parameter | Value
Keyword   | Web_ClickByText
text      | Submit
timeout   | 5000
```

**Code:**
```typescript
ExcelParser.parseExcelSingleTestCase('test.xlsx')
```

---

## Format 2: Multiple Steps (Traditional)

**When:** Complex test, multiple steps

```
StepNumber | Keyword          | Description  | url | text
1          | OpenBrowser      | Open browser |     |
2          | Navigate         | Go to login  | http://app.com |
3          | Web_ClickByText  | Click submit |     | Submit
```

**Code:**
```typescript
ExcelParser.parseExcelMultipleSteps('test.xlsx')
```

---

## Parse All Files in Directory

```typescript
ExcelParser.parseExcelDirectory('tests/testData')
```

Processes all `.xlsx` and `.xls` files, one per test case.

---

## File Naming

```
TC001_LoginTest.xlsx
TC002_CreateInvoice.xlsx
TC003_EmployeeOnboarding.xlsx
```

Pattern: `TC[#]_[Description].xlsx`

---

## Key Rules

✅ **Do:**
- One test case per Excel file
- Use consistent headers
- Leave blank cells for unused parameters
- Keep filenames descriptive

❌ **Don't:**
- Put multiple test cases in one file
- Mix both formats in same file
- Leave Keyword column empty
- Use complex cell formatting

---

## Example Files

See `/tests/testData/` for sample Excel files demonstrating each format.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Parser can't find file | Check file path is absolute or relative to project root |
| Empty steps in result | Ensure Keyword column is populated |
| Parameters not recognized | Column headers must match exactly (case-sensitive) |
| Blank rows cause issues | Parser ignores empty cells automatically |

---

## See Full Documentation

Run: `docs/excel-formats.md`
