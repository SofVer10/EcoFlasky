const DesingController = {};
import desingsM from "../models/desingsM.js";

DesingController.getDesing = async (req, res) => {
    const desing = await desingsM.find();
    res.json(desing)
}

DesingController.insertDesing = async (req, res) => {
    const {userId, desing} = req.body;
    const newDistributor = new desingsM({userId, desing});
    await newDistributor.save();
    res.json({message: "Desings saved"});
}

DesingController.updateDesing = async (req, res) => {
    const  {userId,desing} = req.body;
    const updateDsitributors = await desingsM.findByIdAndUpdate(
        req.params.id, {userId, desing}, {new : true}
    );
    res.json({message: "Desings updated"});
}

DesingController.deleteDesing = async (req, res) => {
    await desingsM.findByIdAndDelete(req.params.id);
    res.json({message: "Desings deleted"});

}

export default DesingController;