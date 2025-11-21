import { body, param } from "express-validator";

export const createDepartmentValidation = [

    body("name")
        .notEmpty().withMessage("Le nom du département est obligatoire.")
        .isLength({ min: 2 }).withMessage("Le nom doit contenir au moins 2 caractères."),

    body("description")
        .optional()
        .isLength({ min: 5 }).withMessage("La description doit faire au moins 5 caractères.")
];

export const updateDepartmentValidation = [

    param("id")
        .isInt().withMessage("L'ID doit être un entier valide."),

    body("name")
        .optional()
        .isLength({ min: 2 }).withMessage("Le nom doit contenir au moins 2 caractères."),

    body("description")
        .optional()
        .isLength({ min: 5 }).withMessage("La description doit faire au moins 5 caractères.")
];
