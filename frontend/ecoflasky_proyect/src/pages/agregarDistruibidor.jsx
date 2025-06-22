import React from 'react';
import { toast } from 'react-hot-toast';
import useDataDistributors from '../hooks/useDataDistributors';
import DistruibidorImg from '../images/Distruibidor.png';
import "../styles/styleAgregarDistruibidor.css";

const AgregarDistribuidor = ({
  name,
  setName,
  service,
  setService,
  locals,
  setLocals,
  affiliationDate,
  setAffiliationDate,
  saveDistributor
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    saveDistributor();
    toast.success('Distribuidor agregado correctamente');
  };

  return (
    <div className="distributor-container">
      <div className="distributor-card">
        <div className="distributor-form-section">
          <div className="distributor-header">
            <h2 className="distributor-title">Registrar Nuevo Distribuidor</h2>
            <p className="distributor-subtitle">Complete los detalles del distribuidor</p>
          </div>
          
          <form className="distributor-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nombre del Distribuidor</label>
              <input
                id="name"
                type="text"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej: Distribuidora XYZ"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="service" className="form-label">Servicio Ofrecido</label>
              <input
                id="service"
                type="text"
                className="form-input"
                value={service}
                onChange={(e) => setService(e.target.value)}
                placeholder="Ej: Suministro de materiales"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="locals" className="form-label">Locales o Sucursales</label>
              <input
                id="locals"
                type="text"
                className="form-input"
                value={locals}
                onChange={(e) => setLocals(e.target.value)}
                placeholder="Ej: Av. Principal 123"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="date" className="form-label">Fecha de Afiliación</label>
              <input
                id="date"
                type="date"
                className="form-input"
                value={affiliationDate}
                onChange={(e) => setAffiliationDate(e.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="submit-button">
              <span className="button-text">Registrar Distribuidor</span>
              <span className="button-icon">→</span>
            </button>
          </form>
        </div>
        
        <div className="distributor-image-section">
          <div className="image-overlay"></div>
          <img 
            src={DistruibidorImg} 
            alt="Ilustración de distribuidor" 
            className="distributor-image"
          />
          <div className="image-content">
            <h3 className="image-title">Gestión de Distribuidores</h3>
            <p className="image-description">
              Mantén un registro organizado de todos tus distribuidores y proveedores
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarDistribuidor;