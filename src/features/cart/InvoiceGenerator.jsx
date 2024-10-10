import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Function to generate invoice PDF
export const generateInvoice = (cartItems, totalAmount, customerInfo) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text('Paradise Nursery Invoice', 14, 22);
  doc.setFontSize(11);
  doc.setTextColor(100);

  // Customer information
  doc.text(`Name: ${customerInfo.name}`, 14, 35);
  doc.text(`Email: ${customerInfo.email}`, 14, 42);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 49);

  // Table headers
  const headers = [['Product', 'Quantity', 'Price', 'Total']];
  
  // Table data
  const data = cartItems.map(item => [
    item.name,
    item.quantity,
    `$${item.price.toFixed(2)}`,
    `$${(item.price * item.quantity).toFixed(2)}`
  ]);

  // Create table
  doc.autoTable({
    startY: 60,
    head: headers,
    body: data,
  });

  // Total amount
  const finalY = doc.lastAutoTable.finalY || 60;
  doc.text(`Total Amount: $${totalAmount.toFixed(2)}`, 14, finalY + 15);

  return doc;
};

// Function to download invoice PDF
export const downloadInvoice = (cartItems, totalAmount, customerInfo) => {
  const doc = generateInvoice(cartItems, totalAmount, customerInfo);
  doc.save("paradise_nursery_invoice.pdf");
};