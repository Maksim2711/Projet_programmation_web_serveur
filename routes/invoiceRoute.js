import { Router } from "express";
import {getAllInvoices,createInvoice,updateInvoice} from "../controllers/InvoiceController.js";

import {createInvoiceValidation, updateInvoiceValidation} from "../validators/invoiceValidator.js";

import { handleValidationErrors } from "../validators/validationHandler.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const invoiceRoute = Router();

invoiceRoute.get("/", verifyToken, getAllInvoices);

invoiceRoute.post(
    "/",
    verifyToken,
    createInvoiceValidation,
    handleValidationErrors,
    createInvoice
);

invoiceRoute.put(
    "/:id",
    verifyToken,
    updateInvoiceValidation,
    handleValidationErrors,
    updateInvoice
);

export default invoiceRoute;
