import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import productService from "../../services/productService";
import ShopProductGallery from "../shop/ShopProductGallery";
import HomeNavbar from "../HomeNavbar";
import Footer from "../Footer";
import Autocomplete from "../Autocomplete";

const Home = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAllProducts().then(setProducts);
  }, [location.key]);

  return (
    <>
      <HomeNavbar />
      <main className="dashboard">
        <section className="dashboard-section">
          <h1 className="section-title">Shop</h1>
          <ShopProductGallery products={products} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
