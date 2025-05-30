
import express from "express";
import clientsController from "../controllers/ClientsController.js";

const router = express.Router();


router.route("/")
.get(clientsController.getClient)
.post(clientsController.insertClient)

router.route("/:id")
.put(clientsController.updateClient)
.delete(clientsController.deleteClient)

export default router