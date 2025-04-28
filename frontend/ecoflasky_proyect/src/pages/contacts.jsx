import React from 'react';
import '../styles/Contactanos.css';

const Contactanos = () => {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contáctanos</h1>
                <p>Aclara tus dudas o comentarios contactandonos rapidamente</p>
            </div>

            <div className="contact-form">
                <div className="form-left">
                    <h2>Envíanos un mensaje</h2>
                    <input type="text" placeholder="Nombre" className="input-field" />
                    <input type="text" placeholder="Apellido" className="input-field" />
                    <input type="email" placeholder="Correo electrónico" className="input-field" />
                    <textarea placeholder="Mensaje" className="input-field textarea-field"></textarea>
                    <button className="btn-enviar">Enviar Mensaje</button>
                </div>

                <div className="form-right">
                    <h2>Nuestro Boletín</h2>
                    <img src="https://m.media-amazon.com/images/I/81d3tgD7mgL._AC_UF350,350_QL80_.jpg" alt="" />
                    <p>Suscríbete para recibir nuestras últimas noticias y ofertas especiales.</p>
                    <input type="email" placeholder="Correo electrónico" className="input-field" />
                    <button className="btn-enviar">Suscribirse</button>
                </div>
            </div>

            <div className="contact-info">
                <div className="info-card blue">
                    <div className="card-icon">
                        <i className="fas fa-phone"></i>
                    </div>
                    <h3>Teléfono</h3>
                    <p>(+503) 1234-5678</p>
                    <p>Horario: 8AM - 5PM</p>
                </div>
                <div className="info-card cyan">
                    <div className="card-icon">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <h3>Email</h3>
                    <p>ecoflasky@gmail.com</p>
                    <p>Respuesta en 24h</p>
                </div>
                <div className="info-card white">
                    <div className="card-icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h3>Dirección</h3>
                    <p>Av. Aguilares, SS</p>
                    <p>San Salvador</p>
                </div>
            </div>

            <div className="map-container">
                <h2>Nuestra Ubicación</h2>
                <div className="map-wrapper">
                    <iframe
                        title="Ubicación"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5234582755403!2d-89.2181885!3d13.7067889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63306fd63e9a09%3A0xe7c693fb9233f8d4!2sSan%20Salvador%2C%20El%20Salvador!5e0!3m2!1ses-419!2sus!4v1714263525672!5m2!1ses-419!2sus"
                        width="100%"
                        height="400"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contactanos;