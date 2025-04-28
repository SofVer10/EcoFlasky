
import './App.css'
import { BrowserRouter as Router, Routes, Route }
from "react-router"

import Products from './pages/products'
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Inicio from './pages/inicio';

function App() {
  

  return (
    <>
     <Router>
        <Nav/>
          <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/" element={<Inicio />} />
          </Routes>
      </Router>

      <Footer/>

    </>
  )
}

export default App
