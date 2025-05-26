import React, { useState, useEffect } from "react";

const AgregarProveedor = () => {
  const [distributor, setDistributor] = useState([]);

  const [form, setForm] = useState({
    name: "",
    service: "",
    locals: "",
    affiliationDate: ""
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    getDistributor();
  }, []);

  const getDistributor = async () => {
    try {
      const response = await fetch("/api/distributors");
      const data = await response.json();
      setDistributor(data);
    } catch (error) {
      console.error("Error al obtener distribuidores:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await fetch(`/api/distributors/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        setEditingId(null);
      } else {
        await fetch("/api/distributors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }

      setForm({
        name: "",
        service: "",
        locals: "",
        affiliationDate: ""
      });
      getDistributor();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/distributors/${id}`, {
        method: "DELETE",
      });
      getDistributor();
    } catch (error) {
      console.error("Error al eliminar el distribuidor:", error);
    }
  };

  const handleEdit = (distributor) => {
    setEditingId(distributor._id);
    setForm({
      name: distributor.name,
      service: distributor.service,
      locals: distributor.locals,
      affiliationDate: distributor.affiliationDate
    });
  };

  return (
    <div className="container mx-auto p-5 font-sans">
      <h3 className="text-3xl font-bold mb-6">Administración de Proveedores</h3>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Nombre:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
            Servicio:
          </label>
          <input
            type="text"
            name="service"
            id="service"
            value={form.service}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="locals" className="block text-gray-700 font-medium mb-2">
            Local:
          </label>
          <input
            type="text"
            name="locals"
            id="locals"
            value={form.locals}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="affiliationDate" className="block text-gray-700 font-medium mb-2">
            Fecha de afiliación:
          </label>
          <input
            type="date"
            name="affiliationDate"
            id="affiliationDate"
            value={form.affiliationDate}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-400 text-black px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          {editingId ? "Actualizar Cliente" : "Crear Cliente"}
        </button>
      </form>

      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Servicio</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Local</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de afiliación</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {distributor.length > 0 ? (
              distributor.map((distributor) => (
                <tr key={distributor._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{distributor.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{distributor.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{distributor.locals}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{distributor.affiliationDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-2">
                    <button
                      onClick={() => handleEdit(distributor)}
                      className="bg-green-500 text-black px-3 py-1 rounded-md hover:bg-green-600 transition-colors"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(distributor._id)}
                      className="bg-red-500 text-black px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-4 text-center" colSpan="7">
                  No hay clientes registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgregarProveedor;
