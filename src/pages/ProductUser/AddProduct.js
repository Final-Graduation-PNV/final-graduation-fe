import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import ButtonSubmit from "../../components/ButtonSubmit";
import FormInput from "../../components/FormInput";
// import swal from "sweetalert";

function AddProduct({ toggle, setToggle, closeModal, categories }) {
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState("");
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
    category_id: categories[0].id,
    shop_id: localStorage.getItem("user_id")
  });

  const initialErrors = Object.freeze({
    name: "",
    price: "",
    description: "",
    quantity: ""
  })

  const [errors, setErrors] = useState(initialErrors);

  const resetErrors = () => {
    setErrors(initialErrors)
  }
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
    setProduct({});
    tooggle();
  };

  const handleSubmitForm = async () => {
    resetErrors()

    const formData = new FormData()
    formData.append('file', img)
    formData.append("upload_preset", "gl32w86e")
    formData.append("cloud_name", "dx88ipscr")
    await axios.post("https://api.cloudinary.com/v1_1/dx88ipscr/image/upload", formData)
      .then((res) => {
        const token = localStorage.getItem("token")
        axios.post("http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/shop/products",
          {
            name: product.name,
            price: product.price,
            description: product.description,
            image: res.data.secure_url,
            quantity: product.quantity,
            category_id: product.category_id,
            shop_id: product.shop_id
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
          }
        )
          .then((response) => {
            setToggle(!toggle);
            closeModal(false);
            onRedirect();
            // swal("Add new product successfully!", "", "success");
          })
          .catch(({response}) => {
            setErrors(response.data.errors)
            console.log("Err sign in", errors)
          });

      });
  };

  return (
    <><div className="add-product">
      {
        product ? (
          <div className="add-product__form">
            <h2>Add product</h2>
            <button className="add-product__form__button-cancel" onClick={() => closeModal(false)}><FontAwesomeIcon icon={faClose} /></button>
            <FormInput
              name="name"
              className="add-product__form__name"

              title="Product Name"
              value={product.name}
              onChange={handlerInput}
              placeholder="Product name"
              type="text"
              error={errors.name}
            />
            <FormInput
              name="image"
              title="Product Image"
              value={product.image}
              onChange={(e) => setImg(e.target.files[0])}
              type="file"
            />
            <div className="add-product__form__price-quantity">
              <div className="add-product__form__price-quantity__price">
                <FormInput
                  className="add-product__form__price-quantity__price-input"
                  name="price"
                  title="Product Price"
                  placeholder="Product price"
                  value={product.price}
                  onChange={handlerInput}
                  type="number"
                  error={errors.price}
                /> 
                <label>.000 VND</label>
              </div>

              <FormInput
                className="add-product__form__price-quantity__input"
                name="quantity"
                placeholder="Product quantity"
                title="Product Quantity"
                value={product.quantity}
                onChange={handlerInput}
                type="number"
                error={errors.quantity}
              />
            </div>
            <div className="add-product__form__select-type">
              <label>Product Type</label>
              <select name="category_id" title="Category" onChange={handlerInput} type="select">
                {
                  categories.map((category, index) => (
                    <option value={category.id}>{category.name}</option>
                  ))
                }
              </select>
            </div>
            <div className="add-product__form__input-description">
              <label >Product Description</label>
              <textarea rows="4" cols="58" name="description" value={product.description} onChange={handlerInput} placeholder="Product description">
              </textarea>
            </div>
            <div className="add-product__form__submit-button">
              <ButtonSubmit className="add-product__form__submit-button__add-new" type="submit" onClick={handleSubmitForm} title="Add new" />
            </div>
          </div>) : (<div>Please add product</div>)
      }
    </div>
    </>
  );
}
export default AddProduct;
