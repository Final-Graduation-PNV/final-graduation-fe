import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import ProductReview from "./ProductReview";

const ProductDetail = ({
  product,
  quan,
  quantity,
}) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const increaseHandler = (quan) => {
    if (quan == quantity) {
      return quantity;
    } else {
      setQuantity(quantity + 1);
    }
  };

  const decreaseHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
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

  const handleQuantity = async () => {
    try {
      const res = await addToCart(id, quantity);
      console.log("change quantity:", res);
    } catch (err) {
      console.log("Err change quantity: ", err);
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
        <div className="text-quantily-detail" onClick={handleQuantity}>
          <div className="quantily-detail__minus" onClick={decreaseHandler}>
            -
          </div>
          <div
            className="quantily-detail__number"
            value={quan}
            onChange={(e) => e.target.value}
          >
            {quan}
          </div>
          <div
            className="quantily-detail__plus"
            onClick={() => increaseHandler(product.quantity)}
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
