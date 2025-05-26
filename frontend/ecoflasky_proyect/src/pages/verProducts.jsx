import React from "react";
import useDataProducts from "../hooks/useDataProducts";
import ListProducts from "../components/listProducts.jsx";

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
    <div className="container mx-auto px-4 py-8">
      {/* Navegación entre pestañas */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("list")}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === "list"
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            Ver Productos
          </button>
          <button
            onClick={() => window.location.href = '/agregarProducto'}
            className={`px-4 py-2 rounded-md transition-colors text-gray-700 hover:bg-gray-200`}
          >
            Agregar Producto
          </button>
        </div>
      </div>

      {/* Contenido - Solo mostrar la lista */}
      <ListProducts
        products={products}
        loading={loading}
        deleteProduct={deleteProduct}
        updateProducts={updateProducts}
      />
    </div>
  );
};

export default ProductsPage;