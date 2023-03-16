import "../../styles/Payment/payment.scss";

import { faAngleRight, faClipboard, faLocationDot, faPen, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ls from 'localstorage-slim';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { payment } from "../../api/paymentAPI";
import InforPersonRow from "../../components/features/payment/inforPersonRow";
import PaymentRow from "../../components/features/payment/paymentRow";
import Header from "../../layout/header/Header";
import { getChecked_LC } from "../../utils/localStorageUtils";
import Cart from "../Modals/Cart";
import ModalPM from "../Modals/ModalPM";
import Thanks from "../Modals/Thankyou";

function Payment() {
  const [isShow, setIsShow] = useState(false);
  const [thanks, setThanks] = useState(false);
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  const phone = ls.get("phone", { decrypt: true });
  const address = ls.get("address", { decrypt: true });
  const city = ls.get("city", { decrypt: true });
  const note = ls.get("note", { decrypt: true })
  const { AlertPaymentSuccess } = Cart();
  const totalPayment = () => {
    return ls.get("data", { encrypt: true }).reduce((total, paymentEle) => {
      return total + paymentEle.product_price * paymentEle.cart_quantity * 1000;
    }, 0);
  };

  const billhandler = async () => {
    if (
      phone !== null && phone !== "" &&
      city !== null && city !== "" &&
      address !== null && address !== ""
    ) {
      const res = await payment(getChecked_LC().split(","), note, localStorage.getItem("user_name"), phone, city, address)
      AlertPaymentSuccess();
      await (() => navigate("/"))
    } else {
      setIsShow(true)
    }
  }
  const edithanler = () => {
    setIsShow(true)
  }
  const getDATA = ls.get('data', { decrypt: true });
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
                <InforPersonRow />
              </div>
            </div>
            <FontAwesomeIcon className="faPen" icon={faPen} onClick={() => { edithanler() }} />
          </div>
          <div className="product">
            <div className="product-top">
              <p className="top__name">Product</p>
              <p className="top__price">Price</p>
              <p className="top__quantily">Quantily</p>
              <p className="top__amount">Amount</p>
            </div>
            {
              getDATA.map((pro, idx) =>
                <PaymentRow product={pro} key={idx} />
              )
            }
            <div className="product-note">
              <p value={notes} onChange={(e) => setNotes(e.target.value)}>Note:</p>
              <input type="text" className="note" name="note" placeholder='Note to seller' />
            </div>
            <div className="product-ship">
              <div className="ship-free">
                <div className="free-icon">
                  <FontAwesomeIcon className="faTruckFast" icon={faTruckFast} />
                  <p>Shipping free:</p>
                </div>
                <p>20,000 vnđ</p>
              </div>
              <div className="ship-total">
                <p>Total amount:</p>
                <p>{new Intl.NumberFormat().format(totalPayment())} vnđ</p>
              </div>
            </div>
            <div className="payment-details">
              <div className="payment-icon">
                <FontAwesomeIcon className="faClipboard" icon={faClipboard} />
                <p>Payment details</p>
              </div>
              <div className="total-amount">
                <p>Total amount of product</p>
                <p> {new Intl.NumberFormat().format(totalPayment())} vnđ </p>
              </div>
              <div className="ships-free">
                <p>Total amount of shipping free</p>
                <p>20,000 vnđ</p>
              </div>
              <div className="total-payment">
                <p>Total payment</p>
                <p>{new Intl.NumberFormat().format(totalPayment() + 20000)} vnd</p>
              </div>
              {/* <button className="order_btn">Order</button> */}
              <button className="order_btn" onClick={() => { billhandler() }}>Order</button>

            </div>
          </div>
        </div>
      </div>

      {/* {isShow && <ModalPM closeModal={setIsShow} />} */}
    </div>
  )
}
export default Payment