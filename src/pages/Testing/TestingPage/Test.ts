import { expect, Page } from "@playwright/test";
import { DatasetRow } from "../../../../utils/excelDataValidator";
import { getLatestDownloadedFile } from "../../../../utils/utilityKeyword";
export class TestPage {
    constructor(private page: Page) {}


  async test_Login(record: DatasetRow) {
    if(record.Date){
     const formattedDate = new Date((record.Date - 25569) * 86400 * 1000).toLocaleDateString('en-US');
    console.log(formattedDate.toString());


   }
  } 
}