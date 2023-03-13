
import "../styles/HomePage.scss";

import { faBasketball, faLocationDot, faSearch, faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import cartProduct from "../../src/assets/Image/cartProduct.png";
import { addToCart } from "../api/cartAPI";
import { getData, searchProduct } from "../api/productsAPI";
import account from "../assets/Image/account.png";
import Categories from "../components/features/home/Categories";
import ProductCard from "../components/features/home/ProductCard";
import useCarts from "../hooks/useCarts";
import useProducts from "../hooks/useProducts";
import Header from "../layout/header/Header";
import { default as Cart } from "./Modals/Cart";
import ChangePs from "./Modals/ChangePs";
import CreatePM from "./Modals/CreateMP";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateMp, setIsCreateMp] = useState(false);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const shopOnwer = localStorage.getItem('shopOnwer');
  const navigate = useNavigate();
  const { setCart, refreshCart, getCart, loadCartToggle } = useCarts()
  const { AlertCartError, AlertCartSuccess } = Cart();
  const { loadProductToggle } = useProducts()


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
  console.log(typeof(products))

  const handleAddCart = async (id) => {
    try {
      await addToCart(id, 1)
      AlertCartSuccess()
      console.log("aa to cart")
      refreshCart()
    } catch (e) {
      AlertCartError()
      console.log("error cart: ", e.data.message);
    }
  }

  return (

    <>
      {isModalOpen && <ChangePs closeModal={setIsModalOpen} handleResult={handleResultSearch} />}
      {isCreateMp && <CreatePM closeModal={setIsCreateMp} />}
      {
        products ? (
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
                  {
                    shopOnwer === "true"
                      ? <p onClick={() => navigate("shopOnnwer")}>Your marketplace</p>
                      : <p onClick={() => setIsCreateMp(true)}>Create your marketplace</p>
                  }
                </div>
              </div>
              <div className="homepage-navRight">
                <div className="navRigth-Top">
                  <p className="navRigth-Top__des" >Marketplace</p>
                  <div className="navRigth-Top__search">
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
                    <Categories />
                    <p className="position" onClick={() => setIsModalOpen(true)} >Da Nang <FontAwesomeIcon icon={faLocationDot} /></p>
                  </div>

                </div>
                <div className="homePage-product">
                  {
                    products.length ? (products.map((pro) => <ProductCard key={pro.id} product={pro} onAddProduct={handleAddCart} />)) : (<div className="noProductHomePage">
                      <img src={cartProduct} />
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
      {/* <ReactPaginate
        previousLabel="< previous"
        nextLabel="next >"
        breakLabel="..."
        pageCount={15}
        pageRangeDisplayed={5}
        marginPagesDisplayed={3}
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
      /> */}
    </>
  )
}

export default HomePage