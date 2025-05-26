import React from 'react';
import '../styles/RecuperarContrasena.css';
import Recu from "../images/recu.png"


const RecuperarContrasena = () => {
  return (
    <div className="recuperar-container">
      <div className="recuperar-left">
        <h2>Recuperar contraseña</h2>
        <input type="email" placeholder="Ingresa tu correo" />
        <button>Enviar código</button>
      </div>
      <div className="recuperar-right">
        <img src={Recu} alt="Recuperar" />
      </div>
    </div>
  );
};

export default RecuperarContrasena;
