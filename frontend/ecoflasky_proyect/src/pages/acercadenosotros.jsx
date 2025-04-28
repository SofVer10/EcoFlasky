import React from "react";
import "../styles/Acercadenosotros.css";

const Acercadenosotros = () => {
  return (
    <section className="acerca">
      <div className="acerca-header">
        <img src="https://cdn.brandfetch.io/idDaTsRBjw/w/893/h/223/idyUvMefoC.jpeg?c=1bxid64Mup7aczewSAYMX&t=1695385844991" alt="EcoFlasky - Termos sostenibles" />
        <h1>ACERCA DE NOSOTROS</h1>
      </div>

      <section className="quienes-somos">
        <h2>QUIÉNES SOMOS?</h2>
        <p>
          EcoFlasky es una innovadora marca dedicada a la venta de termos y productos térmicos ecológicos.
          Nos especializamos en ofrecer soluciones sostenibles para mantener tus bebidas a la temperatura ideal
          mientras reduces tu huella ambiental. Cada producto EcoFlasky está diseñado con amor por el planeta.
        </p>
        <div className="quienes-contenido">
          <img src="https://www.icon0.com/free/static2/preview2/stock-photo-avatar-man-people-icon-character-cartoon-32597.jpg" alt="Equipo EcoFlasky" />
          <blockquote>
            "En EcoFlasky creemos que la sostenibilidad y el diseño pueden ir de la mano.
            Nuestros productos no solo son funcionales, sino que cuentan una historia de compromiso con el medio ambiente."
          </blockquote>
        </div>
      </section>

      <section className="nuestra-historia">
        <h2>NUESTRA HISTORIA</h2>
        <div className="historia-contenido">
          <blockquote>
            "EcoFlasky nació en enero de 2025 con la visión de revolucionar el mercado de productos térmicos.
            Lo que comenzó como un pequeño proyecto entre amigos apasionados por la sostenibilidad,
            hoy se ha convertido en una marca reconocida por su calidad e impacto positivo."
          </blockquote>
          <img src="https://www.icon0.com/free/static2/preview2/stock-photo-indian-man-avatar-people-icon-character-cartoon-32890.jpg" alt="Fundación de EcoFlasky" />
        </div>
      </section>

      <section className="team">
        <h2>NUESTRO EQUIPO</h2>
        <p className="team-subtitle">Conoce al equipo detrás de EcoFlasky</p>
        <div className="team-contenedor">
          <div className="miembro-card">
            <div className="card-inner">
              <div className="card-front">
                <img src="https://www.icon0.com/free/static2/preview2/stock-photo-indian-man-avatar-people-icon-character-cartoon-32890.jpg" alt="Fundador EcoFlasky" />
                <h3>FUNDADOR/A</h3>
                <p>CEO & Visión Estratégica</p>
              </div>
              <div className="card-back">
                <p>Lidera nuestra visión sostenible y estrategia de crecimiento</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="miembro-card">
            <div className="card-inner">
              <div className="card-front">
                <img src="https://www.icon0.com/free/static2/preview2/stock-photo-avatar-man-people-icon-character-cartoon-32593.jpg" alt="Diseñador EcoFlasky" />
                <h3>DISEÑADOR/A</h3>
                <p>Productos & Sostenibilidad</p>
              </div>
              <div className="card-back">
                <p>Crea diseños innovadores con materiales eco-amigables</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-behance"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="miembro-card">
            <div className="card-inner">
              <div className="card-front">
                <img src="https://www.icon0.com/free/static2/preview2/stock-photo-indian-woman-avatar-people-icon-character-cartoon-32902.jpg" alt="Marketing EcoFlasky" />
                <h3>MARKETING</h3>
                <p>Comunicación & Branding</p>
              </div>
              <div className="card-back">
                <p>Comparte nuestro mensaje de sostenibilidad con el mundo</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-tiktok"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Acercadenosotros;