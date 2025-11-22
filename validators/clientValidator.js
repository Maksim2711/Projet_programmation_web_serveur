import { body, param } from "express-validator";

export const createClientValidation = [
  body("name")
    .notEmpty().withMessage("Le nom du client est requis.")
    .isLength({min : 2}).withMessage("Le nom du client doit contenir au moins."),

    body("email").optional()
    .isEmail().withMessage("L'adresse e-mail n'est pas valide."),

    body("phone").optional()
    .isMobilePhone().withMessage("Le numéro de téléphone n'est pas valide."),

    body("address").optional()
    .isLength({ min: 5 }).withMessage("L'adresse doit contenir au moins 5 caractères."),

    body("password")
    .notEmpty().withMessage("Le mot de passe est obligatoire.")
    .isLength({ min: 6 }).withMessage("Le mot de passe doit contenir au moins 6 caractères.")

];

export const updateClientValidation = [
  param("id")
    .isInt({ gt: 0 }).withMessage("L'ID du client doit être un entier positif."),

  body("name").optional()
    .notEmpty().withMessage("Le nom du client ne peut pas être vide.")
    .isLength({ min: 2 }).withMessage("Le nom du client doit contenir au moins 2 caractères."),

  body("email").optional()
    .isEmail().withMessage("L'adresse e-mail n'est pas valide."),

  body("phone").optional()
    .isMobilePhone().withMessage("Le numéro de téléphone n'est pas valide."),

  body("address").optional()
    .isLength({ min: 5 }).withMessage("L'adresse doit contenir au moins 5 caractères."),

    body("password").optional()
    .isLength({ min: 6 }).withMessage("Le mot de passe doit contenir au moins 6 caractères.") 
];