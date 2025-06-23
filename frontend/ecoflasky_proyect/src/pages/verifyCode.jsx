import React from "react";
import { Link } from 'react-router-dom'; 
import register from "../images/registrarse.png";
import arriba from "../images/arriba.png";
import abajo from "../images/abajo.png";
import gmail from "../images/gmail.png";
import useVerifyCode from "../hooks/UseVerifyCode.js";
import "../styles/verifyCodeStyles.css";

const VerifyCode = () => {
    const {
        verificationCode,
        setVerificationCode,
        handleVerifyCode,
        loading,
    } = useVerifyCode();

    return (
        <>
            <div className="container">
                <div className="half-color-verify">
                    <div className="texto-verify">
                        <h1 style={{color:"black", opacity: 0.5}}>VERIFICACIÓN</h1>
                        <p style={{color: "black"}}>Hemos enviado un código de verificación a tu correo electrónico. Ingresa el código para completar tu registro.</p>
                    </div>
                    
                    <form onSubmit={handleVerifyCode}>
                        <div className="input-container-code">
                            <img className="gmail" alt="Email icon" src={gmail} />
                            <input 
                                type="text" 
                                className="code-input" 
                                placeholder="Código de verificación"
                                value={verificationCode}
                                onChange={(e) => setVerificationCode(e.target.value.toUpperCase())}
                                maxLength={6}
                                required
                                disabled={loading}
                            />
                        </div>
                        
                        <Link to="/register">
                            <p className="irRegister">¿No recibiste el código? Regístrate nuevamente</p>
                        </Link>
                        
                        <button 
                            type="submit" 
                            className="Verificar"
                            disabled={loading}
                        >
                            {loading ? "Verificando..." : "Verificar código"}
                        </button>
                    </form>
                </div>
                
                <div className="content-verify">
                    <div className="image-wrapper-verify">
                        <img className="elipse1-verify" alt="Decorative element" src={arriba} />
                        <img className="elipse2-verify" alt="Decorative element" src={abajo} />
                        <img className="verify-image" alt="Verify illustration" src={register} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerifyCode;