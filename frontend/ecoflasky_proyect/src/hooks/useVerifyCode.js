import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useVerifyCode = () => {
    const [verificationCode, setVerificationCode] = useState('');
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    const handleVerifyCode = async (e) => {
        e.preventDefault();
        
        // Validar campo
        if (!verificationCode.trim()) {
            toast.error('Por favor, ingresa el código de verificación');
            return;
        }

        // Validar longitud del código (6 caracteres hex)
        if (verificationCode.length !== 6) {
            toast.error('El código debe tener 6 caracteres');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('http://localhost:4000/api/registerClient/verifyCodeEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Para incluir cookies
                body: JSON.stringify({
                    verificationCode: verificationCode.trim()
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Verificación exitosa
                toast.success('Código verificado correctamente');
                
                // Limpiar formulario
                setVerificationCode('');
                
                // Redirigir después de un pequeño delay para que se vea el toast
                setTimeout(() => {
                    navigate('/');
                }, 1000);
                
            } else {
                // Error del servidor
                if (data.message === 'Invalid code') {
                    toast.error('Código inválido. Verifica e intenta nuevamente');
                } else if (data.message === 'error') {
                    toast.error('Token expirado o inválido. Regístrate nuevamente');
                } else {
                    toast.error(data.message || 'Error al verificar código');
                }
            }
        } catch (error) {
            console.error('Error en la verificación:', error);
            toast.error('Error de conexión. Intenta nuevamente');
        } finally {
            setLoading(false);
        }
    };

    return {
        verificationCode,
        setVerificationCode,
        handleVerifyCode,
        loading,
    };
};

export default useVerifyCode;