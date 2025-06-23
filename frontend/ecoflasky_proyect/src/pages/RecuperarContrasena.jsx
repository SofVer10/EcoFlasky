// src/pages/RecuperarContraseña.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styleRecuperacionContrasenaCorreo.css';
import personaIlustracion from '../images/recuperarContrasena.png';

const RecuperarContraseña = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch('http://localhost:4000/api/passwordRecovery/requestCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Para incluir cookies
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Código enviado correctamente. Revisa tu correo.');
        // Guardar el email en localStorage para usarlo en los siguientes pasos
        localStorage.setItem('recoveryEmail', email);
        // Redirigir después de 2 segundos
        setTimeout(() => {
          navigate('/ingresarCodigo');
        }, 2000);
      } else {
        setError(data.message || 'Error al enviar el código');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error de conexión. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recuperar-container">
      <div className="recuperar-content">
        <div className="recuperar-form-container">
          <h1 className="recuperar-title">Recuperar contraseña</h1>
          
          {message && (
            <div className="success-message" style={{
              background: '#d4edda',
              color: '#155724',
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '15px',
              border: '1px solid #c3e6cb'
            }}>
              {message}
            </div>
          )}
          
          {error && (
            <div className="error-message" style={{
              background: '#f8d7da',
              color: '#721c24',
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '15px',
              border: '1px solid #f5c6cb'
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="recuperar-form">
            <div className="input-group">
              <input
                type="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="recuperar-input"
                disabled={loading}
              />
            </div>
            <button 
              type="submit" 
              className="recuperar-button"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar código'}
            </button>
          </form>
        </div>
      </div>
      <div className="imagen-decorativa">
        <img src={personaIlustracion} alt="Persona con documentos" className="persona-img" />
      </div>
    </div>
  );
};

export default RecuperarContraseña;