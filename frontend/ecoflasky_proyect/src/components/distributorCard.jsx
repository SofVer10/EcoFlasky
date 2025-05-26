import React from "react";
import Button from "../components/Button";

const DistributorCard = ({ distributor, deleteDistributor, updateDistributors }) => {
  // Función para formatear la fecha
  const formatDate = (dateString) => {
    if (!dateString) return "No especificada";
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mb-4">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          {distributor.name}
        </h2>
        
        <div className="space-y-2 mb-4">
          <div>
            <span className="font-semibold text-gray-700">Servicio: </span>
            <span className="text-gray-600">{distributor.service || "No especificado"}</span>
          </div>
          
          <div>
            <span className="font-semibold text-gray-700">Locales: </span>
            <span className="text-gray-600">{distributor.locals || "No especificado"}</span>
          </div>
          
          <div>
            <span className="font-semibold text-gray-700">Fecha de Afiliación: </span>
            <span className="text-gray-600">{formatDate(distributor.affiliationDate)}</span>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button 
            label={"Eliminar"}
            actionButton={() => deleteDistributor(distributor._id)}
            colorClass={"danger"}
          />
          <Button 
            label={"Editar"}
            actionButton={() => updateDistributors(distributor)}
            colorClass={"warning"}
          />
        </div>
      </div>
    </div>
  );
};

export default DistributorCard;