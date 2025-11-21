
import Department from "../models/Department.js";

export const getAllDepartments = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const { count, rows } = await Department.findAndCountAll({
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

export const createDepartment = async (req, res) => {
    try {
        const { name, description } = req.body;

        const dept = await Department.create({
            name,
            description
        });

        res.status(201).json({
            message: "Département créé avec succès",
            data: dept
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateDepartment = async (req, res) => {
    try {
        const { id } = req.params;

        const dept = await Department.findByPk(id);

        if (!dept) {
            return res.status(404).json({ message: "Département introuvable" });
        }

        await dept.update(req.body);

        res.status(200).json({
            message: "Département mis à jour avec succès",
            data: dept
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
