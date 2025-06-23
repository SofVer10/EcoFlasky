import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Ajusta la ruta según tu estructura
import logo from '../images/ECOFLASKY.png';
import '../styles/styleNav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/'); // Redirige al login (ajusta la ruta según necesites)
      closeMenu();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      // Opcionalmente mostrar un mensaje de error
    }
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
          <Link to="/inicio" className="nav-link" onClick={closeMenu}>INICIO</Link>
        </li>
        <li className="nav-item">
          <Link to="/contactanos" className="nav-link" onClick={closeMenu}>CONTACTANOS</Link>
        </li>
        <li className="nav-item">
          <Link to="/acercadenosotros" className="nav-link" onClick={closeMenu}>ACERCA DE NOSOTROS</Link>
        </li>
        <li className="nav-item">
          <Link to="/productos" className="nav-link" onClick={closeMenu}>PRODUCTOS</Link>
        </li>
        <li className="nav-item">
          <button 
            onClick={handleLogout}
            className="nav-link logout-btn"
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              color: 'inherit',
              font: 'inherit'
            }}
          >
            CERRAR SESIÓN
          </button>
        </li>
      </ul>

      {/* Overlay para cerrar menú en móviles */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Nav;