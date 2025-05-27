import React from "react";

const ListProducts = ({ products, loading, deleteProduct, updateProducts }) => {
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '32px 0' }}>
        <div>Cargando productos...</div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '32px 0' }}>
        <div>No hay productos disponibles</div>
      </div>
    );
  }

  return (
    <div className="products-grid"> {/* Esta clase será estilizada desde ProductsPage.css */}
      {products.map((product) => (
        <div key={product._id} className="product-card">
          {/* Tu contenido de producto aquí */}
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            padding: '16px',
            border: '1px solid #e5e7eb'
          }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              <button 
                onClick={() => updateProducts(product._id)}
                style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  flex: 1
                }}
              >
                Editar
              </button>
              <button 
                onClick={() => deleteProduct(product._id)}
                style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  flex: 1
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;