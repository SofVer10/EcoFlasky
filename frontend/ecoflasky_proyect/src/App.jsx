
import './App.css'
import { BrowserRouter as Router, Routes, Route }
from "react-router"

import Products from './pages/products'
import Nav from "./components/Nav"
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
     <Router>
        <Nav/>
          <Routes>
            <Route path="/productos" element={<Products/>} />
          </Routes>
<Footer/>

      </Router>

    </>
  )
}

export default App
