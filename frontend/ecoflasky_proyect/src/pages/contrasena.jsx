import React from "react";
import "../styles/stylePassword.css";
import password from "../images/forgotPassword.png";
import arriba from "../images/reUp.png";
import abajo from "../images/reDown.png";
import gmail from "../images/gmail.png"
const Password = () => {
    return (
        <>
            <div className="container-password">
                <div className="half-color-password">
                    <div className="texto-password">
                    <h1>¿OLVIDASTE TU CONTRASEÑA?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Non maecenas tortor suscipit odio volutpat turpis adipiscing.</p>
                    </div>
                    <div className="input-container-gmail">
                        <img className="gmail" alt="Copia de ECOFLASKY" src={gmail} />
                        <input type="text" className="underline-input" placeholder="Correo" />
                    </div>
                    <p className="Volver">Volver</p>
                    <button className="RecuperarContra">Recuperar Contraseña</button>
                </div>
                <div className="content-password">
                    <div className="image-wrapper-password">
                        <img className="elipse1-password" alt="Copia de ECOFLASKY" src={arriba} />
                        <img className="elipse2-password" alt="Copia de ECOFLASKY" src={abajo} />

                        <img className="password" alt="Copia de ECOFLASKY" src={password} />

                    </div>
                </div>
            </div>
        </>
    );
};

export default Password;