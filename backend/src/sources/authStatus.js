import express from "express";
import { validateAuthToken } from "../middleware/validateAuthToken.js";

const router = express.Router();

// Ruta para verificar el estado de autenticación del usuario
router.get("/status", validateAuthToken(["Client", "Employee", "Admin"]), (req, res) => {
    try {
        // Si el middleware de validación pasa, significa que el usuario está autenticado
        res.status(200).json({
            isAuthenticated: true,
            user: {
                id: req.user.id,
                name: req.user.name,
                email: req.user.email,
                role: req.user.role
            }
        });
    } catch (error) {
        console.error('Error checking auth status:', error);
        res.status(500).json({ 
            message: "Error al verificar el estado de autenticación",
            error: error.message 
        });
    }
});

export default router;