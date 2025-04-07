
const FavoriteController = {};

import favoriteModel from "../models/Favorites.js";

FavoriteController.getFavorite = async (req,res) => {

    const Favorites = await favoriteModel.find().populate("userId").populate("productId");
    res.json(Favorites)
   
}

FavoriteController.insertFavorite = async (req,res) => {

    const {userId, productId, amount} = req.body;
    const newFavorite = new favoriteModel({userId, productId, amount})
    await newFavorite.save();
    res.json ({message: "Favorite saved"});
}

FavoriteController.updateFavorite = async (req,res) => {
    const {userId, productId, amount} = req.body;
     const updatedFavorite = await favoriteModel.findByIdAndUpdate(req.params.id,{userId, productId, amount} , {new:true})
     res.json ({message: "Favorite upsdated"});

}

FavoriteController.deleteFavorite = async (req,res) => {

    await favoriteModel.findByIdAndDelete(req.params.id);
    res.json ({message: "Favorite deleted"});

}

export default FavoriteController;          

  
 
 
 
 
 