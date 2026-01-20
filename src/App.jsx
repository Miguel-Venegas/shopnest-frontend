import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../components/pages/auth/signin";
import SignUp from "../components/pages/auth/signup";
import MerchantDashboard from "../components/pages/MerchantDashboard";
import { ProductsProvider } from "../context/ProductsContext";
import MerchantRoute from "../components/routes/MerchantRoute";
import './App.css';
import Home from "../components/pages/Home";
import ShoppingCartProducts from "../components/pages/ShoppingCartProducts";
import Checkout from "../components/Checkout";

const App = () => {
  return (
    <Routes>
      {/* Public shopper routes */}
      <Route path="/" element={<Home />} />
      <Route path="/cart/products" element={<ShoppingCartProducts />} />
      <Route path="/checkout" element={<Checkout />} />


      {/* Auth routes */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Protected merchant dashboard */}
      <Route
        path="/dashboard"
        element={
          <MerchantRoute>
            <ProductsProvider>
              <MerchantDashboard />
            </ProductsProvider>
          </MerchantRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
