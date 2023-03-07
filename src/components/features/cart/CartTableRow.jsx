import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToCart, deleteCartById } from "../../../api/cartAPI";
import useCarts from "../../../hooks/useCarts";

const CartTableRow = ({ product }) => {
  const { refreshCart } = useCarts();

  const deleteHandler = async (id) => {
    await deleteCartById(id);
    refreshCart();
  };

  console.log("Product:", product);

  const increaseHandler = async (id) => {
    try {
      await addToCart(id, 1);
      refreshCart();
    } catch (err) {
      console.log("Err add to cart", err);
    }
  };

  const decreaseHandler = async (id) => {
    try {
      await addToCart(id, -1);
      refreshCart();
    } catch (err) {
      console.log("Err decrease to cart", err);
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
        <div
          className="quantily-cart__minus"
          onClick={() => decreaseHandler(product.cart_id)}
        >
          -
        </div>
        <div className="quantily-cart__number">{product.cart_quantity}</div>
        <div
          className="quantily-cart__plus"
          onClick={() => increaseHandler(product.cart_id)}
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
