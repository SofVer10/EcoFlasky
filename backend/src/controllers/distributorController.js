const ditributorController = {};
import distributorModel from "../models/Distributor.js";

ditributorController.getDistributors = async (req, res) => {
    const distributor = await distributorModel.find();
    res.json(distributor)
}

ditributorController.insertDistributors = async (req, res) => {
    const {name, service, locals, affiliationDate} = req.body;
    const newDistributor = new distributorModel({name, service, locals, affiliationDate});
    await newDistributor.save();
    res.json({message: "Distributor saved"});
}

ditributorController.updateDsitributors = async (req, res) => {
    const  {name, service, locals, affiliationDate} = req.body;
    const updateDsitributors = await distributorModel.findByIdAndUpdate(
        req.params.id, {name, service, locals, affiliationDate}, {new : true}
    );
    res.json({message: "Distributor updated"});
}

ditributorController.deleteDistributor = async (req, res) => {
    await distributorModel.findByIdAndDelete(req.params.id);
    res.json({message: "Dsitributor deleted"});

}

export default ditributorController;