import React, { useState, useEffect } from 'react';
import '../styles/stryleRegistrarProductos.css';
import { Plus } from 'lucide-react';
import imageProducts from "../images/products.png";
import useDataProducts from '../hooks/useDataProducts';

const ProductRegistration = () => {
  const {
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    distributorId,
    setDistributorId,
    suplierId,
    setSuplierId,
    categoryId,
    setCategoryId,
    stock,
    setStock,
    saveProduct,
    // Nuevos datos del hook
    distributors,
    suppliers,
    categories,
    loadingOptions
  } = useDataProducts();

  // Estados para los dropdowns
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedDistributor, setSelectedDistributor] = useState('');
  const [showDistributorDropdown, setShowDistributorDropdown] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState('');
  const [showSupplierDropdown, setShowSupplierDropdown] = useState(false);

  // Manejadores para mostrar/ocultar dropdowns
  const handleCategoryClick = () => {
    setShowCategoryDropdown(!showCategoryDropdown);
    setShowDistributorDropdown(false);
    setShowSupplierDropdown(false);
  };

  const handleDistributorClick = () => {
    setShowDistributorDropdown(!showDistributorDropdown);
    setShowCategoryDropdown(false);
    setShowSupplierDropdown(false);
  };

  const handleSupplierClick = () => {
    setShowSupplierDropdown(!showSupplierDropdown);
    setShowCategoryDropdown(false);
    setShowDistributorDropdown(false);
  };

  const [previewImage, setPreviewImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Funciones para seleccionar opciones
  const selectCategory = (category) => {
    setSelectedCategory(category.name); // Mostrar el nombre
    setCategoryId(category._id); // Guardar el ObjectId
    setShowCategoryDropdown(false);
  };

  const selectDistributor = (distributor) => {
    setSelectedDistributor(distributor.name); // Mostrar el nombre
    setDistributorId(distributor._id); // Guardar el ObjectId
    setShowDistributorDropdown(false);
  };

  const selectSupplier = (supplier) => {
    setSelectedSupplier(supplier.name); // Mostrar el nombre
    setSuplierId(supplier._id); // Guardar el ObjectId
    setShowSupplierDropdown(false);
  };

  // Cerrar dropdowns al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-wrapper')) {
        setShowCategoryDropdown(false);
        setShowDistributorDropdown(false);
        setShowSupplierDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que todos los campos requeridos estén llenos
    if (!name || !description || !price || !stock || !categoryId || !distributorId || !suplierId) {
      toast.error('Por favor complete todos los campos requeridos');
      return;
    }

    saveProduct(e);
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

        <form className="product-registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del producto"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={150}
              required
            />
            <span className="character-count">{name.length}/150</span>
            <span className="required-mark">*</span>
          </div>

          <div className="form-group">
            <textarea
              className="form-control description"
              placeholder="Descripción del producto"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={1000}
              required
            />
            <span className="character-count">{description.length}/1000</span>
            <span className="required-mark">*</span>
          </div>

          <div className="form-group">
            <input
              type="number"
              step="0.01"
              min="0"
              className="form-control"
              placeholder="Precio de producto"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <span className="required-mark">*</span>
          </div>

          <div className="form-group">
            <input
              type="number"
              min="0"
              className="form-control"
              placeholder="Cantidad en stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
            <span className="required-mark">*</span>
          </div>

          <div className="dropdowns-container">
            {/* Dropdown de Categorías */}
            <div className="dropdown-wrapper">
              <div className="dropdown-selector" onClick={handleCategoryClick}>
                <span>{selectedCategory || "Categoría"}</span>
                <span className="dropdown-arrow">▼</span>
              </div>
              <span className="required-mark dropdown-required">*</span>

              {showCategoryDropdown && (
                <div className="dropdown-menu">
                  {loadingOptions ? (
                    <div className="loading-message">Cargando categorías...</div>
                  ) : (
                    <ul>
                      {categories.map((category) => (
                        <li key={category._id} onClick={() => selectCategory(category)}>
                          • {category.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* Dropdown de Distribuidores */}
            <div className="dropdown-wrapper">
              <div className="dropdown-selector" onClick={handleDistributorClick}>
                <span>{selectedDistributor || "Distribuidor"}</span>
                <span className="dropdown-arrow">▼</span>
              </div>
              <span className="required-mark dropdown-required">*</span>

              {showDistributorDropdown && (
                <div className="dropdown-menu">
                  {loadingOptions ? (
                    <div className="loading-message">Cargando distribuidores...</div>
                  ) : (
                    <ul>
                      {distributors.map((distributor) => (
                        <li key={distributor._id} onClick={() => selectDistributor(distributor)}>
                          • {distributor.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* Dropdown de Proveedores */}
            <div className="dropdown-wrapper">
              <div className="dropdown-selector" onClick={handleSupplierClick}>
                <span>{selectedSupplier || "Proveedor"}</span>
                <span className="dropdown-arrow">▼</span>
              </div>
              <span className="required-mark dropdown-required">*</span>

              {showSupplierDropdown && (
                <div className="dropdown-menu">
                  {loadingOptions ? (
                    <div className="loading-message">Cargando proveedores...</div>
                  ) : (
                    <ul>
                      {suppliers.map((supplier) => (
                        <li key={supplier._id} onClick={() => selectSupplier(supplier)}>
                          • {supplier.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="product-photo-container">
            <div className="photo-upload-box">
              {previewImage ? (
                <img src={previewImage} alt="Preview" className="photo-preview" />
              ) : (
                <Plus size={24} color="black" />
              )}
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
                accept="image/*"
                id="product-image-upload"
              />
              <label htmlFor="product-image-upload" style={{ position: 'absolute', width: '100%', height: '100%', cursor: 'pointer' }} />
            </div>
            <p className="photo-text">Añadir foto de producto</p>
            <span className="required-mark photo-required">*</span>
          </div>

          <button
            type="submit"
            className="add-product-button"
            disabled={loadingOptions}
          >
            {loadingOptions ? 'Cargando...' : 'Agregar producto'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductRegistration;