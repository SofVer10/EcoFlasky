import React from "react";
import "../styles/TerminosCondiciones.css";

const TerminosCondiciones = () => {
  return (
    <section className="terminos">
      <div className="terminos-header">
        <img src="https://cdn.shopify.com/s/files/1/0552/9731/0876/files/PDP_Lifestyle_3000x1000_SK_Hydration.jpg?v=1623095896" alt="EcoFlasky - Términos y Condiciones" />
        <h1>TÉRMINOS Y CONDICIONES</h1>
      </div>

      <section className="terminos-contenido">
        <div className="terminos-seccion">
          <h2>1. Introducción</h2>
          <p>
            Bienvenido/a a EcoFlasky. Estos términos y condiciones describen las reglas y regulaciones para el uso de nuestro sitio web y la compra de nuestros productos sostenibles.
          </p>
          <p>
            Al acceder a este sitio web y realizar compras, aceptas estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguno de estos términos, por favor no utilices nuestro sitio.
          </p>
        </div>

        <div className="terminos-seccion">
          <h2>2. Uso del Sitio</h2>
          <p>
            EcoFlasky otorga permiso para ver y descargar temporalmente una copia de los materiales en este sitio web solo para uso personal y no comercial. Este es el otorgamiento de una licencia, no una transferencia de título.
          </p>
          <ul className="terminos-lista">
            <li>No puedes modificar o copiar los materiales</li>
            <li>No puedes usar los materiales para ningún propósito comercial</li>
            <li>Debes mantener todos los avisos de copyright y propiedad en los materiales</li>
          </ul>
        </div>

        <div className="terminos-seccion">
          <h2>3. Compras y Envíos</h2>
          <p>
            Todos los pedidos están sujetos a disponibilidad de productos. Nos esforzamos por enviar todos los pedidos dentro de los 3-5 días hábiles siguientes a la compra.
          </p>
          <div className="destacado">
            <p>
              <strong>Envíos sostenibles:</strong> Utilizamos materiales de embalaje ecológicos y compensamos las emisiones de carbono de todos nuestros envíos.
            </p>
          </div>
        </div>

        <div className="terminos-seccion">
          <h2>4. Devoluciones y Garantías</h2>
          <p>
            Ofrecemos garantía de 1 año contra defectos de fabricación en todos nuestros productos. Para devoluciones:
          </p>
          <ul className="terminos-lista">
            <li>Productos pueden ser devueltos dentro de los 30 días posteriores a la compra</li>
            <li>Deben estar en su estado original y con el embalaje intacto</li>
            <li>Nos comprometemos a reciclar o reutilizar responsablemente todos los productos devueltos</li>
          </ul>
        </div>

        <div className="terminos-seccion">
          <h2>5. Privacidad y Datos</h2>
          <p>
            Respetamos tu privacidad. Toda la información personal que nos proporciones será utilizada únicamente para procesar tus pedidos y mejorar tu experiencia con EcoFlasky.
          </p>
          <p>
            Nunca compartiremos tus datos con terceros sin tu consentimiento explícito, excepto cuando sea necesario para cumplir con requisitos legales.
          </p>
        </div>

        <div className="terminos-seccion">
          <h2>6. Política Sostenible</h2>
          <p>
            Como parte de nuestro compromiso con el medio ambiente:
          </p>
          <div className="destacado verde">
            <p>
              <i className="fas fa-leaf"></i> Por cada compra, plantamos un árbol a través de nuestro programa "EcoFlasky Verde"
            </p>
            <p>
              <i className="fas fa-recycle"></i> Aceptamos devoluciones de productos antiguos para su reciclaje responsable
            </p>
          </div>
        </div>

        <div className="terminos-seccion">
          <h2>7. Contacto</h2>
          <p>
            Para cualquier pregunta sobre estos términos y condiciones, por favor contáctanos a través de:
          </p>
          <div className="contacto-info">
            <p><i className="fas fa-envelope"></i> ecoflasky@gmail.com</p>
            <p><i className="fas fa-phone"></i> +503 1234-5678</p>
            <a href="/contactanos">
            <button>Ir a Contactanos</button>
            </a>
          </div>
        </div>

        <div className="actualizacion">
          <p><strong>Última actualización:</strong> Abril 2025</p>
          <p>Nos reservamos el derecho de modificar estos términos en cualquier momento.</p>
        </div>
      </section>
    </section>
  );
}

export default TerminosCondiciones;