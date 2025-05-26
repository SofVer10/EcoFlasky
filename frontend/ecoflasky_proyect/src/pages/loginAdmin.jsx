import React from "react";
import "../styles/styleLoginAdmin.css";
import login from "../images/logoAdmin.png";
import empleados from "../images/loginAdmin.png";
import gmail from "../images/gmail.png"
import password from "../images/Password.png"
const LoginAdmin = () => {
    return (
        <>
            <div className="container">
                <div className="half-color">
                    <div className="texto">
                    <h1>!Hola!,  </h1>
                    <br></br>
                    <h1>Inicia Sesión </h1>
                    </div>
                    <div className="input-container-gmail">
                        <img className="gmail" alt="Copia de ECOFLASKY" src={gmail} />
                        <input type="text" className="underline-input" placeholder="Correo" />
                    </div>
                    <div className="input-container-password">
                        <img className="password-login" alt="Copia de ECOFLASKY" src={password} />
                        <input type="text" className="underline-input" placeholder="Contraseña" />
                    </div>
                    <p className="irRegistro">¿Olvidaste tu contraseña?</p>
                    <button className="Login">Inicia Sesión</button>
                </div>
                <div className="content">
                    <div className="image-wrapper">

                        <img className="logoAdmin" alt="Copia de ECOFLASKY" src={login} />
                        <img className="empleadosImagen" alt="Copia de ECOFLASKY" src={empleados} />


                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginAdmin;