import { createContext, useContext, useEffect, useState } from "react";
import cartService from "../services/cartService";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const syncCart = ({ items, total }) => {
    const normalized = {};

    items.forEach(item => {
      const id = item.product.id;
      normalized[id] = {
        product: item.product,
        quantity: item.quantity,
      };
    });

    setCart(normalized);
    setTotal(total);
  };

  const fetchCart = async () => {
    setLoading(true);
    const res = await cartService.getCartProducts();
    syncCart(res);
    setLoading(false);
  };

  const addToCart = async (productId) => {
    const data = await cartService.addProduct(productId);
    syncCart(data);
  };

  const updateQuantity = async (productId, quantity) => {
    const data =
      quantity <= 0
        ? await cartService.removeProduct(productId)
        : await cartService.updateQuantity(productId, quantity);

    syncCart(data);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        loading,
        fetchCart,
        addToCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
