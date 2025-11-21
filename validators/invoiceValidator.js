import { body, param } from "express-validator";

export const createInvoiceValidation = [

    body("invoiceDate")
        .notEmpty().withMessage("La date de la facture est obligatoire.")
        .isISO8601().withMessage("La date doit être valide (YYYY-MM-DD)."),

    body("amount")
        .notEmpty().withMessage("Le montant est obligatoire.")
        .isFloat({ gt: 0 }).withMessage("Le montant doit être un nombre positif."),

    body("statut")
        .optional()
        .isIn(["PENDING", "PAID", "CANCELLED"])
        .withMessage("Le statut doit être PENDING, PAID ou CANCELLED.")
];

export const updateInvoiceValidation = [

    param("id")
        .isInt().withMessage("L'ID doit être un entier valide."),

    body("invoiceDate")
        .optional()
        .isISO8601().withMessage("La date doit être valide (YYYY-MM-DD)."),

    body("amount")
        .optional()
        .isFloat({ gt: 0 }).withMessage("Le montant doit être positif."),

    body("statut")
        .optional()
        .isIn(["PENDING", "PAID", "CANCELLED"])
        .withMessage("Le statut doit être PENDING, PAID ou CANCELLED.")
];
