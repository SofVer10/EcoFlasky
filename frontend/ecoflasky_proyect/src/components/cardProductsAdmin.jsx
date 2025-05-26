import React from "react";

const ProductCard = ({ product, deleteProduct, updateProducts }) => {
  // Función para formatear el precio
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD' // Cambia según tu moneda
    }).format(price);
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mb-4">
      {/* Imagen del producto */}
      {product.image && (
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="max-h-full max-w-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden h-full w-full items-center justify-center text-gray-500">
            Sin imagen
          </div>
        </div>
      )}
      
      <div className="px-6 py-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-gray-800">
            {product.name}
          </h2>
          {product.isVerified && (
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
              ✓ Verificado
            </span>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description || "Sin descripción"}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Precio:</span>
            <span className="text-lg font-bold text-green-600">
              {formatPrice(product.price)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Stock:</span>
            <span className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock} unidades
            </span>
          </div>
          
          {product.distributorId && (
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Distribuidor:</span>
              <span className="text-gray-600 text-sm">
                {product.distributorId.name || product.distributorId}
              </span>
            </div>
          )}
          
          {product.categoryId && (
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Categoría:</span>
              <span className="text-gray-600 text-sm">
                {product.categoryId.name || product.categoryId}
              </span>
            </div>
          )}
          
          {product.suplierId && (
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Proveedor:</span>
              <span className="text-gray-600 text-sm">
                {product.suplierId.name || product.suplierId}
              </span>
            </div>
          )}
        </div>

        <div className="flex gap-2 flex-wrap">
          <button 
            onClick={() => deleteProduct(product._id)}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-medium transition-colors duration-200"
          >
            Eliminar
          </button>
          <button 
            onClick={() => updateProducts(product)}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md font-medium transition-colors duration-200"
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;