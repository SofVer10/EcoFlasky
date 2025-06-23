import React from "react";
import useEcoflaskyPayment from "../hooks/useEcoflaskyPayment";

const Pay = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    handleFakePayment,
    datosEnviados,
  } = useEcoflaskyPayment();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
          Simular Pago
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="nombreCliente"
            value={formData.nombreCliente}
            onChange={handleChange}
            placeholder="Nombre"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            name="emailCliente"
            type="email"
            value={formData.emailCliente}
            onChange={handleChange}
            placeholder="Correo"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            name="monto"
            type="number"
            value={formData.monto}
            onChange={handleChange}
            placeholder="Monto"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Enviar Datos
          </button>
        </form>

        {datosEnviados && (
          <button
            onClick={handleFakePayment}
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded"
          >
            Confirmar Pago
          </button>
        )}
      </div>
    </div>
  );
};

export default Pay;
