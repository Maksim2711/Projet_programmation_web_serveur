import { DataTypes } from "sequelize";
import sequelize from "../config/connexion.js";

const Employee = sequelize.define("Employee", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  firstName: { type: DataTypes.STRING(100), allowNull: false },
  lastName: { type: DataTypes.STRING(100), allowNull: false },
  email: { type: DataTypes.STRING(100), unique: true },
  phone: { type: DataTypes.STRING(20) },
  hireDate: { type: DataTypes.DATE },
});

export default Employee;
