import { faBasketball, faLocationDot, faSearch, faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import account from "../../assets/Image/account.png";
import Header from "../../header/Header";
import "../../styles/Home/HomePage.scss";
import ChangePs from "../Modals/ChangePs";
import CreatePM from "../Modals/CreateMP";

function HomePage() {
  const UrlHomePage = "http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/user/products";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateMp, setIsCreateMp] = useState(false);
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");


  const shopOnwer = localStorage.getItem('shopOnwer');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(UrlHomePage, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => { console.log("Err:", err) })
  }, [])

  // const handlePageClick = () => {
  //   axios.get(`http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/user/products?_page=2&_limit=10`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`,
  //     }
  //   })
  //     .then(res => { console.log("limit", res) })
  //     .catch(err => { "Err:", console.log("Err:", err) })
  // }

  return (
    <>
      {isModalOpen && <ChangePs closeModal={setIsModalOpen} />}
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
                    shopOnwer
                      ? <p onClick={() => navigate("/home/shopOnnwer")}>Your marketplace</p>
                      : <p onClick={() => setIsCreateMp(true)}>Create your marketplace</p>
                  }
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
                  {
                    products.map((pro) => {
                      return (
                        <div className="product" key={pro.id}>
                          <Link to={`detail/${pro.id}`}><img className="product__imgHP" src={pro.image} /></Link>
                          <p className="product__name">{pro.name}</p>
                          <p className="product__price">{pro.price}000 vnđ</p>
                          <button className="add-product_btn">Add to cart</button>
                        </div>
                      )
                    })
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