import { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import HomeNavbar from "../HomeNavbar";
import cartService from "../../services/cartService";

const ShoppingCartProducts = () => {
  const navigate = useNavigate();

  const {
    cart,
    total,
    loading,
    fetchCart,
    updateQuantity,
  } = useCart();

  useEffect(() => {
    fetchCart();
  }, []);

  const items = Object.values(cart);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center">
        <p className="text-text-muted">Loading cart…</p>
      </div>
    );
  }

  const handleCheckout = async () => {
    await cartService.checkout();
    await fetchCart();
    navigate("/checkout");
  };


  if (items.length === 0) {
    return (
      <>
      <HomeNavbar />
        <div className="max-w-4xl mx-auto py-16 text-center">
          <h2 className="text-2xl font-semibold text-text-primary">
            Your cart is empty
          </h2>
          <Link to="/home" className="inline-block mt-6 support-link">
            Continue shopping
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <HomeNavbar />
      <main className="max-w-4xl mx-auto py-10 space-y-8">
        <h1 className="text-2xl font-bold text-text-primary">
          Shopping Cart
        </h1>

        <div className="space-y-6">
          {items.map(({ product, quantity }) => {
            const lineTotal = product.price * quantity;

            return (
              <div
                key={product.id}
                className="flex gap-4 border-b border-border pb-6"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-24 h-24 rounded-md object-cover bg-surface-muted"
                />

                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-text-primary">
                    {product.name}
                  </h3>

                  <p className="text-sm text-text-muted">
                    ${product.price.toFixed(2)} each
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantity - 1)
                      }
                      className="px-2 py-1 border rounded-md"
                    >
                      −
                    </button>

                    <span className="font-medium">{quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantity + 1)
                      }
                      className="px-2 py-1 border rounded-md"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      updateQuantity(product.id, 0)
                    }
                    className="text-sm text-error hover:underline"
                  >
                    Remove
                  </button>
                </div>

                <div className="font-semibold text-text-primary">
                  ${lineTotal.toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>

        <div className="card max-w-sm ml-auto">
          <div className="card-body space-y-2">
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="card-actions">
            <button 
              className="button-primary w-full"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ShoppingCartProducts;
