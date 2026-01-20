import { createContext, useContext, useState } from "react";

const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) =>
    setProducts(prev => [product, ...prev]);

  const updateProduct = (updated) =>
    setProducts(prev =>
      prev.map(p => p.id === updated.id ? updated : p)
    );

  const removeProduct = (id) =>
    setProducts(prev => prev.filter(p => p.id !== id));

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, addProduct, updateProduct, removeProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error("useProducts must be used within ProductsProvider");
  return ctx;
};
