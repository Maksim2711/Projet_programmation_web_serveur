import { Router } from "express";
import { loginValidation} from "../validators/authValidator.js";
import { login } from "../controllers/authController.js";
import { handleValidationErrors } from "../validators/validationHandler.js";

const authRoute = Router();

authRoute.post("/login", loginValidation, handleValidationErrors, login);

export default authRoute;