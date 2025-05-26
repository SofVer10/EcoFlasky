
import express from "express";
import distributorController from "../controllers/distributorController.js";

//Función que ayuda a crear metodos
const router = express.Router();


//Se conecta automaticamente a la ruta con solo colocar "/"
router.route("/")
.get(distributorController.getDistributors)
.post(distributorController.insertDistributors)

//Actualizar y eliminar utilizan id por eso la ruta es diferente
router.route("/:id")
.put(distributorController.updateDsitributors)
.delete(distributorController.deleteDistributor);

export default router;