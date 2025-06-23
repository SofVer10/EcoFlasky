import React, { useState } from "react";
import "../styles/styleLogin.css";
import login from "../images/login.png";
import arriba from "../images/logUp.png";
import abajo from "../images/logDown.png";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext'; // Asegúrate de que la ruta sea correcta

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const navigate = useNavigate();
    const { Login: authLogin } = useAuth(); // Usamos el Login del contexto

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Limpiar error cuando el usuario empieza a escribir
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            // Usar la función Login del contexto
            const result = await authLogin(formData.email, formData.password);

            if (result.success) {
                setIsSubmitted(true);
                setTimeout(() => {
                    navigate(result.redirectTo);
                }, 1500);
            } else {
                setError(result.message || 'Error en el login');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Error de conexión');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`login-container ${isSubmitted ? 'success-animation' : ''}`}>
            <div className="login-content">
                <div className="login-form-container">
                    <div className={`login-text ${isSubmitted ? 'fade-out' : ''}`}>
                        <h1>INICIA SESIÓN</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Non maecenas tortor suscipit odio volutpat turpis adipiscing.</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className={`login-form ${isSubmitted ? 'fade-out' : ''}`}>
                        <div className="input-field1">
                            <div className="input-container">
                                <input 
                                    type="email" 
                                    name="email"
                                    className="underline-input" 
                                    placeholder="Correo" 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                        
                        <div className="input-field1">
                            <div className="input-container">
                                <input 
                                    type="password" 
                                    name="password"
                                    className="underline-input" 
                                    placeholder="Contraseña" 
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                        </div>
                        
                        {error && <p className="error-message">{error}</p>}
                        
                        <div className="login-links">
                            <Link to="/password">
                                <p className="link-text">¿Olvidaste tu contraseña?</p>
                            </Link>
                            <Link to="/register">
                                <p className="link-text">¿No tienes cuenta?, Registrate</p>
                            </Link>
                        </div>
                        
                        <button 
                            type="submit" 
                            className="login-button"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Iniciando...' : 'Inicia Sesión'}
                        </button>
                    </form>

                    {isSubmitted && (
                        <div className="success-message">
                            <div className="checkmark">✓</div>
                            <h2>¡Bienvenido!</h2>
                            <p>Redirigiendo...</p>
                        </div>
                    )}
                </div>
                
                <div className="login-image-container">
                    <div className="image-wrapper">
                        <img className="decoration top" alt="Decoration" src={arriba} />
                        <img className="decoration bottom" alt="Decoration" src={abajo} />
                        <img className="main-image" alt="Login illustration" src={login} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;