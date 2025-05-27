import React, { useState, useEffect } from "react";
import "../styles/styleAgregarEmpleado.css";

const AgregarEmpleado = () => {
  const [employees, setEmployees] = useState([]);
  const [specialities, setSpecialities] = useState([]);
  const [form, setForm] = useState({
    name: "",
    password: "",
    email: "",
    speciality: "",
    isVerified: false
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    getEmployees();
    getSpecialities();
  }, []);

  const getEmployees = async () => {
    try {
      const response = await fetch("/api/employee");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error al obtener empleados:", error);
    }
  };

  const getSpecialities = async () => {
    try {
      const response = await fetch("/api/speciality");
      const data = await response.json();
      setSpecialities(data);
    } catch (error) {
      console.error("Error al obtener especialidades:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        ...form,
        isVerified: Boolean(form.isVerified)
      };

      const url = editingId 
        ? `/api/registerEmployee/${editingId}`
        : "/api/registerEmployee";
      const method = editingId ? "PUT" : "POST";

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      resetForm();
      getEmployees();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este empleado?")) return;
    
    try {
      await fetch(`/api/employee/${id}`, { method: "DELETE" });
      getEmployees();
    } catch (error) {
      console.error("Error al eliminar el empleado:", error);
    }
  };

  const handleEdit = (employee) => {
    setEditingId(employee._id);
    setForm({
      name: employee.name || "",
      password: "",
      email: employee.email || "",
      speciality: employee.speciality?._id || employee.speciality || "",
      isVerified: employee.isVerified || false
    });
  };

  const resetForm = () => {
    setForm({
      name: "",
      password: "",
      email: "",
      speciality: "",
      isVerified: false
    });
    setEditingId(null);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES');
  };

  return (
    <div className="empleado-container">
      <div className="empleado-wrapper">
        {/* Header */}
        <div className="empleado-header">
          <h1>Administración de Empleados</h1>
          <p>Gestiona y administra todos tus empleados en un solo lugar</p>
        </div>
        
        {/* Form Section */}
        <div className="empleado-form-section">
          <h2 className="empleado-form-title">
            <span className="empleado-form-title-decorator"></span>
            {editingId ? "Editar Empleado" : "Nuevo Empleado"}
          </h2>
          
          <form className="empleado-form" onSubmit={handleSubmit}>
            <div className="empleado-form-grid">
              <div className="empleado-form-group">
                <label htmlFor="name">Nombre del Empleado *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  required
                  maxLength={100}
                  placeholder="Ingresa el nombre completo"
                />
              </div>
              
              <div className="empleado-form-group">
                <label htmlFor="password">Contraseña *</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
                  required={!editingId}
                  maxLength={100}
                  placeholder={editingId ? "Dejar vacío para mantener actual" : "Ingresa una contraseña"}
                />
                {editingId && <span className="empleado-form-hint">Deja vacío para mantener la contraseña actual</span>}
              </div>
              
              <div className="empleado-form-group">
                <label htmlFor="email">Correo Electrónico *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                  maxLength={100}
                  placeholder="correo@ejemplo.com"
                />
              </div>
              
              <div className="empleado-form-group">
                <label htmlFor="speciality">Especialidad *</label>
                <select
                  id="speciality"
                  name="speciality"
                  value={form.speciality}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una especialidad</option>
                  {specialities.map(speciality => (
                    <option key={speciality._id} value={speciality._id}>
                      {speciality.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="empleado-form-checkbox">
                <input
                  type="checkbox"
                  id="isVerified"
                  name="isVerified"
                  checked={form.isVerified}
                  onChange={handleInputChange}
                />
                <label htmlFor="isVerified">Empleado Verificado</label>
              </div>
            </div>
            
            <div className="empleado-form-actions">
              {editingId && (
                <button 
                  type="button" 
                  onClick={resetForm}
                  className="empleado-btn-cancel"
                >
                  Cancelar
                </button>
              )}
              <button 
                type="submit"
                className={`empleado-btn-submit ${editingId ? 'empleado-btn-edit' : ''}`}
              >
                {editingId ? "Actualizar Empleado" : "Crear Empleado"}
              </button>
            </div>
          </form>
        </div>

        {/* Table Section */}
        <div className="empleado-table-section">
          <div className="empleado-table-header">
            <h2 className="empleado-table-title">
              <span className="empleado-table-title-decorator"></span>
              Lista de Empleados
              <span className="empleado-record-count">{employees.length} registros</span>
            </h2>
          </div>
          
          <div className="empleado-table-container">
            <table className="empleado-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Especialidad</th>
                  <th>Estado</th>
                  <th>Fecha de Registro</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {employees.length > 0 ? (
                  employees.map(employee => (
                    <tr key={employee._id}>
                      <td>{employee.name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.speciality?.name || 'Sin especialidad'}</td>
                      <td>
                        <span className={`empleado-status ${employee.isVerified ? 'empleado-status-verified' : 'empleado-status-pending'}`}>
                          {employee.isVerified ? '✓ Verificado' : '⏳ Pendiente'}
                        </span>
                      </td>
                      <td>{formatDate(employee.createdAt)}</td>
                      <td>
                        <div className="empleado-actions">
                          <button 
                            onClick={() => handleEdit(employee)}
                            className="empleado-btn-edit-action"
                          >
                            Editar
                          </button>
                          <button 
                            onClick={() => handleDelete(employee._id)}
                            className="empleado-btn-delete-action"
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="empleado-no-results">
                      <div className="empleado-no-results-content">
                        <span className="empleado-no-results-icon">👥</span>
                        <p>No hay empleados registrados</p>
                        <small>Comienza agregando tu primer empleado</small>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarEmpleado;