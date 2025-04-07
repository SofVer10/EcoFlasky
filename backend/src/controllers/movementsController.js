
//array de funciones del CRUD
const movementsController = {};
import movementsModel from "../models/Movements.js";

//S E L E C T
movementsController.getMovements = async (req, res) => {
    const movements = await movementsModel.find().populate("userId");
    res.json(movements)
}

// I N S E R T
movementsController.insertMovements = async (req, res) => {
    //campos que se van a solicitar en el nuevo esquema creado
    const {userId, paymentMethod, shoppingCartId} = req.body;
    //datos con los que se va a llenar el esquema que creamos
    const newMovements = new movementsModel({userId, paymentMethod, shoppingCartId});
    await newMovements.save();
    res.json({message: "Movements saved"});
}

// U P D A T E 
movementsController.updateMovements = async (req, res) => {
    const  {userId, paymentMethod, shoppingCartId} = req.body;
    const updateMovements = await movementsModel.findByIdAndUpdate(
        req.params.id, {userId, paymentMethod, shoppingCartId}, {new : true}
    );
    res.json({message: "Movements updated"});
}

// D E L E T E
movementsController.deleteMovemnts = async (req, res) => {
    await movementsModel.findByIdAndDelete(req.params.id);
    res.json({message: "Movements deleted"});

}

export default movementsController;