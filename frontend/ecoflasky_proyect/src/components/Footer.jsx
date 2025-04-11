import React from "react";
import copiaDeEcoflasky2 from "../images/Copia de ECOFLASKY 2.png"
import credomaRemovebgPreview1 from "../images/carta2.png";
import gtyhRemovebgPreview1 from "../images/carta1.png";
import iconmonstrFacebook62401 from "../images/facebook.png";
import iconmonstrInstagram132401 from "../images/insta.png";
import iconmonstrTwitter32401 from "../images/twitter.png";
import image25 from "../images/carta4.png";
import mastr1 from "../images/carta3.png";
import "../styles/styleFooter.css";

export const Component = () => {
  return (
    <div className="component">
      <div className="overlap">

        <div className="group">
          <img
            className="iconmonstr-instagram"
            alt="Iconmonstr instagram"
            src={iconmonstrInstagram132401}
          />

          <img
            className="iconmonstr-twitter"
            alt="Iconmonstr twitter"
            src={iconmonstrTwitter32401}
          />

          <img
            className="iconmonstr-facebook"
            alt="Iconmonstr facebook"
            src={iconmonstrFacebook62401}
          />
        </div>

        <img
          className="copia-de-ECOFLASKY"
          alt="Copia de ECOFLASKY"
          src={copiaDeEcoflasky2}
        />

        <div className="div">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="rectangle-2" />

              <div className="text-wrapper">INICIO</div>
            </div>
          </div>

          <div className="text-wrapper-2">SOBRE NOSOTROS</div>

          <div className="text-wrapper-3">PRODUCTOS</div>

          <div className="text-wrapper-4">PERSONALIZACIÒN</div>

          <div className="text-wrapper-5">CONTÁCTANOS</div>

          <div className="text-wrapper-6">PERFIL</div>
        </div>

        <p className="p">
          Lorem ipsum dolor sit amet consectetur. Adipiscing urna interdum
          euismod congue.Nulla cursus mauris diam accumsan viverra. Fringilla
          ornare mattis laoreet eu maecenas. Imperdiet semper pellentesque orci
          mauris id sollicitudin venenatis mus.
        </p>

        <p className="text-wrapper-7">© Copyright 2025 Derechos Reservador</p>

        <div className="group-wrapper">
          <div className="group-2">
            <img className="image" alt="Image" src={image25} />

            <img className="mastr" alt="Mastr" src={mastr1} />

            <img
              className="credoma-removebg"
              alt="Credoma removebg"
              src={credomaRemovebgPreview1}
            />

            <img
              className="gtyh-removebg"
              alt="Gtyh removebg"
              src={gtyhRemovebgPreview1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component