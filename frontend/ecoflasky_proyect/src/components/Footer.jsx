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


function Component() {

  return (
    <div className="component">
      <div className="overlap">
        <div className="header">
          <img
            className="logo"
            alt="Copia de ECOFLASKY"
            src={copiaDeEcoflasky2}
          />
          <div className="nav-links">
            <Link to="/inicio" className="text-wrapper">INICIO</Link>
            <Link to="/sobrenosotros" className="text-wrapper-2">SOBRE NOSOTROS</Link>
            <Link to="/productos" className="text-wrapper-3">PRODUCTOS</Link>
            <Link to="/personalizacion" className="text-wrapper-4">PERSONALIZACIÓN</Link>
            <Link to="/contactanos" className="text-wrapper-5">CONTÁCTANOS</Link>
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

          </div>
        </div>

        <p className="text-wrapper-7">© Copyright 2025 Derechos Reservados</p>
      </div>
        </div>
  );
};

export default Component;
