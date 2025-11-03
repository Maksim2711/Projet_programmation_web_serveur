import { DataTypes } from "sequelize";
import sequelize from "../config/connexion.js";

const Project = sequelize.define("Project", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(100), allowNull: false },
  startDate: { type: DataTypes.DATE },
  endDate: { type: DataTypes.DATE },
  status: {type: DataTypes.ENUM("PLANNED", "ACTIVE", "COMPLETED")},
});

export default Project;
