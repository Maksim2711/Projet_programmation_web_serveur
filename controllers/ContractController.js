import Contract from "../models/Contract.js";

export const getAllContracts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const { count, rows } = await Contract.findAndCountAll({
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

export const createContract = async (req, res) => {
    try {
        const { signedDate, totalAmount } = req.body;

        const contract = await Contract.create({
            signedDate,
            totalAmount
        });

        res.status(201).json({
            message: "Contrat créé avec succès",
            data: contract
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateContract = async (req, res) => {
    try {
        const { id } = req.params;

        const contract = await Contract.findByPk(id);

        if (!contract) {
            return res.status(404).json({ message: "Contrat introuvable" });
        }

        await contract.update(req.body);

        res.status(200).json({
            message: "Contrat mis à jour avec succès",
            data: contract
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
