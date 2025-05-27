import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
 
const useDataDistributors = () => {
  const [activeTab, setActiveTab] = useState("list");
  const API = "http://localhost:4000/api/distributors"; // Ajusta esta URL según tu backend
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [locals, setLocals] = useState("");
  const [affiliationDate, setAffiliationDate] = useState("");
  const [distributors, setDistributors] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const fetchDistributors = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Hubo un error al obtener los distribuidores");
      }
      const data = await response.json();
      setDistributors(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching distributors:", error);
      toast.error("Error al cargar los distribuidores");
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchDistributors();
  }, []);
 
  const saveDistributor = async (e) => {
    e.preventDefault();
    try {
      const newDistributor = {
        name,
        service,
        locals,
        affiliationDate,
      };
 
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDistributor),
      });
 
      if (!response.ok) {
        throw new Error("Hubo un error al registrar el distribuidor");
      }
 
      toast.success('Distribuidor registrado');
      fetchDistributors();
      setName("");
      setService("");
      setLocals("");
      setAffiliationDate("");
    } catch (error) {
      console.error("Error saving distributor:", error);
      toast.error("Error al guardar el distribuidor");
    }
  };
 
  const deleteDistributor = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
 
      if (!response.ok) {
        throw new Error("Hubo un error al eliminar el distribuidor");
      }
 
      toast.success('Distribuidor eliminado');
      fetchDistributors();
    } catch (error) {
      console.error("Error deleting distributor:", error);
      toast.error("Error al eliminar el distribuidor");
    }
  };
 
  const updateDistributors = async (dataDistributor) => {
    setId(dataDistributor._id);
    setName(dataDistributor.name);
    setService(dataDistributor.service);
    setLocals(dataDistributor.locals);
    setAffiliationDate(dataDistributor.affiliationDate);
    setActiveTab("form");
  };
 
  const handleEdit = async (e) => {
    e.preventDefault();
 
    try {
      const editDistributor = {
        name,
        service,
        locals,
        affiliationDate,
      };
     
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editDistributor),
      });
 
      if (!response.ok) {
        throw new Error("Error al actualizar el distribuidor");
      }
 
      toast.success('Distribuidor actualizado');
      setId("");
      setName("");
      setService("");
      setLocals("");
      setAffiliationDate("");
      setActiveTab("list");
      fetchDistributors();
    } catch (error) {
      console.error("Error al editar el distribuidor:", error);
      toast.error("Error al actualizar el distribuidor");
    }
  };
 
  return {
    activeTab,
    setActiveTab,
    id,
    name,
    setName,
    service,
    setService,
    locals,
    setLocals,
    affiliationDate,
    setAffiliationDate,
    distributors,
    loading,
    saveDistributor,
    deleteDistributor,
    updateDistributors,
    handleEdit,
  };
};
 
export default useDataDistributors;
 