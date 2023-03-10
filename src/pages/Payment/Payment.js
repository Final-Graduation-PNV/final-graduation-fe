import "../../styles/Payment/payment.scss";

import { faAngleRight, faClipboard, faLocationDot, faPen, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import product from "../../assets/Image/product.png";
import Header from "../../layout/header/Header";
import ModalPM from "../Modals/ModalPM";
import Thanks from "../Modals/Thankyou";

function Payment() {
  const [isShow, setIsShow] = useState(false);
  const [thanks, setThanks] = useState(false);
  const { id } = useParams();
  console.log("id payment: ", id)

  return (
    <div className="container-payment">
      {isShow && <ModalPM closeModal={setIsShow} />}
      {thanks && <Thanks closeModal={setThanks} />}
      <div className="con-payment">
        <Header />
        <div className="payment">
          <div className="payment-top__nav">
            <p>
              <Link to="/">Marketplace </Link>
              <FontAwesomeIcon style={{ fontSize: 13, fontWeight: 600, margin: 5 }} icon={faAngleRight} />
              <Link to="/cart" >Add to cart  </Link>
              <FontAwesomeIcon style={{ fontSize: 13, fontWeight: 600, margin: 5 }} icon={faAngleRight} />
              <Link to="/payment">Payment</Link>
            </p>
          </div>
          <div className="delivery-address">
            <div className="address-location">
              <div className="location-icon">
                <FontAwesomeIcon className="faLocationDot" icon={faLocationDot} />
                <p>Delivery address</p>
              </div>
              <div className="location-person">
                <p>Ngô Thị Tròn | (+84) 878 647 656</p>
                <p>101B, Le Huu Trac, Son Tra, Danang, Vietnam</p>
              </div>
            </div>
            <FontAwesomeIcon className="faPen" icon={faPen} onClick={() => { setIsShow(true) }} />
          </div>
          <div className="product">
            <div className="product-top">
              <p className="top__name">Product</p>
              <p className="top__price">Price</p>
              <p className="top__quantily">Quantily</p>
              <p className="top__amount">Amount</p>
            </div>
            <div className="product-con">
              <div className="product-imgName">
                <p className="con__img"><img className="img__product" src={product} /></p>
                <p className="con__name">Sago Palm</p>
              </div>
              <p className="con__prie">315.000 vnd  </p>
              <p className="con__quantily">1</p>
              <p className="con__amount">315.000 vnd</p>
            </div>
            <div className="product-con">
              <div className="product-imgName">
                <p className="con__img"><img className="img__product" src={product} /></p>
                <p className="con__name">Sago Palm</p>
              </div>
              <p className="con__prie">315.000 vnd  </p>
              <p className="con__quantily">1</p>
              <p className="con__amount">315.000 vnd</p>
            </div>
            <div className="product-con">
              <div className="product-imgName">
                <p className="con__img"><img className="img__product" src={product} /></p>
                <p className="con__name">Sago Palm</p>
              </div>
              <p className="con__prie">315.000 vnd  </p>
              <p className="con__quantily">1</p>
              <p className="con__amount">315.000 vnd</p>
            </div>
            <div className="product-con">
              <div className="product-imgName">
                <p className="con__img"><img className="img__product" src={product} /></p>
                <p className="con__name">Sago Palm</p>
              </div>
              <p className="con__prie">315.000 vnd  </p>
              <p className="con__quantily">1</p>
              <p className="con__amount">315.000 vnd</p>
            </div>
            <div className="product-note">
              <p>Note:</p>
              <input type="text" className="note" name="note" placeholder='Note to seller' />
            </div>
            <div className="product-ship">
              <div className="ship-free">
                <div className="free-icon">
                  <FontAwesomeIcon className="faTruckFast" icon={faTruckFast} />
                  <p>Shipping free:</p>
                </div>
                <p>20.000vnd</p>
              </div>
              <div className="ship-total">
                <p>Total amount:</p>
                <p>1.260.000</p>
              </div>
            </div>
            <div className="payment-details">
              <div className="payment-icon">
                <FontAwesomeIcon className="faClipboard" icon={faClipboard} />
                <p>Payment details</p>
              </div>
              <div className="total-amount">
                <p>Total amount of product</p>
                <p> 1.260.000 vnd </p>
              </div>
              <div className="ships-free">
                <p>Total amount of shipping free</p>
                <p>20.000 vnd</p>
              </div>
              <div className="total-payment">
                <p>Total payment</p>
                <p>220.000 vnd</p>
              </div>
              <button className="order_btn" onClick={() => { setThanks(true) }}>Order</button>
            </div>
          </div>
        </div>
      </div>

      {/* {isShow && <ModalPM closeModal={setIsShow} />} */}
    </div>
  )
}
export default Payment