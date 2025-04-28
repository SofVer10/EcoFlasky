import React from "react";
import "../styles/styleRegister.css";
import user from "../images/User.png";
import register from "../images/registrarse.png";
import arriba from "../images/arriba.png";
import abajo from "../images/abajo.png";
import gmail from "../images/gmail.png"
import password from "../images/Password.png"
const Register = () => {
    return (
        <>
            <div className="container">
                <div className="half-color-register">
                    <div className="texto-register">
                    <h1>BIENVENIDO</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Non maecenas tortor suscipit odio volutpat turpis adipiscing.</p>
                    </div>
                    <div className="input-container">
                        <img className="user" alt="Copia de ECOFLASKY" src={user} />
                        <input type="text" className="underline-input" placeholder="Nombre completo" />
                    </div>
                    <div className="input-container-gmail">
                        <img className="gmail" alt="Copia de ECOFLASKY" src={gmail} />
                        <input type="text" className="underline-input" placeholder="Correo" />
                    </div>
                    <div className="input-container-password">
                        <img className="password-register" alt="Copia de ECOFLASKY" src={password} />
                        <input type="text" className="underline-input" placeholder="Contraseña" />
                    </div>
                    <p className="irLogin">¿Ya tienes cuenta? Inicia sesión</p>
                    <button className="Registrarse">Registrarse</button>
                </div>
                <div className="content-register">
                    <div className="image-wrapper-register">
                        <img className="elipse1-register" alt="Copia de ECOFLASKY" src={arriba} />
                        <img className="elipse2-register" alt="Copia de ECOFLASKY" src={abajo} />

                        <img className="register" alt="Copia de ECOFLASKY" src={register} />

                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;