import { expect, Page } from "@playwright/test";
import { DatasetRow } from "../../../../utils/excelDataValidator";
export class TestPageReusableFunctions {
    constructor(private page: Page) {}

  async test_Login(record: DatasetRow) {

    await this.page.goto('https://automationexercise.com/');
    await this.page.locator("//a[text()=' Signup / Login']").click();
    await this.page.locator("(//input[@placeholder='Email Address'])[1]").fill(record.UserName);
    await this.page.locator("(//input[@placeholder='Password'])[1]").fill(record.Password);
    await this.page.getByRole('button', { name: 'Login' }).click();

  }
  async addItemIntoCart(record: DatasetRow) {

    await this.page.locator("(//p[text()='"+record.ItemName+"'])[1]").hover();
    await this.page.locator("(//p[text()='"+record.ItemName+"']/following::a[text()='Add to cart'])[1]").click();
    await this.page.locator("//u[text()='View Cart']").click();
    
  }
  async proceedToCheckout() {

    await this.page.locator("//a[text()='Proceed To Checkout']").click();
    await this.page.locator("//a[text()='Place Order']").click();
    
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

    await this.page.locator("(//label[text()='Name on Card']/following::input)[1]").fill(record.NameOnCard);
    await this.page.locator("(//label[text()='Card Number']/following::input)[1]").fill(CardNumber);
    await this.page.locator("(//label[text()='CVC']/following::input)[1]").fill(CVC);
    await this.page.locator("(//label[text()='Expiration']/following::input)[1]").fill(Expiration);
    await this.page.locator("(//label[text()='Expiration']/following::input)[2]").fill(Year);
    await this.page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
    
  }
  async validateOrder() {

    const confirmation =await this.page.locator("//p[text()='Congratulations! Your order has been confirmed!']").isVisible();
    if(confirmation){
      console.log("✅ Your order has been confirmed !!!");
    }
    else{
      console.log("❌ Your order has not been confirmed");
    }
  }
  async downloadInvoice() {

    await this.page.locator("//a[text()='Download Invoice']").click();
    await this.page.setDefaultTimeout(5000);

    
  }
}