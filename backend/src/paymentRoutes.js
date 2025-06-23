import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Obtener token de Wompi
router.post("/token", async (req, res) => {
  try {
    const response = await fetch("https://id.wompi.sv/connect/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        audience: "wompi_api",
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener token" });
  }
});

// Pago simulado
router.post("/test", async (req, res) => {
  const { token, formData } = req.body;
  try {
    const response = await fetch("https://api.wompi.sv/TransaccionCompra/TokenizadaSin3Ds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Error al procesar pago" });
  }
});

export default router;
