
import { useState } from "react";
import axios from "axios";
import FormInput from "../../components/FormInput";
import ButtonSubmit from "../../components/ButtonSubmit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function EditProduct({ toggle, data, closeModal }) {
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState("");
  const [product, setProduct] = useState({
    name: data.name,
    image: data.image,
    price: data.price,
    category_id: data.category_id,
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

  };

  console.log("hinh", img)
  const handleSubmitForm = async () => {
    if (img !== "") {
      const formData = new FormData()
      formData.append('file', img)
      formData.append("upload_preset", "gl32w86e")
      formData.append("cloud_name", "dx88ipscr")
      await axios.post("https://api.cloudinary.com/v1_1/dx88ipscr/image/upload", formData)
        .then((res) => {
          const token = localStorage.getItem("token")
          axios.put("http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/shop/products/" + data.id,
            {
              name: product.name,
              price: product.price,
              description: product.description,
              category_id: product.category_id,
              image: res.data.secure_url,
              quantity: product.quantity,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              }
            }
          ).then(function () {
            toggle(true);
            closeModal(false);
            onRedirect();
          })
            .catch(function (error) {
              console.log("Er product shop onwer", error);
            });
        });
    } else {
      const token = localStorage.getItem("token")
      axios.put("http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/shop/products/" + data.id,
        {
          name: product.name,
          price: product.price,
          description: product.description,
          category_id: product.category_id,
          image: product.image,
          quantity: product.quantity,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        }
      )
        .then(function () {
          toggle(true);
          closeModal(false);
          onRedirect();
        })
        .catch(function (error) {
          console.log("Er product shop onwer", error);
        });
    }

  };
  return (
    <div className="edit-product">
      <div className="edit-product__form">
        <h2>Edit product</h2>
        <button className="edit-product__form__button-cancel" onClick={() => closeModal(false)}><FontAwesomeIcon icon={faClose} /></button>
        <FormInput
          className="edit-product__form__name"
          name="name"
          title="Product Name"
          value={product.name}
          onChange={handlerInput}
          type="text"
        />
        <div className="edit-product__form__image">
          <img className="product-info-img" src={product.image} alt="" />
          <FormInput
            name="image"
            title="Product Image"
            // value={product.image}
            onChange={(e) => setImg(e.target.files[0])}
            className="dit-product__form__image-input"
            type="file"
          />
        </div>
        <div className="edit-product__form__price-quantity">
          <FormInput
            className="edit-product__form__price-quantity__input"
            name="price"
            title="Product Price"
            value={product.price}
            onChange={handlerInput}
            type="number"
          />
          <FormInput
            className="edit-product__form__price-quantity__input"
            name="quantity"
            title="Product Quantity"
            value={product.quantity}
            onChange={handlerInput}
            type="number"
          />
        </div>

        <div className="edit-product__form__select-type">
          <label>Product Type</label>
          <select name="category_id" title="Category" onChange={handlerInput} type="select">
            <option value={1}>Indoor plants</option>
            <option value={2}>Out door tree</option>
            <option value={3}>Indoor flower</option>
            <option value={4}>Out door flower</option>
          </select>
        </div>
        <div className="edit-product__form__input-description">
          <label >Product Description</label>
          <textarea rows="4" cols="58" name="description" value={product.description} onChange={handlerInput} placeholder="Product description">
          </textarea>
        </div>

        <div className="edit-product__form__submit-button">
          <ButtonSubmit className="edit-product__form__submit-button__add-new" type="submit" onClick={handleSubmitForm} title="Save" />
        </div>
      </div>
    </div>
  );
}
export default EditProduct;
