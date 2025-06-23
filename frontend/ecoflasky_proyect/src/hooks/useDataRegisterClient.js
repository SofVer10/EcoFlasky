import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useRegisterClient = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        
        // Validar campos
        if (!name.trim() || !email.trim() || !password.trim() || !cellphone.trim()) {
            toast.error('Por favor, completa todos los campos');
            return;
        }

        // Validar email básico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Por favor, ingresa un email válido');
            return;
        }

        // Validar contraseña mínima
        if (password.length < 6) {
            toast.error('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        setLoading(true);

        try {
            console.log('Enviando datos:', { name, email, password, cellphone }); // Debug
            
            const response = await fetch('http://localhost:4000/api/registerClient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Para incluir cookies
                body: JSON.stringify({
                    name: name.trim(),
                    lastname: '', // Si tu backend lo requiere
                    email: email.trim(),
                    password: password,
                    cellphone: cellphone.trim(),
                    isVerified: false
                }),
            });

            const data = await response.json();
            console.log('Respuesta del servidor:', data); // Debug

            if (response.ok) {
                // Registro exitoso
                toast.success('Cliente registrado, por favor revise su correo');
                
                // Limpiar formulario
                setName('');
                setEmail('');
                setPassword('');
                setCellphone('');
                
                // Redirigir después de un pequeño delay para que se vea el toast
                setTimeout(() => {
                    navigate('/verifyCode');
                }, 1500);
                
            } else {
                // Error del servidor
                if (data.message === 'Client already exists') {
                    toast.error('Este email ya está registrado');
                } else {
                    toast.error(data.message || 'Error al registrar cliente');
                }
            }
        } catch (error) {
            console.error('Error en el registro:', error);
            toast.error('Error de conexión. Intenta nuevamente');
        } finally {
            setLoading(false);
        }
    };

    return {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        cellphone,
        setCellphone,
        handleRegister,
        loading,
    };
};

export default useRegisterClient;