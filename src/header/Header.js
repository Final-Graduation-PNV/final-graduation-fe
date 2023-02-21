import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faBasketball, faBell, faCartShopping, faSearch, faShop, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import account from "../../assets/Image/account.png";
// import logo from "../../assets/Image/logo.png";
// import "../../styles/Home/HomePage.scss";
import account from "../assets/Image/account.png";
import logo from "../assets/Image/logo.png";
import "../styles/header.scss";
function Header() {
  return (
    <div className="header">
      <div id="container-header">
        <div className="header-left">
          <div className="header-left__img">
            <img src={logo} alt="Logo" style={{ width: 27, height: 45, marginRight: 30}} />
          </div>
          <div className="header-search">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" className="search" placeholder="Search plan & flower" />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-icon">
            <FontAwesomeIcon className="fa faShop" icon={faShop} />
            <FontAwesomeIcon className="fa faUserGroup" icon={faUserGroup} />
            <FontAwesomeIcon className="fa faBasketball" icon={faBasketball} />
          </div>
          <div className="header-right-account">
            <div className="detail-top__cart">
              <FontAwesomeIcon className="faCartShopping" icon={faCartShopping} />
              <a>4</a>
            </div>
            <FontAwesomeIcon className="faFacebookMessenger" icon={faFacebookMessenger} />
            <FontAwesomeIcon className="faBell" icon={faBell} />
            <img src={account} alt="account" style={{ width: 40, height: 40, borderRadius: 50 }} />
          </div>
        </div >
      </div>

    </div>
  )
}
export default Header