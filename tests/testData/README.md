# Excel Test Templates

## How to Use These Templates

The CSV files in this folder are Excel templates. Follow these steps:

1. **Open CSV in Excel**
   - Open the CSV file in Microsoft Excel
   - Save as `.xlsx` format

2. **Edit Test Steps**
   - Modify the `Keyword` column with available keywords
   - Add parameters in their own columns
   - Update descriptions

3. **For Data-Driven Tests**
   - Use two files: `*_Steps.csv` and `*_Data.csv`
   - Or create two sheets in one Excel file: "TestSteps" and "TestData"
   - Use `{{placeholders}}` in steps that will be replaced by data

## Available Templates

### 1. playwrightDemo.csv
Simple test that navigates to Playwright website and verifies content.

**Columns:**
- StepNumber, Keyword, Description, url, label, partial, index, milliseconds

### 2. loginTest_Steps.csv + loginTest_Data.csv
Data-driven login test template.

**Steps file** uses placeholders: `{{username}}`, `{{password}}`, `{{expectedResult}}`
**Data file** contains actual test data for multiple scenarios

## Creating Your Own Templates

### Basic Template Structure
```
Keyword | Description | param1 | param2 | param3 | ...
```

### Common Keywords & Their Parameters

**OpenBrowser**
- url

**Web_ClickByText**
- label
- partial (true/false)
- index (0, 1, 2...)

**Web_TypeByText**
- label
- value
- partial (true/false)
- index

**Web_SelectDropdownByText**
- label
- value
- partial
- index

**isTextPresentOnScreen**
- label
- partial
- index

**Wait**
- milliseconds

## Tips
- Keep column names simple and consistent
- Use empty cells for optional parameters
- Add a Description column for documentation
- Test with small datasets first
