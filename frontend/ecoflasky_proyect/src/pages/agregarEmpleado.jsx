import React, { useState, useEffect } from "react";

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
    setForm((prevState) => ({ 
      ...prevState, 
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

      if (editingId) {
        await fetch(`/api/registerEmployee/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setEditingId(null);
      } else {
        await fetch("/api/registerEmployee", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }

      setForm({
        name: "",
        password: "",
        email: "",
        speciality: "",
        isVerified: false
      });
      getEmployees();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/employee/${id}`, {
        method: "DELETE",
      });
      getEmployees();
    } catch (error) {
      console.error("Error al eliminar el empleado:", error);
    }
  };

  const handleEdit = (employee) => {
    setEditingId(employee._id);
    setForm({
      name: employee.name || "",
      password: "", // Por seguridad, no mostramos la contraseña
      email: employee.email || "",
      speciality: employee.speciality?._id || employee.speciality || "",
      isVerified: employee.isVerified || false
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Administración de Empleados
          </h1>
          <p className="text-gray-600">Gestiona y administra todos tus empleados en un solo lugar</p>
        </div>
        
        {/* Form Section */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
            {editingId ? "Editar Empleado" : "Nuevo Empleado"}
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                  Nombre del Empleado *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleInputChange}
                  required
                  maxLength={100}
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  placeholder="Ingresa el nombre completo"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Contraseña *
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={form.password}
                  onChange={handleInputChange}
                  required={!editingId}
                  maxLength={100}
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  placeholder={editingId ? "Dejar vacío para mantener actual" : "Ingresa una contraseña"}
                />
                {editingId && (
                  <p className="text-xs text-gray-500">Deja vacío para mantener la contraseña actual</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                  maxLength={100}
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  placeholder="correo@ejemplo.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="speciality" className="block text-sm font-semibold text-gray-700">
                  Especialidad *
                </label>
                <select
                  name="speciality"
                  id="speciality"
                  value={form.speciality}
                  onChange={handleInputChange}
                  required
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                >
                  <option value="">Selecciona una especialidad</option>
                  {specialities.map((speciality) => (
                    <option key={speciality._id} value={speciality._id}>
                      {speciality.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2 flex items-center">
                <div className="flex items-center h-12">
                  <input
                    type="checkbox"
                    name="isVerified"
                    id="isVerified"
                    checked={form.isVerified}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="isVerified" className="ml-3 text-sm font-semibold text-gray-700">
                    Empleado Verificado
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 shadow-lg ${
                  editingId 
                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                }`}
              >
                {editingId ? "✓ Actualizar Empleado" : "+ Crear Empleado"}
              </button>
            </div>
          </form>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
              Lista de Empleados
              <span className="ml-3 bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {employees.length} registros
              </span>
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Especialidad
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Fecha de Registro
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {employees.length > 0 ? (
                  employees.map((employee, index) => (
                    <tr key={employee._id} className={`hover:bg-gray-50 transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-semibold text-gray-900">{employee.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-700">{employee.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-700">
                          {employee.speciality?.name || 'Sin especialidad'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          employee.isVerified 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {employee.isVerified ? '✓ Verificado' : '⏳ Pendiente'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-700">{formatDate(employee.createdAt)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex justify-center space-x-2">
                          <button
                            onClick={() => handleEdit(employee)}
                            className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-lg hover:from-amber-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-md text-sm font-medium"
                          >
                            ✏️ Editar
                          </button>
                          <button
                            onClick={() => handleDelete(employee._id)}
                            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-md text-sm font-medium"
                          >
                            🗑️ Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="px-6 py-12 text-center text-gray-500" colSpan="6">
                      <div className="flex flex-col items-center">
                        <div className="text-6xl mb-4">👥</div>
                        <div className="text-lg font-medium">No hay empleados registrados</div>
                        <div className="text-sm text-gray-400 mt-1">Comienza agregando tu primer empleado</div>
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