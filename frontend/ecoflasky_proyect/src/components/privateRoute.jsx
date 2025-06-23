// components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const ProtectedRoute = ({ children, allowedUserTypes = [] }) => {
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
    // Redirigir a su dashboard correspondiente o mostrar acceso denegado
    const redirectMap = {
      'Admin': '/admin/dashboard',
      'Employee': '/employee/dashboard',
      'Portafolio': '/portafolio/dashboard',
      'Supervisor': '/supervisor/dashboard'
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

export default ProtectedRoute;