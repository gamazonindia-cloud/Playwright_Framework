import { test, expect } from "@playwright/test";
import { getLatestDownloadedFile } from "../../utils/utilityKeyword";
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import ExcelJS from 'exceljs';
import { exec } from 'child_process';
test('desktop automation', async () => {
  //Notepatd automation using AutoIt
  //exec('"C:\\Program Files (x86)\\AutoIt3\\AutoIt3.exe" "notePadTest.au3"');

  //Excel Automation using ExcelJS
  exec('"C:\\Program Files (x86)\\AutoIt3\\AutoIt3.exe" "excelTest.au3"');
  
});
