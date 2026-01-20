const ProductCard = ({ 
  product,
  showActions = false,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="relative group product-card">
      {showActions && (
        <div className="product-actions">
          <button
            onClick={() => onEdit?.(product)}
            className="button-edit"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete?.(product)}
            className="button-delete"
          >
            Delete
          </button>
        </div>
      )}
      {/* Image */}
      <div className="image-container">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="image"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="product-title">
          {product.name}
        </h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="space-between-elements">
          <span className="price">
            ${product.price}
          </span>
          <span className="pill-container">
            Qty: {product.stockQuantity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;