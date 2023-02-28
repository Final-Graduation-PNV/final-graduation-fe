import { faLocationDot, faStar, faStarHalfStroke, faTruckFast } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import pReview from "../../assets/Image/pReviewpng.png"
import shopImage from "../../assets/Image/shopImage.png"
import Header from "../../header/Header"
import "../../styles/Home/Detail.scss"
function Detail() {
  const { id } = useParams();
  const token = localStorage.getItem("token")
  const [detailProduct, setDetailProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/user/products/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(res => {
        setDetailProduct(res.data.product)
        console.log(res.data)
      })
      .catch(err => {
        console.log("Detail:", err)
      })
  }, [])
  return (
    detailProduct
      ? (
        <div className="container" >
          <Header />
          <div className="detail">
            <div className="detail-top">
              <div className="detail-top__nav">
                <p>
                  <Link to="/home">Marketplace</Link>
                  <Link to="home/detail">Detail</Link>
                </p>
              </div>
            </div>
            <div className="detail-contain">
              <div className="detail-img">
                <img className="detail-img__one" src={detailProduct.image} />
              </div>
              <div className="detail-text">
                <p className="detail-text__title">
                  {detailProduct.name}
                </p>
                <div className="text-evaluate">
                  <p className="detail-text__icon">
                    <FontAwesomeIcon className="fa-icon" icon={faStar} />
                    <FontAwesomeIcon className="fa-icon" icon={faStar} />
                    <FontAwesomeIcon className="fa-icon" icon={faStar} />
                    <FontAwesomeIcon className="fa-icon" icon={faStar} />
                    <FontAwesomeIcon className="fa-icon" icon={faStarHalfStroke} />
                  </p>
                  <i className="detail-text__view">223 views</i>
                </div>
                <p className="text-price"> {detailProduct.price}000 vnd</p>
                <div className="text-ship">
                  <FontAwesomeIcon className="faTruckFast" icon={faTruckFast} />
                  <div className="ship">
                    <p className="ship__title">Free shipping from 2km or less</p>
                    <p className="ship__desc">Over 2km will be charged 6,000 VND per 1km</p>
                  </div>
                </div>
                <div className="text-quantily">
                  <p className="quantily__plus">+</p>
                  <p className="quantily__number"> {detailProduct.quantity}</p>
                  <p className="quantily__minus">-</p>
                </div>
                <div className="btn">
                  <Link to="addtocart"> <button className="btn-buy">Buy now</button></Link>
                  <button className="btn-cart">Add to cart</button>
                </div>
              </div>
            </div>
            <div className="shop">
              <div className="shopowner">
                <img className="shop__img" src={shopImage} />
                <div className="shopowner-ger">
                  <p className="shopower__name">{detailProduct.shop.name}</p>
                  <p className="shopower__location"><FontAwesomeIcon icon={faLocationDot} /> {detailProduct.shop.city}</p>
                </div>
              </div>
              <div className="btn-shop">
                <button className="btn-chat">Chat Now</button>
                <Link to="/home/detail/seeshop"><button className="btn-seeshop">See shop</button></Link>
              </div>
            </div>
            <div className="product-des">
              <p className="product-des__tittle">Detail Products</p>
              <p className="product-des__des">{detailProduct.description}</p>
            </div>
            <div className="review">
              <p className="review__tittle">Review Products</p>
              <div className="people-review">
                <img className="pReview" src={pReview} />
                <div className="review-product">
                  <p className="review-product__name">Lê Văn Tiến</p>
                  <p className="review-product__star">
                    <FontAwesomeIcon className="fa-start" icon={faStar} />
                    <FontAwesomeIcon className="fa-start" icon={faStar} />
                    <FontAwesomeIcon className="fa-start" icon={faStar} />
                    <FontAwesomeIcon className="fa-start" icon={faStar} />
                    <FontAwesomeIcon className="fa-start" icon={faStarHalfStroke} />
                  </p>
                  <p className="review-product__comment">A great product for home plant lovers!!! Buy now.... More</p>
                </div>
              </div>
              <div className="people-review">
                <img className="pReview" src={pReview} />
                <div className="review-product">
                  <p className="review-product__name">Lê Văn Tiến</p>
                  <p className="review-product__star">
                    <FontAwesomeIcon className="fa-start" icon={faStar} />
                    <FontAwesomeIcon className="fa-start" icon={faStar} />
                    <FontAwesomeIcon className="fa-start" icon={faStar} />
                    <FontAwesomeIcon className="fa-start" icon={faStar} />
                    <FontAwesomeIcon className="fa-start" icon={faStarHalfStroke} />
                  </p>
                  <p className="review-product__comment">A great product for home plant lovers!!! Buy now.... More</p>
                </div>
              </div>
              <div className="people-review">
                <img className="pReview" src={pReview} />
                <div className="review-product">
                  <p className="review-product__name">Lê Văn Tiến</p>
                  <p className="review-product__star">
                    <FontAwesomeIcon className="fa-start" icon={faStar} />
                    <FontAwesomeIcon className="fa-start" icon={faStar} />
                    <FontAwesomeIcon className="fa-start" icon={faStar} />
                    <FontAwesomeIcon className="fa-start" icon={faStar} />
                    <FontAwesomeIcon className="fa-start" icon={faStarHalfStroke} />
                  </p>
                  <p className="review-product__comment">A great product for home plant lovers!!! Buy now.... More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      : (
        <div>Loading...</div>
      ))
}
export default Detail