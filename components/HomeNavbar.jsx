import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  HomeIcon
} from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import Logo from "../assets/Logo.png";

const HomeNavbar = () => {
  const { cart } = useCart();
  const [merchantOpen, setMerchantOpen] = useState(false);

  const itemCount = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="w-full h-16 border-b border-border bg-surface">
      <div className="h-full max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Left: Brand */}
   
        <Link
          to="/home"
          className="flex items-center gap-2 text-lg font-semibold text-text-primary hover:text-text-primary"
        >
          <img className="bg-surface centered-media h-14 w-full" src={Logo} />
          <span>ShopNest</span>
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-6">
          {/* Home */}
           <Link
            to="/home"
            className="relative flex items-center gap-1 text-text-secondary hover:text-text-primary"
          >
            <HomeIcon className="h-6 w-6" />
          </Link>
          {/* Cart */}
          <Link
            to="/cart/products"
            className="relative flex items-center gap-1 text-text-secondary hover:text-text-primary"
          >
            <ShoppingCartIcon className="h-6 w-6" />

            {itemCount > 0 && (
              <span
                className="
                  absolute
                  -top-2
                  -right-2
                  min-w-[1.25rem]
                  h-5
                  px-1
                  rounded-full
                  bg-brand-accent
                  text-text-inverse
                  text-xs
                  flex
                  items-center
                  justify-center
                "
              >
                {itemCount}
              </span>
            )}
          </Link>

          {/* Merchant dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMerchantOpen(true)}
            onMouseLeave={() => setMerchantOpen(false)}
          >
            <button
              className="
                flex items-center gap-1
                text-text-secondary
                hover:text-text-primary
              "
            >
              <BuildingStorefrontIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Merchant</span>
            </button>

            {merchantOpen && (
              <div className="absolute right-0 top-full pt-2 z-50">
                <div className="w-40 card shadow-lg">
                  <div className="card-body space-y-2">
                    <Link
                      to="/signin"
                      className="block text-sm text-text-secondary hover:text-text-primary"
                    >
                      Sign in
                    </Link>

                    <Link
                      to="/signup"
                      className="block text-sm text-text-secondary hover:text-text-primary"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
