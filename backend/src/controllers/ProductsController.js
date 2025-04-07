/* 

name
description
price
distributorId 
suplierId 
categoryId
stock
image
*/
const productsController = {};

import ProductsModel from "../models/Products.js";

productsController.getProducts = async (req,res) => {

    const products = await ProductsModel.find().populate("distributorId").populate("suplierId").populate("categoryId");
    res.json(products)
   
}

productsController.insertProduct = async (req,res) => {

    const {name, description, price, distributorId, suplierId, categoryId, stock, image,isVerified } = req.body;
    const newProduct = new ProductsModel({name, description, price, distributorId, suplierId, categoryId, stock, image,isVerified })
    await newProduct.save();
    res.json ({message: "product saved"});
}

productsController.updateProduct = async (req,res) => {
    const {name, description, price, distributorId, suplierId, categoryId, stock, image,isVerified } = req.body;
     const updatedProduct = await ProductsModel.findByIdAndUpdate(req.params.id,{name, description, price, distributorId, suplierId, categoryId, stock, image,isVerified } , {new:true})
     res.json ({message: "product upsdated"});

}

productsController.deleteProduct = async (req,res) => {

    await ProductsModel.findByIdAndDelete(req.params.id);
    res.json ({message: "product deleted"});

}

export default productsController;