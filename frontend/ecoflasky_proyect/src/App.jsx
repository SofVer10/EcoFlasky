import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Products from './pages/products'
import FooterAdmin from './components/FooterAdmin.jsx'
import Nav from "./components/Nav"
import NavAdmin from "./components/NavAdmin"
import Footer from "./components/Footer"
import AcercaDe from './pages/acercadenosotros'
import Register from './pages/register'
import Login from './pages/login'
import Password from './pages/contrasena'
import Regular from "./pages/regular"
import Disenado from "./pages/disenado"
import Economico from "./pages/economico"
import Contactanos from './pages/contacts';
import Inicio from './pages/inicio';
import AgregarEmpleado from './pages/agregarEmpleado';
import AgregarProveedor from './pages/agergarProveedor';
import RecuperarContrasena from './pages/recuperarContrasenaCorreo';
import Favoritos from './pages/favoritos';
import TerminosCondiciones from './pages/terminosycondiciones'
import LoginAdmin from "./pages/loginAdmin";
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
  const { isAdmin } = useAuth(); // Usar el contexto de autenticación

  // Configuración más detallada de rutas
  const routeConfig = {
    // Rutas que no deben mostrar navegación
    noNav: ['/primerUso'],
    
    // Rutas de administrador (siempre muestran NavAdmin)
    adminRoutes: [
      '/loginAdmin',
      '/agregarEmpleado',
      '/agregarDistruibidor',
      '/agregarProveedor', 
      '/agregarProducto',
      '/verDistruibidor',
      '/verProducto',
      '/bienvenidaAdmin'
    ],
    
    // Rutas que pueden variar según el usuario (admin o normal)
    dynamicRoutes: [
      '/productos',
      '/favoritos'
      // Agregar más rutas que cambien según el tipo de usuario
    ]
  };

  // Función para determinar qué navegación mostrar
  const getNavigationType = () => {
    const currentPath = location.pathname;
    
    // No mostrar navegación
    if (routeConfig.noNav.includes(currentPath)) {
      return 'none';
    }
    
    // Rutas específicas de admin
    if (routeConfig.adminRoutes.includes(currentPath)) {
      return 'admin';
    }
    
    // Rutas dinámicas que dependen del contexto del usuario
    if (routeConfig.dynamicRoutes.includes(currentPath) && isAdmin) {
      return 'admin';
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
        <Route path="/login" element={<Login/>} />
        <Route path="/password" element={<Password/>} />
        <Route path="/regular" element={<Regular/>} />
        <Route path="/economico" element={<Economico/>} />
        <Route path="/disenado" element={<Disenado/>} />
        <Route path="/TerminosCondiciones" element={<TerminosCondiciones />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/recuperarContrasena" element={<RecuperarContrasena/>} />
        <Route path="/favoritos" element={<Favoritos/>} />
        <Route path="/primerUso" element={<PrimerUsoAdmin/>} />
        <Route path="/loginAdmin" element={<LoginAdmin/>} />
        <Route path="/agregarEmpleado" element={<AgregarEmpleado/>} />
        <Route path="/agregarDistruibidor" element={<AgregarDistruibidor />} />
        <Route path="/agregarProducto" element={<AgregarProducto />} />
        <Route path="/verDistruibidor" element={<DistributorPage />} />
        <Route path="/verProducto" element={<ProductsPage />} />
        <Route path="/agregarProveedor" element={<AgregarProveedor/>} />
        <Route path="/bienvenidaAdmin" element={<BienvenidoAdmin/>} />
      </Routes>
      
      {shouldShowFooter && <Footer />}
    </>
  )
}

export default App;