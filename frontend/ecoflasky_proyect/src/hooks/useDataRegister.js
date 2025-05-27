import { useState } from "react";
import { toast } from "react-hot-toast";

const useRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [loading, setLoading] = useState(false);

  const API = "http://localhost:4000/api/registerEmployee"; // Ajusta según tu backend

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Validaciones básicas
    if (!name || !email || !password || !speciality) {
      toast.error("Por favor, completa todos los campos");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Por favor, ingresa un correo válido");
      return;
    }

    if (password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          name, 
          email, 
          password, 
          speciality,
          isVerified: false // Por defecto false
        }),
        credentials: "include", // Para incluir cookies
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error en el registro");
      }

      if (data.message === "Empleado registrado") {
        toast.success("¡Registro exitoso! Empleado creado correctamente");
        
        // Limpiar formulario
        resetForm();
        
        // Aquí puedes redirigir al login o dashboard
        console.log("Empleado registrado exitosamente");
        
      } else if (data.message === "Employee already exists") {
        toast.error("Este correo ya está registrado");
      } else {
        toast.error(data.message || "Error al registrar empleado");
      }
    } catch (error) {
      console.error("Error en registro:", error);
      toast.error(error.message || "Error al registrar empleado");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setSpeciality("");
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    speciality,
    setSpeciality,
    handleRegister,
    resetForm,
    loading,
  };
};

export default useRegister;