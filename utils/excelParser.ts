import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';
import { TestDefinition, TestStep } from './keywordExecutor';

export interface ExcelTestRow {
  StepNumber?: number;
  Keyword: string;
  Description?: string;
  [key: string]: any; // For dynamic parameters
}

export class ExcelParser {
  /**
   * Parse single Excel file - Extracts test data from first row or filtered by column value
   * Each Excel file = One test case with data in first row (or specific row)
   * Columns: Field names (e.g., UserName, Password, DataSet, etc.)
   * 
   * Example Excel:
   * DataSet | UserName | Password
   * US BU   | abc      | xys
   * CA BU   | def      | mno
   * 
   * Usage:
   * parseExcelSingleTestCase(excelPath) - Returns first row
   * parseExcelSingleTestCase(excelPath, 'DataSet') - Returns first row (with DataSet as reference)
   * parseExcelSingleTestCase(excelPath, 'DataSet', 'US BU') - Returns row where DataSet = 'US BU'
   * 
   * Returns the data as a simple object for use in test steps
   */
  static parseExcelSingleTestCase(
    excelPath: string,
    filterColumnName?: string,
    filterValue?: string
  ): { name: string; data: { [key: string]: any } } {
    const workbook = XLSX.readFile(excelPath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    // Convert to JSON - each row becomes an object with column headers as keys
    const rawData: any[] = XLSX.utils.sheet_to_json(worksheet);
    
    const finalTestName = path.basename(excelPath, '.xlsx');
    
    // Default to first row
    let selectedRow = rawData[0];

    // If filter column is provided, try to match case-insensitively
    if (filterColumnName) {
      const normalizedColumns = Object.keys(rawData[0] || {});
      const matchedColumn = normalizedColumns.find(
        (col) => col.toLowerCase() === filterColumnName.toLowerCase()
      );

      if (!matchedColumn) {
        console.warn(`⚠️ Column "${filterColumnName}" not found. Using first row as fallback.`);
      } else {
        let valueToFind = filterValue;

        // If no specific filter value provided, use the first row's value for this column
        if (filterValue === undefined) {
          valueToFind = rawData[0][matchedColumn];
        }

        const targetValue = String(valueToFind).trim();

        // Find row matching the filter
        const foundRow = rawData.find((row: any) => String(row[matchedColumn]).trim() === targetValue);
        if (foundRow) {
          selectedRow = foundRow;
        } else {
          console.warn(`⚠️ No row found with ${matchedColumn} = "${valueToFind}". Using first row as fallback.`);
        }
      }
    }
    
    // Return selected row as test data
    return {
      name: finalTestName,
      data: selectedRow || {},
    };
  }

  /**
   * Parse single Excel file with transposed format (Parameter | Value)
   * For when you want parameters as rows
   * 
   * Example:
   * Parameter | Value
   * Keyword   | OpenBrowser
   * url       | https://example.com
   */
  static parseExcelTransposed(excelPath: string, testName?: string): TestDefinition {
    const workbook = XLSX.readFile(excelPath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    // Convert to JSON
    const rawData: any[] = XLSX.utils.sheet_to_json(worksheet);
    
    // Build test parameters from rows
    const testParams: { [key: string]: any } = {};
    const steps: TestStep[] = [];
    
    rawData.forEach((row: any) => {
      const values = Object.values(row);
      const paramName = String(values[0]);
      const paramValue = values[1];
      
      if (paramName && paramValue !== undefined && paramValue !== null && paramValue !== '') {
        testParams[paramName] = paramValue;
      }
    });
    
    // Create test steps from parameters
    if (testParams['Keyword']) {
      const stepParams: { [key: string]: any } = {};
      Object.keys(testParams).forEach((key) => {
        if (key !== 'Keyword' && key !== 'Description') {
          stepParams[key] = testParams[key];
        }
      });
      
      steps.push({
        keyword: testParams['Keyword'],
        params: Object.keys(stepParams).length > 0 ? stepParams : undefined,
        description: testParams['Description'] || undefined,
      });
    }
    
    const finalTestName = testName || path.basename(excelPath, '.xlsx');
    
    return {
      name: finalTestName,
      description: `Test case from: ${path.basename(excelPath)}`,
      steps,
    };
  }

  /**
   * Parse Excel file with multiple rows of test steps
   * Each Excel file = One test case with multiple steps
   * Columns: Keyword, Description, param1, param2, etc.
   * Rows: Each row is a test step
   */
  static parseExcelMultipleSteps(excelPath: string, testName?: string): TestDefinition {
    const workbook = XLSX.readFile(excelPath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    // Convert to JSON
    const rawData: ExcelTestRow[] = XLSX.utils.sheet_to_json(worksheet);
    
    // Convert rows to test steps
    const steps: TestStep[] = rawData.map((row) => {
      const { StepNumber, Keyword, Description, ...params } = row;
      
      // Build params object from remaining columns
      const stepParams: { [key: string]: any } = {};
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== undefined && value !== null && value !== '') {
          stepParams[key] = value;
        }
      });
      
      return {
        keyword: Keyword,
        params: Object.keys(stepParams).length > 0 ? stepParams : undefined,
        description: Description || undefined,
      };
    });
    
    const finalTestName = testName || path.basename(excelPath, '.xlsx');
    
    return {
      name: finalTestName,
      description: `Test case from: ${path.basename(excelPath)}`,
      steps,
    };
  }

  /**
   * Parse all Excel files from a directory (each file = one test case)
   * Returns array of test data objects
   */
  static parseExcelDirectory(dirPath: string): Array<{ name: string; data: { [key: string]: any } }> {
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.xlsx') || f.endsWith('.xls'));
    
    return files.map((file) => {
      const filePath = path.join(dirPath, file);
      return this.parseExcelSingleTestCase(filePath);
    });
  }

  /**
   * Parse all Excel files from directory as test definitions (multi-step format)
   */
  static parseExcelDirectoryAsTests(dirPath: string): TestDefinition[] {
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.xlsx') || f.endsWith('.xls'));
    
    return files.map((file) => {
      const filePath = path.join(dirPath, file);
      return this.parseExcelMultipleSteps(filePath);
    });
  }
  
  /**
   * Parse Excel and save as JSON file
   * Supports both single-step and multi-step formats
   * @param excelPath - Path to Excel file
   * @param outputJsonPath - Path to save JSON output
   * @param testName - Optional test name
   * @param parseFormat - 'single' for single-step format, 'multi' for multi-step format
   */
  static parseExcelToJsonFile(
    excelPath: string,
    outputJsonPath: string,
    testName?: string,
    parseFormat: 'single' | 'multi' = 'single'
  ): void {
    const testDef = parseFormat === 'single'
      ? this.parseExcelSingleTestCase(excelPath, testName)
      : this.parseExcelMultipleSteps(excelPath, testName);
    
    fs.writeFileSync(outputJsonPath, JSON.stringify(testDef, null, 2), 'utf-8');
    console.log(`✅ Test definition saved to: ${outputJsonPath}`);
  }
  
  /**
   * Parse Excel with data-driven support (multiple test data rows)
   * Supports parameterized test execution with placeholders
   * Sheet 1: Test steps with {{paramName}} placeholders
   * Sheet 2: Test data with actual values
   * @param excelPath - Path to Excel file with separate sheets for steps and data
   * @returns Array of TestDefinition objects (one per data row)
   */
  static parseExcelDataDriven(excelPath: string): TestDefinition[] {
    const workbook = XLSX.readFile(excelPath);
    
    // Assume first sheet has test steps, second sheet has test data
    const stepsSheet = workbook.Sheets[workbook.SheetNames[0]];
    const dataSheet = workbook.Sheets[workbook.SheetNames[1]];
    
    if (!dataSheet) {
      // No data sheet, return single test using multi-step format
      return [this.parseExcelMultipleSteps(excelPath)];
    }
    
    const steps: ExcelTestRow[] = XLSX.utils.sheet_to_json(stepsSheet);
    const testData: any[] = XLSX.utils.sheet_to_json(dataSheet);
    
    // Create one test definition per data row
    return testData.map((dataRow, index) => {
      const testSteps: TestStep[] = steps.map((stepRow) => {
        const { StepNumber, Keyword, Description, ...params } = stepRow;
        
        // Replace placeholders with actual data
        const stepParams: { [key: string]: any } = {};
        Object.keys(params).forEach((key) => {
          let value = params[key];
          
          // Replace {{columnName}} with data from dataRow
          if (typeof value === 'string' && value.includes('{{')) {
            const matches = value.match(/\{\{(\w+)\}\}/g);
            matches?.forEach((match) => {
              const columnName = match.replace('{{', '').replace('}}', '');
              if (dataRow[columnName] !== undefined) {
                value = value.replace(match, dataRow[columnName]);
              }
            });
          }
          
          if (value !== undefined && value !== null && value !== '') {
            stepParams[key] = value;
          }
        });
        
        return {
          keyword: Keyword,
          params: Object.keys(stepParams).length > 0 ? stepParams : undefined,
          description: Description || undefined,
        };
      });
      
      return {
        name: `${workbook.SheetNames[0]} - Data Set ${index + 1}`,
        description: `Test with data: ${JSON.stringify(dataRow)}`,
        steps: testSteps,
      };
    });
  }
}
