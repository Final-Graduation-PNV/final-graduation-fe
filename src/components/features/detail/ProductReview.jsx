import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductReview = () => {
  return (
    <div className="text-evaluate">
      <div className="detail-text__icon">
        <FontAwesomeIcon className="fa-icon" icon={faStar} />
        <FontAwesomeIcon className="fa-icon" icon={faStar} />
        <FontAwesomeIcon className="fa-icon" icon={faStar} />
        <FontAwesomeIcon className="fa-icon" icon={faStar} />
        <FontAwesomeIcon className="fa-icon" icon={faStarHalfStroke} />
      </div>
      <i className="detail-text__view">223 views</i>
    </div>
  );
};
export default ProductReview;
