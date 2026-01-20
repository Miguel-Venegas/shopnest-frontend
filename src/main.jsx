
import ReactDOM from "react-dom/client";
import './App.css';
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { MerchantAuthProvider } from "../context/MerchantAuthContext.jsx";
import { NotificationProvider } from "../context/NotificationContext.jsx";
import { CartProvider } from "../context/CartContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <NotificationProvider>
    <MerchantAuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </MerchantAuthProvider>
  </NotificationProvider>
  </BrowserRouter>
);
