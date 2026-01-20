

import { useInput } from "../hooks/useInput";
import Input from "../Input";
import Label from "../Label";
import PrimarySubmitButton from "../PrimarySubmitButton";
import FormHeader from "../FormHeader";
import ContentColumn from "../ContentColumn";
import FormContainer from "../FormContainer";
import Form from "../Form";
import { isRequired, isLengthBetween, isNonNegativeNumber, isInteger, isValidUrl } from "../../utils/validators";
import productService from "../../services/productService";
import { useNotification } from "../../context/NotificationContext";
import { useProducts } from "../../context/ProductsContext";
import { PlusCircleIcon } from "@heroicons/react/24/outline";




const CreateProduct = ({ onClose }) => {
  const { showNotification } = useNotification();
  const { addProduct } = useProducts();

  const name = useInput({
    name: "name",
    type: "text",
    placeholder: "Product name",
    validate: (value) => {
      return (
        isRequired(value, "Product name is required") ||
        isLengthBetween(value.trim(), 2, 100, "Name must be 2–100 characters")
      );
    },
  });


  const description = useInput({
    name: "description",
    type: "text",
    placeholder: "Description",
    validate: (value) => {
      return (
        isRequired(value, "Description is required") ||
        isLengthBetween(value.trim(), 1, 500, "Description is too long (max 500)")
      );
    },
  });


  const price = useInput({
    name: "price",
    type: "text",
    placeholder: "Price",
    validate: (value) => {
      return (
        isRequired(value, "Price is required") ||
        isNonNegativeNumber(value, "Price must be a number ≥ 0")
      );
    },
  });


  const stockQuantity = useInput({
    name: "stockQuantity",
    type: "text",
    placeholder: "Quantity",
    validate: (value) => {
      return (
        isRequired(value, "Quantity is required") ||
        isNonNegativeNumber(value, "Quantity must be ≥ 0") ||
        isInteger(value, "Quantity must be a whole number")
      );
    },
  });


  const imageUrl = useInput({
    name: "imageUrl",
    type: "text",
    placeholder: "Image URL",
    validate: (value) => {
      return (
        isRequired(value, "Image URL is required") ||
        isValidUrl(value, "Image must be a valid http(s) URL")
      );
    },
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const product = {
      name: name.value.trim(),
      description: description.value.trim(),
      price: Number(price.value),
      stockQuantity: Number(stockQuantity.value),
      imageUrl: imageUrl.value.trim(),
    };


    try {

      const saved = await productService.createProduct(product);
      addProduct(saved);

      if (saved) {

        name.reset();
        description.reset();
        price.reset();
        stockQuantity.reset();
        imageUrl.reset();

        console.log("saved", saved);

        showNotification({
          heading: "Success!",
          message: "You have added a new product!",
          type: 'success'
        });

        onClose?.();
      }
    } catch (err) {
      console.error(err);
      showNotification({
        heading: "Error!",
        message: "Unable to add a new product!",
        type: 'error'
      });
    }


  };

  return (
    <FormContainer>
      <FormHeader title='Create Product' altDescription='add product to inventory' imgSource="" />
      <ContentColumn>
        <Form onSubmit={onSubmit}>
          <div>
            <Label htmlFor='name' description='Product Name' />
            <Input {...name} />
          </div>
          <div>
            <Label htmlFor='description' description='Description' />
            <Input {...description} />
          </div>
          <div>
            <Label htmlFor='price' description='Price' />
            <Input {...price} />
          </div>
          <div>
            <Label htmlFor='quantity' description='Quantity' />
            <Input {...stockQuantity} />
          </div>
          <div>
            <Label htmlFor='image' description='Upload Image' />
            <Input {...imageUrl} />
          </div>
          <div>  
            <PrimarySubmitButton description='Create' />
          </div>
        </Form>
      </ContentColumn>
    </FormContainer>
  );
};

export default CreateProduct;