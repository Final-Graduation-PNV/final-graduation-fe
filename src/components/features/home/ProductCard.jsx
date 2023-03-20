import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product, onAddProduct }) => {
  const { navigate } = useNavigate();
  return (
    <div className="product">
      <Link to={`detail/${product.id}`}>
        <img className="product__imgHP" src={product.image}  alt="" />
      </Link>
      <Link to={`detail/${product.id}`}>
        <p
          className="product__name"
          onClick={() => navigate(`/detail/${product.id}`)}
        >
          {product.name}
        </p>
      </Link>
      <p
        className="product__price"
        onClick={() => navigate(`/detail/${product.id}`)}
      >
        {new Intl.NumberFormat().format(product.price * 1000)} vnđ
      </p>
      <button
        className="add-product_btn"
        onClick={() => {
          onAddProduct(product.id);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
