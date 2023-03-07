import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const RouteDetail = ({ id }) => {
  
  return (
    <div className="detail-top">
      <div className="detail-top__nav">
        <p>
          <Link to="/">Marketplace </Link>
          <FontAwesomeIcon
            style={{ fontSize: 13, fontWeight: 600, margin: 5 }}
            icon={faAngleRight}
          />
          <Link to={{ pathname: "/detail/" + id }}>Detail</Link>
        </p>
      </div>
    </div>
  );
};

export default RouteDetail;
