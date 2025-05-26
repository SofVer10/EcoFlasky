import React, { useState } from 'react';
import '../styles/stryleRegistrarProductos.css';
import {Plus } from 'lucide-react';
import imageProducts from "../images/products.png";
import Products from './products';

const ProductRegistration = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedDistributor, setSelectedDistributor] = useState('');
  const [showDistributorDropdown, setShowDistributorDropdown] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState('');
  const [showProviderDropdown, setShowProviderDropdown] = useState(false);

  const handleCategoryClick = () => {
    setShowCategoryDropdown(!showCategoryDropdown);
    setShowDistributorDropdown(false);
    setShowProviderDropdown(false);
  };

  const handleDistributorClick = () => {
    setShowDistributorDropdown(!showDistributorDropdown);
    setShowCategoryDropdown(false);
    setShowProviderDropdown(false);
  };

  const handleProviderClick = () => {
    setShowProviderDropdown(!showProviderDropdown);
    setShowCategoryDropdown(false);
    setShowDistributorDropdown(false);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setShowCategoryDropdown(false);
  };

  const selectDistributor = (distributor) => {
    setSelectedDistributor(distributor);
    setShowDistributorDropdown(false);
  };

  const selectProvider = (provider) => {
    setSelectedProvider(provider);
    setShowProviderDropdown(false);
  };
     
  return (
    <div className="product-registration-container">
      <div className="product-registration-image-container">
        <img 
          src={imageProducts}
          alt="Reusable water bottles" 
          className="product-image" 
        />
      </div>

      <div className="product-registration-form-container">
        <h1 className="product-registration-title">Registrar nuevo producto</h1>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del producto"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            maxLength={150}
          />
          <span className="character-count">{productName.length}/150</span>
          <span className="required-mark">*</span>
        </div>

        <div className="form-group">
          <textarea
            className="form-control description"
            placeholder="Descripción del producto"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            maxLength={1000}
          />
          <span className="character-count">{productDescription.length}/1000</span>
          <span className="required-mark">*</span>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Precio de producto"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <span className="required-mark">*</span>
        </div>

        <div className="dropdowns-container">
          <div className="dropdown-wrapper">
            <div className="dropdown-selector" onClick={handleCategoryClick}>
              <span>{selectedCategory || "Categoría"}</span>
              <span className="dropdown-arrow">▼</span>
            </div>
            <span className="required-mark dropdown-required">*</span>
            
            {showCategoryDropdown && (
              <div className="dropdown-menu">
                <ul>
                  <li onClick={() => selectCategory("Regular")}>• Regular</li>
                  <li onClick={() => selectCategory("Ecónomico")}>• Ecónomico</li>
                  <li onClick={() => selectCategory("Diseñada")}>• Diseñada</li>
                </ul>
              </div>
            )}
          </div>

          <div className="dropdown-wrapper">
            <div className="dropdown-selector" onClick={handleDistributorClick}>
              <span>{selectedDistributor || "Distruibidor"}</span>
              <span className="dropdown-arrow">▼</span>
            </div>
            <span className="required-mark dropdown-required">*</span>
            
            {showDistributorDropdown && (
              <div className="dropdown-menu">
                <ul>
                  <li onClick={() => selectDistributor("Metal")}>• Metal</li>
                  <li onClick={() => selectDistributor("Otro")}>• Otro</li>
                  <li onClick={() => selectDistributor("No tiene")}>• No tiene</li>
                </ul>
              </div>
            )}
          </div>

          <div className="dropdown-wrapper">
            <div className="dropdown-selector" onClick={handleProviderClick}>
              <span>{selectedProvider || "Proveedor"}</span>
              <span className="dropdown-arrow">▼</span>
            </div>
            <span className="required-mark dropdown-required">*</span>
            
            {showProviderDropdown && (
              <div className="dropdown-menu">
                <ul>
                  <li onClick={() => selectProvider("Walmart")}>• Walmart</li>
                  <li onClick={() => selectProvider("Otro")}>• Otro</li>
                  <li onClick={() => selectProvider("Exclusivo")}>• Exclusivo</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="product-photo-container">
          <div className="photo-upload-box">
            <Plus size={24} color="black" />
          </div>
          <p className="photo-text">Añadir foto de producto</p>
          <span className="required-mark photo-required">*</span>
        </div>

        <button className="add-product-button">Agregar producto</button>
      </div>
    </div>
  );
};

export default ProductRegistration;
