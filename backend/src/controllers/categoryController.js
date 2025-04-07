const categoryController  = {};
import categoryModel from "../models/category.js"

categoryController.getCategory = async (req, res) => {
    const category = await categoryModel.find();
    res.json(category)
}

categoryController.insertCategory = async (req, res) => {
    const{name, description} = req.body;
    const newCategory = new categoryModel({name, description});
    await newCategory.save()
    res.json({message: "Category saved"});
}

categoryController.updateCatogry = async (req, res) =>{
    const{name, description} = req.body;
    const updateCategory = await categoryModel.findByIdAndUpdate(
        req.params.id, {name, description}, {new: true}
    );
    res.json({message: "Category update"})
}

categoryController.deleteCategory = async (req,res) =>{
    await categoryModel.findByIdAndDelete(req.params.id);
    res.json({message: "Category delete"})
}

export default categoryController;
