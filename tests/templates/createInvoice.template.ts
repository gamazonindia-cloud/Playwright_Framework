// Template: Create Invoice for Oracle Fusion
import { test, expect } from '@playwright/test';
import { InvoicePage } from '../../src/pages/InvoicePage';

export function createInvoiceTest(invoiceData: { supplier: string; amount: number; description: string }) {
  test(`Create Invoice for ${invoiceData.supplier}`, async ({ page }) => {
    const invoicePage = new InvoicePage(page);
    await invoicePage.goto();
    await invoicePage.createInvoice(invoiceData);
    const success = await invoicePage.isInvoiceCreated();
    expect(success).toBeTruthy();
  });
}

// Usage example:
// createInvoiceTest({ supplier: 'Acme Corp', amount: 1500, description: 'Consulting services' });
