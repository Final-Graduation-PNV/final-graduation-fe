import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../api/cartAPI";
import useCarts from "../../../hooks/useCarts";
import ProductReview from "./ProductReview";

const ProductDetail = ({ product }) => {
  const navigate = useNavigate();
  const { setCart, refreshCart, getCart, loadCartToggle } = useCarts();

  const [quantity, setQuantity] = useState(product.quantity);
  console.log("Quantity: ", quantity);
  // console.log(quantity);
  // console.log("ID", product.id);

  // const id = product.id;

  const increaseHandler = async (id) => {
    try {
      const res = addToCart(id, 1);
      // setQuantity(res);
      refreshCart();
      console.log("Increase detail: ", res);
    } catch (error) {
      console.log("Error increase detail: ", error);
    }
  };

  const decreaseHandler = async (id) => {
    try {
      const res = addToCart(id, -1);
      setQuantity(res);
      console.log("Decrease detail: ", res);
    } catch (error) {
      console.log("Error decrease detail", error);
    }
  };

  const handleAddCart = async (id) => {
    try {
      await addToCart(id, 1);
      refreshCart();
    } catch (e) {
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
            onClick={() => decreaseHandler(product.id)}
          >
            -
          </div>
          <div className="quantily-detail__number">{quantity}</div>
          <div
            className="quantily-detail__plus"
            onClick={() => increaseHandler(product.id)}
          >
            +
          </div>
        </div>
        <div className="btn">
          <button className="btn-buy" onClick={() => navigate(`/cart`)}>
            Buy now
          </button>
          <button
            className="btn-cart"
            onClick={() => {
              handleAddCart(product.id);
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
