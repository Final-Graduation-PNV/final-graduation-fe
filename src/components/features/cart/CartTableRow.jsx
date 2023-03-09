import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { deleteCartById, updateCart } from "../../../api/cartAPI";
import useCarts from "../../../hooks/useCarts";

const CartTableRow = ({ product }) => {
  const { refreshCart, getQuantity } = useCarts();
  const [quantity, setQuantity] = useState(product.cart_quantity);

  const deleteHandler = async (id) => {
    await deleteCartById(id);
    refreshCart();
  };

  console.log(product);
  console.log("Get quantity: ", getQuantity([product.cart_id]));
  // console.log("product _cart quantity", product.cart_quantity);
  const test_quantity = product.cart_quantity;

  console.log("test quantity before: ", test_quantity);
  const increaseHandler = async () => {
    const newQuantity = quantity + 1;
    // console.log("test quatity after: ", quantily);

    setQuantity(newQuantity);
    updatehandler({ quantity: newQuantity });
    // console.log("new quatity decrease + 1: ", newQuantity);
  };

  const decreaseHandler = async () => {
    const newQuantity = Math.max(quantity - 1, 1);
    setQuantity(newQuantity);
    updatehandler({ quantity: newQuantity });
    // console.log("new quatity increase - 1: ", newQuantity);
  };

  const updatehandler = async ({ quantity }) => {
    try {
      const res = await updateCart(product.cart_id, quantity);
      refreshCart();
      // console.log("update cart successfuly: ", res);
    } catch (err) {
      console.log("err update cart ", err);
    }
  };

  return (
    <div className="addCart-contaniner">
      <div className="addCart-top__name">{product.name}</div>
      <div className="addCart-top__img">
        <img src={product.image} />
      </div>
      <div className="addCart-top__price">
        {new Intl.NumberFormat().format(product.price * 1000)} vnđ
      </div>
      <div className="text-quantily-cart">
        <div className="quantily-cart__minus" onClick={() => decreaseHandler()}>
          -
        </div>
        <div className="quantily-cart__number">{quantity}</div>
        <div
          className="quantily-cart__plus"
          onClick={() => increaseHandler(product.cart_quantity)}
        >
          +
        </div>
      </div>
      <div className="addCart-top__totalPrice">
        {new Intl.NumberFormat().format(
          product.price * 1000 * product.cart_quantity
        )}
        vnđ
      </div>
      <p className="addCart-top__dele">
        <FontAwesomeIcon
          className="faTrashCan"
          icon={faTrashCan}
          onClick={() => {
            deleteHandler(product.cart_id);
          }}
        />
      </p>
    </div>
  );
};
export default CartTableRow;
