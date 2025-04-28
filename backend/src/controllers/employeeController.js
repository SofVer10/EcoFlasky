const employeeController = {};

import Employee from "../models/employee.js";

employeeController.getEmployee = async (req,res) => {

    const Employees = await Employee.find().populate("speciality");
    res.json(Employees)
   
}

employeeController.insertEmployee = async (req,res) => {

    const {name, password,email ,speciality, isVerified} = req.body;
    const newEmployee = new Employee({name, password,email, speciality, isVerified})
    await newEmployee.save();
    res.json ({message: "Employee saved"});
}

employeeController.updateEmployee = async (req,res) => {
    const {name, password,email, speciality, isVerified} = req.body;
     const updateEmployee = await Employee.findByIdAndUpdate(req.params.id,{name, password,email, speciality, isVerified} , {new:true})
     res.json ({message: "Employee updated"});

}

employeeController.deleteEmployee = async (req,res) => {

    await Employee.findByIdAndDelete(req.params.id);
    res.json ({message: "Employee deleted"});

}

export default employeeController;