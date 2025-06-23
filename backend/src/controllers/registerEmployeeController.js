import EmployeeModel from "../models/Employee.js";
import bcrypt from "bcrypt"; // Encriptar contraseña
import jsonwebtoken from "jsonwebtoken"; // Generar tokens
import { config } from "../config.js"; // Se importa la configuración del proyecto

const registerEmployeesController = {};

registerEmployeesController.register = async (req, res) => {
    const { name, password, email, speciality, isVerified } = req.body;

    try {
        // Verificamos si el empleado ya existe
        const doesEmployeeExist = await EmployeeModel.findOne({ email });

        if (doesEmployeeExist) {
            return res.status(400).json({ message: "Employee already exists" });
        }

        // Encriptar la contraseña
        const passwordHash = await bcrypt.hash(password, 10);

        // Guardar el empleado en la base de datos
        const newEmployee = new EmployeeModel({
            name,
            password: passwordHash,
            email,
            speciality,
            isVerified
        });

        await newEmployee.save();

        // Generar el token
        const token = jsonwebtoken.sign(
            { id: newEmployee._id },
            config.JWT.secret,
            { expiresIn: "30d" } // Asegúrate de que esto esté correcto
        );

        // Establecer la cookie con el token
        res.cookie("authToken", token, { httpOnly: true }); // Asegúrate de que la cookie sea segura
        res.status(201).json({ message: "Empleado registrado", token }); // Enviar el token en la respuesta si es necesario
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al registrar empleado" });
    }
};

export default registerEmployeesController;
