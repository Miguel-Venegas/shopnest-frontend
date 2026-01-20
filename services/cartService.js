import api from "./api/client";

// const API_BASE_URL = import.meta.env.VITE_API_URL;

// const CART_URL = `${API_BASE_URL}/api/cart/products`;
// const CHECKOUT_URL = `${API_BASE_URL}/api/cart/checkout`;

const getCartProducts = async () => {
  const res = await api.get("/api/cart/products");
  return res.data;
};

const addProduct = async (productId) => {
  const res = await api.post(`/api/cart/products/${productId}`, {});
  return res.data;
};

const updateQuantity = async (productId, quantity) => {
  const res = await api.patch(`/api/cart/products/${productId}`, { quantity });
  return res.data; // { items, total }
};

const removeProduct = async (productId) => {
  const res = await api.delete(`/api/cart/products/${productId}`);
  return res.data;
};

const checkout = async () => {
  const res = await api.post("/api/cart/checkout", {});
  return res.data;
};

export default {
  getCartProducts,
  addProduct,
  updateQuantity,
  removeProduct,
  checkout,
};
