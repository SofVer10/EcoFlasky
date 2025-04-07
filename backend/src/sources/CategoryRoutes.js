import express from "express"
import categoryController from "../controllers/CategoryController.js"

const router = express.Router();
router.route("/")
.get(categoryController.getCategory)
.post(categoryController.insertCategory)
router.route("/:id")
.put(categoryController.updateCatogry)
.delete(categoryController.deleteCategory)

export default router;
