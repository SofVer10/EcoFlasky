//Importamos el modelo de la base dre datos
import EmployeeModel from "../models/employee.js"
import bcryptjs from "bcrypt"; //Encriptar contraseña o correos
import jsonwebtoken from "jsonwebtoken" //Generar tokens
//cookie-parse sirve para generar cookies
import {config} from "../config.js" //Se importa la configuración del proyecto
//creamos un array de funciones
const registerEmployessController = {}


registerEmployessController.register = async (req, res) => {

    //Pedimos todos los datos
    const {name,password, email, speciality, isVerified} = req.body;

    try{
//Verificamos si el empleado ya existe
        const doesEmployeeExist = await EmployeeModel.findOne({email}); //Se busca el empleado por el email

        if (doesEmployeeExist) {

            return res.json({message : "Employee already exists"})
        }
        //Encriptar o Hashear la contraseña

        const passwordHash = await bcryptjs.hash(password, 10); //este 10 significa cuantas veces se va a encriptar

        //Guardar el empleado en la base de datos
 const newEmployee = new EmployeeModel({name,  
    password: passwordHash,
    email, //Se cambia  la contraseña a que se guarde la contraseña encriptada
    speciality,
      isVerified});

    await newEmployee.save();
    res.json ({message: "Employee saved in Register withoutcookie"});

   
    jsonwebtoken.sign(
{id: newEmployee._id},

 config.JWT.secret,

 { expiresIn: 
    config.JWT.expiresIN},
    
(error, token) => {
    if(error) console.log(error);
    res.cookie("authToken", token);
    res.json ({message: "Empleado registrado"})

}

    )
    }

catch (error) {
console.log(error);
res.json ({message: "Error al registrar empleado"})

}


}

export default registerEmployessController