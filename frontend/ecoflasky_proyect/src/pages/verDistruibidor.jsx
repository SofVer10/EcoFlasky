import React from "react";
import useDataDistributors from "../hooks/useDataDistributors.js";
import ListDistributors from "../components/listDistributors";
import AgregarDistruibidor from "./agregarDistruibidor.jsx"; // Tu formulario existente
 
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
    // Otras funciones del hook si las necesitas
  } = useDataDistributors();
 
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navegación entre pestañas si tienes formulario */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("list")}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === "list"
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            Ver Distribuidores
          </button>
          <button
            onClick={() => setActiveTab("form")}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === "form"
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            Agregar Distribuidor
          </button>
        </div>
      </div>
 
      {/* Contenido según la pestaña activa */}
      {activeTab === "list" && (
        <ListDistributors
          distributors={distributors}
          loading={loading}
          deleteDistributor={deleteDistributor}
          updateDistributors={updateDistributors}
        />
      )}
 
      {activeTab === "form" && (
        <AgregarDistruibidor
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
  );
};
 
export default DistributorsPage;