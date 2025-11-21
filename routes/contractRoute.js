import contract from "../models/Contract.js";
import {getAllContracts} from "../controllers/ContractController.js";
import { Router } from "express";

const contractRoute = Router();

contractRoute.get("/", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const contracts = await contract.findAndCountAll({
            limit: limit,
            offset: offset
        });

        res.status(200).json({
            totalItems: contracts.count,
            totalPages: Math.ceil(contracts.count / limit),
            currentPage: page,
            data: contracts.rows
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default contractRoute;