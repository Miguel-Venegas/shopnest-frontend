import { Navigate } from "react-router-dom";
import { useMerchantAuth } from "../../context/MerchantAuthContext";

const MerchantRoute = ({ children }) => {
  const { merchant } = useMerchantAuth();

  if (!merchant) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default MerchantRoute;
