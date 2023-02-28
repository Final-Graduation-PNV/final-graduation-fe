
import { useState } from "react";
import axios from "axios";
import FormInput from "../../components/FormInput";
import ButtonSubmit from "../../components/ButtonSubmit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function EditProduct({ data, closeModal }) {
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState({
    name: data.name,
    image: data.image,
    price: data.price,
    type: data.type,
    description: data.description,
    quantity: data.quantity,
  });
  const handlerInput = (e) => {
    const { name, value } = e.target;
    console.log(product);
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const tooggle = () => {
    setModal(!modal);
  };
  const onRedirect = () => {
    setProduct({}); //set lại state product là đói tượng rỗng
    tooggle();
    // onAdded(false);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(product.id);
    axios
      .put("https://61ce733e7067f600179c5ea7.mockapi.io/mn/products/" + data.id, product)
      .then(function (response) {
        console.log(response);
        onRedirect();
        closeModal(false);

      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="edit-product">
    <div className="edit-product__form">
        <h2>Edit product</h2>
        <button className="edit-product__form__button-cancel" onClick={() => closeModal(false)}><FontAwesomeIcon icon={faClose} /></button>
        <FormInput
          name="name"
          title="Product Name"
          value={product.name}
          onChange={handlerInput}
          type="text"
        />
        <FormInput
          name="image"
          title="Product Image"
          value={product.image}
          onChange={handlerInput}
          type="text"
        />
        <FormInput
          name="price"
          title="Product Price"
          value={product.price}
          onChange={handlerInput}
          type="number"
        />
        <div className="edit-product__form__select-type">
          <label>Product Type</label>
          <select name="type" title="Product Type" onChange={handlerInput} type="select">
            <option value={"Indoor plants"}>Indoor plants</option>
            <option value={"Out door tree"}>Out door tree</option>
            <option value={"Indorr flower"}>Indoor flower</option>
            <option value={"Out door flower"}>Out door flower</option>
          </select>
        </div>
        <FormInput
          name="description"
          title="Product Description"
          className="edit-product__form__input-description"
          value={product.description}
          onChange={handlerInput}
          type="text"
        />
        <FormInput
          name="quantity"
          title="Product Quantity"
          value={product.quantity}
          onChange={handlerInput}
          type="number"
        />
        <div className="edit-product__form__submit-button">
          <ButtonSubmit className="edit-product__form__submit-button__add-new" type="submit" onClick={handleSubmitForm} title="Save" />
        </div>
      </div>
    </div>
  );
}
export default EditProduct;
