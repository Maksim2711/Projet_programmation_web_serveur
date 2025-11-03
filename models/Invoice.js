import { DataTypes } from "sequelize";
import sequelize from "../config/connexion.js";

const Invoice = sequelize.define("Invoice", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  invoiceDate: { type: DataTypes.DATE, allowNull: false },
  amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  statut: {type: DataTypes.ENUM("PENDING", "PAID", "CANCELLED")},
});

export default Invoice;
