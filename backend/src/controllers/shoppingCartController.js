
//array de funciones del CRUD
const shoppingCartController = {};
import shoppingCartModel from "../models/ShoppingCart.js";

//S E L E C T
shoppingCartController.getshoppingCart = async (req, res) => {
    const shoppingCart = await shoppingCartModel.find().populate("userId").populate("productsId");
    res.json(shoppingCart)
}

// I N S E R T
shoppingCartController.insertshoppingCart = async (req, res) => { 
    //campos que se van a solicitar en el nuevo esquema creado
    const {productsId, userId, amount, total} = req.body;
    //datos con los que se va a llenar el esquema que creamos
    const newshoppingCart = new shoppingCartModel({productsId, userId, amount, total});
    await newshoppingCart.save();
    res.json({message: "Shopping Carts saved"});
}

// U P D A T E 
shoppingCartController.updateshoppingCart = async (req, res) => {
    const  {productsId, userId, amount, total} = req.body;
    const updateshoppingCart = await movementsModel.findByIdAndUpdate(
        req.params.id, {productsId, userId, amount, total}, {new : true}
    );
    res.json({message: "Shopping Cart updated"});
}

// D E L E T E
shoppingCartController.deleteshoppingCart = async (req, res) => {
    await shoppingCartModel.findByIdAndDelete(req.params.id);
    res.json({message: "Shopping Carts deleted"});

}

export default shoppingCartController;