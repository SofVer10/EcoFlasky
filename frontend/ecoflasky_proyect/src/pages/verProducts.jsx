import React from "react";
import useDataProducts from "../hooks/useDataProducts";
import ListProducts from "../components/listProducts.jsx";
import "../styles/verProducts.css"; // Importar CSS externo
import { Link } from "react-router";

const ProductsPage = () => {
  const {
    activeTab,
    setActiveTab,
    products,
    loading,
    deleteProduct,
    updateProducts,
  } = useDataProducts();

  return (
    <div className="products-page-container">
      {/* Navegación entre pestañas */}
      <div className="tabs-navigation">
        <div className="tabs-wrapper">
          <button
            onClick={() => setActiveTab("list")}
            className={`tab-button ${activeTab === "list" ? "active" : ""}`}
          >
            Ver Productos
          </button>
            <Link to="/agregarProducto">           

          <button >
            Agregar Producto
          </button>
          </Link>
        </div>
      </div>

      {/* Contenido - Solo mostrar la lista */}
      <div className="products-content">
        <ListProducts
          products={products}
          loading={loading}
          deleteProduct={deleteProduct}
          updateProducts={updateProducts}
        />
      </div>
    </div>
  );
};

export default ProductsPage;