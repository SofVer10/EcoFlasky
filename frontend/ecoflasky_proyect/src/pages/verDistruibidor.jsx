import React, { useState } from "react";
import useDataDistributors from "../hooks/useDataDistributors.js";
import ListDistributors from "../components/listDistributors";
import AgregarDistribuidor from "./agregarDistruibidor.jsx";
import Button from "../components/Button.jsx";

const DistributorsPage = () => {
  const {
    activeTab,
    setActiveTab,
    distributors,
    loading,
    deleteDistributor,
    updateDistributors,
    name,
    setName,
    service,
    setService,
    locals,
    setLocals,
    affiliationDate,
    setAffiliationDate,
    saveDistributor,
    handleEdit,
    id
  } = useDataDistributors();

  // Estado para controlar el modal de edición
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Función para abrir el modal de edición con los datos del distribuidor
  const openEditModal = (distributor) => {
    updateDistributors(distributor); // Llena los campos con los datos del distribuidor
    setIsEditModalOpen(true);
  };

  // Función para cerrar el modal
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    // Limpiar los campos
    setName("");
    setService("");
    setLocals("");
    setAffiliationDate("");
  };

  // Función para manejar la edición y cerrar el modal
  const handleEditAndClose = async (e) => {
    await handleEdit(e);
    setIsEditModalOpen(false);
  };

  // Debug: Mostrar información en consola
  console.log('DistributorsPage - Debug:', {
    activeTab,
    distributors,
    loading,
    distributorsCount: distributors?.length
  });

  return (
    <div style={styles.container}>
      {/* Navegación entre pestañas mejorada */}
      <div style={styles.tabContainer}>
        <div style={styles.tabWrapper}>
          <button
            onClick={() => setActiveTab("list")}
            style={{
              ...styles.tabButton,
              ...(activeTab === "list" ? styles.tabButtonActive : styles.tabButtonInactive)
            }}
          >
            Ver Distribuidores {distributors?.length > 0 && `(${distributors.length})`}
          </button>
          
          <button
            onClick={() => setActiveTab("form")}
            style={{
              ...styles.tabButton,
              ...(activeTab === "form" ? styles.tabButtonActive : styles.tabButtonInactive)
            }}
          >
            Agregar Distribuidor
          </button>
        </div>
      </div>

      {/* Contenido */}
      <div style={styles.content}>
        {activeTab === "list" && (
          <div>
            {loading ? (
              <div style={styles.loadingContainer}>
                <div style={styles.spinner}></div>
                <p>Cargando distribuidores...</p>
              </div>
            ) : distributors?.length === 0 ? (
              <div style={styles.emptyState}>
                <h3>No hay distribuidores registrados</h3>
                <p>Agrega tu primer distribuidor usando el botón "Agregar Distribuidor"</p>
                <button
                  onClick={() => setActiveTab("form")}
                  style={styles.addFirstButton}
                >
                  Agregar Primer Distribuidor
                </button>
              </div>
            ) : (
              <ListDistributors
                distributors={distributors}
                loading={loading}
                deleteDistributor={deleteDistributor}
                updateDistributors={openEditModal} // Cambiar a usar openEditModal
              />
            )}
          </div>
        )}

        {activeTab === "form" && (
          <AgregarDistribuidor
            name={name}
            setName={setName}
            service={service}
            setService={setService}
            locals={locals}
            setLocals={setLocals}
            affiliationDate={affiliationDate}
            setAffiliationDate={setAffiliationDate}
            saveDistributor={saveDistributor}
          />
        )}
      </div>

      {/* Modal de Edición */}
      {isEditModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Editar Distribuidor</h2>
              <button 
                onClick={closeEditModal}
                style={styles.closeButton}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleEditAndClose} style={styles.modalForm}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Nombre:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Servicio:</label>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Locales:</label>
                <input
                  type="text"
                  value={locals}
                  onChange={(e) => setLocals(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Fecha de Afiliación:</label>
                <input
                  type="date"
                  value={affiliationDate}
                  onChange={(e) => setAffiliationDate(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.modalActions}>
                <button
                  type="button"
                  onClick={closeEditModal}
                  style={styles.cancelButton}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  style={styles.saveButton}
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '3rem 1.5rem',
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    backgroundColor: '#f5f7ff',
    minHeight: '100vh'
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem'
  },
  tabWrapper: {
    display: 'flex',
    backgroundColor: 'rgba(76, 201, 240, 0.1)',
    borderRadius: '12px',
    padding: '6px',
    boxShadow: '0 4px 12px rgba(76, 201, 240, 0.1)',
    border: '1px solid rgba(76, 201, 240, 0.2)'
  },
  tabButton: {
    padding: '0.85rem 2rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '4px'
  },
  tabButtonInactive: {
    backgroundColor: 'transparent',
    color: '#4cc9f0'
  },
  tabButtonActive: {
    backgroundColor: '#4cc9f0',
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(76, 201, 240, 0.3)'
  },
  content: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e9ecef',
    minHeight: '400px'
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
    color: '#666'
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #4cc9f0',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '1rem'
  },
  emptyState: {
    textAlign: 'center',
    padding: '4rem 2rem',
    color: '#666'
  },
  addFirstButton: {
    marginTop: '1rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#4cc9f0',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  },
  
  // Estilos del Modal
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '0',
    width: '90%',
    maxWidth: '500px',
    maxHeight: '90vh',
    overflow: 'auto',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
    animation: 'fadeIn 0.3s ease-out'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    borderBottom: '1px solid #e9ecef',
    backgroundColor: '#f8f9fa'
  },
  modalTitle: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#333'
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#666',
    padding: '0',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transition: 'background-color 0.2s ease'
  },
  modalForm: {
    padding: '2rem'
  },
  formGroup: {
    marginBottom: '1.5rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#333',
    fontSize: '0.95rem'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box'
  },
  modalActions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-end',
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #e9ecef'
  },
  cancelButton: {
    padding: '0.75rem 1.5rem',
    border: '2px solid #dc3545',
    backgroundColor: 'transparent',
    color: '#dc3545',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  },
  saveButton: {
    padding: '0.75rem 1.5rem',
    border: 'none',
    backgroundColor: '#4cc9f0',
    color: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  }
};

// Agregar keyframes para el spinner y la animación del modal
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes fadeIn {
    from { 
      opacity: 0; 
      transform: scale(0.9) translateY(-20px); 
    }
    to { 
      opacity: 1; 
      transform: scale(1) translateY(0); 
    }
  }
  
  /* Estilos adicionales para el modal */
  .modal-overlay:hover .close-button {
    background-color: #f8f9fa;
  }
  
  .cancel-button:hover {
    background-color: #dc3545;
    color: white;
  }
  
  .save-button:hover {
    background-color: #3ba9d4;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(76, 201, 240, 0.3);
  }
  
  .input:focus {
    border-color: #4cc9f0;
    outline: none;
    box-shadow: 0 0 0 3px rgba(76, 201, 240, 0.1);
  }
`;
document.head.appendChild(styleSheet);

export default DistributorsPage;