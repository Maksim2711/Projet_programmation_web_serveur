import Employee from "../models/Employee.js";

export const getAllEmployees = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const { count, rows } = await Employee.findAndCountAll({
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

export const createEmployee = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, hireDate } = req.body;

        const employee = await Employee.create({
            firstName,
            lastName,
            email,
            phone,
            hireDate
        });

        res.status(201).json({
            message: "Employé créé avec succès",
            data: employee
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;

        const employee = await Employee.findByPk(id);

        if (!employee) {
            return res.status(404).json({ message: "Employé introuvable" });
        }

        await employee.update(req.body);

        res.status(200).json({
            message: "Employé mis à jour avec succès",
            data: employee
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
