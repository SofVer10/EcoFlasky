const clientController = {};

import Client from "../models/Clients.js";

clientController.getClient = async (req,res) => {

    const clients = await Client.find();
    res.json(clients)
   
}

clientController.insertClient = async (req,res) => {

    const {name, lastname, email, password, Cellphone, isVerified} = req.body;
    const newClient = new Client({name, lastname, email, password, Cellphone, isVerified})
    await newClient.save();
    res.json ({message: "client saved"});
}

clientController.updateClient = async (req,res) => {
    const {name, lastname, email, password, Cellphone, isVerified} = req.body;
     const updateClient = await Client.findByIdAndUpdate(req.params.id,{name, lastname, email, password, Cellphone, isVerified} , {new:true})
     res.json ({message: "client upsdated"});

}

clientController.deleteClient = async (req,res) => {

    await Client.findByIdAndDelete(req.params.id);
    res.json ({message: "client deleted"});

}

export default clientController;