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
import resena from '../images/resenas.png';

// Import review profile images
// If you don't have these images yet, you'll need to add them to your images folder
import user1Profile from '../images/user1245.png';
import fernandoProfile from '../images/fernando_re.png';
import rosaProfile from '../images/rosa567.png';

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
  
  // Reseñas data
  const resenas = [
    {
      id: 1,
      username: 'User1245',
      imagen: user1Profile,
      texto: 'Lorem ipsum dolor sit amet consectetur. Non malesuada tortor suscipit odio volutpat turpis adipiscing. Euismod arcu purus parturient fugiat est prom lacus nullam neque.',
      estrellas: 4.5
    },
    {
      id: 2,
      username: 'Fernando_Re',
      imagen: fernandoProfile,
      texto: 'Lorem ipsum dolor sit amet consectetur. Non malesuada tortor suscipit odio volutpat turpis adipiscing. Euismod arcu purus parturient fugiat est prom lacus nullam neque.',
      estrellas: 5
    },
    {
      id: 3,
      username: 'Rosa567',
      imagen: rosaProfile,
      texto: 'Lorem ipsum dolor sit amet consectetur. Non malesuada tortor suscipit odio volutpat turpis adipiscing. Euismod arcu purus parturient fugiat est prom lacus nullam neque.',
      estrellas: 5
    }
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

  // Función para renderizar estrellas según la calificación
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Agregar estrellas completas
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`star-${i}`} className="star filled">★</span>);
    }
    
    // Agregar media estrella si es necesario
    if (hasHalfStar) {
      stars.push(<span key="half-star" className="star half-filled">★</span>);
    }
    
    // Agregar estrellas vacías
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-star-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };

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

      {/* Reseñas Section */}
      <div className="resenas-container">
        <h2 className="section-title">RESEÑAS</h2>
        <div className="title-underline"></div>
        
        <div className="resenas-background" style={{ backgroundImage: `url(${resena})` }}>
          <div className="resenas-overlay"></div>
          <div className="resenas-grid">
            {resenas.map((resena) => (
              <div key={resena.id} className="resena-card">
                <div className="resena-profile">
                  <img src={resena.imagen} alt={resena.username} className="profile-img" />
                  <p className="profile-username">{resena.username}</p>
                </div>
                <p className="resena-text">{resena.texto}</p>
                <div className="resena-rating">
                  {renderStars(resena.estrellas)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer would go here */}
      {/* <Footer /> */}

    </div>
  );
};

export default Inicio;