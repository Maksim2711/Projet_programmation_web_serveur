import Project from "../models/Project.js";

export const getAllProjects = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const { count, rows } = await Project.findAndCountAll({
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

export const createProject = async (req, res) => {
    try {
        const { name, startDate, endDate, status } = req.body;

        const project = await Project.create({
            name,
            startDate,
            endDate,
            status
        });

        res.status(201).json({
            message: "Projet créé avec succès",
            data: project
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;

        const project = await Project.findByPk(id);

        if (!project) {
            return res.status(404).json({ message: "Projet introuvable" });
        }

        await project.update(req.body);

        res.status(200).json({
            message: "Projet mis à jour avec succès",
            data: project
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
