import { useMerchantAuth } from "../../context/MerchantAuthContext";
import AdminNavbar from "../AdminNavbar";
import ProductGallery from "../products/ProductGallery";
import { useEffect } from "react";
import productService from "../../services/productService";
import { useProducts } from "../../context/ProductsContext";


const MerchantDashboard = () => {
  const { merchant } = useMerchantAuth();
  const { products, setProducts } = useProducts();

  useEffect(() => {
    if (!merchant) return;

    productService.getMyProducts().then(setProducts);
  }, [merchant, setProducts]);

  if (!merchant) return <p>Loading...</p>;

  return (
    <>
      <AdminNavbar />
      <main className="dashboard">
        <section className="dashboard-section">
          <h1 className="section-title">Admin Dashboard</h1>
        </section>
        <section className="dashboard-section">
          <h2 className="text-md font-semibold"> Your Products</h2>
          <ProductGallery products={products} />
        </section>
      </main>
    </>
  );
}

export default MerchantDashboard;