// components/Nav.jsx
import React from 'react';
import { Link } from 'react-router'; // Asumiendo que usas React Router
import logo from '../images/ECOFLASKY.png';
import '../styles/styleNav.css'; // Importa los estilos

const Nav = () => {
  return (
    <nav className="nav-container">
      {/* Logo que redirige al inicio */}
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo EcoFlaky" className="logo" />
      </Link>

      {/* Menú de navegación */}
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">INICIO</Link>
        </li>
        <li className="nav-item">
          <Link to="/sobre-nosotros" className="nav-link">SOBRE NOSOTROS</Link>
        </li>
        <li className="nav-item">
          <Link to="/productos" className="nav-link">PRODUCTOS</Link>
        </li>
        <li className="nav-item">
          <Link to="/contactanos" className="nav-link">CONTACTANOS</Link>
        </li>
        <li className="nav-item">
          <Link to="/terminos-y-condiciones" className="nav-link">TERMINOS Y CONDICIONES</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;