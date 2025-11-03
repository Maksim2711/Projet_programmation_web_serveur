import { DataTypes } from "sequelize";
import sequelize from "../config/connexion.js";

const Contrat = sequelize.define("Contrat", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  signedDate: { type: DataTypes.DATE, allowNull: false },
  totalAmount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
});

export default Contrat;
