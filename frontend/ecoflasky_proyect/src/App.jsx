
import './App.css'
import { BrowserRouter as Router, Routes, Route }
  from "react-router"

import Products from './pages/products'
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Register from './pages/register'
import Login from './pages/login'
import Password from './pages/contrasena'
import Regular from "./pages/regular"
import Disenado from "./pages/disenado"
import Economico from "./pages/economico"
import Contactanos from './pages/contacts';
import AcercaDe from './pages/acercadenosotros'


function App() {


  return (
    <>
     <Router>
        <Nav/>
          <Routes>
            <Route path="/productos" element={<Products/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/password" element={<Password/>} />
            <Route path="/regular" element={<Regular/>} />
            <Route path="/economico" element={<Economico/>} />
            <Route path="/disenado" element={<Disenado/>} />
      
          <Route path="/" element={<Products />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/acercadenosotros" element={<AcercaDe />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )


}

export default App
