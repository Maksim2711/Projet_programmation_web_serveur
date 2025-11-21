import { body, param } from "express-validator";

export const createEmployeeValidation = [

    body("firstName")
        .notEmpty().withMessage("Le prénom est obligatoire.")
        .isLength({ min: 2 }).withMessage("Le prénom doit contenir au moins 2 caractères."),

    body("lastName")
        .notEmpty().withMessage("Le nom est obligatoire.")
        .isLength({ min: 2 }).withMessage("Le nom doit contenir au moins 2 caractères."),

    body("email")
        .optional()
        .isEmail().withMessage("L'email doit être valide."),

    body("phone")
        .optional()
        .isLength({ min: 8 }).withMessage("Le numéro doit contenir au moins 8 caractères."),

    body("hireDate")
        .optional()
        .isISO8601().withMessage("La date d'embauche doit être une date valide (YYYY-MM-DD).")
];

export const updateEmployeeValidation = [

    param("id")
        .isInt().withMessage("L'ID doit être un entier valide."),

    body("firstName")
        .optional()
        .isLength({ min: 2 }).withMessage("Le prénom doit contenir au moins 2 caractères."),

    body("lastName")
        .optional()
        .isLength({ min: 2 }).withMessage("Le nom doit contenir au moins 2 caractères."),

    body("email")
        .optional()
        .isEmail().withMessage("L'email doit être valide."),

    body("phone")
        .optional()
        .isLength({ min: 8 }).withMessage("Le numéro doit contenir au moins 8 caractères."),

    body("hireDate")
        .optional()
        .isISO8601().withMessage("La date d'embauche doit être valide (YYYY-MM-DD).")
];
