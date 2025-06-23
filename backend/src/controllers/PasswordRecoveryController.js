import jsonwebToken, { decode } from "jsonwebtoken" // token 
import bcrypt from "bcrypt" //Encriptar contraseña

import clientsModel from "../models/Clients.js";
import employeeModel from "../models/Employee.js";
import { sendEmail, HTMLRecoveryEmail } from "../utils/mailPasswordRecovery.js";
import { config } from "../config.js";

//1- Crear un array de funciones
const passwordRecoveryController = {};

passwordRecoveryController.requestCode = async (req, res) => {
    const { email } = req.body;

    try {
        let userFound;
        let userType;

        userFound = await clientsModel.findOne({ email })
        if (userFound) {
            userType = "client"
        } else {
            userFound = await employeeModel.findOne({ email });
            userType = "employee" // Cambiado a minúscula para consistencia
        }
        if (!userFound) {
            return res.status(404).json({ message: "User not found" }) // Agregado status 404
        }

        // Generar un código de 5 dígitos correctamente
        const code = Math.floor(10000 + Math.random() * 90000).toString() // CORREGIDO: 90000 en lugar de 60000

        // generar un token
        const token = jsonwebToken.sign(
            // 1- ¿Qué voy a guardar?
            {
                email,
                code,
                userType,
                verified: false
            },
            // 2- secret key
            config.JWT.secret,
            // 3 ¿Cuándo expira?
            { expiresIn: "25m" }
        );

        res.cookie("tokenRecoveryCode", token, { maxAge: 25 * 60 * 1000 });

        // Enviamos el correo
        await sendEmail(
            email,
            "Password recovery Code",
            `your verification code is ${code}`,
            HTMLRecoveryEmail(code)
        );

        res.json({ message: "verification code sent" });

    } catch (error) {
        console.log("error requestCode: " + error)
        res.status(500).json({ message: "Internal server error" }); // Agregado manejo de error HTTP
    }
};

passwordRecoveryController.verifyCode = async (req, res) => {
    const { code } = req.body;
    
    try {
        const token = req.cookies.tokenRecoveryCode;

        if (!token) {
            return res.status(400).json({ message: "No token found" }); // Verificar si existe el token
        }

        const decoded = jsonwebToken.verify(token, config.JWT.secret)

        // CORREGIDO: Comparación estricta y logging para debug
        console.log("Código recibido:", code);
        console.log("Código esperado:", decoded.code);
        console.log("Tipos:", typeof code, typeof decoded.code);

        if (decoded.code !== code) {
            return res.status(400).json({ message: "Invalid Code" }); // Agregado status 400
        }

        const newToken = jsonwebToken.sign(
            // 1-que vamos a guardar
            {
                email: decoded.email,
                code: decoded.code,
                userType: decoded.userType,
                verified: true
            },
            // 2-secret key
            config.JWT.secret,
            // 3-¿Cuando vence?
            { expiresIn: "25m" }
        )
        
        res.cookie("tokenRecoveryCode", newToken, { maxAge: 25 * 60 * 1000 });
        res.json({ message: "Code verified successfully" });

    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Invalid token" });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Token expired" });
        }
        console.log("error verifyCode: " + error)
        res.status(500).json({ message: "Internal server error" });
    }
};

passwordRecoveryController.newPassword = async (req, res) => {
    const { newPassword } = req.body;
    
    try {
        // decodificar el token
        const token = req.cookies.tokenRecoveryCode

        if (!token) {
            return res.status(400).json({ message: "No token found" });
        }

        const decoded = jsonwebToken.verify(token, config.JWT.secret)

        if (!decoded.verified) {
            return res.status(400).json({ message: "Code not verified" });
        }

        let user;
        const { email } = decoded;
        const hashedPassword = await bcrypt.hash(newPassword, 10)

        // Guardamos la nueva contraseña en la base de datos
        if (decoded.userType === "client") { // Cambiado == por ===
            user = await clientsModel.findOneAndUpdate(
                { email },
                { password: hashedPassword },
                { new: true }
            )
        } else if (decoded.userType === "employee") { // Cambiado == por === y "Employee" por "employee"
            user = await employeeModel.findOneAndUpdate(
                { email },
                { password: hashedPassword },
                { new: true }
            )
        }

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.clearCookie("tokenRecoveryCode")
        res.json({ message: "Password updated" })

    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Invalid token" });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Token expired" });
        }
        console.log("error newPassword: " + error)
        res.status(500).json({ message: "Internal server error" });
    }
}

export default passwordRecoveryController