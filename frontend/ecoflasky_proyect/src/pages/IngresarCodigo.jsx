import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/IngresarCodigo.css';
import recu2 from "../images/recu2.png";

const IngresarCodigo = () => {
  const [code, setCode] = useState(['', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  // Verificar si hay un email guardado, si no redirigir
  useEffect(() => {
    const email = localStorage.getItem('recoveryEmail');
    if (!email) {
      navigate('/password');
    }
  }, [navigate]);

  const handleInputChange = (index, value) => {
    if (value.length > 1) return; // Solo un dígito por input
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus al siguiente input
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Manejar backspace para ir al input anterior
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    const fullCode = code.join('');
    
    if (fullCode.length !== 5) {
      setError('Por favor ingresa el código completo');
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('http://localhost:4000/api/passwordRecovery/verifyCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Para incluir cookies
        body: JSON.stringify({ code: fullCode }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Código verificado correctamente');
        setTimeout(() => {
          navigate('/cambiarContrasena');
        }, 1500);
      } else {
        setError(data.message || 'Código inválido');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error de conexión. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    const email = localStorage.getItem('recoveryEmail');
    if (!email) {
      setError('No se encontró el email. Vuelve a iniciar el proceso.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:4000/api/passwordRecovery/requestCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Código reenviado correctamente');
        setCode(['', '', '', '', '']); // Limpiar inputs
      } else {
        setError(data.message || 'Error al reenviar el código');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error de conexión. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="codigo-container">
      <div className="codigo-left">
        <h2>Ingresar tu código</h2>
        
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

        <div className="codigo-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              disabled={loading}
              style={{
                textAlign: 'center',
                fontSize: '20px',
                fontWeight: 'bold'
              }}
            />
          ))}
        </div>
        
        <div className="codigo-texto">
          <p>
            ¿No has recibido el código?{' '}
            <button 
              type="button" 
              onClick={handleResendCode}
              disabled={loading}
              style={{
                background: 'none',
                border: 'none',
                color: '#007bff',
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              Volver a enviar código
            </button>
          </p>
        </div>

        <button 
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Verificando...' : 'Enviar'}
        </button>
      </div>
      
      <div className="codigo-right">
        <img src={recu2} alt="Código" />
      </div>
    </div>
  );
};

export default IngresarCodigo;