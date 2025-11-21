import Employee from "../models/Employee.js";
import {getAllEmployees} from "../controllers/EmployeeController.js";
import { Router } from "express";

const employeeRoute = Router();

employeeRoute.get("/", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const employees = await Employee.findAndCountAll({
            limit: limit,
            offset: offset
        });

        res.status(200).json({
            totalItems: employees.count,
            totalPages: Math.ceil(employees.count / limit),
            currentPage: page,
            data: employees.rows
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default employeeRoute;