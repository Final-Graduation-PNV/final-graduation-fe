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
  
  function AddProduct() {
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({
      pro_name: "",
      image: "",
      price: "",
      type: "",
      description: "",
      quantity: "",
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
  
    const handleSubmitForm = (e) => {
      e.preventDefault();
      axios
        .post("https://61ce733e7067f600179c5ea7.mockapi.io/mn/products", product)
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
        <Button className="add-button" color="black" onClick={tooggle}>Add product</Button>
        <Modal isOpen={modal} toggle={tooggle}>
          <form
            onSubmit={handleSubmitForm}
            encType="multipart/form-data"
            method="post"
          >
            <ModalHeader toggle={tooggle}>Add product</ModalHeader>
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
                  <option value={"high"}>High</option>
                  <option value={"medium"}>Medium</option>
                  <option value={"low"}>Low</option>
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
                Thêm
              </Button>{" "}
              <Button onClick={function noRefCheck() {}}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
  export default AddProduct;
  