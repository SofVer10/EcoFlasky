import DistributorCard from "./DistributorCard";
import React from "react";
 
const ListDistributors = ({ distributors, loading, deleteDistributor, updateDistributors }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold underline text-center">
        Listado de Distribuidores
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando distribuidores...</div>}
 
        {!loading && distributors?.length === 0 && (
          <div className="text-center text-gray-500">
            No hay distribuidores registrados
          </div>
        )}
 
        {distributors?.map((distributor) => (
          <DistributorCard
            key={distributor._id}
            distributor={distributor}
            deleteDistributor={deleteDistributor}
            updateDistributors={updateDistributors}
          />
        ))}
      </div>
    </div>
  );
};
 
export default ListDistributors;