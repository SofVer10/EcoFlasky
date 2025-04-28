<<<<<<< HEAD
import React from "react";
import copiaDeEcoflasky2 from "../images/Copia de ECOFLASKY 2.png";
import credomaRemovebgPreview1 from "../images/carta2.png";
import gtyhRemovebgPreview1 from "../images/carta1.png";
import iconmonstrFacebook62401 from "../images/facebook.png";
import iconmonstrInstagram132401 from "../images/insta.png";
import iconmonstrTwitter32401 from "../images/twitter.png";
import image25 from "../images/carta4.png";
import mastr1 from "../images/carta3.png";
import { Link } from 'react-router-dom'; // Asegúrate de que esto sea correcto
import "../styles/styleFooter.css";
=======
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
>>>>>>> feb85215bbfc2a7189b38d697ac44d689c6fefa1

  return (
<<<<<<< HEAD
    <div className="component">
      <div className="overlap">
        <div className="header">
          <img
            className="logo"
            alt="Copia de ECOFLASKY"
            src={copiaDeEcoflasky2}
          />
          <div className="nav-links">
            <Link to="/" className="text-wrapper">INICIO</Link>
            <Link to="/sobre-nosotros" className="text-wrapper-2">SOBRE NOSOTROS</Link>
            <Link to="/productos" className="text-wrapper-3">PRODUCTOS</Link>
            <Link to="/personalizacion" className="text-wrapper-4">PERSONALIZACIÓN</Link>
            <Link to="/contacto" className="text-wrapper-5">CONTÁCTANOS</Link>
            <Link to="/perfil" className="text-wrapper-6">PERFIL</Link>
          </div>
        </div>

        {/* Nueva sección para redes sociales, texto y tarjetas de crédito */}
        <div className="social-text-credit">
          <div className="social-media">
            <Link to="#"><img className="iconmonstr-instagram" alt="Iconmonstr instagram" src={iconmonstrInstagram132401} /></Link>
            <Link to="#"><img className="iconmonstr-twitter" alt="Iconmonstr twitter" src={iconmonstrTwitter32401} /></Link>
            <Link to="#"><img className="iconmonstr-facebook" alt="Iconmonstr facebook" src={iconmonstrFacebook62401} /></Link>
          </div>

          <div className="lorem-text">
            <p>
              Lorem ipsum dolor sit amet consectetur. Adipiscing urna interdum
              euismod congue. Nulla cursus mauris diam accumsan viverra. Fringilla
              ornare mattis laoreet eu maecenas. Imperdiet semper pellentesque orci
              mauris id sollicitudin venenatis mus.
            </p>
          </div>

          <div className="credit-cards">
            <img className="image" alt="Image" src={image25} />
            <img className="mastr" alt="Mastr" src={mastr1} />
            <img className="credoma-removebg" alt="Credoma removebg" src={credomaRemovebgPreview1} />
            <img className="gtyh-removebg" alt="Gtyh removebg" src={gtyhRemovebgPreview1} />
=======
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
>>>>>>> feb85215bbfc2a7189b38d697ac44d689c6fefa1
          </div>
        </div>

        <p className="text-wrapper-7">© Copyright 2025 Derechos Reservados</p>
      </div>
<<<<<<< HEAD
        </div>
  );
};

export default Component;
=======
      
      {/* Parte inferior - Copyright */}
      <div className="footer-bottom">
        <p>© Copyright {currentYear}. Derechos Reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
>>>>>>> feb85215bbfc2a7189b38d697ac44d689c6fefa1
