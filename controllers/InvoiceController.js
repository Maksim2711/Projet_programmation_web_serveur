import Invoice from "../models/Invoice.js";

export const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.findAll();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve invoices." });
  }
};