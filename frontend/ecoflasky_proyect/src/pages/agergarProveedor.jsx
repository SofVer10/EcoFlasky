import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styleAgregarProveedor.css';
import proveedorImg from '../images/proveedor.png';

const AgregarProveedor = () => {
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
              <input type="text" placeholder="Ingrese el producto" className="form-control" />
            </div>
            <div className="form-group">
              <input type="date" placeholder="Fecha de entrega" className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Ultima fecha de entrega" className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Costo" className="form-control" />
            </div>
            <div className="form-group">
              <input type="number" placeholder="Cantidad" className="form-control" />
            </div>
            <button type="submit" className="agregar-btn">Agregar proveedor</button>
          </form>
        </div>
        <div className="image-section">
          <img src={proveedorImg} alt="Stanley Mug" className="product-image" />
        </div>
      </div>
    </div>
  );
};

export default AgregarProveedor;