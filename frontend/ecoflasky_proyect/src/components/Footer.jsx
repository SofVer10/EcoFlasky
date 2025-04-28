import React, { useState } from 'react';
import '../styles/styleFooter.css';

// Importa las imágenes (igual que antes)
import logo from '../images/ECOFLASKY.png';
import twitter from '../images/twitter.png';
import instagram from '../images/insta.png';
import facebook from '../images/facebook.png';
// Iconos de métodos de pago
import visa from '../images/carta1.png';
import mastercard from '../images/carta3.png';
import amex from '../images/carta4.png';
import paypal from '../images/carta2.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna izquierda - Logo y redes sociales */}
        <div className="footer-left">
          <img src={logo} alt="EcoTeamy Logo" className="footer-logo" />
          <div className="social-icons">
            <a href="#" className="social-icon"><img src={twitter} alt="Twitter" /></a>
            <a href="#" className="social-icon"><img src={instagram} alt="Instagram" /></a>
            <a href="#" className="social-icon"><img src={facebook} alt="Facebook" /></a>
          </div>
        </div>
        
        {/* Columna central - Navegación y texto */}
        <div className="footer-center">
          <nav className="footer-nav">
            <ul>
              <li><a href="#">INICIO</a></li>
              <li><a href="#">SOBRE NOSOTROS</a></li>
              <li><a href="#">PRODUCTOS</a></li>
              <li><a href="#">PERSONALIZACIÓN</a></li>
              <li><a href="#">CONTÁCTANOS</a></li>
              <li><a href="#">PERFIL</a></li>
            </ul>
          </nav>
          <div className="footer-text">
            <p>Lorem ipsum dolor sit et amet consectetur. Adipiscing urna interdum mauret consetNulla cursus metus done accumsan viverra. Eu eget viverra nibh blandit eu nascetur. Imperdiet semper pellentesque nisi massa id efficitur convalls nec.</p>
          </div>
        </div>
        
        {/* Columna derecha - Métodos de pago */}
        <div className="footer-right">
          <div className="payment-methods">
            <img src={visa} alt="Visa" />
            <img src={mastercard} alt="Mastercard" />
            <img src={amex} alt="American Express" />
            <img src={paypal} alt="PayPal" />
          </div>
        </div>
      </div>
      
      {/* Parte inferior - Copyright */}
      <div className="footer-bottom">
        <p>© Copyright {currentYear}. Derechos Reservados</p>
      </div>
    </footer>
  );
}

export default Footer;