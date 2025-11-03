import Department from "./Department.js";
import Employee from "./Employee.js";
import Project from "./Project.js";
import Client from "./Client.js";
import Contrat from "./Contrat.js";
import Invoice from "./Invoice.js";

Department.hasMany(Employee, { foreignKey: "departmentId" });
Employee.belongsTo(Department, { foreignKey: "departmentId" });

Employee.belongsToMany(Project, { foreignKey: "employeeId" });
Project.belongsToMany(Employee, { foreignKey: "employeeId" });

Client.hasMany(Project, { foreignKey: "clientId" });
Project.belongsTo(Client, { foreignKey: "clientId" });

Project.hasOne(Contrat, { foreignKey: "projectId" });
Contrat.belongsTo(Project, { foreignKey: "projectId" });

Contrat.hasMany(Invoice, { foreignKey: "contratId" });
Invoice.belongsTo(Contrat, { foreignKey: "contratId" });

export { Department, Employee, Project, Client, Contrat, Invoice };