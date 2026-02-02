import { test, expect } from "@playwright/test";
import { UploadFileReusableFunctions } from "../../src/pages/Testing/TestingPage/uploadFileReusableFunctions";
import { exec } from "child_process";
test.only("Upload File", async ({ page }) => {

  
    const uploadFile = new UploadFileReusableFunctions(page);
    await uploadFile.OpenUploadPage();
    await exec('"C:\\Program Files (x86)\\AutoIt3\\AutoIt3.exe" "C:\\Users\\Deepak Maurya\\OneDrive\\Documents\\PlaywrightFramework\\NueraQA_System_Accelerator\\FileUpload.au3"');
    await page.waitForTimeout(30000);
    
   
    

});
