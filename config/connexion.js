import { Sequelize } from "sequelize";
import dotenv from "dotenv";

const ENV = dotenv.config().parsed;
const connexion = new Sequelize(
  ENV.DB_NAME,
  ENV.DB_USER,
  ENV.DB_PASSWORD,
  {
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT,
  }
);

try {
  await connexion.authenticate();
  console.log("Connexion à la base de données réussie.");
} catch (error) {
  console.error("Impossible de se connecter à la base de données :", error);
}

export default connexion;