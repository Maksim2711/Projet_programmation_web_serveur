import { Router } from "express";
import { getAllContracts,createContract,updateContract} from "../controllers/ContractController.js";

import {createContractValidation,updateContractValidation} from "../validators/contractValidator.js";

import { handleValidationErrors } from "../validators/validationHandler.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const contractRoute = Router();

contractRoute.get("/", verifyToken, getAllContracts);

contractRoute.post(
    "/",
    verifyToken,
    createContractValidation,
    handleValidationErrors,
    createContract
);

contractRoute.put(
    "/:id",
    verifyToken,
    updateContractValidation,
    handleValidationErrors,
    updateContract
);

export default contractRoute;
