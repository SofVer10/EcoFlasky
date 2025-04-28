import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/stylesinicio.css';
import Footer from '../components/Footer';
import botellaRosa from '../images/vector-1.png';
import productoimagen from '../images/termonegro.png';
import par from '../images/par.png';
import termos from '../images/termos.png';
import ofertas from '../images/ofertas.png';
import personalizados from '../images/personalizados.png';
import solidos from '../images/solidos.png';

const Inicio = () => {
  
  
  const productos = [
    {
      id: 1,
      titulo: "Termos personalizados",
      imagen: productoimagen,
      descripcion: "Lorem ipsum dolor sit amet consectetur. Non malesuada tellus suscipit odio volutpat turpii adipiscing. Dictum esce purus pretium praesent iugiet eri prota lacus nulam tisper."
    },
    {
      id: 2,
      titulo: "Termos de 500ml",
      imagen: par,
      descripcion: "Lorem ipsum dolor sit amet consectetur. Non malesuada tellus suscipit odio volutpat turpii adipiscing. Dictum esce purus pretium praesent iugiet eri prota lacus nulam tisper."
    },
    {
      id: 3,
      titulo: "Diseñados",
      imagen: termos,
      descripcion: "Lorem ipsum dolor sit amet consectetur. Non malesuada tellus suscipit odio volutpat turpii adipiscing. Dictum esce purus pretium praesent iugiet eri prota lacus nulam tisper."
    },
    {
      id: 4,
      titulo: "Personalizados",
      imagen: personalizados,
      descripcion: "Lorem ipsum dolor sit amet consectetur. Non malesuada tellus suscipit odio volutpat turpii adipiscing. Dictum esce purus pretium praesent iugiet eri prota lacus nulam tisper."
    },
    {
      id: 5,
      titulo: "Ofertas",
      imagen: ofertas,
      descripcion: "Lorem ipsum dolor sit amet consectetur. Non malesuada tellus suscipit odio volutpat turpii adipiscing. Dictum esce purus pretium praesent iugiet eri prota lacus nulam tisper."
    },
    {
      id: 6,
      titulo: "Colores solidos",
      imagen: solidos,
      descripcion: "Lorem ipsum dolor sit amet consectetur. Non malesuada tellus suscipit odio volutpat turpii adipiscing. Dictum esce purus pretium praesent iugiet eri prota lacus nulam tisper."
    },
    // Puedes añadir más productos aquí
  ];
  const [currentSlide, setCurrentSlide] = useState(0);


  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(productos.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + Math.ceil(productos.length / 3)) % Math.ceil(productos.length / 3));
  };

  // Determinar cuáles productos mostrar basado en la diapositiva actual
  const startIndex = currentSlide * 3;
  const visibleProducts = productos.slice(startIndex, startIndex + 3);

  return (
    <div className="inicio-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Inicio</div>
        <div className="nav-links">
          <Link to="/">INICIO</Link>
          <Link to="/sobre-nosotros">SOBRE NOSOTROS</Link>
          <Link to="/productos">PRODUCTOS</Link>
          <Link to="/contactanos">CONTÁCTANOS</Link>
          <Link to="/terminos">TÉRMINOS Y CONDICIONES</Link>
        </div>
      </nav>
      
      {/* Hero Section with bottles */}
      <div className="hero-section">
        <div className="bottles-container">
          <div className="bottles-row">
          <img src={botellaRosa} alt="Botella Rosa" className="bottle" />
          </div>
          <div className="wave-overlay"></div>
        </div>
        
        <div className="content-section">
          <h1>ECOFLASKY</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non pulvinar maecenas sed 
            elementum tortor lacus. Amet tempor lorem faucibus ut nunc dictum 
            adipiscing. Dictad esce purus pretium praesent augue ori pretia lacus natoquesit. Eget in cursus placerat id.
          </p>
          <button className="shop-button">PRODUCTOS</button>
        </div>
      </div>
      
      {/* MÁS COMPRADOS Section */}
      <div className="productos-populares-container">
        <h2 className="section-title">MÁS COMPRADOS</h2>
        <div className="title-underline"></div>
        
        <div className="carousel-container">
          <button className="arrow-button prev" onClick={prevSlide}>
            &#10094;&#10094;
          </button>
          
          <div className="products-grid">
            {visibleProducts.map((producto) => (
              <div key={producto.id} className="product-card">
                <div className="product-image-container">
                  <img src={producto.imagen} alt={producto.titulo} className="product-image" />
                  <button className="cart-button">
                    <span className="cart-icon">🛒</span>
                  </button>
                </div>
                <h3 className="product-title">{producto.titulo}</h3>
                <p className="product-description">{producto.descripcion}</p>
                <button className="comprar-button">COMPRAR</button>
              </div>
            ))}
          </div>

          
          <button className="arrow-button next" onClick={nextSlide}>
            &#10095;&#10095;
          </button>
        </div>
      </div>

    </div>
  );
};

export default Inicio;