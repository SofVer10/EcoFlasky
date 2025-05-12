import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Products from './pages/products'
import Nav from "./components/Nav"
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
import Favoritos from './pages/favoritos';
import TerminosCondiciones from './pages/terminosycondiciones'
import LoginAdmin from "./pages/loginAdmin";
import PrimerUsoAdmin from "./pages/primerUsoAdmin";

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

function Content() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/primerUso" && <Nav />}
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
          <Route path="/favoritos" element={<Favoritos/>} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/primerUso" element={<PrimerUsoAdmin />} />
      </Routes>
      {location.pathname !== "/primerUso" && <Footer />}
    </>
  );
      }

export default App;
