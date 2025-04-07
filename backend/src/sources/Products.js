
import express from "express";
import ProductsController from "../controllers/ProductsController.js";

const router = express.Router();


router.route("/")
.get(ProductsController.getProducts)
.post(ProductsController.insertProduct)

router.route("/:id")
.put(ProductsController.updateProduct)
.delete(ProductsController.deleteProduct)

export default router