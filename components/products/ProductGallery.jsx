import ProductCard from "./ProductCard";
import productService from "../../services/productService";
import { useState } from "react";
import EditProductModal from "./EditProductModal";
import DeleteProductModal from "./DeleteProductModal";
import { useProducts } from "../../context/ProductsContext";
import { useNotification } from "../../context/NotificationContext";
import CreateProductModal from "./CreateProductModal";
import { PlusIcon } from "@heroicons/react/16/solid";

const ProductGallery = () => {
  const { showNotification } = useNotification();
  const { products, removeProduct } = useProducts();
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [createOpen, setCreateOpen] = useState(false);


  if (!products || products.length === 0) {
    return (
      <>
        <div className="flex justify-end mb-4">
        <button
          onClick={() => setCreateOpen(true)}
          className="button-primary w-auto"
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      </div>
        <div className="py-16 text-center text-gray-500">
          No products yet.
        </div>
        {createOpen && (
          <CreateProductModal onClose={() => setCreateOpen(false)} />
        )}
      </>
     
    );
  }
 
  const closeModal = () => setEditProduct(null);

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  const requestDelete = (product) => {
    setDeleteProduct(product);
  };

  const confirmDelete = async () => {
    if (!deleteProduct) return;

    try {
      await productService.deleteProduct(deleteProduct.id);
      removeProduct(deleteProduct.id);

      showNotification({
        heading: "Product deleted",
        message: "The product was permanently removed.",
        type: "success",
      });

      setDeleteProduct(null);
    } catch (error) {
      console.error(error);

      showNotification({
        heading: "Delete failed",
        message: "Unable to delete the product. Please try again.",
        type: "error",
      });
    }
  };


  return (
    <>
      {/* Header action */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setCreateOpen(true)}
          className="button-primary w-auto"
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="
      grid
      gap-6
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
    ">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            showActions={true}
            onEdit={(handleEdit)}
            onDelete={requestDelete}
          />
        ))}
        {createOpen && (
          <CreateProductModal onClose={() => setCreateOpen(false)} />
        )}

        {editProduct && (
          <EditProductModal
            product={editProduct}
            onClose={closeModal}
          />
        )}

        {deleteProduct && (
          <DeleteProductModal
            product={deleteProduct}
            onClose={() => setDeleteProduct(null)}
            onConfirm={confirmDelete}
          />
        )}
      </div>
    </>
   
  );
};

export default ProductGallery;