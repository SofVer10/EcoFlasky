import React from 'react';
import { toast } from 'react-hot-toast';
import useDataDistributors from '../hooks/useDataDistributors';
import DistruibidorImg from '../images/Distruibidor.png';

const AgregarDistruibidor = () => {
  const {
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
    <div className="registro-container">
      <div className="registro-form-container">
        <div className="form-section">
          <h2>Registrar nuevo proveedor</h2>
          <form className="registro-form" onSubmit={saveDistributor}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Ingrese el servicio"
                className="form-control"
                value={service}
                onChange={(e) => setService(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Ingrese su local"
                className="form-control"
                value={locals}
                onChange={(e) => setLocals(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                placeholder="Fecha de afiliación"
                className="form-control"
                value={affiliationDate}
                onChange={(e) => setAffiliationDate(e.target.value)}
              />
            </div>
            <button type="submit" className="agregar-btn">
              Agregar Distribuidor
            </button>
          </form>
        </div>
        <div className="image-section">
          <img src={DistruibidorImg} alt="Distribuidor" className="product-image" />
        </div>
      </div>
    </div>
  );
};

export default AgregarDistruibidor;
