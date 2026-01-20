import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const PRODUCTS_URL = `${API_BASE_URL}/api/products`;


// public

const getAllProducts = async () => {
  const res = await axios.get(`${PRODUCTS_URL}/public`);
  return res.data;
};

const getProductsByCategory = async (category) => {
  const res = await axios.get(`${PRODUCTS_URL}/public`, {
    params: { category },
  });

  return res.data;
};

// admin

const getMyProducts = async () => {
  const res = await axios.get(PRODUCTS_URL, {
    withCredentials: true,
  });
  return res.data;
};


const createProduct = async (productObject) => {

  const res = await axios.post(PRODUCTS_URL, productObject, {
    withCredentials: true
  });

  return res.data;
};

const deleteProduct = async (id) => {
  await axios.delete(`${PRODUCTS_URL}/${id}`, { withCredentials: true }
  );
};

const updateProduct = async (productObject) => {
  const res = await axios.put(`${PRODUCTS_URL}/${productObject.id}`,
    {
      name: productObject.name,
      description: productObject.description,
      price: productObject.price,
      stockQuantity: productObject.stockQuantity,
      imageUrl: productObject.imageUrl,
    },
    { withCredentials: true }
  )

  return res.data;
};

export default {
  createProduct,
  getMyProducts,
  deleteProduct,
  updateProduct,
  getAllProducts,
  getProductsByCategory
};