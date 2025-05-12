import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Products from './pages/products';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Register from './pages/register';
import Login from './pages/login';
import Password from './pages/contrasena';
import Regular from "./pages/regular";
import Disenado from "./pages/disenado";
import Economico from "./pages/economico";
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
        <Route path="/productos" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/regular" element={<Regular />} />
        <Route path="/economico" element={<Economico />} />
        <Route path="/disenado" element={<Disenado />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/primerUso" element={<PrimerUsoAdmin />} />
      </Routes>
      {location.pathname !== "/primerUso" && <Footer />}
    </>
  );
}

export default App;
