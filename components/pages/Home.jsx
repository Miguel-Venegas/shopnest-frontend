import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import productService from "../../services/productService";
import ShopProductGallery from "../shop/ShopProductGallery";
import HomeNavbar from "../HomeNavbar";
import Footer from "../Footer";
import Autocomplete from "../Autocomplete";

const Home = () => {
  // const location = useLocation();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    setIsLoading(true);
    setError(null);

    productService
      .getAllProducts()
      .then((data) => {
        if (!mounted) return;
        setProducts(data);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err);
      })
      .finally(() => {
        if (!mounted) return;
        setIsLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <HomeNavbar />
      <main className="dashboard">
        <section className="dashboard-section">
          <h1 className="section-title">Shop</h1>
          <ShopProductGallery products={products} isLoading={isLoading} error={error} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
