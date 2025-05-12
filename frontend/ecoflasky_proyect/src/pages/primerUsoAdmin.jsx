import React from "react";
import "../styles/stylePrimerUsoAdmin.css";
import user from "../images/User.png";
import izquierda from "../images/left.png";
import rightUp from "../images/rightUp.png";
import rightLeft from "../images/rightLeft.png";
import password from "../images/Password.png";
import login from "../images/logoAdmin.png";


const firstUse = () => {
    return (
        <div className="container">
            <div className="half-color-register">
                <div className="textoeinputs">
                    <div className="texto-register">
                  <img className="logoAdmin" alt="Copia de ECOFLASKY" src={login} />
                        <h1>Bienvenido a ecoFlasky</h1>
                        <h2>Crea tu usuario</h2>
                    </div>
                    <div className="input-container">
                        <img className="user" alt="Copia de ECOFLASKY" src={user} />
                        <input type="text" className="underline-input" placeholder="Nombre completo" />
                    </div>
                    <div className="input-container-password">
                        <img className="password-register" alt="Copia de ECOFLASKY" src={password} />
                        <input type="text" className="underline-input" placeholder="Contraseña" />
                    </div>
                    <div className="input-container-password">
                    <img className="password-register" alt="Copia de ECOFLASKY" src={password} />
                        <input type="text" className="underline-input" placeholder="Confirmar Contraseña" />
                    </div>
                    <p className="irLogin">¿Ya tienes cuenta? Inicia sesión</p>
                    <button className="Registrarse">Registrarse</button>
                </div>
            </div>
            <div className="content-register">
                <div className="image-wrapper-register">
                    <img className="left" alt="Copia de ECOFLASKY" src={izquierda} />
                    <img className="downRight" alt="Copia de ECOFLASKY" src={rightLeft} />

                    <img className="upRight" alt="Copia de ECOFLASKY" src={rightUp} />

                </div>
            </div>
        </div>
    );
};

export default firstUse;
