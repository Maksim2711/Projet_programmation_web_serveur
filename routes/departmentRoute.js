import department from "../models/Department.js";
import {getAllDepartments} from "../controllers/DepartmentController.js";
import { Router } from "express";
const departmentRoute = Router();

departmentRoute.get("/", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const departments = await department.findAndCountAll({
            limit: limit,
            offset: offset
        });

        res.status(200).json({
            totalItems: departments.count,
            totalPages: Math.ceil(departments.count / limit),
            currentPage: page,
            data: departments.rows
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default departmentRoute;