
import express from "express";
import specialityController from "../controllers/specialityController.js";

const router = express.Router();


router.route("/")
.get(specialityController.getspeciality)
.post(specialityController.insertspeciality)

router.route("/:id")
.put(specialityController.updatespeciality)
.delete(specialityController.deletespeciality)

export default router