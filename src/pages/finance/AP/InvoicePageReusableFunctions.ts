import { Page } from '@playwright/test';
import { DatasetRow } from '../../../../utils/excelDataValidator';

export class InvoicePageReusableFunctions {
  constructor(private page: Page) {
    this.page = page;
  }



  async createInvoiceHeader(record : DatasetRow) {

    this.page.pause();
    //Identifying PO : is generated dynamically in the application
    if (record.identifyingPO) {
    await this.page.getByLabel('Identifying PO').fill(record.identifyingPO);
  }

  if (record.BusinessUnit) {
    await this.page.getByLabel('Business Unit')
      .selectOption({ label: record.BusinessUnit });
  }

  if (record.Supplier) {
    await this.page.getByLabel('Supplier').fill(record.Supplier);
    await this.page.keyboard.press('Enter');
  }

  if (record.SupplierSite) {
    await this.page.getByLabel('Supplier Site')
      .selectOption({ label: record.SupplierSite });
  }

  if (record.LegalEntity) {
    await this.page.getByLabel('Legal Entity')
      .selectOption({ label: record.LegalEntity });
  }

  //Randomly generated Number field
  if (record.number) {
    await this.page.getByLabel('Number').fill(record.number);
  }


  if (record.Currency) {
    await this.page.getByLabel('Amount')
      .getByRole('combobox')
      .selectOption({ label: record.Currency });
  }

  if (record.Amount) {
    await this.page.getByLabel('Amount')
      .getByRole('textbox')
      .fill(record.Amount);
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
    await this.page.getByLabel('Date').fill(record.Date);
  }

  if (record.PaymentTerms) {
    await this.page.getByLabel('Payment Terms')
      .selectOption({ label: record.PaymentTerms });
  }

  //Will fill currently with current date
  if (record.termsDate) {
    await this.page.getByLabel('Terms Date').fill(record.termsDate);
  }

  if (record.Requester) {
    await this.page.getByLabel('Requester').fill(record.Requester);
    await this.page.keyboard.press('Enter');
  }
  }

  async isInvoiceCreated() {
    return await this.page.isVisible('text=Invoice created successfully');
  }
}
