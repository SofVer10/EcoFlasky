import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/ECOFLASKY.png';
import '../styles/styleNav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/verProducto" className="logo-link">
          <img src={logo} alt="Logo EcoFlasky" className="logo-nav" />
        </Link>

        {/* Botón hamburguesa para móviles */}
        <div className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menú de navegación */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/verDistruibidor" className="nav-link">INICIO</Link>
          </li>
          <li className="nav-item">
            <Link to="/acercadenosotros" className="nav-link">SOBRE NOSOTROS</Link>
          </li>
          <li className="nav-item">
            <Link to="/bienvenidaAdmin" className="nav-link">PRODUCTOS</Link>
          </li>
          <li className="nav-item">
            <Link to="/contactanos" className="nav-link">CONTACTANOS</Link>
          </li>
          <li className="nav-item">
            <Link to="/TerminosCondiciones" className="nav-link">TÉRMINOS Y CONDICIONES</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
