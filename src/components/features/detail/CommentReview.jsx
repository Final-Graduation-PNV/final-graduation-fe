import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pReview from "../../../assets/Image/pReview.png";

const CommentReview = () => {
  return (
    <div className="people-review">
      <img className="pReview" src={pReview} />
      <div className="review-product">
        <p className="review-product__name">Lê Văn Tiến</p>
        <p className="review-product__star">
          <FontAwesomeIcon className="fa-start" icon={faStar} />
          <FontAwesomeIcon className="fa-start" icon={faStar} />
          <FontAwesomeIcon className="fa-start" icon={faStar} />
          <FontAwesomeIcon className="fa-start" icon={faStar} />
          <FontAwesomeIcon className="fa-start" icon={faStarHalfStroke} />
        </p>
        <p className="review-product__comment">
          A great product for home plant lovers!!! Buy now.... More
        </p>
      </div>
    </div>
  );
};
export default CommentReview;
