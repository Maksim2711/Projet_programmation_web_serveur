import Client from "../models/Client.js";
import {getAllClients} from "../controllers/ClientController.js";
import { Router } from "express";

const clientRoute = Router();

clientRoute.get("/", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const clients = await Client.findAndCountAll({
            limit: limit,
            offset: offset
        });

        res.status(200).json({
            totalItems: clients.count,
            totalPages: Math.ceil(clients.count / limit),
            currentPage: page,
            data: clients.rows
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default clientRoute;
