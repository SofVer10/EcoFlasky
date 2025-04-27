
import './App.css'
import { BrowserRouter as Router, Routes, Route }
  from "react-router"

import Products from './pages/products'
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Contactanos from './pages/contacts';


function App() {


  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/contactanos" element={<Contactanos />} />
        </Routes>
      </Router>
      <Footer />

    </>
  )


}

export default App
