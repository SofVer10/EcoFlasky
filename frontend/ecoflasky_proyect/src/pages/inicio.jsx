import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/stylesinicio.css';
import botellaRosa from '../images/vector-1.png';
import productoimagen from '../images/termonegro.png';
import par from '../images/par.png';
import termos from '../images/termos.png';
import ofertas from '../images/ofertas.png';
import personalizados from '../images/personalizados.png';
import solidos from '../images/solidos.png';
import resena from '../images/resenas.png';
import favoritos from '../pages/favoritos';


// Import review profile images
import user1Profile from '../images/user1245.png';
import fernandoProfile from '../images/fernando_re.png';
import rosaProfile from '../images/rosa567.png';

const Inicio = () => {
  // Existing products data
  const productos = [
    {
      id: 1,
      titulo: "Termo personalizado",
      imagen: productoimagen,
      descripcion: "Lorem ipsum dolor sit amet consectetur. Non malesuada tellus suscipit odio volutpat turpii adipiscing. Dictum esce purus pretium praesent iugiet eri prota lacus nulam tisper.",
      precio: 495
    },
    {
      id: 2,
      titulo: "Termo de 500ml",
      imagen: par,
      descripcion: "Lorem ipsum dolor sit amet consectetur. Non malesuada tellus suscipit odio volutpat turpii adipiscing. Dictum esce purus pretium praesent iugiet eri prota lacus nulam tisper.",
      precio: 375
    },
    {
      id: 3,
      titulo: "Diseñados",
      imagen: termos,
      descripcion: "Lorem ipsum dolor sit amet consectetur. Non malesuada tellus suscipit odio volutpat turpii adipiscing. Dictum esce purus pretium praesent iugiet eri prota lacus nulam tisper.",
      precio: 485
    },
    {
      id: 4,
      titulo: "Personalizados",
      imagen: personalizados,
      descripcion: "Lorem ipsum dolor sit amet consectetur. Non malesuada tellus suscipit odio volutpat turpii adipiscing. Dictum esce purus pretium praesent iugiet eri prota lacus nulam tisper.",
      precio: 450
    },
    {
      id: 5,
      titulo: "Ofertas",
      imagen: ofertas,
      descripcion: "Lorem ipsum dolor sit amet consectetur. Non malesuada tellus suscipit odio volutpat turpii adipiscing. Dictum esce purus pretium praesent iugiet eri prota lacus nulam tisper.",
      precio: 350
    },
    {
      id: 6,
      titulo: "Colores solidos",
      imagen: solidos,
      descripcion: "Lorem ipsum dolor sit amet consectetur. Non malesuada tellus suscipit odio volutpat turpii adipiscing. Dictum esce purus pretium praesent iugiet eri prota lacus nulam tisper.",
      precio: 425
    },
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

  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // State for shopping cart
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      titulo: "Termo botella 750 ml",
      imagen: productoimagen,
      descripcion: "Lorem ipsum dolor sit amet consectetur. Non malesuada tortor suscipit odio volutpat turpis adipiscing. Lorem ipsum dolor sit amet consectetur. Non malesuada tortor suscipit odio volutpat turpis adipiscing.",
      cantidad: 1,
      precio: 495
    },
    {
      id: 2,
      titulo: "Termo básico 500 ml",
      imagen: par,
      descripcion: "Lorem ipsum dolor sit amet consectetur. Non malesuada tortor suscipit odio volutpat turpis adipiscing. Lorem ipsum dolor sit amet consectetur. Non malesuada tortor suscipit odio volutpat turpis adipiscing.",
      cantidad: 1,
      precio: 375
    },
    {
      id: 3,
      titulo: "Termo de bambú 500 ml",
      imagen: termos,
      descripcion: "Lorem ipsum dolor sit amet consectetur. Non malesuada tortor suscipit odio volutpat turpis adipiscing. Lorem ipsum dolor sit amet consectetur. Non malesuada tortor suscipit odio volutpat turpis adipiscing.",
      cantidad: 1,
      precio: 485
    }
  ]);
  
  // State for showing/hiding cart
  const [showCart, setShowCart] = useState(false);
  
  // State for product detail view
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // State for quantity in product detail
  const [productQuantity, setProductQuantity] = useState(1);
  
  // State for selected color
  const [selectedColor, setSelectedColor] = useState('#FF9898');

  // Function to toggle cart visibility
  const toggleCart = () => {
    setShowCart(!showCart);
    // Reset product detail view when showing cart
    if (!showCart) {
      setShowProductDetail(false);
    }
  };

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Function to update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, cantidad: newQuantity} : item
    ));
  };
  
  // Function to show product detail
  const showProductDetails = (product) => {
    setSelectedProduct(product);
    setShowProductDetail(true);
    setProductQuantity(1); // Reset quantity when viewing a new product
  };
  
  // Function to go back to main view from product detail
  const closeProductDetail = () => {
    setShowProductDetail(false);
    setSelectedProduct(null);
    setProductQuantity(1);
  };

  // Function to add product to cart from product detail
  const addToCartFromDetail = () => {
    if (!selectedProduct) return;
    
    const existingItem = cartItems.find(item => item.id === selectedProduct.id);
    
    if (existingItem) {
      updateQuantity(selectedProduct.id, existingItem.cantidad + productQuantity);
    } else {
      setCartItems([...cartItems, {
        ...selectedProduct,
        cantidad: productQuantity
      }]);
    }
    
    // Show cart or return to main view
    setShowProductDetail(false);
    setShowCart(true);
  };

  // Carousel functions
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(productos.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + Math.ceil(productos.length / 3)) % Math.ceil(productos.length / 3));
  };

  // Determine which products to show based on current slide
  const startIndex = currentSlide * 3;
  const visibleProducts = productos.slice(startIndex, startIndex + 3);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`star-${i}`} className="star filled">★</span>);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<span key="half-star" className="star half-filled">★</span>);
    }
    
    // Add empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-star-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };

  // Function to add product to cart from main view
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      updateQuantity(product.id, existingItem.cantidad + 1);
    } else {
      setCartItems([...cartItems, {...product, cantidad: 1}]);
    }
    
    // Show cart after adding item
    setShowCart(true);
  };
  
  // Available colors for products
  const availableColors = ['#FF9898', '#9EFFFF', '#DDB4FF', '#95FF9D', '#FFE897'];
  
  // Function to increase product quantity
  const increaseQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };
  
  // Function to decrease product quantity
  const decreaseQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };
  
  // Render product detail view
  if (showProductDetail && selectedProduct) {
    return (
      <div className="inicio-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">Inicio</div>
          <div className="nav-links">
            <Link to="/">INICIO</Link>
            <Link to="/favoritos">SOBRE NOSOTROS</Link>
            <Link to="/productos">PRODUCTOS</Link>
            <Link to="/contactanos">CONTÁCTANOS</Link>
            <Link to="/terminos">TÉRMINOS Y CONDICIONES</Link>
          </div>
          <div className="cart-icon-container">
            <button className="cart-icon-button" onClick={toggleCart}>
              🛒 <span className="cart-count">{cartItems.length}</span>
            </button>
          </div>
        </nav>
        
        {/* Product Detail Page */}
        <div className="product-detail-container">
          <div className="product-detail-back">
            <button onClick={closeProductDetail} className="back-button">
              ← Ver todos
            </button>
          </div>
          
          <div className="product-detail-content">
            <div className="product-detail-images">
              <div className="product-detail-tag">Termo</div>
              <div className="product-detail-main-image">
                <img src={selectedProduct.imagen} alt={selectedProduct.titulo} />
              </div>
              <div className="product-detail-thumbnails">
                <img src={selectedProduct.imagen} alt={selectedProduct.titulo} className="thumbnail selected" />
                <img src={selectedProduct.imagen} alt={selectedProduct.titulo} className="thumbnail" />
                <img src={selectedProduct.imagen} alt={selectedProduct.titulo} className="thumbnail" />
              </div>
            </div>
            
            <div className="product-detail-info">
              <h2 className="product-detail-title">{selectedProduct.titulo}</h2>
              <p className="product-detail-description">{selectedProduct.descripcion}</p>
              
              <div className="product-detail-rating">
                {renderStars(4.5)}
              </div>
              
              <div className="product-detail-colors">
                {availableColors.map((color, index) => (
                  <button 
                    key={index}
                    className={`color-button ${selectedColor === color ? 'selected-color' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
              
              <div className="product-detail-price">
                <span className="price-label">Precio:</span>
                <span className="price-value">${selectedProduct.precio}</span>
              </div>
              
              <div className="product-detail-quantity">
                <div className="quantity-controls">
                  <button className="quantity-button" onClick={decreaseQuantity}>-</button>
                  <span className="quantity-value">{productQuantity}</span>
                  <button className="quantity-button" onClick={increaseQuantity}>+</button>
                </div>
                <button className="add-to-cart-button" onClick={addToCartFromDetail}>
                  Añadir al carrito
                </button>
              </div>
              
              <div className="product-detail-suggestion">
                <h4>Puede que te guste:</h4>
                <div className="suggestion-item">
                  <img src={termos} alt="Termo sugerido" className="suggestion-image" />
                  <span className="suggestion-name">Termo de bambú, 500 ml</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Render cart view
  if (showCart) {
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
          <div className="cart-icon-container">
            <button className="cart-icon-button" onClick={toggleCart}>
              🛒 <span className="cart-count">{cartItems.length}</span>
            </button>
          </div>
        </nav>
        
        {/* Shopping Cart Page */}
        <div className="cart-page-container">
          <h1 className="cart-page-title">CARRITO DE COMPRAS.</h1>
          
          <div className="cart-page-content">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-page-item">
                <div className="cart-page-item-image">
                  <img src={item.imagen} alt={item.titulo} />
                </div>
                <div className="cart-page-item-info">
                  <h3 className="cart-page-item-title">{item.titulo}</h3>
                  <p className="cart-page-item-description">{item.descripcion}</p>
                </div>
                <div className="cart-page-item-controls">
                  <div className="cart-page-quantity">
                    <label>Cantidad:</label>
                    <div className="cart-page-quantity-input">
                      <button 
                        className="quantity-button" 
                        onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                        disabled={item.cantidad <= 1}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        min="1"
                        value={item.cantidad}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                      />
                      <button 
                        className="quantity-button" 
                        onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cart-page-price">
                    <label>Precio:</label>
                    <span>${item.precio}</span>
                  </div>
                  <button className="cart-page-remove-button" onClick={() => removeFromCart(item.id)}>
                    ✖
                  </button>
                </div>
              </div>
            ))}
            
            <div className="cart-page-total">
              <span>Cantidad total a pagar:</span>
              <span className="cart-page-total-price">${calculateTotal()}</span>
            </div>
            
            <div className="cart-page-actions">
              <button className="cart-page-pay-button">PAGAR</button>
              <button className="cart-page-continue-button" onClick={toggleCart}>
                Continuar comprando
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main content (only shown when cart is not visible)
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
        <div className="cart-icon-container">
          <button className="cart-icon-button" onClick={toggleCart}>
            🛒 <span className="cart-count">{cartItems.length}</span>
          </button>
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
          <Link to= "/productos">
  <button className="shop-button">PRODUCTOS</button>
</Link>
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
                  <img 
                    src={producto.imagen} 
                    alt={producto.titulo} 
                    className="product-image" 
                    onClick={() => showProductDetails(producto)}
                  />
                  <button className="cart-button" onClick={() => addToCart(producto)}>
                    <span className="cart-icon">🛒</span>
                  </button>
                </div>
                <h3 className="product-title">{producto.titulo}</h3>
                <p className="product-description">{producto.descripcion}</p>
                <button className="comprar-button" onClick={() => showProductDetails(producto)}>VER DETALLES</button>
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