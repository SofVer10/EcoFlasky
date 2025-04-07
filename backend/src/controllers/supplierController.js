const supplierController = {};
import supplierModel from "../models/supplierM.js";

supplierController.getSupplier = async (req, res) => {
    const supplier = await supplierModel.find();
    res.json(supplier)
}

supplierController.insertSupplier = async (req, res) => {
    const {name, cellphone, lastShipDate, usualShipDate} = req.body;
    const newSupplier = new supplierModel({name, cellphone, lastShipDate, usualShipDate});
    await newSupplier.save();
    res.json({message: "Supplier saved"});
}

supplierController.updateSupplier = async (req, res) => {
    const  {name, cellphone,lastShipDate,usualShipDate } = req.body;
    const updateDsitributors = await supplierModel.findByIdAndUpdate(
        req.params.id, {name, cellphone, lastShipDate, usualShipDate}, {new : true}
    );
    res.json({message: "Supplier updated"});
}


supplierController.deleteSupplier= async (req, res) => {
    await supplierModel.findByIdAndDelete(req.params.id);
    res.json({message: "Supplier deleted"});

}

export default supplierController;