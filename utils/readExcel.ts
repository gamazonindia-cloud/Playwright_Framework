const ExcelJS=require('exceljs');
async function readExcelFile() {
const workbook = new ExcelJS.Workbook();
await  workbook.xlsx.readFile("../testData/singleTestCase.xlsx");

const worksheet = workbook.getWorksheet('Sheet1');

    worksheet.eachRow((row: any, rowNumber: number) => {
   
    row.eachCell((cell: any, colNumber: number) => {
        console.log(`Row ${rowNumber} Col ${colNumber}: ${cell.value}`);
    });
});
}
readExcelFile();
