import React, { useState } from "react";
import "../styles/styleLogin.css";
import login from "../images/login.png";
import arriba from "../images/logUp.png";
import abajo from "../images/logDown.png";
import gmail from "../images/gmail.png"
import password from "../images/Password.png"
import { Link, useNavigate } from 'react-router-dom'; 

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/api/login', { // Ajusta la URL según tu configuración
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                credentials: 'include' // Para incluir cookies
            });

            const data = await response.json();

            if (data.success) {
                // Redirigir según el tipo de usuario
                navigate(data.redirectTo);
            } else {
                setError(data.message || 'Error en el login');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Error de conexión');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="container">
                <div className="half-color">
                    <div className="texto">
                        <h1>INICIA SESIÓN</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Non maecenas tortor suscipit odio volutpat turpis adipiscing.</p>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="input-container-gmail">
                            <img className="gmail" alt="Gmail icon" src={gmail} />
                            <input 
                                type="email" 
                                name="email"
                                className="underline-input" 
                                placeholder="Correo" 
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        
                        <div className="input-container-password">
                            <img className="password-login" alt="Password icon" src={password} />
                            <input 
                                type="password" 
                                name="password"
                                className="underline-input" 
                                placeholder="Contraseña" 
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        
                        {error && <p className="error-message" style={{color: 'red'}}>{error}</p>}
                        
                        <Link to="/password">
                            <p className="irRegistro">¿Olvidaste tu contraseña?</p>
                        </Link>
                        
                        <button 
                            type="submit" 
                            className="Login"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Iniciando...' : 'Inicia Sesión'}
                        </button>
                    </form>
                </div>
                
                <div className="content">
                    <div className="image-wrapper">
                        <img className="elipse1" alt="Decoration" src={arriba} />
                        <img className="elipse2" alt="Decoration" src={abajo} />
                        <img className="register" alt="Login illustration" src={login} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;