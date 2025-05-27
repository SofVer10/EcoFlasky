import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/styleAgregarProveedor.css";

const labels = {
  name: "Nombre del Proveedor",
  supply: "Suministro",
  cellphone: "Teléfono",
  lastShipDate: "Fecha del Último Envío",
  usualShipDate: "Frecuencia de Envío",
  price: "Precio ($)",
  amount: "Cantidad",
};

const placeholders = {
  name: "Ingresa el nombre",
  supply: "¿Qué suministra?",
  cellphone: "1234567890",
  lastShipDate: "",
  usualShipDate: "Ej: Cada lunes, Quincenalmente",
  price: "0.00",
  amount: "0",
};

const AgregarProveedor = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const initialForm = {
    name: "",
    supply: "",
    cellphone: "",
    lastShipDate: "",
    usualShipDate: "",
    price: "",
    amount: "",
  };

  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/supplier");
      const data = await res.json();
      setSuppliers(data);
    } catch (error) {
      console.error("Error al obtener proveedores:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      ...form,
      cellphone: Number(form.cellphone),
      price: Number(form.price),
      amount: Number(form.amount),
    };

    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId ? `/api/supplier/${editingId}` : "/api/supplier";

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSuccessMessage(
        editingId ? "Proveedor actualizado exitosamente" : "Proveedor creado exitosamente"
      );
      resetForm();
      fetchSuppliers();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este proveedor?")) return;

    try {
      await fetch(`/api/supplier/${id}`, { method: "DELETE" });
      setSuccessMessage("Proveedor eliminado exitosamente");
      fetchSuppliers();
    } catch (error) {
      console.error("Error al eliminar el proveedor:", error);
    } finally {
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  const handleEdit = (supplier) => {
    setEditingId(supplier._id);
    setForm({
      name: supplier.name || "",
      supply: supplier.supply || "",
      cellphone: supplier.cellphone?.toString() || "",
      lastShipDate: supplier.lastShipDate ? supplier.lastShipDate.split("T")[0] : "",
      usualShipDate: supplier.usualShipDate || "",
      price: supplier.price?.toString() || "",
      amount: supplier.amount?.toString() || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-ES");
  };

  const filteredSuppliers = suppliers.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.supply.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="container1"
    >
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="success-message"
          >
            <svg
              className="success-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header variants={itemVariants} className="header">
        <h1>Administración de Proveedores</h1>
        <p>Gestiona y administra todos tus proveedores en un solo lugar</p>
      </motion.header>

      <motion.section variants={itemVariants} className="form-section11">
        <h2>{editingId ? "Editar Proveedor" : "Nuevo Proveedor"}</h2>
        <form onSubmit={handleSubmit} className="supplier-form">
          {Object.entries(form).map(([key, value]) => (
            <div key={key} className="form-group">
              <label htmlFor={key}>{labels[key]}</label>
              <input
                type={
                  key === "lastShipDate"
                    ? "date"
                    : key === "price" || key === "amount" || key === "cellphone"
                    ? "number"
                    : "text"
                }
                id={key}
                name={key}
                value={value}
                onChange={handleInputChange}
                required
                placeholder={placeholders[key]}
                min={key === "price" || key === "amount" || key === "cellphone" ? "0" : undefined}
                step={key === "price" ? "0.01" : undefined}
                max={key === "lastShipDate" ? new Date().toISOString().split("T")[0] : undefined}
                className="input-field"
              />
            </div>
          ))}

          <div className="form-actions">
            {editingId && (
              <button type="button" onClick={resetForm} className="btn cancel-btn">
                Cancelar
              </button>
            )}
            <button
              type="submit"
              className={`btn submit-btn ${editingId ? "edit" : "create"}`}
            >
              {editingId ? "Actualizar" : "Crear Proveedor"}
            </button>
          </div>
        </form>
      </motion.section>

      <motion.section variants={itemVariants} className="table-section">
        <div className="table-header">
          <h2>
            Lista de Proveedores{" "}
            <span className="record-count">{suppliers.length} registros</span>
          </h2>
          <input
            type="text"
            placeholder="Buscar proveedor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            aria-label="Buscar proveedor"
          />
        </div>

        {isLoading ? (
          <div className="loading">
            <div className="spinner" aria-label="Cargando proveedores"></div>
            <p>Cargando proveedores...</p>
          </div>
        ) : (
          <table className="supplier-table">
            <thead>
              <tr>
                {[
                  "Nombre",
                  "Suministro",
                  "Teléfono",
                  "Último Envío",
                  "Frecuencia",
                  "Precio",
                  "Cantidad",
                  "Acciones",
                ].map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredSuppliers.length > 0 ? (
                filteredSuppliers.map((supplier) => (
                  <tr key={supplier._id}>
                    <td>{supplier.name}</td>
                    <td>{supplier.supply}</td>
                    <td className="mono">{supplier.cellphone}</td>
                    <td>{formatDate(supplier.lastShipDate)}</td>
                    <td>{supplier.usualShipDate}</td>
                    <td className="price">${parseFloat(supplier.price).toFixed(2)}</td>
                    <td>{supplier.amount}</td>
                    <td>
                      <div className="actions">
                        <button
                          onClick={() => handleEdit(supplier)}
                          className="btn action-btn edit-btn"
                          aria-label={`Editar ${supplier.name}`}
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDelete(supplier._id)}
                          className="btn action-btn delete-btn"
                          aria-label={`Eliminar ${supplier.name}`}
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="no-results">
                    <div>
                      <div className="emoji">📦</div>
                      <p>No se encontraron proveedores</p>
                      <small>
                        {searchTerm
                          ? "Intenta con otro término de búsqueda"
                          : "Comienza agregando tu primer proveedor"}
                      </small>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </motion.section>
    </motion.div>
  );
};

export default AgregarProveedor;
