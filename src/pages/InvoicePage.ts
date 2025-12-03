import { Page } from '@playwright/test';

export class InvoicePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://oracle-fusion-url/invoice'); // Replace with actual URL
  }

  async createInvoice(invoiceData: { supplier: string; amount: number; description: string }) {
    await this.page.fill('#supplier', invoiceData.supplier);
    await this.page.fill('#amount', invoiceData.amount.toString());
    await this.page.fill('#description', invoiceData.description);
    await this.page.click('#createInvoiceButton');
  }

  async isInvoiceCreated() {
    return await this.page.isVisible('text=Invoice created successfully');
  }
}
