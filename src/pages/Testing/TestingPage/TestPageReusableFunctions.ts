import { expect, Page } from "@playwright/test";
import { DatasetRow } from "../../../../utils/excelDataValidator";
import { getLatestDownloadedFile } from "../../../../utils/utilityKeyword";
export class TestPageReusableFunctions {
    constructor(private page: Page) {}


  async test_Login(record: DatasetRow) {

    await this.page.goto('https://automationexercise.com/');
    await this.page.getByText(" Signup / Login").click();
    await this.page.getByPlaceholder("Email Address").first().fill(record.UserName);
    await this.page.getByPlaceholder("Password").fill(record.Password);
    await this.page.getByText("Login",{exact:true}).click();

  }
  async addItemIntoCart(record: DatasetRow) {
    
    const item1=await this.page.getByText(record.ItemName1).first();
    await item1.hover();
    await this.page.locator("(//p[text()='"+record.ItemName1+"']/following::a[text()='Add to cart'])[1]").click();
    await this.page.waitForTimeout(2000);
    const Continue=await this.page.getByText("Continue Shopping").click();
    await this.page.waitForTimeout(2000);
    const item2=await this.page.getByText(record.ItemName2).first();
    await item2.hover();
    await this.page.locator("(//p[text()='"+record.ItemName2+"']/following::a[text()='Add to cart'])[1]").click();
    await this.page.waitForTimeout(2000);
    await this.page.getByText("View Cart").click();
    await this.page.locator('.cart_quantity_delete').first().click();
    await this.page.reload();
    await this.page.locator("//a[text()=' Home']").click();
    await this.page.reload();
    await this.page.locator("//a[text()=' Home']").click();
    await this.page.reload();
    await this.page.waitForTimeout(2000);
    const item3=await this.page.getByText(record.ItemName3).first();
    await item3.hover();
    await this.page.locator("(//p[text()='"+record.ItemName3+"']/following::a[text()='Add to cart'])[1]").click();
    await this.page.waitForTimeout(2000);
    await this.page.getByText("View Cart").click();
  }
  async proceedToCheckout() {

    await this.page.getByText("Proceed To Checkout").click();
    await this.page.reload();
    await this.page.getByText("Place Order").click();
    await this.page.reload();
    const placeorder=await this.page.getByText("Place Order").isVisible();
    if(placeorder)
    {
      await this.page.getByText("Place Order").click();
    }
    
  }
  async paymentDetails(record:DatasetRow) {

    let CardNo = record.CardNumber;
    let CardNumber = CardNo.toString();
    let CVCNo = record.CVC;
    let CVC = CVCNo.toString();
    let Expire = record.Expiration;
    let Expiration = Expire.toString();
    let year = record.Year;
    let Year = year.toString();
    await this.page.locator('input[name="name_on_card"]').fill(record.NameOnCard);
    await this.page.locator('input[name="card_number"]').fill(CardNumber);
    await this.page.getByRole('textbox', { name: 'ex.' }).fill(CVC);
    await this.page.getByRole('textbox', { name: 'MM' }).fill(Expiration);
    await this.page.getByRole('textbox', { name: 'YYYY' }).fill(Year);
    await this.page.getByText("Pay and Confirm Order").click();
  }
  async validateOrder() {

    const confirmation =await this.page.getByText("Congratulations! Your order has been confirmed").isVisible();
    if(confirmation){
      console.log("✅ Your order has been confirmed !!!");
    }
    else{
      console.log("❌ Your order has not been confirmed");
    }
  }
  async downloadInvoice() {

  
  const [download] = await Promise.all([
  this.page.waitForEvent('download'),
  this.page.getByText("Download Invoice").click()
  ]);

  await download.saveAs(download.suggestedFilename());
  }
}