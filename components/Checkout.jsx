import { Link } from "react-router-dom";

const Checkout = () => (
  <div className="max-w-xl mx-auto py-16 text-center space-y-4">
    <h1 className="text-3xl font-bold text-text-primary">
      Checkout Complete
    </h1>

    <p className="text-text-muted">
      Your cart has been cleared.
    </p>

    <p className="text-text-muted">
      This project focuses on cart and inventory logic.
      Payment processing is outside the scope.
    </p>

    <Link to="/home" className="button-primary inline-block mt-4">
      Continue Shopping
    </Link>
  </div>
);

export default Checkout;