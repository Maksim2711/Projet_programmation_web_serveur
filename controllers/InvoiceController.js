import Invoice from "../models/Invoice.js";

export const getAllInvoices = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const { count, rows } = await Invoice.findAndCountAll({
            limit,
            offset,
            order: [["id", "ASC"]]
        });

        res.status(200).json({
            totalItems: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            data: rows
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createInvoice = async (req, res) => {
    try {
        const { invoiceDate, amount, statut } = req.body;

        const invoice = await Invoice.create({
            invoiceDate,
            amount,
            statut
        });

        res.status(201).json({
            message: "Facture créée avec succès",
            data: invoice
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateInvoice = async (req, res) => {
    try {
        const { id } = req.params;

        const invoice = await Invoice.findByPk(id);

        if (!invoice) {
            return res.status(404).json({ message: "Facture introuvable" });
        }

        await invoice.update(req.body);

        res.status(200).json({
            message: "Facture mise à jour avec succès",
            data: invoice
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
