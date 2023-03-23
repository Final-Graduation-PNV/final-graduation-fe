
import "../styles/HomePage.scss";

import { faLocationDot, faSearch, faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import cartProduct from "../../src/assets/Image/cartProduct.png";
import profile from "../../src/assets/Image/profile.png";
import { addToCart } from "../api/cartAPI";
import { getData, searchProduct } from "../api/productsAPI";
import { periodShop } from "../api/shopOnnwerAPI";
import Categories from "../components/features/home/Categories";
import ProductCard from "../components/features/home/ProductCard";
import useCarts from "../hooks/useCarts";
import useProducts from "../hooks/useProducts";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";
import { getImageUser, removeShopOnwer, removeToken, removeUserId, removeUserName } from "../utils/localStorageUtils";
import { default as Cart } from "./Modals/Cart";
import ChangePs from "./Modals/ChangePs";
import CreatePM from "./Modals/CreateMP";
import PayTwoMonth from "./Modals/PayTwoMonth";
import SearchShop from "./Modals/SearchShop";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateMp, setIsCreateMp] = useState(false);
  const [modalSearchShop, setModalSearchShop] = useState(false);

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const shopOnwer = localStorage.getItem('shopOnwer');
  const { refreshCart, getCart, loadCartToggle } = useCarts()
  const { AlertCartError, AlertCartSuccess } = Cart();
  const { loadProductToggle } = useProducts();
  const [isPeriod, setPeriod] = useState(false);
  const [searchAddress, setSearchAddress] = useState("");
  const [searchLocation, setSearchLocation] = useState({
    lat: "",
    lng: ""
  })
  // console.log("add", searchLocation)
  const navigate = useNavigate()

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          searchLocation.lat = position.coords.latitude;
          searchLocation.lng = position.coords.longitude;
        });
      } else {
        console.log("Trình duyệt của bạn không hỗ trợ định vị GPS.");
      }
    }
    getCurrentLocation()
  }, [])

  useEffect(() => {
    const getHomPage = async () => {
      try {
        const res = await getData()
        setProducts(res.data.products)
      } catch (err) {
        console.log("Err get home page: ", err)
      }
    }
    getHomPage()
  }, [loadProductToggle])

  useEffect(() => {
    getCart()
  }, [loadCartToggle])

  const handleResultSearch = (res) => {
    setProducts(res);
  };

  const handleSearchProduct = async (event) => {
    try {
      if (event.key === 'Enter') {
        const res = await searchProduct(search);
        setProducts(res.data.products)

      }
    }
    catch (err) {
      console.log("Err search user", err)
    }
  }

  const handleAddCart = async (id) => {
    try {
      const res = await addToCart(id, 1)
      AlertCartSuccess(res.data.message)
      refreshCart()
    } catch (e) {
      AlertCartError(e.data.message)
    }
  }

  const checkPeriodhandler = async () => {

    try {
      const res = await periodShop();
      if (res.data.valid_account[0].message == "Your account has not expired!") {
        // setPeriod(true);
        navigate("/shopOnnwer")
      }
    } catch (error) {
      if (error.status == 402) {
        setPeriod(true);
      }
      console.log("Error shop onwer: ", error)
    }
  }

  return (
    <>
      {isPeriod && <PayTwoMonth closeModal={setPeriod} />}
      {isModalOpen && <ChangePs closeModal={setIsModalOpen} handleResult={handleResultSearch} />}
      {isCreateMp && <CreatePM closeModal={setIsCreateMp} />}
      {modalSearchShop && <SearchShop closeModal={setModalSearchShop} searchLocation={searchLocation} setSearchLocation={setSearchLocation} searchAddress={searchAddress} setSearchAddress={setSearchAddress} />}
      {
        products ? (
          <div className="container-homepage">
            <Header openModal={setModalSearchShop} isModal={modalSearchShop} searchAddress={searchAddress} setSearchAddress={setSearchAddress} searchLocation={searchLocation} setSearchLocation={setSearchLocation} />
            <div className="homePage">
              <div className="homepage-navLef">
                <div className="navLeft-logo">
                  <img className="navLeft__logo" src={getImageUser() == null ? profile : getImageUser()} alt="account" style={{ width: 30, height: 30, borderRadius: 40 }} />
                  <p>{localStorage.getItem("user_name")}</p>
                </div>
                <div className="navLeft-Market">
                  <FontAwesomeIcon className="faShop-home" icon={faShop} />
                  {
                    shopOnwer === "true"
                      ? <p onClick={() => checkPeriodhandler()}>Your marketplace</p>
                      : <p onClick={() => setIsCreateMp(true)}>Create your marketplace</p>
                  }
                </div>
              </div>
              <div className="homepage-navRight">
                <div className="navRigth-Top">
                  <p className="navRigth-Top__des" >Marketplace</p>
                  <div className="navRigth-Top__search__home">
                    <FontAwesomeIcon className="faSearch" icon={faSearch} onClick={handleSearchProduct} />
                    <input
                      onKeyPress={handleSearchProduct}
                      type="text"
                      className="search"
                      placeholder="Search plan & flower"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)} />
                  </div>
                </div>
                <br />
                <div className="selectToday">
                  <p className="selectToday__des">
                    Today's selection
                  </p>
                  <div className="categories">
                    <Categories handleResult={handleResultSearch} />
                    <p className="position" onClick={() => setIsModalOpen(true)} >{!localStorage.getItem("cityCate") ? "Da Nang" : localStorage.getItem("cityCate")} <FontAwesomeIcon icon={faLocationDot} /></p>
                  </div>
                </div>
                <div className="homePage-product">
                  {
                    products.length ? (products.map((pro) => <ProductCard key={pro.id} product={pro} onAddProduct={handleAddCart} />)) : (<div className="noProductHomePage">
                      <img src={cartProduct} alt="image product" />
                      <p>No products</p>
                    </div>)
                  }
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div>No products</div>
        )
      }
      <Footer />
    </>
  )
}

export default HomePage