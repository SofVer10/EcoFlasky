
import express from "express";
import RatingsController from "../controllers/RatingsController.js";

const router = express.Router();


router.route("/")
.get(RatingsController.getRating)
.post(RatingsController.insertRating)

router.route("/:id")
.put(RatingsController.updateRating)
.delete(RatingsController.deleteRating)

export default router