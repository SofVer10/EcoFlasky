import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Products from './pages/products'
import Nav from "./components/Nav"
import NavAdmin from "./components/NavAdmin"
import Footer from "./components/Footer"
import AcercaDe from './pages/acercadenosotros'
import CambiarContrasena from './pages/CambiarContrasena.jsx'
import Register from './pages/register'
import Login from './pages/login'
import Password from './pages/contrasena'
import Regular from "./pages/regular"
import Disenado from "./pages/disenado"
import Economico from "./pages/economico"
import Contactanos from './pages/contacts';
import VerifyCode from './pages/verifyCode.jsx'
import Inicio from './pages/inicio';
import AgregarEmpleado from './pages/agregarEmpleado';
import AgregarProveedor from './pages/agergarProveedor';
import RecuperarContrasena from './pages/recuperarContrasenaCorreo';
import Favoritos from './pages/favoritos';
import TerminosCondiciones from './pages/terminosycondiciones'
import PrimerUsoAdmin from "./pages/primerUsoAdmin";
import AgregarDistruibidor from './pages/agregarDistruibidor'
import AgregarProducto from './pages/registrarProductos'
import DistributorPage from './pages/verDistruibidor'
import ProductsPage from './pages/verProducts'
import BienvenidoAdmin from './pages/bienvenidaadmin.jsx'
import IngresarCodigo from './pages/IngresarCodigo.jsx'

import { AuthProvider, ProtectedRoute, PublicRoute, useAuth } from './context/AuthContext.jsx'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Content />
      </AuthProvider>
    </Router>
  );
}

function Content() {
  const location = useLocation();
  const { userType, isLoggedIn } = useAuth();

  // Configuración de rutas
  const routeConfig = {
    // Rutas que no deben mostrar navegación
    noNav: ['/primerUso', '/', '/register', '/password', '/recuperarContrasena', '/ingresarCodigo', '/cambiarContrasena', '/verifyCode'],
    
    // Rutas EXCLUSIVAS de admin/empleado
    adminEmployeeRoutes: [
      '/agregarEmpleado',
      '/agregarDistruibidor',
      '/agregarProveedor', 
      '/agregarProducto',
      '/verDistruibidor',
      '/verProducto',
      '/bienvenidaAdmin',
      '/agregarProducto'

    ],
    
    // Rutas de cliente
    customerRoutes: [
      '/productos',
      '/favoritos',
      '/contactanos',
      '/acercadenosotros',
      '/inicio',
      '/regular',
      '/economico',
      '/disenado',
      '/TerminosCondiciones'
    ]
  };

  // Función para determinar qué navegación mostrar
  const getNavigationType = () => {
    const currentPath = location.pathname;
    
    // No mostrar navegación en rutas específicas
    if (routeConfig.noNav.includes(currentPath)) {
      return 'none';
    }
    
    // Si no está logueado, navegación normal por defecto
    if (!isLoggedIn) {
      return 'normal';
    }
    
    // Rutas exclusivas de admin/empleado - siempre NavAdmin
    if (routeConfig.adminEmployeeRoutes.includes(currentPath)) {
      return 'admin';
    }
    
    // Para rutas de cliente, mostrar Nav normal siempre (incluso si admin está navegando)
    if (routeConfig.customerRoutes.includes(currentPath)) {
      // Si es admin o empleado navegando por rutas de cliente, mostrar NavAdmin
      if (userType === 'Admin' || userType === 'Employee') {
        return 'admin';
      }
      return 'normal';
    }
    
    // Por defecto según el tipo de usuario
    if (userType === 'Admin' || userType === 'Employee') {
      return 'admin';
    }
    
    return 'normal';
  };

  // Renderizar la navegación según el tipo
  const renderNavigation = () => {
    const navType = getNavigationType();
    
    switch (navType) {
      case 'none':
        return null;
      case 'admin':
        return <NavAdmin />;
      case 'normal':
      default:
        return <Nav />;
    }
  };

  const shouldShowFooter = getNavigationType() !== 'none';

  return (
    <>
      {renderNavigation()}
      
      <Routes>
        {/* Rutas públicas - Solo accesibles si NO está autenticado */}
        <Route path="/" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        
        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
        
        <Route path="/password" element={
          <PublicRoute>
            <Password />
          </PublicRoute>
        } />
        
        <Route path="/recuperarContrasena" element={
          <PublicRoute>
            <RecuperarContrasena />
          </PublicRoute>
        } />
        
        <Route path="/verifyCode" element={
          <PublicRoute>
            <VerifyCode />
          </PublicRoute>
        } />
        
        <Route path="/ingresarCodigo" element={
          <PublicRoute>
            <IngresarCodigo />
          </PublicRoute>
        } />
        
        <Route path="/cambiarContrasena" element={
          <PublicRoute>
            <CambiarContrasena />
          </PublicRoute>
        } />

        {/* Rutas protegidas para CLIENTES */}
        <Route path="/inicio" element={
          <ProtectedRoute allowedUser Types={['Customer']}>
            <Inicio />
          </ProtectedRoute>
        } />
        
        <Route path="/productos" element={
          <ProtectedRoute allowedUser Types={['Customer']}>
            <Products />
          </ProtectedRoute>
        } />
        
        <Route path="/favoritos" element={
          <ProtectedRoute allowedUser Types={['Customer']}>
            <Favoritos />
          </ProtectedRoute>
        } />
        
        <Route path="/regular" element={
          <ProtectedRoute allowedUser Types={['Customer']}>
            <Regular />
          </ProtectedRoute>
        } />
        
        <Route path="/economico" element={
          <ProtectedRoute allowedUser Types={['Customer']}>
            <Economico />
          </ProtectedRoute>
        } />
        
        <Route path="/disenado" element={
          <ProtectedRoute allowedUser Types={['Customer']}>
            <Disenado />
          </ProtectedRoute>
        } />

        {/* Rutas accesibles para cualquier usuario autenticado */}
        <Route path="/contactanos" element={
          <ProtectedRoute>
            <Contactanos />
          </ProtectedRoute>
        } />
        
        <Route path="/acercadenosotros" element={
          <ProtectedRoute>
            <AcercaDe />
          </ProtectedRoute>
        } />
        
        <Route path="/TerminosCondiciones" element={
          <ProtectedRoute>
            <TerminosCondiciones />
          </ProtectedRoute>
        } />

        {/* Rutas protegidas para ADMIN y EMPLEADOS */}
        <Route path="/bienvenidaAdmin" element={
          <ProtectedRoute allowedUser Types={['Admin', 'Employee']}>
            <BienvenidoAdmin />
          </ProtectedRoute>
        } />
        
        <Route path="/verDistruibidor" element={
          <ProtectedRoute allowedUser Types={['Admin', 'Employee']}>
            <DistributorPage />
          </ProtectedRoute>
        } />
        
        <Route path="/verProducto" element={
          <ProtectedRoute allowedUser Types={['Admin', 'Employee']}>
            <ProductsPage />
          </ProtectedRoute>
        } />

          <Route path="/agregarProducto" element={
          <ProtectedRoute allowedUser Types={['Admin', 'Employee']}>
            <AgregarProducto />
          </ProtectedRoute>
        } />

        {/* Rutas EXCLUSIVAS de ADMIN */}
        <Route path="/primerUso" element={
          <ProtectedRoute allowedUser Types={['Admin']}>
            <PrimerUsoAdmin />
          </ProtectedRoute>
        } />
        
        <Route path="/agregarEmpleado" element={
          <ProtectedRoute allowedUser Types={['Admin']}>
            <AgregarEmpleado />
          </ProtectedRoute>
        } />
        
        <Route path="/agregarDistruibidor" element={
          <ProtectedRoute allowedUser Types={['Admin']}>
            <AgregarDistruibidor />
          </ProtectedRoute>
        } />
        
        <Route path="/agregarProducto" element={
          <ProtectedRoute allowedUser Types={['Admin']}>
            <AgregarProducto />
          </ProtectedRoute>
        } />
        
        <Route path="/agregarProveedor" element={
          <ProtectedRoute allowedUser Types={['Admin']}>
            <AgregarProveedor />
          </ProtectedRoute>
        } />

        {/* Ruta 404 - accesible para todos */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
              <p className="text-gray-600 mb-6">Página no encontrada</p>
              <a href="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Volver al inicio
              </a>
            </div>
          </div>
        } />
      </Routes>
      
      {shouldShowFooter && <Footer />}
    </>
  )
}

export default App;
