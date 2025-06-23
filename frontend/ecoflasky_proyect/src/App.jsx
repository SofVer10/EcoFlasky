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
import { AuthProvider, useAuth } from './context/AuthContext.jsx'

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
  const { isAdmin, user } = useAuth(); // Obtener más información del contexto

  // Debug: Agregar console.log para verificar el estado
  console.log('isAdmin:', isAdmin, 'user:', user, 'pathname:', location.pathname);

  // Configuración más detallada de rutas
  const routeConfig = {
    // Rutas que no deben mostrar navegación
    noNav: ['/primerUso', '/', '/register', '/password', '/recuperarContrasena', '/ingresarCodigo', '/cambiarContrasena'],
    
    // Rutas EXCLUSIVAS de administrador (solo admin puede acceder)
    adminOnlyRoutes: [
      '/agregarEmpleado',
      '/agregarDistruibidor',
      '/agregarProveedor', 
      '/agregarProducto',
      '/verDistruibidor',
      '/verProducto',
      '/bienvenidaAdmin'
    ],
    
    // Rutas públicas o de cliente (siempre Nav normal a menos que sea admin)
    publicRoutes: [
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
    
    // Rutas exclusivas de admin - siempre NavAdmin
    if (routeConfig.adminOnlyRoutes.includes(currentPath)) {
      return 'admin';
    }
    
    // Para rutas públicas, verificar si el usuario es admin Y está autenticado
    if (routeConfig.publicRoutes.includes(currentPath)) {
      // Solo mostrar NavAdmin si realmente es admin y está autenticado
      if (isAdmin === true && user && user.role === 'admin') {
        return 'admin';
      }
      return 'normal';
    }
    
    // Por defecto, navegación normal
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
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/acercadenosotros" element={<AcercaDe />} />
        <Route path="/productos" element={<Products/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/inicio" element={<Inicio/>} />
        <Route path="/password" element={<Password/>} />
        <Route path="/regular" element={<Regular/>} />
        <Route path="/economico" element={<Economico/>} />
        <Route path="/disenado" element={<Disenado/>} />
        <Route path="/TerminosCondiciones" element={<TerminosCondiciones />} />
        <Route path="/" element={<Login />} />
        <Route path="/recuperarContrasena" element={<RecuperarContrasena/>} />
        <Route path="/favoritos" element={<Favoritos/>} />
        <Route path="/primerUso" element={<PrimerUsoAdmin/>} />
        <Route path="/agregarEmpleado" element={<AgregarEmpleado/>} />
        <Route path="/agregarDistruibidor" element={<AgregarDistruibidor />} />
        <Route path="/agregarProducto" element={<AgregarProducto />} />
        <Route path="/verDistruibidor" element={<DistributorPage />} />
        <Route path="/verProducto" element={<ProductsPage />} />
        <Route path="/agregarProveedor" element={<AgregarProveedor/>} />
        <Route path="/bienvenidaAdmin" element={<BienvenidoAdmin/>} />
        <Route path="/cambiarContrasena" element={<CambiarContrasena />} />
        <Route path="/verifyCode" element={<VerifyCode />} />

      </Routes>
      
      {shouldShowFooter && <Footer />}
    </>
  )
}

export default App;