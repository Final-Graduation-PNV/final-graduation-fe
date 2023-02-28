
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
              image: res.data.secure_url,
              quantity: product.quantity,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              }
            }
          )
            .then(function (response) {
              toggle(true)
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
        .then(function (response) {
          toggle(true)
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
          name="name"
          title="Product Name"
          value={product.name}
          onChange={handlerInput}
          type="text"
        />
        <img className="product-info-img" src={product.image} alt="" />
        <FormInput
          name="image"
          title="Product Image"
          // value={product.image}
          onChange={(e) => setImg(e.target.files[0])}
          type="file"
        />

        <FormInput
          name="price"
          title="Product Price"
          value={product.price}
          onChange={handlerInput}
          type="number"
        />

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
