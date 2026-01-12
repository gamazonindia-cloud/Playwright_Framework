"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelDataValidator = void 0;
const XLSX = __importStar(require("xlsx"));
const path = __importStar(require("path"));
class ExcelDataValidator {
    /**
     * Read Excel file and return all data
     */
    static readExcelData(excelPath) {
        try {
            const workbook = XLSX.readFile(excelPath);
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const data = XLSX.utils.sheet_to_json(worksheet);
            return data;
        }
        catch (error) {
            console.error(`❌ Error reading Excel file: ${error}`);
            return [];
        }
    }
    /**
     * Get all column headers from Excel
     */
    static getHeaders(excelPath) {
        const data = this.readExcelData(excelPath);
        if (data.length === 0)
            return [];
        return Object.keys(data[0]);
    }
    /**
     * Find checkbox column by name
     * Looks for: Enabled, Checkbox, Selected (case-insensitive)
     */
    static findCheckboxColumn(headers) {
        return headers.find(h => h.toLowerCase() === 'enabled' ||
            h.toLowerCase() === 'checkbox' ||
            h.toLowerCase() === 'selected');
    }
    /**
     * Check if a value is considered "enabled/checked"
     * Accepts: true, 'TRUE', 'YES', 'Yes', '1', 1, 'true'
     */
    static isEnabled(value) {
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
    static getEnabledDatasets(excelPath, checkboxColumn) {
        const data = this.readExcelData(excelPath);
        if (data.length === 0)
            return [];
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
    static getDatasetsByFilter(excelPath, filterColumn, filterValue) {
        const data = this.readExcelData(excelPath);
        if (data.length === 0)
            return [];
        const headers = Object.keys(data[0]);
        // Find matching column (case-insensitive)
        const matchedColumn = headers.find(h => h.toLowerCase() === filterColumn.toLowerCase());
        if (!matchedColumn) {
            console.warn(`⚠️  Column "${filterColumn}" not found`);
            return [];
        }
        return data.filter((row) => String(row[matchedColumn]).trim() === String(filterValue).trim());
    }
    /**
     * Get all datasets with their selection status
     */
    static getDatasetsWithStatus(excelPath, checkboxColumn) {
        const data = this.readExcelData(excelPath);
        if (data.length === 0)
            return [];
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
    static getSummary(excelPath, checkboxColumn) {
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
    static logExcelStructure(excelPath, checkboxColumn) {
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
        }
        else {
            console.log('\n⚠️  No checkbox column found');
        }
    }
    /**
     * Log datasets with their status
     */
    static logDatasetsWithStatus(excelPath, checkboxColumn) {
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
    static validateExcelFile(excelPath) {
        try {
            const data = this.readExcelData(excelPath);
            if (data.length === 0) {
                return { isValid: false, message: 'Excel file is empty' };
            }
            return { isValid: true, message: 'Excel file is valid' };
        }
        catch (error) {
            return { isValid: false, message: `Error reading Excel: ${error}` };
        }
    }
}
exports.ExcelDataValidator = ExcelDataValidator;
