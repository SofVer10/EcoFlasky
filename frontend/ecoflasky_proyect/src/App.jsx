
import './App.css'
import { BrowserRouter as Router, Routes, Route }
from "react-router"

import Products from './pages/products'
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Inicio from './pages/inicio';
import Favoritos from './pages/favoritos';

function App() {
  

  return (
    <>
     <Router>
        <Nav/>
          <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/" element={<Favoritos />} />
          </Routes>
      </Router>

      <Footer/>

    </>
  )
}

export default App
