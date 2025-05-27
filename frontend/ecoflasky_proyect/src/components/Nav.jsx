import React, { useState } from 'react';
<<<<<<< HEAD
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
=======
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
          <Link to="/agregarEmpleado" className="nav-link" onClick={closeMenu}>EMPLEADO</Link>
        </li>
        <li className="nav-item">
          <Link to="/agregarProducto" className="nav-link" onClick={closeMenu}>PRODUCTOS</Link>
        </li>
      </ul>

      {/* Overlay para cerrar menú en móviles */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
>>>>>>> 8e83a9affdf5051da6e63ed9eabe78e5fd99ffcf
    </nav>
  );
};

export default Nav;
