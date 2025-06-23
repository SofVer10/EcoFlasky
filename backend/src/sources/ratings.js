
import express from "express";
import RatingsController from "../controllers/RatingsController.js";

const router = express.Router();


router.route("/")
.get(RatingsController.get)
.post(RatingsController.post)

router.route("/:id")
.put(RatingsController.put)
.delete(RatingsController.delete)

export default router