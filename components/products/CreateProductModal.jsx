import CreateProduct from "./CreateProduct";

const CreateProductModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-overlay"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto card">
        <CreateProduct onClose={onClose} />
      </div>
    </div>
  );
};


export default CreateProductModal;
