import React from "react";
import "../styles/styleRegister.css";
import user from "../images/User.png";
import { Link } from 'react-router-dom'; 
import register from "../images/registrarse.png";
import arriba from "../images/arriba.png";
import abajo from "../images/abajo.png";
import gmail from "../images/gmail.png";
import password from "../images/Password.png";
import useRegister from "../hooks/useDataRegister.js";

const Register = () => {
    const {
        name,
        setName,
        email,
        setEmail,
        password: userPassword,
        setPassword,
        speciality,
        setSpeciality,
        handleRegister,
        loading,
    } = useRegister();

    return (
        <>
            <div className="container">
                <div className="half-color-register">
                    <div className="texto-register">
                        <h1 style={{color:"black", opacity: 0.5}}>BIENVENIDO</h1>
                        <p style={{color: "black"}}>Lorem ipsum dolor sit amet consectetur. Non maecenas tortor suscipit odio volutpat turpis adipiscing.</p>
                    </div>
                    
                    <form onSubmit={handleRegister}>
                        <div className="input-container">
                            <img className="user" alt="User icon" src={user} />
                            <input 
                                type="text" 
                                className="underline-input" 
                                placeholder="Nombre completo"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                disabled={loading}
                            />
                        </div>
                        
                        <div className="input-container-gmail">
                            <img className="gmail" alt="Gmail icon" src={gmail} />
                            <input 
                                type="email" 
                                className="underline-input" 
                                placeholder="Correo"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={loading}
                            />
                        </div>
                        
                        <div className="input-container-password">
                            <img className="password-register" alt="Password icon" src={password} />
                            <input 
                                type="password" 
                                className="underline-input" 
                                placeholder="Contraseña"
                                value={userPassword}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                disabled={loading}
                            />
                        </div>
                        
                        {/* Nuevo campo para especialidad */}
                        <div className="input-container">
                            <img className="user" alt="Speciality icon" src={user} />
                            <input 
                                type="text" 
                                className="underline-input" 
                                placeholder="Especialidad"
                                value={speciality}
                                onChange={(e) => setSpeciality(e.target.value)}
                                required
                                disabled={loading}
                            />
                        </div>
                        
                        <Link to="/">
                            <p className="irLogin">¿Ya tienes cuenta? Inicia sesión</p>
                        </Link>
                        
                        <button 
                            type="submit" 
                            className="Registrarse"
                            disabled={loading}
                        >
                            {loading ? "Registrando..." : "Registrarse"}
                        </button>
                    </form>
                </div>
                
                <div className="content-register">
                    <div className="image-wrapper-register">
                        <img className="elipse1-register" alt="Decorative element" src={arriba} />
                        <img className="elipse2-register" alt="Decorative element" src={abajo} />
                        <img className="register" alt="Register illustration" src={register} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;