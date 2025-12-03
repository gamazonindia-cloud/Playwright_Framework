import { createInvoiceTest } from '../templates/createInvoice.template';

const invoices = [
  { supplier: 'Acme Corp', amount: 1500, description: 'Consulting services' },
  { supplier: 'Beta Ltd', amount: 2500, description: 'Software license' },
  { supplier: 'Gamma Inc', amount: 500, description: 'Office supplies' }
];

invoices.forEach(data => {
  createInvoiceTest(data);
});
