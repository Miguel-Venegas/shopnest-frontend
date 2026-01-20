import productService from "../../services/productService";
import { useProducts } from "../../context/ProductsContext";
import { useNotification } from "../../context/NotificationContext";
import { useInput } from "../hooks/useInput";
import Input from "../Input";
import Label from "../Label";
import PrimarySubmitButton from "../PrimarySubmitButton";
import {
  isRequired,
  isLengthBetween,
  isNonNegativeNumber,
  isInteger,
  isValidUrl } from "../../utils/validators";


const EditProductForm = ({ product, onClose }) => {

  const { updateProduct } = useProducts();
  const { showNotification } = useNotification();

  const name = useInput({
    name: "name",
    type: "text",
    initialValue: product.name,
    validate: (value) =>
      isRequired(value, "Product name is required") ||
      isLengthBetween(value.trim(), 2, 100, "Name must be 2–100 characters"),
  });

  const description = useInput({
    name: "description",
    type: "text",
    initialValue: product.description,
    validate: (value) =>
      isRequired(value, "Description is required") ||
      isLengthBetween(value.trim(), 1, 500, "Description is too long (max 500)"),
  });

  const price = useInput({
    name: "price",
    type: "number",
    initialValue: product.price,
    validate: (value) =>
      isRequired(value, "Price is required") ||
      isNonNegativeNumber(value, "Price must be ≥ 0"),
  });

  const stockQuantity = useInput({
    name: "stockQuantity",
    type: "number",
    initialValue: product.stockQuantity,
    validate: (value) =>
      isRequired(value, "Quantity is required") ||
      isNonNegativeNumber(value, "Quantity must be ≥ 0") ||
      isInteger(value, "Quantity must be a whole number"),
  });

  const imageUrl = useInput({
    name: "imageUrl",
    type: "text",
    initialValue: product.imageUrl,
    validate: (value) =>
      isRequired(value, "Image URL is required") ||
      isValidUrl(value, "Image must be a valid http(s) URL"),
  });


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      name.error ||
      description.error ||
      price.error ||
      stockQuantity.error ||
      imageUrl.error
    ) {
      showNotification({
        heading: "Fix errors",
        message: "Please correct the form errors before saving.",
        type: "error",
      });
      return;
    }

    try {
      const updated = await productService.updateProduct({
        id: product.id,
        name: name.value.trim(),
        description: description.value.trim(),
        price: Number(price.value),
        stockQuantity: Number(stockQuantity.value),
        imageUrl: imageUrl.value.trim(),
      });

      updateProduct(updated);

      showNotification({
        heading: "Success",
        message: "You successfully updated the product.",
        type: "success",
      });

      onClose();
    } catch (error) {
      console.error("Update product failed:", error);

      showNotification({
        heading: "Error",
        message: "Unable to update the product. Please try again.",
        type: "error",
      });
    }

  };


  return (
    <form onSubmit={handleSubmit} className="card-body stack-md">
      {/* Name */}
      <div>
        <Label htmlFor="name" description="Product Name" />
        <Input {...name} />
      </div>
      {/* Description */}
      <div>
        <Label htmlFor="description" description="Description" />
        <Input {...description} />
      </div>

      {/* Price + Quantity */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="price" description="Price" />
          <Input {...price} />
        </div>

        <div>
          <Label htmlFor="stock" description="Qty:" />
          <Input {...stockQuantity}/>
        </div>
      </div>

      {/* Image */}
      <div>
        <Label htmlFor="image" description="Image URL" />
        <Input {...imageUrl} />
      </div>

      {/* Actions */}
      <div className="card-actions gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded-md border border-border text-text-secondary"
        >
          Cancel
        </button>
        <PrimarySubmitButton description="Save Changes" />
      </div>
    </form>
  );
};

export default EditProductForm;
