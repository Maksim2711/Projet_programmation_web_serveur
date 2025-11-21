import Contrat from "../models/Contract.js";

export const getAllContracts = async (req, res) => {
  try {
    const contracts = await Contrat.findAll();
    res.status(200).json(contracts);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve contracts." });
  }
};