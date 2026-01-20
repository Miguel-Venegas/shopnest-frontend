import { useCart } from "../../context/CartContext";

const ShopProductCard = ({ product }) => {
  const { cart, addToCart, updateQuantity } = useCart();
  
  const productId = product.id; 
  const item = cart[productId]; 

  const quantityInCart = item?.quantity ?? 0;
  const remainingStock = product.stockQuantity - quantityInCart;

  const isOutOfStock = remainingStock <= 0;

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="image"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="text-sm text-text-muted">
          Sold by {product.account.businessName}
        </p>

        <div className="space-between-elements">

          {isOutOfStock ? (
            <span className="font-semibold text-gray-400">
              Out of Stock
            </span>
          ) : (
            <span className="price">
              ${product.price.toFixed(2)}
            </span>
          )}


          {!item ? (
            <button
              onClick={() => addToCart(productId)}
              className="button-primary w-auto text-sm"
            >
              Add to cart
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  updateQuantity(productId, item.quantity - 1)
                }
                className="px-2 py-1 border rounded"
              >
                −
              </button>

              <span className="min-w-[1.5rem] text-center font-medium">
                {item.quantity}
              </span>

                <button
                  onClick={() =>
                    updateQuantity(productId, item.quantity + 1)
                  }
                  disabled={isOutOfStock}
                  className={`px-2 py-1 border rounded ${isOutOfStock
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                    }`}
                >
                  +
                </button>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopProductCard;
