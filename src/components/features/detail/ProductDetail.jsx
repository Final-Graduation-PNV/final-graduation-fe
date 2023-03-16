import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../api/cartAPI";
import useCarts from "../../../hooks/useCarts";
import Cart from "../../../pages/Modals/Cart";
import ProductReview from "./ProductReview";

const ProductDetail = ({ product }) => {
  const navigate = useNavigate();
  const { setCart, refreshCart, getCart, loadCartToggle } = useCarts();
  const { AlertCartError, AlertCartSuccess } = Cart();
  const [quantity, setQuantity] = useState(1);

  const increaseHandler = async () => {
    const newQuantity = Math.min(quantity + 1, product.quantity);
    setQuantity(newQuantity);
  };

  const decreaseHandler = async () => {
    const newQuantity = Math.max(quantity - 1, 1);
    setQuantity(newQuantity);
  };

  const handleAddCart = async () => {
    try {
      await addToCart(product.id, quantity);
      AlertCartSuccess();
      refreshCart();
    } catch (e) {
      AlertCartError();
      console.log("error cart: ", e);
    }
  };

  return (
    <div className="detail-contain">
      <div className="detail-img">
        <img className="detail-img__one" src={product.image} />
      </div>
      <div className="detail-text">
        <div className="detail-text__name">{product.name}</div>
        <ProductReview />
        <p className="text-price">
          {new Intl.NumberFormat().format(product.price * 1000)} vnd
        </p>
        <div className="text-ship">
          <FontAwesomeIcon className="faTruckFast" icon={faTruckFast} />
          <div className="ship">
            <p className="ship__title">Free shipping from 2km or less</p>
            <p className="ship__desc">
              Over 2km will be charged 6,000 VND per 1km
            </p>
          </div>
        </div>
        <div className="text-quantily-detail">
          <div
            className="quantily-detail__minus"
            onClick={() => decreaseHandler()}
          >
            -
          </div>
          <div className="quantily-detail__number">{quantity}</div>
          <div
            className="quantily-detail__plus"
            onClick={() => increaseHandler()}
          >
            +
          </div>
        </div>
        <div className="btn-detail">
          <button className="btn-buy" onClick={() => navigate(`/cart`)}>
            Buy now
          </button>
          <button
            className="btn-cart"
            onClick={() => {
              handleAddCart();
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
