import { test, expect } from "@playwright/test";
import { getLatestDownloadedFile } from "../../utils/utilityKeyword";
import { DatasetRow } from "../../utils/excelDataValidator";
import fs from 'fs/promises';
import path from 'path';
import ExcelJS from 'exceljs';
import { exec } from 'child_process';
import { CommonFunctions } from "../../src/pages/common/CommonFunctions";

test('desktop automation', async () => {
  // //Notepatd automation using AutoIt
  // //exec('"C:\\Program Files (x86)\\AutoIt3\\AutoIt3.exe" "notePadTest.au3"');

  // //Excel Automation using ExcelJS
  // exec('"C:\\Program Files (x86)\\AutoIt3\\AutoIt3.exe" "excelTest.au3"');


  
});
test('aut data generation Test ', async ({page}) => {

  const commonFunctions = new CommonFunctions(page);
  console.log(await commonFunctions.autoDataGeneration(20, "Test_", "_2024", false, false, false, false));

  
  
  


  
  
});
