

import React from 'react';
import '../styles/CambiarContrasena.css';
import Recu3 from "../images/recu3.png"; 
import { Link } from 'react-router-dom';

const CambiarContrasena = () => {
  return (
    <div className="cambiar-container">
      <div className="cambiar-left">
        <h2>Cambiar contraseña</h2>
        <input type="password" placeholder="Nueva Contraseña" />
        <input type="password" placeholder="Confirmar Contraseña" />
                            <Link to="/">

        <button>Cambiar contraseña</button>
                            </Link>
      </div>
      <div className="cambiar-right">
      <img src={Recu3} alt="Cambiar" /> 
      </div>
    </div>
  );
};

export default CambiarContrasena;

