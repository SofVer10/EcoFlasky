import React, { useState } from "react";
import "../styles/styleProducts.css";
import { Link } from 'react-router-dom';
import { useCart  } from '../context/CartContext';
import CarritoCompras from "../images/Vector.png";
import BotellaGris from "../images/botellaGris.png";
import Favorito from "../images/favorito.png";
import Primera from "../images/primera.png";
import Segunda from "../images/segunda.png";
import Tercera from "../images/tercera.png";
import Cuarta from "../images/cuarto.png";
import Quinta from "../images/quinta.png";
import Amarillo from "../images/amarilla.png";
import Azul from "../images/azul.png";
import Disenada from "../images/disenada.png";
import Varias from "../images/varias.png";
import Bambu from "../images/bambu.png";
import termos from "../images/termos.png";

const Products = () => {
  // Usar el hook del carrito
  const { 
    cartItems, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    getCartItemsCount 
  } = useCart();

  const products = [
    { 
      id: 1,
      type: "Regular", 
      titulo: "Termo básico 750 ml", 
      imagen: BotellaGris, 
      precio: 45,  
      classProduct:"regular", 
      descripcion: "Termo básico hecho con acero inoxidable incluye pajilla de 25 cm y agarre horizontal." 
    },
    { 
      id: 2,
      type: "Regular", 
      titulo: "Termo básico 500 ml", 
      imagen: Amarillo, 
      precio: 35, 
      classProduct: "regular", 
      descripcion: "Termo color amarillo hecho con acero inoxidable, incluye pajilla de 25 cm y agarre vertical" 
    },
    { 
      id: 3,
      type: "Regular", 
      titulo: "Termo básico 700 ml", 
      imagen: Azul, 
      precio: 40, 
      classProduct: "regular", 
      descripcion: "Termo color azul hecho con acero inoxidable, sin pajilla ni agarradera." 
    },
    { 
      id: 4,
      type: "Económico", 
      titulo: "Botella de bambú y vidrio 350 ml", 
      imagen: Varias, 
      precio: 35, 
      classProduct: "economico", 
      descripcion: "Botella de bambú y vidrio de diferentes colores, incluye agarradera de cuerda vertical." 
    },
    { 
      id: 5,
      type: "Diseñado", 
      titulo: "Termo diseñado con palmeras", 
      imagen: Disenada, 
      precio: 15, 
      classProduct: "disenado", 
      descripcion: "Termo color morado hecho con acero inoxidable diseñado con hojas de palmeras de distintos tonos de morado, diferentes tamaños." 
    },
    { 
      id: 6,
      type: "Regular", 
      titulo: "Termo de bambú 500 ml", 
      imagen: Bambu, 
      precio: 25, 
      classProduct: "regular", 
      descripcion: "Termo de bambú, incluye pajilla de 25 cm, agarre horizontal y tapa anti goteras." 
    },
    // Productos adicionales para los otros filtros
    { 
      id: 7,
      type: "Económico", 
      titulo: "Botella básica 400 ml", 
      imagen: BotellaGris, 
      precio: 20, 
      classProduct: "economico", 
      descripcion: "Botella económica de plástico reciclado, ideal para uso diario." 
    },
    { 
      id: 8,
      type: "Económico", 
      titulo: "Termo simple 300 ml", 
      imagen: Amarillo, 
      precio: 18, 
      classProduct: "economico", 
      descripcion: "Termo económico de acero básico, mantiene temperatura por 4 horas." 
    },
    { 
      id: 9,
      type: "Diseñado", 
      titulo: "Termo artístico flores", 
      imagen: Azul, 
      precio: 55, 
      classProduct: "disenado", 
      descripcion: "Termo premium con diseño floral exclusivo, acabado mate." 
    },
    { 
      id: 10,
      type: "Diseñado", 
      titulo: "Botella geométrica", 
      imagen: Varias, 
      precio: 65, 
      classProduct: "disenado", 
      descripcion: "Botella con patrones geométricos modernos, edición limitada." 
    }
  ];

  // Estados para funcionalidad local (no del carrito)
  const [showCart, setShowCart] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productQuantity, setProductQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('#FF9898');
  const [activeFilter, setActiveFilter] = useState('all');

  // Colores disponibles para productos
  const availableColors = ['#FF9898', '#9EFFFF', '#DDB4FF', '#95FF9D', '#FFE897'];

  // Función para filtrar productos según el filtro activo
  const getFilteredProducts = () => {
    if (activeFilter === 'all') return products;
    return products.filter(product => product.type.toLowerCase() === activeFilter.toLowerCase());
  };

  // Función para cambiar filtro
  const setFilter = (filter) => {
    setActiveFilter(filter);
  };

  // Función para alternar visibilidad del carrito
  const toggleCart = () => {
    setShowCart(!showCart);
    if (!showCart) {
      setShowProductDetail(false);
    }
  };

  // Función para mostrar detalles del producto
  const showProductDetails = (product) => {
    setSelectedProduct(product);
    setShowProductDetail(true);
    setProductQuantity(1);
  };
  
  // Función para cerrar detalles del producto
  const closeProductDetail = () => {
    setShowProductDetail(false);
    setSelectedProduct(null);
    setProductQuantity(1);
  };

  // Función para agregar producto al carrito desde detalles
  const addToCartFromDetail = () => {
    if (!selectedProduct) return;
    addToCart(selectedProduct, productQuantity);
    setShowProductDetail(false);
    setShowCart(true);
  };

  // Función para agregar producto al carrito desde vista principal
  const handleAddToCart = (product) => {
    addToCart(product, 1);
    setShowCart(true);
  };
  
  // Funciones para manejar cantidad en detalles
  const increaseQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };
  
  const decreaseQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  // Función para renderizar estrellas
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`star-${i}`} className="star filled">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half-star" className="star half-filled">★</span>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-star-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };

  // Renderizar vista de detalles del producto
  if (showProductDetail && selectedProduct) {
    return (
      <div className="inicio-container">
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
  
  // Renderizar vista del carrito
  if (showCart) {
    return (
      <div className="inicio-container">
        <div className="cart-page-container">
          <h1 className="cart-page-title">CARRITO DE COMPRAS.</h1>
          
          <div className="cart-page-content">
            {cartItems.length > 0 ? (
              <>
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
                  <span className="cart-page-total-price">${getCartTotal()}</span>
                </div>
              </>
            ) : (
              <div className="empty-cart">
                <p>Tu carrito está vacío</p>
              </div>
            )}
            
            <div className="cart-page-actions">
              {cartItems.length > 0 && (
                <button className="cart-page-pay-button">PAGAR</button>
              )}
              <button className="cart-page-continue-button" onClick={toggleCart}>
                Continuar comprando
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Contenido principal con filtros y productos
  return (
    <>
      <section className="parteCeleste"></section>
      <div className="menu">
        <div className="parteMenu">
          <button 
            onClick={() => setFilter('all')} 
            className={activeFilter === 'all' ? 'active-filter' : ''}
          >
            <p>Todos|</p>
          </button>
          <button 
            onClick={() => setFilter('regular')} 
            className={activeFilter === 'regular' ? 'active-filter' : ''}
          >
            <p>Regular|</p>
          </button>
          <button 
            onClick={() => setFilter('económico')} 
            className={activeFilter === 'económico' ? 'active-filter' : ''}
          >
            <p>Económico|</p>
          </button>
          <button 
            onClick={() => setFilter('diseñado')} 
            className={activeFilter === 'diseñado' ? 'active-filter' : ''}
          >
            <p>Diseñado</p>
          </button>
        </div>
 
        <div className="explora">
          <p>Explora nuestro catálogo</p>
          <img className="circular" alt="Copia de ECOFLASKY" src={Primera} />
          <img className="circular" alt="Copia de ECOFLASKY" src={Segunda} />
          <img className="circular" alt="Copia de ECOFLASKY" src={Tercera} />
          <img className="circular" alt="Copia de ECOFLASKY" src={Cuarta} />
          <img className="circular" alt="Copia de ECOFLASKY" src={Quinta} />
        </div>
      </div>

      {/* Productos con diseño unificado */}
      <div className="productos-populares-container">
        <div className="products-grid">
          {getFilteredProducts().map((producto) => (
            <div key={producto.id} className="product-card">
              <div className="product-image-container">
                <img 
                  src={producto.imagen} 
                  alt={producto.titulo} 
                  className="product-image" 
                  onClick={() => showProductDetails(producto)}
                />
                <button className="cart-button" onClick={() => handleAddToCart(producto)}>
                  <span className="cart-icon">🛒</span>
                </button>
              </div>
              <h3 className="product-title">{producto.titulo}</h3>
              <p className="product-description">{producto.descripcion}</p>
              <div className="product-price">${producto.precio}</div>
              <button className="comprar-button" onClick={() => showProductDetails(producto)}>
                VER DETALLES
              </button>
            </div>
          ))}
        </div>
        
        {getFilteredProducts().length === 0 && (
          <div className="no-products">
            <p>No hay productos disponibles en esta categoría.</p>
          </div>
        )}
        
        <div></div>
        <p className="vermas">Ver más</p>
      </div>

      {/* Botón flotante del carrito */}
      <button className="floating-cart-button" onClick={toggleCart}>
        🛒 <span className="cart-count">{getCartItemsCount()}</span>
      </button>
    </>
  );
};

export default Products;