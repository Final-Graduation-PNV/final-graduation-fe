import { useState } from "react";
import axios from "axios";
import ButtonSubmit from "../../components/ButtonSubmit";
import { updateShopProduct } from "../../api/shopOnnwerAPI";
import InputField from "../../components/InputField";



function EditProduct({ toggle, setToggle, data, closeModal, categories }) {
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState("");
  const [imgFile, setImgFile] = useState("");

  const [product, setProduct] = useState({
    id: data.id,
    name: data.name,
    image: data.image,
    price: data.price,
    category_id: data.category_id,
    description: data.description,
    quantity: data.quantity,
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
    setProduct({}); //set lại state product là đói tượng rỗng
    tooggle();

  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImgFile(event.target.files[0]);
      let reader = new FileReader();
      reader.onload = (e) => {
        setImg(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  
  const handleSubmitForm = async (e) => {
    const updatePoduct = async () => {
      try {
        const res = await updateShopProduct( product);
        setToggle(!toggle);
        closeModal(false);
        onRedirect();
      } catch (err) {
        setErrors(err.data.errors)
        console.log("Err update shop product: ", err.data.errors)
      }
    }

    resetErrors()
    e.preventDefault();


    if (img !== "") {
      const formData = new FormData()
      formData.append('file', img)
      formData.append("upload_preset", "gl32w86e")
      formData.append("cloud_name", "dx88ipscr")
      await axios.post("https://api.cloudinary.com/v1_1/dx88ipscr/image/upload", formData)
        .then((res) => {
          product.image = res.data.secure_url;
          updatePoduct();
        });
    } else {
      updatePoduct();
    }

  };
  return (
    <div className="add-product">
      <div className="add-product__form">
        <div className="add-product__form__image" >
          <div className="add-product__form__image-input" >
            <label className="add-product__form-title">Product image</label>
            <input name="image" type="file" onChange={onImageChange} />
          </div>
          <img src={img? img : product.image} alt="product image"/>
        </div>
        <div>
          <label className="add-product__form-title">Product name</label>
          <InputField className="input-data add-product__form__input-name" name="name" value={product.name} onChange={handlerInput}
            placeholder="Product name"
            type="text"
          />
          <div className="add-product__form-error" >{errors.name}</div>
        </div>
        <div className="add-product__form__price-quantity">
          <div>
            <label className="add-product__form-title">Product price</label>
            <div className="add-product__form__price-quantity__input-price">
              <InputField className="input-data" name="price" placeholder="Product price"
                value={new Intl.NumberFormat().format(product.price)}
                onChange={handlerInput}
                type="number" />
              <label className="">,000 vnđ</label>
            </div>
            <div className="add-product__form-error" >{errors.price}</div>
          </div>
          <div className="add-product__form__price-quantity__input-quantity">
            <label className="add-product__form-title">Product quantity</label>
            <InputField className="input-data" name="quantity"
              placeholder="Product quantity"
              value={product.quantity}
              onChange={handlerInput}
              type="number" />
            <div className="add-product__form-error" >{errors.quantity}</div>
          </div>
        </div>
        <div className="add-product__form__select-type">
          <label className="add-product__form-title">Product Type</label>
          <select name="category_id" title="Category" onChange={handlerInput} type="select">
            {
              categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))
            }
          </select>
        </div>
        <div className="add-product__form__input-description">
          <label className="add-product__form-title" >Product Description</label>
          <textarea rows="4" cols="58" name="description" value={product.description} onChange={handlerInput} placeholder="Product description">
          </textarea>
          <div className="add-product__form-error" >{errors.description}</div>
        </div>
        <div className="add-product__form__submit-button">
          <ButtonSubmit className="add-product__form__submit-button__add-new" type="submit" onClick={handleSubmitForm} title="Save" />
          <ButtonSubmit className="add-product__form__submit-button__cancel" title="Cancel" onClick={() => closeModal(false)} />
        </div>
      </div>
    </div>
  );
}
export default EditProduct;