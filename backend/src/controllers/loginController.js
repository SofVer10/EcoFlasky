import CustomersModel from "../models/Clients.js"
import EmployeesModel from "../models/employee.js"
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken" // Corregido: era "jswonwebtoken"
import {config} from "../config.js"

const loginController = {};

loginController.login = async (req,res) => {

    const {email,password} = req.body;

    try {

        //Validamos los 3 posibles niveles
        //1 admin, 2, Empleado, 3, Cliente
     let userFound; //Valida si se encontro el usuario
     let userType; //Indica el tipo de usuario

     //1-Admin
     //Verifiquemos si quien esta ingresando es admin
     
     if(email === config.emailAdmin.email && password === config.emailAdmin.password) {

        userType = "Admin"
        userFound = {_id:"Admin"}
     }else {

             //2- Empleado

        userFound = await EmployeesModel.findOne({email})
        if (userFound) {
            userType = "Employee";
        } else {
            //3- Cliente
            userFound = await CustomersModel.findOne({email})
            if (userFound) {
                userType = "Customer";
            }
        }
     }

     if(!userFound){
        return res.status(401).json({message: "User not found", success: false})
     }

     //si no es administrador validamos la contraseña
     if(userType !== "Admin") {
        const isMatch = await bcrypt.compare(password, userFound.password);
        console.log("password encontrada" + userFound.password )
                console.log("password insertada" + password )

        if (!isMatch) {
            return res.status(401).json({message: "Invalid Password", success: false})
        }
     }

     //Generar el token
     jsonwebtoken.sign(
        //1- Que se va a guardar
        {id: userFound._id, userType},
        //2 Clave secreta
        config.JWT.secret,
        //3-cuando expira
        {expiresIn: config.JWT.expiresIN},
        //4- Función flecha
        (error, token) => {
            if (error) {
                console.log(error)
                return res.status(500).json({message: "Error generating token", success: false})
            }
            
            res.cookie("authToken", token)
            
            // Enviar información del tipo de usuario para la redirección
            res.json({
                message: "Login successful", 
                success: true,
                userType: userType,
                redirectTo: userType === "Customer" ? "/inicio" : "/bienvenidaAdmin"
            })
        }
     )

    } catch(error) {
        console.log(error)
        res.status(500).json({message: "Server error", success: false})
    }
   

// Middleware para verificar token desde cookie
const verifyTokenFromCookie = (req, res, next) => {
    const token = req.cookies.authToken;
    
    if (!token) {
        return res.status(401).json({ 
            isAuthenticated: false, 
            message: "No token provided" 
        });
    }

    try {
        const decoded = jsonwebtoken.verify(token, config.JWT.secret);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ 
            isAuthenticated: false, 
            message: "Invalid token" 
        });
    }
};

// Endpoint para verificar sesión
loginController.verifySession = [verifyTokenFromCookie, async (req, res) => {
    try {
        const { id, userType } = req.user;
        
        // Aquí puedes hacer validaciones adicionales si es necesario
        // Por ejemplo, verificar si el usuario aún existe en la base de datos
        
        res.json({
            isAuthenticated: true,
            user: { id },
            userType: userType
        });
    } catch (error) {
        res.status(500).json({
            isAuthenticated: false,
            message: "Server error"
        });
    }
}];

// Endpoint para logout (opcional)
loginController.logout = (req, res) => {
    res.clearCookie("authToken");
    res.json({ 
        success: true, 
        message: "Logout successful" 
    });
};

}


export default loginController