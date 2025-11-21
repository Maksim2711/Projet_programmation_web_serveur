import { Router } from "express";
import {getAllClients,createClient,updateClient} from "../controllers/ClientController.js";
import {createClientValidation, updateClientValidation} from "../validators/clientValidator.js";

import { handleValidationErrors } from "../validators/validationHandler.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const clientRoute = Router();

clientRoute.get("/", verifyToken,
    getAllClients);

clientRoute.post(
    "/",
    createClientValidation,
    handleValidationErrors,
    createClient
);

clientRoute.put(
    "/:id",
    verifyToken,
    updateClientValidation,
    handleValidationErrors,
    updateClient
);

export default clientRoute;
