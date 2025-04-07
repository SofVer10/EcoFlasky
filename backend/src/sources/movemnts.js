import express from "express";
import movementsController from "../controllers/movementsController.js";

const router = express.Router();

router.route("/")
.get(movementsController.getMovements)
.post(movementsController.insertMovements)

router.route("/:id")
.put(movementsController.updateMovements)
.delete(movementsController.deleteMovemnts)

export default router;