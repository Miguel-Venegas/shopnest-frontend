const DeleteProductModal = ({ product, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-overlay"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md card">
        <div className="card-header">
          <h2 className="text-lg font-semibold text-text-primary">
            Delete Product
          </h2>
        </div>

        <div className="card-body space-y-3">
          <p className="text-text-secondary text-sm">
            Are you sure you want to delete{" "}
            <span className="font-medium text-text-primary">
              {product.name}
            </span>
            ?
          </p>

          <p className="text-sm text-text-muted">
            This action cannot be undone.
          </p>
        </div>

        <div className="card-actions gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-border text-text-secondary"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-error text-white font-semibold hover:bg-error/90"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
