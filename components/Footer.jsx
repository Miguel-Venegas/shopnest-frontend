import ShopNestLogo from "../assets/ShopNestLogo.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Brand / Logo */}
        <div className="flex justify-center">
          <img
            src={ShopNestLogo}
            alt="ShopNest logo"
            className="h-36 w-auto"
          />
        </div>

      </div>

      <div className="text-center text-xs text-gray-400 py-4">
        © {new Date().getFullYear()} Miguel Venegas. All rights reserved.
      </div>
    </footer>

  );
};

export default Footer;
