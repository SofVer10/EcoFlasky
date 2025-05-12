import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styleAgregarEmpleado.css';
import empleadoImg from '../images/empleado.png';

const AgregarEmpleado = () => {
  return (
    <div className="registro-container">
      <div className="registro-form-container">
        <div className="form-section">
          <h2>Registrar nuevo empleado</h2>
          <form className="registro-form">
            <div className="form-group">
              <input type="text" placeholder="Nombre de usuario" className="form-control" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Contraseña" className="form-control" />
            </div>
            <div className="form-group">
              <select className="form-control">
                 <option value="">Seleccione un rol</option>
                 <option value="Gerencia">Gerencia</option>
                 <option value="Desarrollador de Software">Desarrollador de Software</option>
  <option value="Diseñador">Diseñador</option>
  <option value="Marketing">Marketing</option>
  <option value="Atención al cliente">Atención al cliente</option>
</select>

            </div>
            <button type="submit" className="agregar-btn">Agregar empleado</button>
          </form>
        </div>
        <div className="image-section">
          <img src={empleadoImg} alt="Empleado" className="product-image" />
        </div>
      </div>
    </div>
  );
};

export default AgregarEmpleado;
