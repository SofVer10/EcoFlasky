
const specialityController = {};

import specialityModel from "../models/speciality.js";

specialityController.getspeciality = async (req,res) => {

    const specialitys = await specialityModel.find()
    res.json(specialitys)
   
}

specialityController.insertspeciality = async (req,res) => {

    const {speciality} = req.body;
    const newspeciality = new specialityModel({speciality})
    await newspeciality.save();
    res.json ({message: "speciality saved"});
}

specialityController.updatespeciality = async (req,res) => {
    const {speciality} = req.body;
     const updatedspeciality = await specialityModel.findByIdAndUpdate(req.params.id,{speciality} , {new:true})
     res.json ({message: "speciality updated"});

}

specialityController.deletespeciality = async (req,res) => {

    await specialityModel.findByIdAndDelete(req.params.id);
    res.json ({message: "speciality deleted"});

}

export default specialityController;          

  
 
 
 
 
 