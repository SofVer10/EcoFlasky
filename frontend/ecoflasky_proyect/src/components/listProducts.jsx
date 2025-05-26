import ProductCard from "./cardProductsAdmin";
import React from "react";

const ListProducts = ({ products, loading, deleteProduct, updateProducts }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold underline text-center">
        Listado de Productos
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando productos...</div>}

        {!loading && products?.length === 0 && (
          <div className="text-center text-gray-500">
            No hay productos registrados
          </div>
        )}

        {products?.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            deleteProduct={deleteProduct}
            updateProducts={updateProducts}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProducts;