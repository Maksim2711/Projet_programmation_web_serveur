import Client from "../models/Client.js";
import bcrypt from "bcryptjs";

export const getAllClients = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { count, rows } = await Client.findAndCountAll({
      limit: limit,
      offset: offset
    });

    res.status(200).json({
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: rows
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve clients." });
  }
};

export const createClient = async (req, res) => {
  try {
    const { name, address, email, phone, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const client = await Client.create({ name, address, email, phone, password: hashedPassword });
    res.status(201).json({ message : "Client créé avec succès", data: client });
  } catch (error) {
    res.status(500).json({ message : error.message });
  }
};

export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByPk(id);
    if (!client) {
      return res.status(404).json({ message: "Client introuvable" });
    }

    await client.update(req.body);
    res.status(200).json({ 
      message: "Client mis à jour avec succès",
      data: client });
  } catch (error) {
    res.status(500).json({ message : error.message });
  }
};