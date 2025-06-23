import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Products from './pages/products';
import Nav from "./components/Nav";
import NavAdmin from "./components/NavAdmin";
import Footer from "./components/Footer";
import AcercaDe from './pages/acercadenosotros.jsx';
import CambiarContrasena from './pages/CambiarContrasena.jsx';
import Register from './pages/register';
import Login from './pages/login';
import Password from './pages/Contrasena.jsx';
import Regular from "./pages/regular";
import Disenado from "./pages/Disenado.jsx";
import Economico from "./pages/Economico.jsx";
import Contactanos from './pages/Contacts.jsx';
import VerifyCode from './pages/verifyCode.jsx';
import Inicio from './pages/inicio';
import AgregarEmpleado from './pages/AgregarEmpleado.jsx';
import AgregarProveedor from './pages/AgergarProveedor.jsx';
import RecuperarContrasena from './pages/recuperarContrasenaCorreo';
import Favoritos from './pages/Favoritos.jsx';
import TerminosCondiciones from './pages/terminosycondiciones';
import PrimerUsoAdmin from "./pages/primerUsoAdmin";
import AgregarDistruibidor from './pages/AgregarDistruibidor.jsx';
import AgregarProducto from './pages/registrarProductos';
import DistributorPage from './pages/verDistruibidor';
import ProductsPage from './pages/verProducts';
import BienvenidoAdmin from './pages/Bienvenidaadmin.jsx';
import IngresarCodigo from './pages/IngresarCodigo.jsx';
import Pay from './pages/EcoflaskyPay.jsx';

import { CartProvider } from './context/CartContext.jsx';
import { AuthProvider, ProtectedRoute, PublicRoute, useAuth } from './context/AuthContext.jsx';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Content />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

function Content() {
  const location = useLocation();
  const { userType, isLoggedIn } = useAuth();

  const routeConfig = {
    noNav: ['/', '/register', '/password', '/recuperarContrasena', '/ingresarCodigo', '/cambiarContrasena', '/verifyCode', '/primerUso'],
    adminEmployeeRoutes: [
      '/agregarEmpleado',
      '/agregarDistruibidor',
      '/agregarProveedor',
      '/agregarProducto',
      '/verDistruibidor',
      '/verProducto',
      '/bienvenidaAdmin'
    ],
    customerRoutes: [
      '/productos',
      '/favoritos',
      '/contactanos',
      '/acercadenosotros',
      '/inicio',
      '/pay',
      '/regular',
      '/economico',
      '/disenado',
      '/TerminosCondiciones'
    ]
  };

  const getNavigationType = () => {
    const currentPath = location.pathname;

    if (routeConfig.noNav.includes(currentPath)) return 'none';
    if (!isLoggedIn) return 'normal';

    if (routeConfig.adminEmployeeRoutes.includes(currentPath)) return 'admin';

    if (routeConfig.customerRoutes.includes(currentPath)) {
      return userType === 'Admin' || userType === 'Employee' ? 'admin' : 'normal';
    }

    return userType === 'Admin' || userType === 'Employee' ? 'admin' : 'normal';
  };

  const renderNavigation = () => {
    const navType = getNavigationType();
    switch (navType) {
      case 'none': return null;
      case 'admin': return <NavAdmin />;
      case 'normal':
      default: return <Nav />;
    }
  };

  const shouldShowFooter = getNavigationType() !== 'none';

  return (
    <>
      {renderNavigation()}
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/password" element={<PublicRoute><Password /></PublicRoute>} />
        <Route path="/recuperarContrasena" element={<PublicRoute><RecuperarContrasena /></PublicRoute>} />
        <Route path="/verifyCode" element={<PublicRoute><VerifyCode /></PublicRoute>} />
        <Route path="/ingresarCodigo" element={<PublicRoute><IngresarCodigo /></PublicRoute>} />
        <Route path="/cambiarContrasena" element={<PublicRoute><CambiarContrasena /></PublicRoute>} />

        {/* Rutas protegidas: Cliente */}
        <Route path="/inicio" element={<ProtectedRoute allowedUserTypes={['Customer']}><Inicio /></ProtectedRoute>} />
        <Route path="/productos" element={<ProtectedRoute allowedUserTypes={['Customer']}><Products /></ProtectedRoute>} />
        <Route path="/favoritos" element={<ProtectedRoute allowedUserTypes={['Customer']}><Favoritos /></ProtectedRoute>} />
        <Route path="/regular" element={<ProtectedRoute allowedUserTypes={['Customer']}><Regular /></ProtectedRoute>} />
        <Route path="/economico" element={<ProtectedRoute allowedUserTypes={['Customer']}><Economico /></ProtectedRoute>} />
        <Route path="/disenado" element={<ProtectedRoute allowedUserTypes={['Customer']}><Disenado /></ProtectedRoute>} />
        <Route path="/pay" element={<ProtectedRoute allowedUserTypes={['Customer']}><Pay /></ProtectedRoute>} />

        {/* Rutas accesibles por cualquier usuario autenticado */}
        <Route path="/contactanos" element={<ProtectedRoute><Contactanos /></ProtectedRoute>} />
        <Route path="/acercadenosotros" element={<ProtectedRoute><AcercaDe /></ProtectedRoute>} />
        <Route path="/TerminosCondiciones" element={<ProtectedRoute><TerminosCondiciones /></ProtectedRoute>} />

        {/* Rutas Admin / Empleado */}
        <Route path="/bienvenidaAdmin" element={<ProtectedRoute allowedUserTypes={['Admin', 'Employee']}><BienvenidoAdmin /></ProtectedRoute>} />
        <Route path="/verDistruibidor" element={<ProtectedRoute allowedUserTypes={['Admin', 'Employee']}><DistributorPage /></ProtectedRoute>} />
        <Route path="/verProducto" element={<ProtectedRoute allowedUserTypes={['Admin', 'Employee']}><ProductsPage /></ProtectedRoute>} />
        <Route path="/agregarProducto" element={<ProtectedRoute allowedUserTypes={['Admin', 'Employee']}><AgregarProducto /></ProtectedRoute>} />

        {/* Solo Admin */}
        <Route path="/primerUso" element={<ProtectedRoute allowedUserTypes={['Admin']}><PrimerUsoAdmin /></ProtectedRoute>} />
        <Route path="/agregarEmpleado" element={<ProtectedRoute allowedUserTypes={['Admin']}><AgregarEmpleado /></ProtectedRoute>} />
        <Route path="/agregarDistruibidor" element={<ProtectedRoute allowedUserTypes={['Admin']}><AgregarDistruibidor /></ProtectedRoute>} />
        <Route path="/agregarProveedor" element={<ProtectedRoute allowedUserTypes={['Admin']}><AgregarProveedor /></ProtectedRoute>} />

        {/* 404 */}
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
  );
}

export default App;
