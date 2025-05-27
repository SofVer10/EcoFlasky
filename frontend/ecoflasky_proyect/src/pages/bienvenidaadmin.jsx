import React, { useEffect } from 'react';
import '../styles/bienvenidoadmin.css'; 
import termo from "../images/termooo.png"
import { Link } from 'react-router-dom'; 

const BienvenidoAdmin = () => {
  useEffect(() => {
    // Aplicar overflow-x: hidden al body cuando el componente se monta
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    // Limpiar los estilos cuando el componente se desmonta
    return () => {
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  return (
    <div className="bienvenido-container">
      <div className="bienvenido-left">
        <h1 className="titulo">BIENVENIDO</h1>
        <p className="descripcion">
          Lorem ipsum dolor sit amet consectetur. Non maecenas tortor suscipit odio volutpat turpis adipiscing.
          Lorem ipsum dolor sit amet consectetur. Non maecenas tortor suscipit odio volutpat turpis adipiscing.
        </p>
        <div className="botones">
          <Link to="/agregarProveedor">
            <p className="btn">AGREGAR NUEVO PROVEEDOR</p>
          </Link>
          <Link to="/verDistruibidor">
            <p className="btn">AGREGAR NUEVO DISTRIBUIDOR</p>
          </Link>
          <Link to="/agregarEmpleado">
            <p className="btn">AGREGAR NUEVO EMPLEADO</p>
          </Link>
          <Link to="/agregarProducto">
            <p className="btn">AGREGAR NUEVO PRODUCTO</p>
          </Link>
        </div>
      </div>
      <div className="bienvenido-right">
        <img src={termo} alt="Termo" className="imagen-termo" />
      </div>
    </div>
  );
};

export default BienvenidoAdmin;