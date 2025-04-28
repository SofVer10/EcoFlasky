import React from "react";
import "../styles/Acercadenosotros.css";

const Acercadenosotros = () => {
  return (
    <section className="acerca">
      <div className="acerca-header">
        <img src="header-image.jpg" alt="Header" />
        <h1>ACERCA DE NOSOTROS</h1>
      </div>

      <section className="quienes-somos">
        <h2>QUIENES SOMOS?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Non maecenas tortor suscipit odio 
          volutpat turpis adipiscing, eleifend arcu purus parturient feugiat.
        </p>
        <div className="quienes-contenido">
          <img src="persona1.jpg" alt="Persona 1" />
          <blockquote>
            Lorem ipsum dolor sit amet consectetur. Non maecenas tortor suscipit odio 
            volutpat turpis adipiscing, eleifend arcu purus parturient feugiat.
          </blockquote>
        </div>
      </section>

      <section className="nuestra-historia">
        <h2>NUESTRA HISTORIA.</h2>
        <div className="historia-contenido">
          <blockquote>
            Lorem ipsum dolor sit amet consectetur. Non maecenas tortor suscipit odio 
            volutpat turpis adipiscing, eleifend arcu purus parturient feugiat.
          </blockquote>
          <img src="historia.jpg" alt="Historia" />
        </div>
      </section>

      <section className="team">
        <h2>TEAM.</h2>
        <div className="team-contenedor">
          <div className="miembro">
            <div className="foto" style={{ backgroundImage: "url('team1.jpg')" }}></div>
            <h3>NOMBRE Y APELLIDO</h3>
            <p>ROL</p>
          </div>
          <div className="miembro">
            <div className="foto" style={{ backgroundImage: "url('team2.jpg')" }}></div>
            <h3>NOMBRE Y APELLIDO</h3>
            <p>ROL</p>
          </div>
          <div className="miembro">
            <div className="foto" style={{ backgroundImage: "url('team3.jpg')" }}></div>
            <h3>NOMBRE Y APELLIDO</h3>
            <p>ROL</p>
          </div>
          <div className="miembro">
            <div className="foto" style={{ backgroundImage: "url('team4.jpg')" }}></div>
            <h3>NOMBRE Y APELLIDO</h3>
            <p>ROL</p>
          </div>
        </div>
        <h1>asdas</h1>
        <h1>asdad</h1>
      </section>
    </section>
  );
}

export default Acercadenosotros;
