import api from "./api/client";

// public
const getAllProducts = async () => {
  const res = await api.get("/api/products/public");
  return res.data;
};

const getProductsByCategory = async (category) => {
  const res = await api.get("/api/products/public", {
    params: { category },
  });
  return res.data;
};

// admin
const getMyProducts = async () => {
  const res = await api.get("/api/products");
  return res.data;
};

const createProduct = async (productObject) => {
  const res = await api.post("/api/products", productObject);
  return res.data;
};

const deleteProduct = async (id) => {
  const res = await api.delete(`/api/products/${id}`);
  return res.data; // optional: keep if your backend returns something
};

const updateProduct = async (productObject) => {
  const res = await api.put(`/api/products/${productObject.id}`, {
    name: productObject.name,
    description: productObject.description,
    price: productObject.price,
    stockQuantity: productObject.stockQuantity,
    imageUrl: productObject.imageUrl,
  });

  return res.data;
};

export default {
  createProduct,
  getMyProducts,
  deleteProduct,
  updateProduct,
  getAllProducts,
  getProductsByCategory,
};