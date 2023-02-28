import { useState, useEffect } from "react";
import axios from "axios";
import FormInput from "../../components/FormInput";
import ButtonSubmit from "../../components/ButtonSubmit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function AddProduct({ toggle, closeModal }) {
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState("");
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    // image: "",
    quantity: "",
    category_id: "",
    shop_id: localStorage.getItem("user_id")
  });
  console.log("product:", product)

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
    const formData = new FormData()
    formData.append('file', img)
    formData.append("upload_preset", "gl32w86e")
    formData.append("cloud_name", "dx88ipscr")
    await axios.post("https://api.cloudinary.com/v1_1/dx88ipscr/image/upload", formData)
      .then((res) => {

        const token = localStorage.getItem("token")
        axios.post("http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/products",
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
          .then(function (response) {
            toggle(true)
            closeModal(false);
            onRedirect();
          })
          .catch(function (error) {
            console.log("Er product shop onwer", error);
          });
      });


  };
  // useEffect(() => {
  // const token = localStorage.getItem("token")
  //   axios.post("http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/user/products", {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`,
  //     }
  //   })
  //     .then(res => {
  //       console.log("Res:", res)
  //       setProducts(res.data)
  //     })
  //     .catch(err => { console.log("Err:", err) })
  // }, [])

  return (
    <div className="add-product">

      <div className="add-product__form">
        <h2>Add product</h2>
        <button className="add-product__form__button-cancel" onClick={() => closeModal(false)}><FontAwesomeIcon icon={faClose} /></button>
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
        <div className="add-product__form__select-type">
          <label>Product Type</label>
          <select name="category_id" title="Category" onChange={handlerInput} type="select">
            <option value={1}>Indoor plants</option>
            <option value={2}>Out door tree</option>
            <option value={3}>Indoor flower</option>
            <option value={4}>Out door flower</option>
          </select>
        </div>
        <FormInput
          name="description"
          title="Product Description"
          className="add-product__form__input-description"
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
        <div className="add-product__form__submit-button">
          <ButtonSubmit className="add-product__form__submit-button__add-new" type="submit" onClick={handleSubmitForm} title="Add new" />
        </div>
      </div>
    </div>
  );
}
export default AddProduct;
