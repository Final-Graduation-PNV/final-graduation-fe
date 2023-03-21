import { faClipboard } from "@fortawesome/fontawesome-free-regular";
import { faAngleRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../../styles/SeeShop/SeeShop.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import product from "../../assets/Image/product.png";
import product1 from "../../assets/Image/product1.png";
import shopImage from "../../assets/Image/shopImage.png";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";

function SeeShop() {
  return (
    <div className="container-seeshop">
      <Header />
      <div className="con-seeshop">
        <div className="seeshop">
          <div className="seeshop-top">
            <div className="see-top__nav">
              <p>
                <Link to="/">Marketplace</Link>
                <FontAwesomeIcon style={{ fontSize: 13, fontWeight: 600, margin: 5 }} icon={faAngleRight} />
                <Link to="/detail/seeShop">See Shop </Link>
              </p>
            </div>
          </div>
          <div className="shoppeOnwer">
            <div className="shop">
              <div className="shopowner">
                <img className="shop__img" src={shopImage} alt="image shop" />
                <div className="shopowner-ger">
                  <p className="shopower__name">Gardenshop21</p>
                  <p className="shopower__location"><FontAwesomeIcon icon={faLocationDot} /> Da Nang</p>
                </div>
              </div>
              <div className="btn-shop">
                <FontAwesomeIcon className="faClipboard" icon={faClipboard} />
                <p>230 products</p>
              </div>
            </div>
          </div>
          <div className="seeshop-navRight">
            <div className="selectToday">
              <p className="selectToday__des">
                Products
              </p>
            </div>
            <div className="seeshop-product">
              <div className="product">
                <Link to="detail"><img className="product__img" src={product} alt="product image" /></Link>
                <p className="product__name">Sago Palm</p>
                <p className="product__price">315.000 vnd</p>
                <button className="add-product_btn">Add to cart</button>
              </div>
              <div className="product">
                <img className="product__img" src={product1} alt="product image" />
                <p className="product__name">Sago Palm</p>
                <p className="product__price">315.000 vnd</p>
                <button className="add-product_btn">Add to cart</button>
              </div>
              <div className="product">
                <img className="product__img" src={product} alt="product image" />
                <p className="product__name">Sago Palm</p>
                <p className="product__price">315.000 vnd</p>
                <button className="add-product_btn">Add to cart</button>
              </div>
              <div className="product">
                <img className="product__img" src={product} alt="product image" />
                <p className="product__name">Sago Palm</p>
                <p className="product__price">315.000 vnd</p>
                <button className="add-product_btn">Add to cart</button>
              </div>
            </div>

          </div>
          <div className="seeshop-navRight">
            <div className="selectToday">
              <p className="selectToday__des">
                Similar product
              </p>
            </div>
            <div className="seeshop-product">
              <div className="product">
                <Link to="detail"><img className="product__img" src={product} alt="product image" /></Link>
                <p className="product__name">Sago Palm</p>
                <p className="product__price">315.000 vnd</p>
                <button className="add-product_btn">Add to cart</button>
              </div>
              <div className="product">
                <img className="product__img" src={product1} alt="product image" />
                <p className="product__name">Sago Palm</p>
                <p className="product__price">315.000 vnd</p>
                <button className="add-product_btn">Add to cart</button>
              </div>
              <div className="product">
                <img className="product__img" src={product} alt="product image" />
                <p className="product__name">Sago Palm</p>
                <p className="product__price">315.000 vnd</p>
                <button className="add-product_btn">Add to cart</button>
              </div>
              <div className="product">
                <img className="product__img" src={product} alt="product image" />
                <p className="product__name">Sago Palm</p>
                <p className="product__price">315.000 vnd</p>
                <button className="add-product_btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default SeeShop