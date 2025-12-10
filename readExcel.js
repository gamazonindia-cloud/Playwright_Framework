const XLSX = require('xlsx');
const wb = XLSX.readFile('tests/testData/singleTestCase.xlsx');
const ws = wb.Sheets[wb.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(ws);
console.log('Headers:', Object.keys(data[0]));
console.log('Total Rows:', data.length);
console.log('All Data:');
data.forEach((row, i) => console.log(`Row ${i + 1}:`, JSON.stringify(row)));
