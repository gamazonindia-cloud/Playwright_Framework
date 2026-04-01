import { Page } from '@playwright/test';
import { DatasetRow } from '../../../../utils/excelDataValidator';

export class InvoicePageReusableFunctions {
  private formattedDate: string;

  constructor(private page: Page) {
    this.page = page;
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    this.formattedDate = `${month}/${day}/${year}`;
    console.log(this.formattedDate); // 04/01/2026
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
    const prefix: string = "Test";
    const randomNumber: number = Math.floor(Math.random() * 10000);
    const result: string = `${prefix}${randomNumber}`;

    await this.page.getByLabel('Number').fill(result);
  }


  if (record.Currency) {
    await this.page.getByLabel('Invoice Currency').selectOption({ label: record.Currency });
  }

  if (record.Amount) {
    const number = parseInt(record.Amount);
    await this.page.getByRole('textbox', { name: 'Amount' }).fill(number.toString());
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
  }

  async isInvoiceCreated() {
    return await this.page.isVisible('text=Invoice created successfully');
  }
}
