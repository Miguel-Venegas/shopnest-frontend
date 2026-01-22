import ShopProductCard from "./ShopProductCard";
import ShopProductSkeletonCard from "./ShopProductSkeletonCard";

const ShopProductGallery = ({ products, isLoading, error }) => {

  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ShopProductSkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 text-center text-text-muted">
        Couldn’t load products. Try refreshing.
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="py-16 text-center text-text-muted">
        No products available.
      </div>
    );
  }

  return (
    <div
      className="
        grid gap-6
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      "
    >
      {products.map(product => (
        <ShopProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ShopProductGallery;
