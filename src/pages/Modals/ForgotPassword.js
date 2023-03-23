import { useState } from "react";
import { forgotPassword } from "../../api/authAPI";
import "../../styles/Modal/forgotPassword.scss";
import Cart from "./Cart";
import ConfirmOTPForgot from "./ConfirmOTPForgot";

const ForgotPassword = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [isShowFG, setIsShowFG] = useState(false);
  const [id, setId] = useState()
  const { AlertForgotPassword } = Cart()



  const forgotPasswordHandler = async () => {
    try {
      const res = await forgotPassword(email);
      setId(res.data.id)
      setIsShowFG(true)
    } catch (error) {
      AlertForgotPassword(error.data.message)
      console.log("Error confirm otp: ", error)
    }
  }

  return (
    <>
      <div className="modalBackground-forgotpassword">
        {isShowFG && <ConfirmOTPForgot closeModal={setIsShowFG} id={id} />}
        <div className="modalcontainer-forgotpassword">
          <p className="forgotpassword__title">Forgot password</p>
          <div className="content-forgotpassword">
            <div className="forgotpassword">
              <p>Check your Email. Please enter...</p>
            </div>
            <div className="inputforgotpassword">
              <input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="btn-forgotpassword">
              <button className="btn-forgotpassword__cancel" onClick={() => closeModal(false)} >Cancel</button>
              <button className="btn-forgotpassword__confirm" onClick={forgotPasswordHandler}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
export default ForgotPassword