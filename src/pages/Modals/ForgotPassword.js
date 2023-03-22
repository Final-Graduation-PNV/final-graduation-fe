import { useEffect, useState } from "react";
import { forgotPassword } from "../../api/authAPI";
import "../../styles/Modal/forgotPassword.scss";
import Cart from "./Cart";
import ConfirmOTPForgot from "./ConfirmOTPForgot";

const ForgotPassword = ({ closeModal }) => {
  const [seconds, setSeconds] = useState(300);
  const [isRunning, setIsRunning] = useState(true);
  const [email, setEmail] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [id, setId] = useState()
  const { AlertForgotPassword } = Cart()

  useEffect(() => {
    if (isRunning && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (seconds === 0) {
      setIsRunning(false);
    }
  }, [isRunning, seconds])

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }


  const forgotPasswordHandler = async () => {
    try {
      const res = await forgotPassword(email);
      console.log("Forgot pasword handler ", res)
      setId(res.data.id)
      setIsShow(true)
      console.log("Forgot")
    } catch (error) {
      AlertForgotPassword(error.data.message)
      console.log("Error confirm otp: ", error)
    }
  }

  return (
    <>

      <div className="modalBackground-forgotpassword">
        {isShow && <ConfirmOTPForgot closeModal={setIsShow} id={id} />}
        <div className="modalcontainer-forgotpassword">
          <p className="forgotpassword__title">Forgot password</p>
          <div className="content-forgotpassword">
            <div className="forgotpassword">
              <p>Check your Email. Please enter...</p>
            </div>
            <div className="countSeconds">{formatTime(seconds)}</div>
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