import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { vnPayCreate } from "../../api/shopOnnwerAPI";
import "../../styles/Modal/PayTwoMonth.scss";

const PayTwoMonth = (closeModal) => {

  const vnPayCreateHandler = async () => {
    try {
      const res = await vnPayCreate();
      console.log("vn pay create handler: ", res.data.data)
      // setLinkVnPay( res.data.data)
      window.location.href = res.data.data;
      // setLinkPnPay(res.data.data)
      // return vnPaypayment()
    } catch (error) {
      console.log("Error vn pay create handler: ", error)
    }
  }


  return (
    <div className="chargedBackground">
      <div className="chargedContainer">
        <div className="charged-icon">
          <FontAwesomeIcon className="modal__icon" icon={faClose} onClick={() => closeModal(true)} />
        </div>
        <div className="charged-text">
          <div className="charged-text__tittle">
            <p>Charged to continue</p>
            <p>using the service</p>
          </div>
          <div className="charged-des">
            <p>Your 60-day free trial has expired. Pleased, click the link below to pay to continue using the service to become a shop owner.</p>
          </div>
          <div className="charged-btn">
            <button className="charged-btn__yes" onClick={() => vnPayCreateHandler()}>Payment Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PayTwoMonth