import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Shop = ({ product }) => {
  return (
    <div className="shop">
      <div className="shopowner">
        <img className="shop__img" src={product.image} />
        <div className="shopowner-ger">
          <p className="shopower__name">{product.shop_name}</p>
          <p className="shopower__location">
            <FontAwesomeIcon icon={faLocationDot} />
            {product.address_shop}
          </p>
        </div>
      </div>
      <div className="btn-shop">
        <button className="btn-chat">Chat Now</button>
        <Link to="/seeshop">
          <button className="btn-seeshop">See shop</button>
        </Link>
      </div>
    </div>
  );
};
export default Shop;
