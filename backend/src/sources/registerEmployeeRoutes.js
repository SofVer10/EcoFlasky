
import express from "express";
import RegisterEmployee from "../controllers/registerEmployeeController.js"
const router = express.Router();


router.route("/").post(RegisterEmployee.register);


export default router