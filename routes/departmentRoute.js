import { Router } from "express";
import {getAllDepartments,createDepartment,updateDepartment} from "../controllers/departmentController.js";

import {createDepartmentValidation,updateDepartmentValidation} from "../validators/departmentValidator.js";

import { handleValidationErrors } from "../validators/validationHandler.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const departmentRoute = Router();

departmentRoute.get("/", verifyToken, getAllDepartments);

departmentRoute.post(
    "/",
    verifyToken,
    createDepartmentValidation,
    handleValidationErrors,
    createDepartment
);

departmentRoute.put(
    "/:id",
    verifyToken,
    updateDepartmentValidation,
    handleValidationErrors,
    updateDepartment
);

export default departmentRoute;
