import Employee from "../models/Employee.js";

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve employees." });
  }
};