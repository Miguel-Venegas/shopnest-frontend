import { createContext, useContext, useState, useEffect } from "react";

const MerchantAuthContext = createContext();

export const MerchantAuthProvider = ({ children }) => {
  const [merchant, setMerchant] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("merchant");
    if (saved) setMerchant(JSON.parse(saved));
  }, []);

  const login = (merchantData) => {
    setMerchant(merchantData);
    localStorage.setItem("merchant", JSON.stringify(merchantData));
  };

  const logout = () => {
    setMerchant(null);
    localStorage.removeItem("merchant");
  };

  return (
    <MerchantAuthContext.Provider value={{ merchant, login, logout }}>
      {children}
    </MerchantAuthContext.Provider>
  );
};

export const useMerchantAuth = () => useContext(MerchantAuthContext);
