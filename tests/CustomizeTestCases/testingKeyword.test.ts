import { test, expect } from "@playwright/test";
import { getLatestDownloadedFile } from "../../utils/utilityKeyword";

test("TestingKeword", async ({ page }) => {

    const recentFilePath = getLatestDownloadedFile();
console.log('Recent downloaded file:', recentFilePath);

});