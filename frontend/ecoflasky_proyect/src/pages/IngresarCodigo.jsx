import React from 'react';
import '../styles/IngresarCodigo.css';
import recu2 from "../images/recu2.png";

const IngresarCodigo = () => {
  return (
    <div className="codigo-container">
      <div className="codigo-left">
        <h2>Ingresar tu código</h2>
        <div className="codigo-inputs">
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
        </div>
        <div className="codigo-texto">
          <p>¿No has recibido el código? <a href="#">Volver a enviar código</a></p>
        </div>
        <button>Enviar</button>
      </div>
      <div className="codigo-right">
        <img src={recu2} alt="Código" />
      </div>
    </div>
  );
};

export default IngresarCodigo;
