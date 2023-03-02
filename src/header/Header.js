import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faBasketball, faBell, faCartShopping, faSearch, faShop, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import product from '../../src/assets/Image/product.png';
import account from "../assets/Image/account.png";
import logo from "../assets/Image/logo.png";
import "../screens/Modals/Logout";
import Logout from "../screens/Modals/Logout";
import "../styles/header.scss";

function Header() {
  const [isLogout, setIsLogout] = useState(false);
  const UrlCarts = 'http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/user/carts'
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get(UrlCarts, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`
      }
    })
      .then((res) => {
        console.log("Res add to carts: ", res)
      })
      .catch((err) => {
        console.log("Err add to carts: ", err)
      })
  }, [])


  return (
    <>
      {isLogout && <Logout closeModal={setIsLogout} />}
      <div className="header">
        <div id="container-header">
          <div className="header-left">
            <div className="header-left__img">
              <img src={logo} alt="Logo" style={{ width: 27, height: 45, marginRight: 30 }} />
            </div>
            <div className="header-search">
              <FontAwesomeIcon icon={faSearch} />
              <input type="text" className="search" placeholder="Search plan & flower" />
            </div>
          </div>
          <div className="header-right">
            <div className="header-right-icon">
              <Link to="/home"><FontAwesomeIcon className="fa faShop" icon={faShop} /></Link>
              <FontAwesomeIcon className="fa faUserGroup" icon={faUserGroup} />
              <FontAwesomeIcon className="fa faBasketball" icon={faBasketball} />
            </div>
            <div className="header-right-account">
              <div className="detail-top__cart">
                <div className="top__cart-icon" >
                  <FontAwesomeIcon className="faCartShopping" icon={faCartShopping} />
                  <a>4</a>
                </div>
                <div className="header-carts">
                  <p className="carts-top"></p>
                  <div className="carts-products">
                    <p>Recently Added Products</p>
                    <div className="recently-carts">
                      <img className="carts__img" src={product} alt="No image" />
                      <p className="carts__name">Hoa hồng</p>
                      <p className="carts__price">1200000vdn</p>
                    </div>
                    <div className="recently-carts">
                      <img className="carts__img" src={product} alt="No image" />
                      <p className="carts__name">Hoa hồng</p>
                      <p className="carts__price">1200000vdn</p>
                    </div>
                  </div>
                  <div className="noCart-product">
                    <p>No product</p>
                  </div>
                </div>
              </div>
              <div>
                <FontAwesomeIcon className="faFacebookMessenger" icon={faFacebookMessenger} />
                <FontAwesomeIcon className="faBell" icon={faBell} />
                <img src={account} alt="account" style={{ width: 40, height: 40, borderRadius: 50 }} onClick={() => { setIsLogout(true) }} />
              </div>
            </div>

          </div >
        </div>
      </div>
    </>
  )
}
export default Header