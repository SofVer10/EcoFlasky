import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CambiarContrasena.css';
import Recu3 from "../images/recu3.png";

const CambiarContrasena = () => {
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Verificar si hay un email guardado, si no redirigir
  useEffect(() => {
    const email = localStorage.getItem('recoveryEmail');
    if (!email) {
      navigate('/password');
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validatePasswords = () => {
    if (!passwords.newPassword || !passwords.confirmPassword) {
      setError('Por favor completa todos los campos');
      return false;
    }

    if (passwords.newPassword.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validatePasswords()) {
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('http://localhost:4000/api/passwordRecovery/newPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Para incluir cookies
        body: JSON.stringify({ 
          newPassword: passwords.newPassword 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Contraseña cambiada exitosamente');
        // Limpiar el email guardado
        localStorage.removeItem('recoveryEmail');
        // Redirigir al login después de 2 segundos
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setError(data.message || 'Error al cambiar la contraseña');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error de conexión. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cambiar-container">
      <div className="cambiar-left">
        <h2>Cambiar contraseña</h2>
        
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

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            name="newPassword"
            placeholder="Nueva Contraseña"
            value={passwords.newPassword}
            onChange={handleInputChange}
            disabled={loading}
            required
          />
          
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar Contraseña"
            value={passwords.confirmPassword}
            onChange={handleInputChange}
            disabled={loading}
            required
          />
          
          <button 
            type="submit"
            disabled={loading}
          >
            {loading ? 'Cambiando...' : 'Cambiar contraseña'}
          </button>
        </form>
      </div>
      
      <div className="cambiar-right">
        <img src={Recu3} alt="Cambiar" />
      </div>
    </div>
  );
};

export default CambiarContrasena;