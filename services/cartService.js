import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const CART_URL = `${API_BASE_URL}/api/cart/products`;
const CHECKOUT_URL = `${API_BASE_URL}/api/cart/checkout`;

const getCartProducts = async () => {
  const res = await axios.get(CART_URL, {
    withCredentials: true,
  });
  return res.data;
};

const addProduct = async (productId) => {
  const res = await axios.post(
    `${CART_URL}/${productId}`,
    {},
    { withCredentials: true }
  );
  return res.data;
};

const updateQuantity = async (productId, quantity) => {
  const res = await axios.patch(
    `${CART_URL}/${productId}`,
    { quantity },
    { withCredentials: true }
  );
  console.log("res in updateQuantity", res);
  console.log("res.data in updateQuantity", res.data);
  return res.data; // { [items], total }
};

const removeProduct = async (productId) => {
  const res = await axios.delete(
    `${CART_URL}/${productId}`,
    { withCredentials: true }
  );
  return res.data;
};

const checkout = async () => {
  const res = await axios.post(
    `${CHECKOUT_URL}`,
    {},
    { withCredentials: true }
  );
  return res.data;
};


export default {
  getCartProducts,
  addProduct,
  updateQuantity,
  removeProduct,
  checkout
};
