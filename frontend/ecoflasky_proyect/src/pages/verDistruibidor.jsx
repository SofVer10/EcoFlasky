import React from "react";
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
  } = useDataDistributors();

  return (
    <div style={styles.container}>
      {/* Navegación entre pestañas mejorada */}
      <div style={styles.tabContainer}>
        <div style={styles.tabWrapper}>
          <Button 
            label="Ver Distribuidores"
            actionButton={() => setActiveTab("list")}
            style={{
              ...styles.tabButton,
              ...(activeTab === "list" ? styles.tabButtonActive : styles.tabButtonInactive)
            }}
          />
       
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
          <ListDistributors
            distributors={distributors}
            loading={loading}
            deleteDistributor={deleteDistributor}
            updateDistributors={updateDistributors}
          />
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
    transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden'
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
    animation: 'fadeIn 0.5s ease-out forwards',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e9ecef'
  },
  '@global': {
    '@keyframes fadeIn': {
      from: {
        opacity: 0,
        transform: 'translateY(20px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)'
      }
    }
  }
};

export default DistributorsPage;