import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const API = "http://localhost:4000/api";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const Login = async (email, password) => {
    try {
      const response = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error en la autenticación");
      }

      if (data.success) {
        // Actualizar estado
        const userData = {
          email,
          userType: data.userType
        };
        
        setUser(userData);
        setUserType(data.userType);
        setIsLoggedIn(true);

        return { 
          success: true, 
          message: data.message,
          userType: data.userType,
          redirectTo: data.redirectTo
        };
      } else {
        throw new Error(data.message || "Error en la autenticación");
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const logout = async () => {
    try {
      await fetch(`${API}/logout`, {
        method: "POST",
        credentials: 'include'
      });
    } catch (error) {
      console.error("Error al hacer logout:", error);
    }
    
    // Limpiar estado
    setUser(null);
    setUserType(null);
    setIsLoggedIn(false);
  };

  // Función para verificar si hay una sesión activa
  const checkAuthStatus = async () => {
    try {
      const response = await fetch(`${API}/verify-session`, {
        method: "GET",
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.json();
        if (data.isAuthenticated) {
          setUser(data.user);
          setUserType(data.userType);
          setIsLoggedIn(true);
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error("Error verificando sesión:", error);
      return false;
    }
  };

  // Verificar autenticación al cargar la app
  useEffect(() => {
    const initAuth = async () => {
      setLoading(true);
      await checkAuthStatus();
      setLoading(false);
    };

    initAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ 
        user, 
        userType,
        isLoggedIn,
        loading,
        Login, 
        logout,
        API 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// Componente para rutas protegidas adaptado a tu sistema
export const ProtectedRoute = ({ children, allowedUserTypes = [] }) => {
  const { isLoggedIn, userType, loading } = useAuth();

  // Mostrar loading mientras se verifica la autenticación
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Verificando autenticación...</p>
        </div>
      </div>
    );
  }

  // Si no está logueado, redirigir al login
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  // Si está logueado pero no tiene el tipo de usuario correcto
  if (allowedUserTypes.length > 0 && !allowedUserTypes.includes(userType)) {
    // Redirigir según el tipo de usuario (simplificado para tu sistema)
    const redirectMap = {
      'Admin': '/bienvenidaAdmin',
      'Employee': '/bienvenidaAdmin',
      'Customer': '/inicio'
    };
    
    const userDashboard = redirectMap[userType];
    if (userDashboard) {
      return <Navigate to={userDashboard} replace />;
    }
    
    // Si no hay dashboard definido, mostrar página de acceso denegado
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Acceso Denegado</h1>
          <p className="text-gray-600 mb-6">No tienes permisos para acceder a esta página.</p>
          <button 
            onClick={() => window.history.back()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Volver
          </button>
        </div>
      </div>
    );
  }

  // Si todo está bien, renderizar el componente
  return children;
};

// Componente para rutas públicas (redirige si ya está autenticado)
export const PublicRoute = ({ children }) => {
  const { isLoggedIn, userType, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (isLoggedIn) {
    // Redirigir según el tipo de usuario (simplificado)
    const redirectMap = {
      'Admin': '/bienvenidaAdmin',
      'Employee': '/bienvenidaAdmin',
      'Customer': '/inicio'
    };
    
    const userDashboard = redirectMap[userType] || '/inicio';
    return <Navigate to={userDashboard} replace />;
  }

  return children;
};