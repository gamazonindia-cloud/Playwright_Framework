import { expect, Page } from "@playwright/test";
import { DatasetRow } from "../../../../utils/excelDataValidator";
export class UploadFileReusableFunctions {
  constructor(private page: Page) {}


  async OpenUploadPage() {

    await this.page.goto('https://the-internet.herokuapp.com/upload');
    await this.page.waitForTimeout(3000);
    await this.page.getByRole("button", { name: "Choose File" }).click();
    await this.page.waitForTimeout(5000);
    // await this.page.getByText(" Signup / Login").click();
    // await this.page.getByPlaceholder("Email Address").first().fill(record.UserName);
    // await this.page.getByPlaceholder("Password").fill(record.Password);
    // await this.page.getByText("Login",{exact:true}).click();

  }
  
}