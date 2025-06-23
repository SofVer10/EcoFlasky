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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    getEmployees();
    getSpecialities();
  }, []);

  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" });
    }, 4000);
  };

  const hideNotification = () => {
    setNotification({ show: false, message: "", type: "" });
  };

  const getEmployees = async () => {
    try {
      const response = await fetch("/api/employee");
      if (!response.ok) throw new Error('Error al obtener empleados');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error al obtener empleados:", error);
      setError("Error al cargar empleados");
    }
  };

  const getSpecialities = async () => {
    try {
      const response = await fetch("/api/speciality");
      if (!response.ok) throw new Error('Error al obtener especialidades');
      const data = await response.json();
      setSpecialities(data);
    } catch (error) {
      console.error("Error al obtener especialidades:", error);
      setError("Error al cargar especialidades");
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    if (error) setError("");
    if (notification.show) hideNotification();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const formData = {
        name: form.name.trim(),
        email: form.email.trim(),
        speciality: form.speciality,
        isVerified: Boolean(form.isVerified)
      };

      if (!editingId || form.password.trim()) {
        formData.password = form.password;
      }

      const url = editingId 
        ? `/api/employee/${editingId}`
        : "/api/registerEmployee";
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al procesar la solicitud');
      }

      const result = await response.json();
      console.log('Operación exitosa:', result);

      resetForm();
      await getEmployees();
      
      showNotification(
        editingId ? 'Empleado actualizado correctamente' : 'Empleado creado correctamente',
        'success'
      );
      
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      showNotification(error.message || "Error al procesar la solicitud", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este empleado?")) return;
    
    setLoading(true);
    try {
      const response = await fetch(`/api/employee/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error('Error al eliminar empleado');
      
      await getEmployees();
      showNotification('Empleado eliminado correctamente', 'success');
    } catch (error) {
      console.error("Error al eliminar el empleado:", error);
      showNotification("Error al eliminar el empleado", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (employee) => {
    console.log('Editando empleado:', employee);
    setEditingId(employee._id);
    setForm({
      name: employee.name || "",
      password: "",
      email: employee.email || "",
      speciality: employee.speciality?._id || employee.speciality || "",
      isVerified: employee.isVerified || false
    });
    setError("");
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
    setError("");
    hideNotification();
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES');
  };

  return (
    <div className="empleado-container">
      {/* Notification Component */}
      {notification.show && (
        <div className={`empleado-notification empleado-notification-${notification.type}`}>
          <div className="empleado-notification-content">
            <div className="empleado-notification-icon">
              {notification.type === 'success' ? '✅' : '❌'}
            </div>
            <div className="empleado-notification-message">
              {notification.message}
            </div>
            <button 
              className="empleado-notification-close"
              onClick={hideNotification}
              aria-label="Cerrar notificación"
            >
              ×
            </button>
          </div>
        </div>
      )}
      
      <div className="empleado-wrapper">
        {/* Header */}
        <div className="empleado-header">
          <h1>Administración de Empleados</h1>
          <p>Gestiona y administra todos tus empleados en un solo lugar</p>
        </div>
        
        {/* Error Message */}
        {error && (
          <div className="empleado-error-message">
            <div className="empleado-error-icon">⚠️</div>
            <div className="empleado-error-text">{error}</div>
          </div>
        )}
        
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
                  disabled={loading}
                />
              </div>
              
              <div className="empleado-form-group">
                <label htmlFor="password">
                  Contraseña {!editingId ? '*' : ''}
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
                  required={!editingId}
                  maxLength={100}
                  placeholder={editingId ? "Dejar vacío para mantener actual" : "Ingresa una contraseña"}
                  disabled={loading}
                />
                {editingId && (
                  <span className="empleado-form-hint">
                    Deja vacío para mantener la contraseña actual
                  </span>
                )}
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                >
                  Cancelar
                </button>
              )}
              <button 
                type="submit"
                className={`empleado-btn-submit ${editingId ? 'empleado-btn-edit' : ''}`}
                disabled={loading}
              >
                {loading 
                  ? "Procesando..." 
                  : editingId 
                    ? "Actualizar Empleado" 
                    : "Crear Empleado"
                }
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
                            disabled={loading}
                          >
                            Editar
                          </button>
                          <button 
                            onClick={() => handleDelete(employee._id)}
                            className="empleado-btn-delete-action"
                            disabled={loading}
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