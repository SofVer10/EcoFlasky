import React, { useState } from 'react';
import { Link } from 'react-router';
import logo from '../images/ECOFLASKY.png';
import '../styles/styleNav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-container">
      {/* Logo que redirige al registro */}
      <Link to="/" className="logo-link" onClick={closeMenu}>
        <img src={logo} alt="Logo EcoFlaky" className="logo-nav" />
      </Link>

      {/* Botón hamburguesa para móviles */}
      <button
        className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Menú de navegación */}
      <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
        <li className="nav-item">
          <Link to="/bienvenidaAdmin" className="nav-link" onClick={closeMenu}>INICIO</Link>
        </li>
        <li className="nav-item">
          <Link to="/agregarProveedor" className="nav-link" onClick={closeMenu}>PROVEEDOR</Link>
        </li>
        <li className="nav-item">
          <Link to="/verDistruibidor" className="nav-link" onClick={closeMenu}>DISTRIBUIDOR</Link>
        </li>
        <li className="nav-item">
          <Link to="/verProductos" className="nav-link" onClick={closeMenu}>EMPLEADO</Link>
        </li>
        <li className="nav-item">
          <Link to="/verProducto" className="nav-link" onClick={closeMenu}>PRODUCTOS</Link>
        </li>
      </ul>

      {/* Overlay para cerrar menú en móviles */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Nav;