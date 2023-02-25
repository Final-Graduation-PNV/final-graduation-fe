import { faBasketball, faLocationDot, faSearch, faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import account from "../../assets/Image/account.png";
import product from "../../assets/Image/product.png";
import product1 from "../../assets/Image/product1.png";
import Header from "../../header/Header";
import "../../styles/Home/HomePage.scss";
import ChangePs from "../Modals/ChangePs";
import CreatePM from "../Modals/CreateMP";
function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateMp, setIsCreateMp] = useState(false);

  return (
    <>
      {isModalOpen && <ChangePs closeModal={setIsModalOpen} />}
      {isCreateMp && <CreatePM closeModal={setIsCreateMp} />}
      <div className="container-homepage">
        <Header />
        <div className="homePage">
          <div className="homepage-navLef">
            <div className="navLeft-logo">
              <img className="navLeft__logo" src={account} alt="account" style={{ width: 30, height: 30, borderRadius: 40 }} />
              <p>Ngô Thị Tròn</p>
            </div>
            <div className="navLeft-network">
              <FontAwesomeIcon className="faBasketball-home" icon={faBasketball} />
              <p>Social network</p>
            </div>
            <div className="navLeft-Market">
              <FontAwesomeIcon className="faShop-home" icon={faShop} />
              <p onClick={() => setIsCreateMp(true)}>Create your marketplace</p>
            </div>
          </div>
          <div className="homepage-navRight">
            <div className="navRigth-Top">
              <p className="navRigth-Top__des" >Marketplace</p>
              <div className="navRigth-Top__search">
                <FontAwesomeIcon className="faSearch" icon={faSearch} />
                <input type="text" className="search" placeholder="Search plan & flower" />
              </div>
            </div>
            <br />
            <div className="selectToday">
              <p className="selectToday__des">
                Today's selection
              </p>
              <div className="categories">
                <select id="selectToday_id" className="selectToday_name">
                  <option value="Flower">Plants</option>
                  <option value="Indoors">Flowers</option>
                  <option value="Outdoors">Indoor plants</option>
                  <option value="Outdoors">Outdoor plants</option>
                  <option value="Outdoors">Indoor flowers</option>
                  <option value="Outdoors">Outdoor flowers</option>
                </select>
                <p className="position" onClick={() => setIsModalOpen(true)}>Da Nang <FontAwesomeIcon icon={faLocationDot} /></p>
              </div>

            </div>
            <div className="homePage-product">
              <div className="product">
                <Link to="detail"><img className="product__img" src={product} /></Link>
                <p className="product__name">Sago Palm</p>
                <p className="product__price">315.000 vnd</p>
                <button className="add-product_btn">Add to cart</button>
              </div>
              <div className="product">
                <img className="product__img" src={product1} />
                <p className="product__name">Sago Palm</p>
                <p className="product__price">315.000 vnd</p>
                <button className="add-product_btn">Add to cart</button>
              </div>
              <div className="product">
                <img className="product__img" src={product} />
                <p className="product__name">Sago Palm</p>
                <p className="product__price">315.000 vnd</p>
                <button className="add-product_btn">Add to cart</button>
              </div>
              <div className="product">
                <img className="product__img" src={product} />
                <p className="product__name">Sago Palm</p>
                <p className="product__price">315.000 vnd</p>
                <button className="add-product_btn">Add to cart</button>
              </div>
            </div>
            <div className="homePage-product">
              <div className="product">
                <img className="product__img" src={product} />
                <p className="product__name">Sago Palm</p>
                <p className="product__price">315.000 vnd</p>
                <button className="add-product_btn">Add to cart</button>
              </div>
              <div className="product">
                <img className="product__img" src={product} />
                <p className="product__name">Sago Palm</p>
                <p className="product__price">315.000 vnd</p>
                <button className="add-product_btn">Add to cart</button>
              </div>
              <div className="product">
                <img className="product__img" src={product} />
                <p className="product__name">Sago Palm</p>
                <p className="product__price">315.000 vnd</p>
                <button className="add-product_btn">Add to cart</button>
              </div>
              <div className="product">
                <img className="product__img" src={product} />
                <p className="product__name">Sago Palm</p>
                <p className="product__price">315.000 vnd</p>
                <button className="add-product_btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default HomePage