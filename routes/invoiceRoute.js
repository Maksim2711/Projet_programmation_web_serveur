import Invoice from "../models/Invoice.js";
import {getAllInvoices} from "../controllers/InvoiceController.js";
import { Router } from "express";

const invoiceRoute = Router();

invoiceRoute.get("/", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const invoices = await Invoice.findAndCountAll({
            limit: limit,
            offset: offset
        });

        res.status(200).json({
            totalItems: invoices.count,
            totalPages: Math.ceil(invoices.count / limit),
            currentPage: page,
            data: invoices.rows
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default invoiceRoute;