import React from 'react';
import '../styles/bienvenidoadmin.css'; 
import termo from "../images/termooo.png"

const BienvenidoAdmin = () => {
  return (
    <div className="bienvenido-container">
      <div className="bienvenido-left">
        <h1 className="titulo">BIENVENIDO</h1>
        <p className="descripcion">
          Lorem ipsum dolor sit amet consectetur. Non maecenas tortor suscipit odio volutpat turpis adipiscing.
          Lorem ipsum dolor sit amet consectetur. Non maecenas tortor suscipit odio volutpat turpis adipiscing.
        </p>
        <div className="botones">
          <button className="btn">AGREGAR UN NUEVO PRODUCTO</button>
          <button className="btn">AGREGAR UN NUEVO PROVEEDOR</button>
          <button className="btn">AGREGAR UN NUEVO DISTRIBUIDOR</button>
          <button className="btn">AGREGAR UN NUEVO EMPLEADO</button>
        </div>
      </div>
      <div className="bienvenido-right">
        <img src={termo} alt="Termo" className="imagen-termo" />
      </div>
    </div>
  );
};

export default BienvenidoAdmin;
