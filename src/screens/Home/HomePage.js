import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faBasketball, faBell, faSearch, faShop, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import account from "../../assets/Image/account.png";
import logo from "../../assets/Image/logo.png";
import "../../styles/Home/HomePage.scss";
function HomePage() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-left">
          <div className="header-left__img">
            <img src={logo} alt="Logo" style={{ width: 100, height: 200 }} />
          </div>
          <div className="header-search">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" name="search" placeholder="Search plan & flower" />
          </div>
        </div>
        <div className="header-center">
          <FontAwesomeIcon icon={faShop} />
          <FontAwesomeIcon icon={faUserGroup} />
          <FontAwesomeIcon icon={faBasketball} />
        </div>
        <div className="header-right">
          <FontAwesomeIcon icon={faFacebookMessenger} />
          <FontAwesomeIcon icon={faBell} />
          <img src={account} alt="account" style={{ width: 100, height: 200 }} />
        </div>
      </div>
    </div>
  )
}
export default HomePage