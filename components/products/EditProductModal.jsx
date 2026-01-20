import EditProductForm from "./EditProductForm";

const EditProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-overlay"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg card">
        <div className="card-header">
          <h2 className="text-lg font-semibold text-text-primary">
            Edit Product
          </h2>
        </div>

        <EditProductForm product={product} onClose={onClose} />
      </div>
    </div>
  );
};

export default EditProductModal;
