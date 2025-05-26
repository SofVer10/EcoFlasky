
import React from 'react';
import { Link } from 'react-router'; 
import logo from '../images/ECOFLASKY.png';
import '../styles/styleNav.css'; 


const Nav = () => {
  return (
    <nav className="nav-container">
      {/* Logo que redirige al registro */}
      <Link to="/agregarProducto
      " className="logo-link">
        <img src={logo} alt="Logo EcoFlaky" className="logo-nav" />
      </Link>

      {/* Menú de navegación */}
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/agregarDistruibidor" className="nav-link">INICIO</Link>
        </li>
        <li className="nav-item">

          <Link to="/acercadenosotros" className="nav-link">SOBRE NOSOTROS</Link>
        </li>
        <li>
        <Link to="/productos" className="nav-link">PRODUCTOS</Link>
        </li>
  
        <li className="nav-item">
          <Link to="/contactanos" className="nav-link">CONTACTANOS</Link>
        </li>
        <li className="nav-item">
          <Link to="/TerminosCondiciones" className="nav-link">TERMINOS Y CONDICIONES</Link>
        </li>
      </ul>

      
    </nav>
  );
};

export default Nav;