"use client";

import { useState } from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  section: { marginBottom: 10 },
  table: { display: "table", width: "100%", borderStyle: "solid", borderWidth: 1, marginBottom: 10 },
  tableRow: { flexDirection: "row" },
  tableCol: { width: "25%", borderStyle: "solid", borderWidth: 1, padding: 5 },
  text: { fontSize: 12 },
});

const InvoicePDF = ({ invoiceData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>INVOICE</Text>
      <View style={styles.section}>
        <Text style={styles.text}>Invoice No: {invoiceData.invoiceNo}</Text>
        <Text style={styles.text}>Date: {invoiceData.date}</Text>
        <Text style={styles.text}>Billed To: {invoiceData.customerName}</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableCol}>Item</Text>
          <Text style={styles.tableCol}>Rate</Text>
          <Text style={styles.tableCol}>Qty</Text>
          <Text style={styles.tableCol}>Total</Text>
        </View>
        {invoiceData.items.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCol}>{item.name}</Text>
            <Text style={styles.tableCol}>${item.rate}</Text>
            <Text style={styles.tableCol}>{item.qty}</Text>
            <Text style={styles.tableCol}>${item.total}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>Subtotal: ${invoiceData.subtotal}</Text>
        <Text style={styles.text}>Tax (10%): ${invoiceData.tax}</Text>
        <Text style={styles.text}>Discount: ${invoiceData.discount}</Text>
        <Text style={styles.text}>Total: ${invoiceData.total}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>Bank: ABC Bank</Text>
        <Text style={styles.text}>Account No: 123456789</Text>
        <Text style={styles.text}>Payment due within 14 days</Text>
      </View>
    </Page>
  </Document>
);

export default function InvoiceGenerator() {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNo: "INV-001",
    date: new Date().toISOString().split("T")[0],
    customerName: "John Doe",
    items: [
      { name: "Website Design", rate: 2000, qty: 1, total: 2000 },
      { name: "Dashboard Design", rate: 1500, qty: 1, total: 1500 },
      { name: "Logo Design", rate: 500, qty: 1, total: 500 },
    ],
    subtotal: 4000,
    tax: 400,
    discount: 200,
    total: 4200,
  });

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Invoice Generator</h1>
      <PDFDownloadLink
        document={<InvoicePDF invoiceData={invoiceData} />}
        fileName="invoice.pdf"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {({ loading }) => (loading ? "Generating PDF..." : "Download Invoice")}
      </PDFDownloadLink>
    </div>
  );
}
