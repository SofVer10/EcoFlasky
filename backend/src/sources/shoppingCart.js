import express from "express";
import shoppingCartController from "../controllers/shoppingCartController.js";

const router = express.Router();

router.route("/")
.get(shoppingCartController.getshoppingCart)
.post(shoppingCartController.insertshoppingCart)

router.route("/:id")
.put(shoppingCartController.updateshoppingCart)
.delete(shoppingCartController.deleteshoppingCart)

export default router;