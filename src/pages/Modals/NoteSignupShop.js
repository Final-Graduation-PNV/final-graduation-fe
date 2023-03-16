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
          <img src={logoSignupShop} className="imglogoSignupShop" />
          <div className="signupContent">
            <p>When you register to shop Onwer online, we will give you free for the first 60 days from the registration date.</p>
            <p>After 60 days of free use. We will charge you <i>200k/month (VNĐ)</i> We will send you a confirmation email via your email. If you still want to shop Onwer yourself, please confirm our email.</p>
            <p>Thank you for signing up!</p>
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