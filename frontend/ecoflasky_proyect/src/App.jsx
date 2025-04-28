
import './App.css'
import { BrowserRouter as Router, Routes, Route }
from "react-router"

import Products from './pages/products'
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Register from './pages/register'
import Login from './pages/login'
import Password from './pages/contrasena'

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



          </Routes>
<Footer/>
 
      </Router>

    </>
  )
}

export default App
