import React from "react";
import { useCart } from "../context/CartContext";
import useEcoflaskyPayment from "../hooks/useEcoflaskyPayment";
import "../styles/EcoflaskyPay.css";

const EcoflaskyPay = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();

  const {
    formData,
    handleChange,
    handleSubmit,
    handleFakePayment,
    datosEnviados,
  } = useEcoflaskyPayment(total, clearCart);

  return (
    <div className="pay-container">
      <h2 className="pay-title">Resumen de pago - Ecoflasky</h2>

      <div className="cart-summary">
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imagen} alt={item.titulo} />
              <div className="item-info">
                <h3>{item.titulo}</h3>
                <p>Cantidad: {item.cantidad}</p>
              </div>
              <div className="item-price">
                ${item.precio * item.cantidad}
              </div>
            </div>
          ))
        )}
        <div className="cart-total">
          <span>Total:</span>
          <span>${total}</span>
        </div>
      </div>

      <form className="payment-form" onSubmit={handleSubmit}>
        <input
          name="nombreCliente"
          placeholder="Nombre completo"
          value={formData.nombreCliente}
          onChange={handleChange}
          required
        />
        <input
          name="emailCliente"
          type="email"
          placeholder="Correo electrónico"
          value={formData.emailCliente}
          onChange={handleChange}
          required
        />
        <input
          name="monto"
          value={`$${formData.monto}`}
          disabled
        />

        <button type="submit" className="pay-button">
          Enviar datos
        </button>
      </form>

      {datosEnviados && (
        <button className="pay-button" onClick={handleFakePayment}>
          Confirmar pago simulado
        </button>
      )}
    </div>
  );
};

export default EcoflaskyPay;
