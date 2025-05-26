import React, { useState, useEffect } from "react";

const AgregarProveedor = () => {
  const [suppliers, setSuppliers] = useState([]);

  const [form, setForm] = useState({
    name: "",
    supply: "",
    cellphone: "",
    lastShipDate: "",
    usualShipDate: "",
    price: "",
    amount: ""
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    getSuppliers();
  }, []);

  const getSuppliers = async () => {
    try {
      const response = await fetch("/api/supplier");
      const data = await response.json();
      setSuppliers(data);
    } catch (error) {
      console.error("Error al obtener proveedores:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convertir los campos numéricos antes de enviar
      const formData = {
        ...form,
        cellphone: Number(form.cellphone),
        price: Number(form.price),
        amount: Number(form.amount)
      };

      if (editingId) {
        await fetch(`/api/supplier/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setEditingId(null);
      } else {
        await fetch("/api/supplier", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }

      setForm({
        name: "",
        supply: "",
        cellphone: "",
        lastShipDate: "",
        usualShipDate: "",
        price: "",
        amount: ""
      });
      getSuppliers();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/supplier/${id}`, {
        method: "DELETE",
      });
      getSuppliers();
    } catch (error) {
      console.error("Error al eliminar el proveedor:", error);
    }
  };

  const handleEdit = (supplier) => {
    setEditingId(supplier._id);
    setForm({
      name: supplier.name || "",
      supply: supplier.supply || "",
      cellphone: supplier.cellphone !== undefined && supplier.cellphone !== null ? supplier.cellphone.toString() : "",
      lastShipDate: supplier.lastShipDate ? supplier.lastShipDate.split('T')[0] : "",
      usualShipDate: supplier.usualShipDate || "",
      price: supplier.price !== undefined && supplier.price !== null ? supplier.price.toString() : "",
      amount: supplier.amount !== undefined && supplier.amount !== null ? supplier.amount.toString() : ""
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
            Administración de Proveedores
          </h1>
          <p className="text-gray-600">Gestiona y administra todos tus proveedores en un solo lugar</p>
        </div>
        
        {/* Form Section */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <div className="w-1 h-6 bg-blue-500 rounded-full mr-3"></div>
            {editingId ? "Editar Proveedor" : "Nuevo Proveedor"}
          </h2>
          
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                  Nombre del Proveedor
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
                  placeholder="Ingresa el nombre"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="supply" className="block text-sm font-semibold text-gray-700">
                  Suministro
                </label>
                <input
                  type="text"
                  name="supply"
                  id="supply"
                  value={form.supply}
                  onChange={handleInputChange}
                  required
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  placeholder="¿Qué suministra?"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="cellphone" className="block text-sm font-semibold text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="cellphone"
                  id="cellphone"
                  value={form.cellphone}
                  onChange={handleInputChange}
                  required
                  placeholder="1234567890"
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="lastShipDate" className="block text-sm font-semibold text-gray-700">
                  Fecha del Último Envío
                </label>
                <input
                  type="date"
                  name="lastShipDate"
                  id="lastShipDate"
                  value={form.lastShipDate}
                  onChange={handleInputChange}
                  required
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="usualShipDate" className="block text-sm font-semibold text-gray-700">
                  Frecuencia de Envío
                </label>
                <input
                  type="text"
                  name="usualShipDate"
                  id="usualShipDate"
                  value={form.usualShipDate}
                  onChange={handleInputChange}
                  required
                  placeholder="Ej: Cada lunes, Quincenalmente"
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="price" className="block text-sm font-semibold text-gray-700">
                  Precio ($)
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={form.price}
                  onChange={handleInputChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  placeholder="0.00"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="amount" className="block text-sm font-semibold text-gray-700">
                  Cantidad
                </label>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  value={form.amount}
                  onChange={handleInputChange}
                  required
                  min="0"
                  className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  placeholder="0"
                />
              </div>
            </div>
            
            <div className="flex justify-end mt-8">
              <button
                onClick={handleSubmit}
                className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 shadow-lg ${
                  editingId 
                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                }`}
              >
                {editingId ? "✓ Actualizar Proveedor" : "+ Crear Proveedor"}
              </button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
              <div className="w-1 h-6 bg-green-500 rounded-full mr-3"></div>
              Lista de Proveedores
              <span className="ml-3 bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {suppliers.length} registros
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
                    Suministro
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Teléfono
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Último Envío
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Frecuencia
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Precio
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Cantidad
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {suppliers.length > 0 ? (
                  suppliers.map((supplier, index) => (
                    <tr key={supplier._id} className={`hover:bg-gray-50 transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-semibold text-gray-900">{supplier.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-700">{supplier.supply}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-700 font-mono">{supplier.cellphone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-700">{formatDate(supplier.lastShipDate)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-700">{supplier.usualShipDate}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-semibold text-green-600">${supplier.price}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-700">{supplier.amount}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex justify-center space-x-2">
                          <button
                            onClick={() => handleEdit(supplier)}
                            className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-lg hover:from-amber-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-md text-sm font-medium"
                          >
                            ✏️ Editar
                          </button>
                          <button
                            onClick={() => handleDelete(supplier._id)}
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
                    <td className="px-6 py-12 text-center text-gray-500" colSpan="8">
                      <div className="flex flex-col items-center">
                        <div className="text-6xl mb-4">📦</div>
                        <div className="text-lg font-medium">No hay proveedores registrados</div>
                        <div className="text-sm text-gray-400 mt-1">Comienza agregando tu primer proveedor</div>
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

export default AgregarProveedor;