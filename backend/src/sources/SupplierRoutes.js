import express from "express"
import supplierController from "../controllers/supplierController.js"

const router = express.Router();
router.route("/")
.get(supplierController.getSupplier)
.post(supplierController.insertSupplier)
router.route("/:id")
.put(supplierController.updateSupplier)
.delete(supplierController.deleteSupplier)

export default router;
