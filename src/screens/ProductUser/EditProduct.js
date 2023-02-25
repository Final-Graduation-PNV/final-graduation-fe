import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import { useState } from "react";
import axios from "axios";

function EditProduct({ data }) {
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState({
    pro_name: data.pro_name,
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
        window.location.reload();
        onRedirect();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Button color="none" onClick={tooggle}>
        <img className="product-info__icon" src="/image/Pencil.png" alt="" />
      </Button>
      <Modal isOpen={modal} toggle={tooggle}>
        <form
          onSubmit={handleSubmitForm}
          encType="multipart/form-data"
          method="post"
        >
          <ModalHeader toggle={tooggle}>Edit product</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label>Product Name</Label>
              <Input
                id="pro_name"
                value={product ? product.pro_name : ""}
                onChange={handlerInput}
                name="pro_name"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label>Image</Label>
              <Input
                id="image"
                value={product ? product.image : ""}
                onChange={handlerInput}
                name="image"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label>Price</Label>
              <Input
                id="price"
                value={product ? product.price : ""}
                onChange={handlerInput}
                name="price"
                type="number"
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelect">Type</Label>
              <Input
                id="type"
                name="type"
                type="select"
                onChange={handlerInput}
              >
                <option value={"Indoor plants"}>Indoor plants</option>
                  <option value={"Out door tree"}>Out door tree</option>
                  <option value={"Indorr flower"}>Indoor flower</option>
                  <option value={"Out door flower"}>Out door flower</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input
                id="description"
                value={product ? product.description : ""}
                onChange={handlerInput}
                name="description"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label>Quantity</Label>
              <Input
                id="quantity"
                value={product ? product.quantity : ""}
                onChange={handlerInput}
                name="quantity"
                type="number"
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Save
            </Button>{" "}
            <Button onClick={function noRefCheck() { }}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}
export default EditProduct;
