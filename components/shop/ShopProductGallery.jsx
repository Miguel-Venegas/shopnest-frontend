import ShopProductCard from "./ShopProductCard";

const ShopProductGallery = ({ products }) => {
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
