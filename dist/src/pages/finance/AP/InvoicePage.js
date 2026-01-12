"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicePage = void 0;
class InvoicePage {
    constructor(page) {
        this.page = page;
    }
    async goto() {
        await this.page.goto('https://oracle-fusion-url/invoice'); // Replace with actual URL
    }
    async createInvoice(invoiceData) {
        await this.page.fill('#supplier', invoiceData.supplier);
        await this.page.fill('#amount', invoiceData.amount.toString());
        await this.page.fill('#description', invoiceData.description);
        await this.page.click('#createInvoiceButton');
    }
    async isInvoiceCreated() {
        return await this.page.isVisible('text=Invoice created successfully');
    }
}
exports.InvoicePage = InvoicePage;
