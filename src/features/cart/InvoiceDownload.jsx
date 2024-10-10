import { generateInvoice } from "./InvoiceGenerator";

export const downloadInvoice = (cartItems, totalAmount, customerInfo) => {
  const doc = generateInvoice(cartItems, totalAmount, customerInfo);
  doc.save("paradise_nursery_invoice.pdf");
};
