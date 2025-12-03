import { test, expect } from '@playwright/test';
import { InvoicePage } from '../../src/pages/InvoicePage';

test('Create Invoice in Oracle Fusion', async ({ page }) => {
  const invoicePage = new InvoicePage(page);
  await invoicePage.goto();
  await invoicePage.createInvoice({
    supplier: 'Acme Corp',
    amount: 1500,
    description: 'Consulting services'
  });
  const success = await invoicePage.isInvoiceCreated();
  expect(success).toBeTruthy();
});
