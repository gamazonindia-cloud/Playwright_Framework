# NueraQA System Accelerator - Documentation

Welcome to your **Playwright + AI Testing Accelerator**!

## 📚 Quick Navigation

### Getting Started
- **[EXCEL_QUICK_REFERENCE.md](./EXCEL_QUICK_REFERENCE.md)** - Quick lookup for Excel formats
- **[keyword-driven.md](./keyword-driven.md)** - Keyword-driven testing guide
- **[excel-driven.md](./excel-driven.md)** - Excel testing documentation

### Detailed Guides
- **[excel-formats.md](./excel-formats.md)** - Complete Excel format specifications
- **[EXCEL_IMPLEMENTATION_SUMMARY.md](./EXCEL_IMPLEMENTATION_SUMMARY.md)** - Implementation details
- **[ai.md](./ai.md)** - AI/ML integration ideas

---

## 🎯 Framework Overview

### Project Structure
```
project-root/
├── src/               # Source code (pages, components, services)
├── tests/             # Test suites (e2e, unit, integration)
├── configs/           # Configuration files
├── utils/             # Utility functions (keywords, executor, parser)
├── reports/           # Test reports
├── runner/            # Custom test runners
├── public/            # Public assets
└── docs/              # Documentation (this folder)
```

### Core Technologies
- **Playwright 1.56.1+** - Browser automation
- **TypeScript** - Type-safe development
- **Node.js** - Runtime environment
- **xlsx** - Excel file parsing

---

## 🚀 Quick Start

### 1. Define Your Test in Excel

**Format 1 (Single Step):**
```
Parameter | Value
Keyword   | Web_ClickByText
text      | Login
```

**Format 2 (Multiple Steps):**
```
StepNumber | Keyword    | Description | url
1          | OpenBrowser | Start browser |
2          | Navigate   | Go to login  | https://app.com
```

### 2. Parse and Execute

```typescript
import { ExcelParser } from '../utils/excelParser';
import { KeywordExecutor } from '../utils/keywordExecutor';

// Parse Excel
const testDef = ExcelParser.parseExcelMultipleSteps('TC001.xlsx');

// Execute
const executor = new KeywordExecutor(page);
await executor.executeTest(testDef);
```

### 3. Run Tests

```bash
npx playwright test excelDriven.e2e.spec.ts
```

---

## 📊 Excel Format Comparison

| Feature | Format 1 | Format 2 |
|---------|----------|----------|
| **Use Case** | Simple 1-step tests | Multi-step workflows |
| **Layout** | Transposed | Traditional rows |
| **Parser** | `parseExcelSingleTestCase()` | `parseExcelMultipleSteps()` |
| **Column A** | Parameter name | StepNumber |
| **Column B** | Parameter value | Keyword |

---

## 🔑 Available Keywords

50+ keywords including:
- Navigation: `OpenBrowser`, `Navigate`, `CloseBrowser`
- Click: `Web_ClickByText`, `Web_ClickByXPath`, `Web_ClickByAltOrTitle`
- Input: `Web_TypeByText`, `Web_TypeByXPath`
- Dropdown: `Web_SelectDropdownByText`, `Web_SelectDropdownByIndex`
- Validation: `Verify_Text`, `Verify_Visible`, `isTextPresentOnScreen`
- Wait: `Wait`, `Wait_For_Selector`

See **[keyword-driven.md](./keyword-driven.md)** for complete list with examples.

---

## 📖 Documentation Guide

### For Excel Integration
1. **[EXCEL_QUICK_REFERENCE.md](./EXCEL_QUICK_REFERENCE.md)** - Start here for quick answers
2. **[excel-formats.md](./excel-formats.md)** - Detailed format specifications
3. **[EXCEL_IMPLEMENTATION_SUMMARY.md](./EXCEL_IMPLEMENTATION_SUMMARY.md)** - Technical details

### For Keyword-Driven Testing
1. **[keyword-driven.md](./keyword-driven.md)** - Complete keyword guide
2. **[excel-driven.md](./excel-driven.md)** - Excel with keywords

### For Advanced Features
1. **[ai.md](./ai.md)** - AI/ML integration possibilities

---

## 📁 Test Data Location

```
tests/testData/
├── TC001_LoginTest.xlsx
├── TC002_CreateInvoice.xlsx
├── TC003_EmployeeOnboarding.xlsx
└── README.md
```

Each test case = separate Excel file

---

## 🔧 Main API

### ExcelParser Class
```typescript
// Parse single-step test
ExcelParser.parseExcelSingleTestCase(excelPath, testName?)

// Parse multi-step test
ExcelParser.parseExcelMultipleSteps(excelPath, testName?)

// Parse all Excel files from directory
ExcelParser.parseExcelDirectory(dirPath)

// Save test definition as JSON
ExcelParser.parseExcelToJsonFile(excelPath, outputJsonPath, testName?, 'single'|'multi')

// Parse data-driven tests
ExcelParser.parseExcelDataDriven(excelPath)
```

### KeywordExecutor Class
```typescript
// Execute single keyword
await executor.executeStep(testStep)

// Execute complete test
await executor.executeTest(testDefinition)
```

---

## ✅ Latest Updates

### Version 1.0 - Excel Integration Complete
- ✅ Two Excel formats supported
- ✅ Batch processing capability
- ✅ Complete documentation
- ✅ Production-ready parser
- ✅ TypeScript compilation clean

---

## 📝 File Naming Convention

```
TC[Number]_[Description].xlsx

Examples:
TC001_LoginWithValidCredentials.xlsx
TC002_CreateInvoiceWithValidData.xlsx
TC003_EmployeeOnboardingWorkflow.xlsx
```

---

## 🎓 Learning Path

1. **Start:** [EXCEL_QUICK_REFERENCE.md](./EXCEL_QUICK_REFERENCE.md)
2. **Learn:** [excel-formats.md](./excel-formats.md)
3. **Explore:** [keyword-driven.md](./keyword-driven.md)
4. **Understand:** [EXCEL_IMPLEMENTATION_SUMMARY.md](./EXCEL_IMPLEMENTATION_SUMMARY.md)
5. **Vision:** [ai.md](./ai.md)

---

## ❓ Common Questions

**Q: Where do I create test data?**
A: Create separate Excel files in `tests/testData/` folder

**Q: Which Excel format should I use?**
A: Format 1 for simple tests, Format 2 for workflows

**Q: How do I run tests?**
A: Use `npx playwright test excelDriven.e2e.spec.ts`

**Q: Can I combine JSON and Excel?**
A: Yes, both are fully supported

---

## 🤝 Support & Resources

- **Complete Excel Guide:** [excel-formats.md](./excel-formats.md)
- **Quick Lookup:** [EXCEL_QUICK_REFERENCE.md](./EXCEL_QUICK_REFERENCE.md)
- **Implementation:** [EXCEL_IMPLEMENTATION_SUMMARY.md](./EXCEL_IMPLEMENTATION_SUMMARY.md)
- **Keyword Library:** [keyword-driven.md](./keyword-driven.md)
- **Working Examples:** `tests/projectWorkSpace/ERP Test Cases/excelDriven.e2e.spec.ts`

---

**Happy Testing! 🚀**

Your NueraQA System Accelerator is ready for production use with Excel-based test case management.
