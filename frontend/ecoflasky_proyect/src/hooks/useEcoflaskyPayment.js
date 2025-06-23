import { useState } from "react";
import Swal from "sweetalert2";

const useEcoflaskyPayment = (monto, clearCart) => {
  const [formData, setFormData] = useState({
    nombreCliente: "",
    emailCliente: "",
    monto: monto,
  });

  const [datosEnviados, setDatosEnviados] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombreCliente || !formData.emailCliente) {
      Swal.fire("Campos incompletos", "Por favor completa todos los campos.", "warning");
      return;
    }

    setDatosEnviados(true);

    Swal.fire({
      icon: "info",
      title: "Datos enviados",
      text: "Ahora puedes confirmar tu pago simulado.",
      confirmButtonColor: "#7663F2",
    });
  };

  const handleFakePayment = () => {
    Swal.fire({
      icon: "success",
      title: "¡Pago exitoso!",
      text: "Tu pedido ha sido procesado correctamente.",
      confirmButtonColor: "#7663F2",
    }).then(() => {
      clearCart(); // Limpia el carrito
      setDatosEnviados(false);
      setFormData({
        nombreCliente: "",
        emailCliente: "",
        monto: monto,
      });
    });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    handleFakePayment,
    datosEnviados,
  };
};

export default useEcoflaskyPayment;
