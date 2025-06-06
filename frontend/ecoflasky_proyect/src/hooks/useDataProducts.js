import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useDataProducts = () => {
  const [activeTab, setActiveTab] = useState("list");
  const API = "http://localhost:4000/api/products";
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [distributorId, setDistributorId] = useState("");
  const [suplierId, setSuplierId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Nuevos estados para los datos de las APIs
  const [distributors, setDistributors] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingOptions, setLoadingOptions] = useState(true);

  // Función para cargar distribuidores
  const fetchDistributors = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/distributors");
      if (!response.ok) {
        throw new Error("Error al obtener distribuidores");
      }
      const data = await response.json();
      setDistributors(data);
    } catch (error) {
      console.error("Error fetching distributors:", error);
      toast.error("Error al cargar distribuidores");
    }
  };

  // Función para cargar proveedores
  const fetchSuppliers = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/supplier");
      if (!response.ok) {
        throw new Error("Error al obtener proveedores");
      }
      const data = await response.json();
      setSuppliers(data);
    } catch (error) {
      console.error("Error fetching suppliers:", error);
      toast.error("Error al cargar proveedores");
    }
  };

  // Función para cargar categorías
  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/category");
      if (!response.ok) {
        throw new Error("Error al obtener categorías");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Error al cargar categorías");
    }
  };

  // Función para cargar todas las opciones
  const fetchAllOptions = async () => {
    setLoadingOptions(true);
    try {
      await Promise.all([
        fetchDistributors(),
        fetchSuppliers(),
        fetchCategories()
      ]);
    } finally {
      setLoadingOptions(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Hubo un error al obtener los productos");
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Error al cargar los productos");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchAllOptions();
  }, []);

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      const newProduct = {
        name,
        description,
        price,
        distributorId,
        suplierId,
        categoryId,
        stock,
        image,
        isVerified,
      };

      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar el producto");
      }

      toast.success('Producto registrado');
      fetchProducts();
      setName("");
      setDescription("");
      setPrice("");
      setDistributorId("");
      setSuplierId("");
      setCategoryId("");
      setStock("");
      setImage("");
      setIsVerified(false);
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error("Error al guardar el producto");
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Hubo un error al eliminar el producto");
      }

      toast.success('Producto eliminado');
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error al eliminar el producto");
    }
  };

  const updateProducts = async (dataProduct) => {
    const productData = {
      _id: dataProduct._id,
      name: dataProduct.name,
      description: dataProduct.description,
      price: dataProduct.price,
      distributorId: dataProduct.distributorId?._id || dataProduct.distributorId,
      supplierId: dataProduct.supplierId?._id || dataProduct.supplierId,
      categoryId: dataProduct.categoryId?._id || dataProduct.categoryId,
      stock: dataProduct.stock,
      image: dataProduct.image,
      isVerified: dataProduct.isVerified
    };
    
    sessionStorage.setItem('editingProduct', JSON.stringify(productData));
    window.location.href = '/agregarProducto';
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const editProduct = {
        name,
        description,
        price,
        distributorId,
        suplierId,
        categoryId,
        stock,
        image,
        isVerified,
      };
      
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editProduct),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el producto");
      }

      toast.success('Producto actualizado');
      setId("");
      setName("");
      setDescription("");
      setPrice("");
      setDistributorId("");
      setSuplierId("");
      setCategoryId("");
      setStock("");
      setImage("");
      setIsVerified(false);
      setActiveTab("list");
      fetchProducts();
    } catch (error) {
      console.error("Error al editar el producto:", error);
      toast.error("Error al actualizar el producto");
    }
  };

  return {
    activeTab,
    setActiveTab,
    id,
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    distributorId,
    setDistributorId,
    suplierId,
    setSuplierId,
    categoryId,
    setCategoryId,
    stock,
    setStock,
    image,
    setImage,
    isVerified,
    setIsVerified,
    products,
    loading,
    saveProduct,
    deleteProduct,
    updateProducts,
    handleEdit,
    // Nuevos datos y estados
    distributors,
    suppliers,
    categories,
    loadingOptions,
    fetchAllOptions
  };
};

export default useDataProducts;