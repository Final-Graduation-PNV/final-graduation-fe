import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import logoSignupShop from "../../assets/Image/logoSignupShop.jpg"
import InforMarketPL from "../../pages/Modals/InforMarketPL"
import "../../styles/Modal/NoteSignupShop.scss"
const NoteSignupShop = ({ closeModal }) => {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <div className="noteSignupBackground">
        {isShow && <InforMarketPL closeModal={setIsShow} />}
        <div className="noteSignupContainer">
          <div className="noteSignup-icon">
            <FontAwesomeIcon icon={faClose} onClick={() => closeModal(false)} />
          </div>
          <div className="noteSignup-text">
            <p className="noteSignup-text__tittle">A few things to note</p>
          </div>
          <img src={logoSignupShop} className="imglogoSignupShop" alt=""/>
          <div className="signupContent">
            <p>You will get 2 months free to experience our services after registering an account to become a shop owner.
            </p>
            <p>After 2 months of using the service, if you still want to continue to maintain the service, you have to pay
              <i> 200,000 VND per month </i>.</p>
            <p className="p2month">Sign-up now to receive 2 months of free service
            </p>
            <p>Thank you</p>
          </div>
          <div className="signupBnt">
            <button onClick={() => { setIsShow(true) }}>Sign Up Now</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default NoteSignupShop