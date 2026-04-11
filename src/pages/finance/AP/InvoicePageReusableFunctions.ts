import { Page, expect } from '@playwright/test';
import { DatasetRow } from '../../../../utils/excelDataValidator';

    const prefix: string = "OpKey_Inv_";
    const randomNumber: number = Math.floor(Math.random() * 1000000);
    const InvoiceNumber: string = `${prefix}${randomNumber}`;
export class InvoicePageReusableFunctions {
    

  private formattedDate: string;
  private paymentNumber: string;

  constructor(private page: Page) {
    this.page = page;
    const date = new Date();

    // subtract 5 days
    date.setDate(date.getDate() - 4);

    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;
    console.log(formattedDate);
    this.formattedDate = formattedDate;

  }
  
  async createInvoiceHeader(record : DatasetRow) {

    //this.page.pause();
    //Identifying PO : is generated dynamically in the application
  if (record.identifyingPO) {
    await this.page.getByLabel('Identifying PO').fill(record.identifyingPO);
  }

  if (record.BusinessUnit) {
    await this.page.getByLabel('Business Unit').fill(record.BusinessUnit );
    await this.page.keyboard.press('Enter');
  }

  if (record.Supplier) {
    await this.page.getByLabel('Supplier').nth(0).fill(record.Supplier);
    await this.page.keyboard.press('Enter');
  }

  if (record.SupplierSite) {
    await this.page.getByLabel('Supplier Site').fill(record.SupplierSite);
  }

  if (record.LegalEntity) {
    await this.page.getByLabel('Legal Entity').fill(record.LegalEntity );
  }

  //Randomly generated Number field
  if (record.Number) {    
    await this.page.waitForTimeout(3000);
    await this.page.getByLabel('Number').fill(InvoiceNumber);
    await this.page.keyboard.press('Enter');
  }


  if (record.Currency) {
    await this.page.getByLabel('Invoice Currency').selectOption({ label: record.Currency });
  }

  if (record.Amount) {
    await this.page.waitForTimeout(3000);
    const number = parseInt(record.Amount);
    await this.page.getByRole('textbox', { name: 'Amount' }).fill(number.toString());
    await this.page.keyboard.press('Enter');
  }

  if (record.Type) {
    await this.page.getByLabel('Type')
      .selectOption({ label: record.Type });
  }

  if (record.Description) {
    await this.page.getByLabel('Description').fill(record.Description);
  }

  // Date Field : currently filling with current date
  if (record.Date) {
    const dates = parseInt(record.Date);
    await this.page.getByLabel('Date').nth(0).fill(this.formattedDate);
  }

  if (record.PaymentTerms) {
    await this.page.getByLabel('Payment Terms').fill(record.PaymentTerms);
  }

  //Will fill currently with current date
  if (record.termsDate) {
    const dates = parseInt(record.termsDate);
    await this.page.getByLabel('Terms Date').fill(this.formattedDate);
  }

  if (record.Requester) {
    await this.page.getByLabel('Requester').fill(record.Requester);
    await this.page.keyboard.press('Enter');
  }
  if (record.accountingDate) {
    const dates = parseInt(record.accountingDate);
    await this.page.getByText('Show More').click();
    await this.page.getByText('Accounting').nth(0).click();
    await this.page.getByLabel('Accounting Date').fill(this.formattedDate);
    await this.page.getByText('Show Less').click();
  }
  }
  async createInvoiceLine(record : DatasetRow) {

    
    await this.page.locator('[title*="Expand Lines"]').click();
    
    if (record.Amount) {
      const number = parseInt(record.Amount);
    await this.page.getByRole('cell', { name: 'Amount' }).getByLabel('Amount').fill(number.toString());
    }
    if (record.DistributionCombination) {
      console.log(record.DistributionCombination);
    await this.page.getByRole('cell', { name: 'Distribution Combination' }).getByLabel('Distribution Combination').fill(record.DistributionCombination);
    }
    if (record.ShipToLocation) {
      console.log(record.ShipToLocation);
    await this.page.getByRole('cell', { name: 'Ship-to Location' }).getByLabel('Ship-to Location').fill(record.ShipToLocation);
    }
    if (record.accountingDate) {
      const AccountingDate = parseInt(record.accountingDate);
    await this.page.getByRole('cell', { name: 'Accounting Date' }).getByLabel('Accounting Date').fill(this.formattedDate);
    }
    
  }
  async saveInvoice() {

    await this.page.getByRole('button', { name: 'Save', exact: true }).click();

  }
  async validateInvoiceAndReleaseHold() {

    await this.page.getByRole('link', { name: 'Invoice Actions' }).click();
    await this.page.waitForTimeout(3000);
    await this.page.keyboard.press('Control+Alt+V');
    await this.page.waitForTimeout(15000)
  }
  async postToLedgerAndViewAccounting() {

    await this.page.getByRole('link', { name: 'Invoice Actions' }).click();
    await this.page.waitForTimeout(3000);
    //await this.page.getByText('Account in Final', { exact: true }).click();
    for (let i = 0; i < 11; i++) {
    await this.page.waitForTimeout(500);
    await this.page.keyboard.press('ArrowDown');
    }
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('button', { name: 'View Accounting'}).click();
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('button', { name: 'Done' }).click();
    await this.page.waitForLoadState('networkidle');
    //await this.page.waitForTimeout(3000);
  
  }
  async saveAndCloseInvoice() {

    await this.page.getByRole('button', { name: 'Save and Close' }).click();
    await this.page.waitForTimeout(3000);

  }
  async manageInvoice() {

    await this.page.getByLabel('Invoice Number').fill(InvoiceNumber);
    await this.page.getByRole('button', { name: 'Search', exact: true }).click();
  }
  async validateInvoice() {

    if (await this.page.getByRole('cell', { name: 'Not paid' }).nth(1).textContent() === 'Not paid') {
      console.log('Invoice is validated successfully and is in Not Paid status');
    } else {
      console.log('Invoice validation failed or status is not updated to Not Paid');
    }

  }
  async isInvoiceCreated() {
    return await this.page.isVisible('text=Invoice created successfully');
  }
  async createPayment(record : DatasetRow) {
    
    if (record.BusinessUnit) {
      await this.page.getByLabel('Business Unit').fill(record.BusinessUnit );
      await this.page.keyboard.press('Enter');
    }
    if (record.Supplier) {
    await this.page.getByLabel('Supplier').nth(0).fill(record.Supplier);
    await this.page.keyboard.press('Enter');
    await this.page.getByLabel('Payment Date').nth(0).fill(this.formattedDate);
    }
    if (record.DisbursementBankAccount) {
      await this.page.getByLabel('Disbursement Bank Account').fill(record.DisbursementBankAccount);
      await this.page.keyboard.press('Enter');
    }
    if (record.PaymentMethod) {
      await this.page.getByLabel('Payment Method').fill(record.PaymentMethod);
      await this.page.keyboard.press('Enter');
    }
    if (record.PaymentProcessProfile) {
      await this.page.getByLabel('Payment Process Profile').fill(record.PaymentProcessProfile);
      await this.page.keyboard.press('Enter');
    }
    
  }
  async addInvoice() {
    await this.page.getByRole('button', { name: 'Select and Add' }).click();
    await this.page.getByLabel('Invoice Number').fill(InvoiceNumber);
    await this.page.getByRole('button', { name: 'Search', exact: true }).click();
    await this.page.getByRole('cell', { name: InvoiceNumber, exact: true }).click();
    await this.page.getByRole('button', { name: 'Apply' }).click();
    await this.page.getByRole('button', { name: 'OK' }).click();
    await this.page.getByRole('button', { name: 'Save and Close' }).click();

    }
  async getPaymentNumber() {
    
      const paymenttext = await this.page.locator("//div[@class='x1mu']").textContent();
      const parts = paymenttext.split(" ");
      const payment = parts[1];
      await this.page.getByRole('button', { name: 'OK' }).click();
      console.log(`Payment Number: ${payment}`);
      this.paymentNumber = payment;
  }
  async managePayment() {

    await this.page.getByLabel('Payment Number').fill(this.paymentNumber);
    await this.page.getByRole('button', { name: 'Search', exact: true }).click();
  }
  async approveInvoice(InvoiceNumber: string) {

    await this.page.getByLabel("Home").click();
    for (let i = 0; i < 0; i++) {
      await this.page.waitForTimeout(10000);
      await this.page.reload();
    }
    //await this.page.getByText('Notifications', { exact: false }).click();
    await this.page.locator("//a[@id='pt1:_UISatr:0:cil1']").click();
    await this.page.waitForTimeout(5000);
    const isTextVisible = await this.page.locator("(//a[text()='Show All'])[1]").textContent();
    console.log(isTextVisible); // true or false
    if (isTextVisible=='Show All') {
      await this.page.locator("(//a[text()='Show All'])[1]").click();
      await this.page.getByText('Worklist').click();
      const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.click('text=Open')
      ]);
      await newPage.waitForLoadState();
      await newPage.locator("//input[@type='text']").fill(InvoiceNumber);
      await newPage.keyboard.press('Enter');
      await this.page.waitForTimeout(3000);
      const text = await newPage.locator("//tr[1]/td[3]/span/table/tbody/tr/td/a").textContent();
      console.log(text);
      await newPage.locator("//tr[1]/td[3]/span/table/tbody/tr/td/a").click();
      await newPage.waitForTimeout(3000);
      const [new2Page] = await Promise.all([
      await newPage.context().waitForEvent('page'),
      await newPage.click('text=Open Payment Window')
      ]);
      await new2Page.waitForLoadState();
      await new2Page.getByText('View Invoice').click();
      await new2Page.waitForTimeout(3000);
      


    }


    
  }
  async validatePayment() {

    await this.page.getByRole('cell', { name: this.paymentNumber, exact: true }).textContent().then((text) => {
      if (text === this.paymentNumber) {
        console.log('Payment is created successfully and is in correct status');
      } else {
        console.log('Payment creation failed or status is not updated correctly');
      }
    });
    
    
  }
}
