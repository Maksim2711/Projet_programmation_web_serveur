import { body, param } from "express-validator";

export const createContractValidation = [
    body("signedDate")
        .notEmpty().withMessage("La date de signature est requise.")
        .isISO8601().withMessage("La date de signature doit être une date valide."),

    body("totalAmount")
        .notEmpty().withMessage("Le montant total est requis.")
        .isFloat({ gt: 0 }).withMessage("Le montant total doit être un nombre positif."),
];

export const updateContractValidation= [
    param("id")
        .isInt({ gt: 0 }).withMessage("L'ID du contrat doit être un entier positif."),

    body("signedDate").optional()
        .notEmpty().withMessage("La date de signature ne peut pas être vide.")
        .isISO8601().withMessage("La date de signature doit être une date valide."),

    body("totalAmount").optional()
        .notEmpty().withMessage("Le montant total ne peut pas être vide.")
        .isFloat({ gt: 0 }).withMessage("Le montant total doit être un nombre positif."),
];
