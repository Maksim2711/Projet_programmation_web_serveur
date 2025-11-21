import Project from "../models/Project.js";
import {getAllProjects} from "../controllers/ProjectController.js";
import { Router } from "express";

const projectRoute = Router();

projectRoute.get("/", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const projects = await Project.findAndCountAll({
            limit: limit,
            offset: offset
        });

        res.status(200).json({
            totalItems: projects.count,
            totalPages: Math.ceil(projects.count / limit),
            currentPage: page,
            data: projects.rows
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default projectRoute;   