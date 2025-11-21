import { body, param } from "express-validator";

export const createProjectValidation = [

    body("name")
        .notEmpty().withMessage("Le nom du projet est obligatoire.")
        .isLength({ min: 2 }).withMessage("Le nom doit contenir au moins 2 caractères."),

    body("startDate")
        .optional()
        .isISO8601().withMessage("La date de début doit être valide (YYYY-MM-DD)."),

    body("endDate")
        .optional()
        .isISO8601().withMessage("La date de fin doit être valide (YYYY-MM-DD)."),

    body("status")
        .optional()
        .isIn(["PLANNED", "ACTIVE", "COMPLETED"])
        .withMessage("Le statut doit être PLANNED, ACTIVE ou COMPLETED.")
];

export const updateProjectValidation = [

    param("id")
        .isInt().withMessage("L'ID doit être un entier valide."),

    body("name")
        .optional()
        .isLength({ min: 2 }).withMessage("Le nom doit contenir au moins 2 caractères."),

    body("startDate")
        .optional()
        .isISO8601().withMessage("La date de début doit être valide (YYYY-MM-DD)."),

    body("endDate")
        .optional()
        .isISO8601().withMessage("La date de fin doit être valide (YYYY-MM-DD)."),

    body("status")
        .optional()
        .isIn(["PLANNED", "ACTIVE", "COMPLETED"])
        .withMessage("Le statut doit être PLANNED, ACTIVE ou COMPLETED.")
];
