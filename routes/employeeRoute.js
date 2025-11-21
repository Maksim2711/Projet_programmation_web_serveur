import { Router } from "express";
import {getAllEmployees,createEmployee,updateEmployee} from "../controllers/EmployeeController.js";

import {createEmployeeValidation,updateEmployeeValidation} from "../validators/employeeValidator.js";

import { handleValidationErrors } from "../validators/validationHandler.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const employeeRoute = Router();

employeeRoute.get("/", verifyToken, getAllEmployees);

employeeRoute.post(
    "/",
    verifyToken,
    createEmployeeValidation,
    handleValidationErrors,
    createEmployee
);

employeeRoute.put(
    "/:id",
    verifyToken,
    updateEmployeeValidation,
    handleValidationErrors,
    updateEmployee
);

export default employeeRoute;
