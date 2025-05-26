
import express from "express";
import distributorController from "../controllers/distributorController.js";

const router = express.Router();


router.route("/")
.get(distributorController.getDistributors)
.post(distributorController.insertDistributors)

router.route("/:id")
.put(distributorController.updateDsitributors)
.delete(distributorController.deleteDistributor);

export default router;