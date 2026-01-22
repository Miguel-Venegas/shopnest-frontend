const ShopProductSkeletonCard = () => {
  
  return (
    <div className="product-card animate-pulse">
      <div className="image-container">
        <div className="image bg-gray-200" />
      </div>
      <div className="p-4 space-y-2">
        <div className="h-4 w-3/4 bg-gray-200 rounded" />
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-2/3 bg-gray-200 rounded" />
        <div className="h-3 w-1/2 bg-gray-200 rounded" />

        <div className="flex items-center justify-between pt-2">
          <div className="h-5 w-16 bg-gray-200 rounded" />
          <div className="h-8 w-24 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ShopProductSkeletonCard;