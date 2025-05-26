// src/pages/RecuperarContraseña.jsx
import React, { useState } from 'react';
import '../styles/styleRecuperacionContrasenaCorreo.css';
import personaIlustracion from '../images/recuperarContrasena.png';

const RecuperarContraseña = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el código de recuperación
    console.log('Enviando código a:', email);
  };

  return (
    <div className="recuperar-container">
      <div className="recuperar-content">
        <div className="recuperar-form-container">
          <h1 className="recuperar-title">Recuperar contraseña</h1>
          <form onSubmit={handleSubmit} className="recuperar-form">
            <div className="input-group">
              <input
                type="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="recuperar-input"
              />
            </div>
            <button type="submit" className="recuperar-button">
              Enviar código
            </button>
          </form>
        </div>
      </div>
      <div className="imagen-decorativa">
        {/* La imagen se carga desde el CSS como background, pero también podemos usar la etiqueta img */}
        <img src={personaIlustracion} alt="Persona con documentos" className="persona-img" />
      </div>
    </div>
  );
};

export default RecuperarContraseña;