import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styleAgregarDistruibidor.css';
import DistruibidorImg from '../images/Distruibidor.png';

const AgregarDistruibidor = () => {
  return (
    <div className="registro-container">
      <div className="registro-form-container">
        <div className="form-section">
          <h2>Registrar nuevo proveedor</h2>
          <form className="registro-form">
            <div className="form-group">
              <input type="text" placeholder="Ingrese su nombre" className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Ingrese el servicio" className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Ingrese su local" className="form-control" />
            </div>
            <div className="form-group">
              <input type="date" placeholder="Fecha de afiliación" className="form-control" />
            </div>
            <button type="submit" className="agregar-btn">Agregar Distruibidor</button>
          </form>
        </div>
        <div className="image-section">
          <img src={DistruibidorImg} alt="Stanley Mug" className="product-image" />
        </div>
      </div>
    </div>
  );
};

export default AgregarDistruibidor;