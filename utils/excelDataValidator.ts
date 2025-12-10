import * as XLSX from 'xlsx';
import * as path from 'path';

export interface ExcelDataConfig {
  excelPath: string;
  checkboxColumn?: string;
  filterColumn?: string;
  filterValue?: string;
}

export interface DatasetRow {
  [key: string]: any;
}

export class ExcelDataValidator {
  /**
   * Read Excel file and return all data
   */
  static readExcelData(excelPath: string): DatasetRow[] {
    try {
      const workbook = XLSX.readFile(excelPath);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(worksheet);
      return data;
    } catch (error) {
      console.error(`❌ Error reading Excel file: ${error}`);
      return [];
    }
  }

  /**
   * Get all column headers from Excel
   */
  static getHeaders(excelPath: string): string[] {
    const data = this.readExcelData(excelPath);
    if (data.length === 0) return [];
    return Object.keys(data[0]);
  }

  /**
   * Find checkbox column by name
   * Looks for: Enabled, Checkbox, Selected (case-insensitive)
   */
  static findCheckboxColumn(headers: string[]): string | undefined {
    return headers.find(h => 
      h.toLowerCase() === 'enabled' || 
      h.toLowerCase() === 'checkbox' ||
      h.toLowerCase() === 'selected'
    );
  }

  /**
   * Check if a value is considered "enabled/checked"
   * Accepts: true, 'TRUE', 'YES', 'Yes', '1', 1, 'true'
   */
  static isEnabled(value: any): boolean {
    return value === true || 
           value === 'TRUE' || 
           value === 'YES' || 
           value === 'Yes' || 
           value === '1' || 
           value === 1 ||
           value === 'true';
  }

  /**
   * Filter datasets where checkbox column is enabled
   */
  static getEnabledDatasets(excelPath: string, checkboxColumn?: string): DatasetRow[] {
    const data = this.readExcelData(excelPath);
    if (data.length === 0) return [];

    const headers = Object.keys(data[0]);
    const column = checkboxColumn || this.findCheckboxColumn(headers);

    if (!column) {
      console.warn('⚠️  No checkbox column found');
      return [];
    }

    return data.filter((row) => this.isEnabled(row[column]));
  }

  /**
   * Filter datasets by custom column and value
   */
  static getDatasetsByFilter(excelPath: string, filterColumn: string, filterValue: any): DatasetRow[] {
    const data = this.readExcelData(excelPath);
    if (data.length === 0) return [];

    const headers = Object.keys(data[0]);
    
    // Find matching column (case-insensitive)
    const matchedColumn = headers.find(h => h.toLowerCase() === filterColumn.toLowerCase());
    
    if (!matchedColumn) {
      console.warn(`⚠️  Column "${filterColumn}" not found`);
      return [];
    }

    return data.filter((row) => 
      String(row[matchedColumn]).trim() === String(filterValue).trim()
    );
  }

  /**
   * Get all datasets with their selection status
   */
  static getDatasetsWithStatus(excelPath: string, checkboxColumn?: string): Array<{ dataset: DatasetRow; isEnabled: boolean }> {
    const data = this.readExcelData(excelPath);
    if (data.length === 0) return [];

    const headers = Object.keys(data[0]);
    const column = checkboxColumn || this.findCheckboxColumn(headers);

    return data.map((row) => ({
      dataset: row,
      isEnabled: column ? this.isEnabled(row[column]) : false
    }));
  }

  /**
   * Get summary statistics about datasets
   */
  static getSummary(excelPath: string, checkboxColumn?: string): {
    totalRows: number;
    totalColumns: number;
    enabledCount: number;
    disabledCount: number;
    checkboxColumn: string | undefined;
    headers: string[];
  } {
    const data = this.readExcelData(excelPath);
    if (data.length === 0) {
      return {
        totalRows: 0,
        totalColumns: 0,
        enabledCount: 0,
        disabledCount: 0,
        checkboxColumn: undefined,
        headers: []
      };
    }

    const headers = Object.keys(data[0]);
    const column = checkboxColumn || this.findCheckboxColumn(headers);
    
    const enabledCount = column ? data.filter((row) => this.isEnabled(row[column])).length : 0;
    const disabledCount = column ? data.length - enabledCount : 0;

    return {
      totalRows: data.length,
      totalColumns: headers.length,
      enabledCount,
      disabledCount,
      checkboxColumn: column,
      headers
    };
  }

  /**
   * Log Excel data structure and summary
   */
  static logExcelStructure(excelPath: string, checkboxColumn?: string): void {
    const summary = this.getSummary(excelPath, checkboxColumn);

    console.log('\n📊 Excel File Structure:');
    console.log(`  File: ${path.basename(excelPath)}`);
    console.log(`  Total Rows: ${summary.totalRows}`);
    console.log(`  Total Columns: ${summary.totalColumns}`);
    console.log(`  Column Headers: ${summary.headers.join(', ')}`);
    
    if (summary.checkboxColumn) {
      console.log(`\n✅ Checkbox Column: "${summary.checkboxColumn}"`);
      console.log(`  Enabled: ${summary.enabledCount}`);
      console.log(`  Disabled: ${summary.disabledCount}`);
    } else {
      console.log('\n⚠️  No checkbox column found');
    }
  }

  /**
   * Log datasets with their status
   */
  static logDatasetsWithStatus(excelPath: string, checkboxColumn?: string): void {
    const datasets = this.getDatasetsWithStatus(excelPath, checkboxColumn);

    console.log('\n📋 Datasets with Selection Status:\n');
    datasets.forEach((item, index) => {
      const status = item.isEnabled ? '✅ ENABLED' : '❌ DISABLED';
      const dataset = item.dataset.Dataset || 'Unknown';
      const userName = item.dataset.UserName || 'N/A';
      console.log(`  [${index + 1}] ${status} - ${dataset} (${userName})`);
    });
  }

  /**
   * Validate Excel file exists and is readable
   */
  static validateExcelFile(excelPath: string): { isValid: boolean; message: string } {
    try {
      const data = this.readExcelData(excelPath);
      if (data.length === 0) {
        return { isValid: false, message: 'Excel file is empty' };
      }
      return { isValid: true, message: 'Excel file is valid' };
    } catch (error) {
      return { isValid: false, message: `Error reading Excel: ${error}` };
    }
  }
}
