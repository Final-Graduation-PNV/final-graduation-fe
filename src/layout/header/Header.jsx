import "../../pages/Modals/Logout";
import "../../styles/Header/header.scss";

import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Geocode from "react-geocode";
import cartProduct from "../../assets/Image/cartProduct.png";
import logomain1 from "../../assets/Image/logomain1.png";
import profile from "../../assets/Image/profile.png";
import useCarts from "../../hooks/useCarts";
import useProducts from "../../hooks/useProducts";
import Logout from "../../pages/Modals/Logout";
import { getImageUser } from "../../utils/localStorageUtils";
Geocode.setApiKey("AIzaSyAsUqfmF2hquaeaLJi6qk7tP0KsHx7GKV8");
function Header({
  searchAddress,
  isModal,
  setSearchAddress,
  searchLocation,
  setSearchLocation,
  openModal,
}) {
  const [isLogout, setIsLogout] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCarts();
  const { refreshProduct } = useProducts();
  // const [searchAddress, setSearchAddress] = useState(searchAddress);

  const onAddressChange = (e) => {
    setSearchAddress(e.target.value);
    // console.log("address;", searchAddress);
  };

  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        searchLocation.lat = position.coords.latitude;
        searchLocation.lng = position.coords.longitude;
      });
    } else {
      console.log("Trình duyệt của bạn không hỗ trợ định vị GPS.");
    }
  }

  const handleSearch = () => {
    getCurrentLocation()
    if(searchAddress !== ""){
      Geocode.fromAddress(searchAddress).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          searchLocation.lat = lat;
          searchLocation.lng = lng;
        },
        (error) => {
          console.error(error);
        }
      );
    }
    console.log(" GPS.", searchLocation.lat, searchLocation.lng);
    openModal(true);
    console.log("d")
  };
  const refreshHomePage = () => {
    refreshProduct();
    navigate("/");
  };

  return (
    <>
      <div className="header">
        {isLogout && <Logout closeModal={setIsLogout} />}
        <div id="container-header">
          <div className="header-left">
            <div className="header-left__img">
              <img
                src={logomain1}
                alt="Logo"
                style={{ width: 27, height: 45, marginRight: 30 }}
                onClick={() => {
                  refreshHomePage();
                }}
              />
            </div>
            <div className="header-search">
              <FontAwesomeIcon onClick={handleSearch} icon={faSearch} />
              <input
                type="text"
                className="search"
                name="searchAddress"
                value={searchAddress}
                placeholder="Search for nearby shops"
                onChange={onAddressChange}
              />
              {/* <FontAwesomeIcon
              icon={faMap}
              
            /> */}
            </div>
          </div>
          <div className="header-right">
            <div className="header-right-account">
              <div className="detail-top__cart">
                <div className="top__cart-icon">
                  <FontAwesomeIcon
                    className="faCartShopping"
                    icon={faCartShopping}
                    onClick={() => navigate("/cart")}
                  />
                  <a>{cart.length}</a>
                </div>
                <div className="header-carts">
                  <p className="carts-top"></p>
                  {cart.length ? (
                    <div className="carts-products">
                      <p>Recently Added Products</p>
                      {cart.map((pro, idx) => {
                        return (
                          <div key={idx} className="recently-carts">
                            <img
                              className="carts__img"
                              src={pro.image}
                              alt="No image"
                            />
                            <p className="carts__name">{pro.name}</p>
                            <p className="carts__price">
                              {new Intl.NumberFormat().format(pro.price * 1000)}{" "}
                              vnđ
                            </p>
                          </div>
                        );
                      })}
                      <button
                        className="carts-product__btn"
                        onClick={() => {
                          navigate("/cart");
                        }}
                      >
                        View my cart
                      </button>
                    </div>
                  ) : (
                    <div className="noCart-product">
                      <img src={cartProduct} alt="" />
                      <p>No Products Yet</p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                {/* <FontAwesomeIcon
                  className="faFacebookMessenger"
                  icon={faFacebookMessenger}
                />
                <FontAwesomeIcon className="faBell" icon={faBell} /> */}
                <img
                  className="acount__"
                  src={getImageUser() == null ? profile : getImageUser()}
                  alt="account"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsLogout(true);
                  }}
                />
                {console.log("get image user :", getImageUser())}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
