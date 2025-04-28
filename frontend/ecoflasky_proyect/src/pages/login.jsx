import React from "react";
import "../styles/styleLogin.css";
import login from "../images/login.png";
import arriba from "../images/logUp.png";
import abajo from "../images/logDown.png";
import gmail from "../images/gmail.png"
import password from "../images/Password.png"
const Login = () => {
    return (
        <>
            <div className="container">
                <div className="half-color">
                    <div className="texto">
                    <h1>INICIA SESIÓN</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Non maecenas tortor suscipit odio volutpat turpis adipiscing.</p>
                    </div>
                    <div className="input-container-gmail">
                        <img className="gmail" alt="Copia de ECOFLASKY" src={gmail} />
                        <input type="text" className="underline-input" placeholder="Correo" />
                    </div>
                    <div className="input-container-password">
                        <img className="password-login" alt="Copia de ECOFLASKY" src={password} />
                        <input type="text" className="underline-input" placeholder="Contraseña" />
                    </div>
                    <p className="irRegistro">¿Eres nuevo? Registrate aquí</p>
                    <button className="Login">Inicia Sesión</button>
                </div>
                <div className="content">
                    <div className="image-wrapper">
                        <img className="elipse1" alt="Copia de ECOFLASKY" src={arriba} />
                        <img className="elipse2" alt="Copia de ECOFLASKY" src={abajo} />

                        <img className="register" alt="Copia de ECOFLASKY" src={login} />

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;