
import express from "express";
import FavoritesController from "../controllers/FavoritesController.js";

const router = express.Router();


router.route("/")
.get(FavoritesController.getFavorite)
.post(FavoritesController.insertFavorite)

router.route("/:id")
.put(FavoritesController.updateFavorite)
.delete(FavoritesController.deleteFavorite)

export default router