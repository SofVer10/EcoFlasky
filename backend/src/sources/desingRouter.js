import express from "express"
import DesingController from "../controllers/DesingController.js"

const router = express.Router();
router.route("/")
.get(DesingController.getDesing)
.post(DesingController.insertDesing)
router.route("/:id")
.put(DesingController.updateDesing)
.delete(DesingController.deleteDesing)

export default router;