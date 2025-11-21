import { Router } from "express";
import {getAllProjects,createProject,updateProject} from "../controllers/ProjectController.js";

import {createProjectValidation,updateProjectValidation} from "../validators/projectValidator.js";

import { handleValidationErrors } from "../validators/validationHandler.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const projectRoute = Router();

projectRoute.get("/", verifyToken, getAllProjects);

projectRoute.post(
    "/",
    verifyToken,
    createProjectValidation,
    handleValidationErrors,
    createProject
);

projectRoute.put(
    "/:id",
    verifyToken,
    updateProjectValidation,
    handleValidationErrors,
    updateProject
);

export default projectRoute;
