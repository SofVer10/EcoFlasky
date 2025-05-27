
import React from 'react';
import { Link } from 'react-router'; 
import logo from '../images/ECOFLASKY.png';
import '../styles/styleNav.css'; 


const Nav = () => {
  return (
    <nav className="nav-container">
      {/* Logo que redirige al registro */}
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo EcoFlaky" className="logo-nav" />
      </Link>

      {/* Menú de navegación */}
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/bienvenidaAdmin" className="nav-link">INICIO</Link>
        </li>
        <li className="nav-item">

          <Link to="/agregarProveedor" className="nav-link">PROVEEDOR</Link>
        </li>
        <li>
        <Link to="/verDistruibidor" className="nav-link">DISTRUIBIDOR</Link>
        </li>
  
        <li className="nav-item">
          <Link to="/agregarEmpleado" className="nav-link">EMPLEADO</Link>
        </li>
         <li className="nav-item">
          <Link to="/verProducto" className="nav-link">PRODUCTOS</Link>
        </li>
      </ul>

      
    </nav>
  );
};

export default Nav;