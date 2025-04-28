import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styleFavoritos.css'; // You'll need to create this CSS file
import favoritos from '../images/favoritos.png';
import productoimagen from '../images/termonegro.png';
import par from '../images/par.png';
import termos from '../images/termos.png';
import ofertas from '../images/ofertas.png';
import personalizados from '../images/personalizados.png';
import solidos from '../images/solidos.png';

const Favoritos = () => {
  // State for shopping cart
  const [cartItems, setCartItems] = useState([]);
  // State for showing/hiding cart
  const [showCart, setShowCart] = useState(false);
  
  // Function to toggle cart visibility
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  // Favorite products data based on the images provided
  const favoritosProductos = [
    {
      id: 1,
      titulo: "Botella de acero inoxidable 750 ml",
      imagen: productoimagen, // Update with actual image path
      precio: 375,
      categoria: "Bestseller"
    },
    {
      id: 2,
      titulo: "Contenedor transparente 750 ml",
      imagen: par, // Update with actual image path
      precio: 450,
      categoria: "Bestseller"
    },
    {
      id: 3,
      titulo: "Termo de doble pared 750 ml",
      imagen: termos, // Update with actual image path
      precio: 495,
      categoria: "Bestseller"
    },
    {
      id: 4,
      titulo: "Termo Floral con diseños",
      imagen: ofertas, // Update with actual image path
      precio: 525,
      categoria: "Oferta"
    },
    {
      id: 5,
      titulo: "Termo Casual",
      imagen: personalizados, // Update with actual image path
      precio: 450,
      categoria: "Oferta"
    }
  ];

  // Function to add product to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? {...item, cantidad: item.cantidad + 1} : item
      ));
    } else {
      setCartItems([...cartItems, {...product, cantidad: 1}]);
    }
    
    // Show cart after adding item
    setShowCart(true);
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

  // Render cart view
  if (showCart) {
    return (
      <div className="inicio-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            <img src="/images/logo.png" alt="EcoFlasky Logo" className="logo-img" />
          </div>
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
            {cartItems.length === 0 ? (
              <p className="empty-cart-message">Tu carrito está vacío</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-page-item">
                  <div className="cart-page-item-image">
                    <img src={item.imagen} alt={item.titulo} />
                  </div>
                  <div className="cart-page-item-info">
                    <h3 className="cart-page-item-title">{item.titulo}</h3>
                    <p className="cart-page-item-description">{item.descripcion || ""}</p>
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
              ))
            )}
            
            {cartItems.length > 0 && (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Main Favoritos view
  return (
    <div className="favoritos-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="EcoFlasky Logo" className="logo-img" />
        </div>
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

      {/* Hero Section with curved design */}
      <div className="favoritos-hero">
        <div className="favoritos-hero-content">
          <h1 className="favoritos-title">ECOFLASKY</h1>
          <h2 className="favoritos-subtitle">Favoritos</h2>
        </div>
        <div className="favoritos-hero-image">
          {/* This will be styled with CSS to match the curved image in your reference */}
        </div>
      </div>

      {/* Products Grid */}
      <div className="favoritos-products-container">
        <div className="favoritos-products-grid">
          {favoritosProductos.map((producto) => (
            <div key={producto.id} className="favorito-product-card">
              <div className="favorito-tag">{producto.categoria}</div>
              <div className="favorito-product-image-container">
                <img 
                  src={producto.imagen} 
                  alt={producto.titulo} 
                  className="favorito-product-image" 
                />
                <div className="favorito-product-actions">
                  <button className="favorito-heart-button">❤</button>
                  <button className="favorito-cart-button" onClick={() => addToCart(producto)}>
                    🛒
                  </button>
                </div>
              </div>
              <h3 className="favorito-product-title">{producto.titulo}</h3>
              <div className="favorito-product-price">${producto.precio}.00</div>
              <button className="favorito-add-button">Añadir</button>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Favoritos;