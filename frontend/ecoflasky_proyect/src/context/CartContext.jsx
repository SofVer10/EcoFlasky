// contexts/CartContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Crear el contexto
const CartContext = createContext();

// Reducer para manejar las acciones del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, cantidad: item.cantidad + (action.payload.cantidad || 1) }
            : item
        );
      }
      return [...state, { ...action.payload, cantidad: action.payload.cantidad || 1 }];

    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);

    case 'UPDATE_QUANTITY':
      if (action.payload.quantity < 1) return state;
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, cantidad: action.payload.quantity }
          : item
      );

    case 'CLEAR_CART':
      return [];

    case 'LOAD_CART':
      return action.payload || [];

    default:
      return state;
  }
};

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  // Cargar carrito desde localStorage al inicializar
  useEffect(() => {
    const savedCart = localStorage.getItem('ecoflasky_cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('ecoflasky_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Funciones para usar en los componentes
  const addToCart = (product, quantity = 1) => {
    dispatch({ 
      type: 'ADD_TO_CART', 
      payload: { ...product, cantidad: quantity } 
    });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ 
      type: 'UPDATE_QUANTITY', 
      payload: { id: productId, quantity } 
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.cantidad, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};