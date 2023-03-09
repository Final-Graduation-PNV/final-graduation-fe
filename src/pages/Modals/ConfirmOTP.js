import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout, sendEmailOTP, verifyOTP } from "../../api/authAPI";
import "../../styles/Modal/CofirmOTP.scss";
import { gettUserId } from "../../utils/localStorageUtils";
import Cart from "./Cart";

const ConfirmOTP = ({ closeModal, email }) => {
  const [seconds, setSeconds] = useState(300);
  const [isRunning, setIsRunning] = useState(true);
  const [otp, setOtp] = useState("");
  const { AlertSendSuccess } = Cart()
  const navigate = useNavigate();

  useEffect(() => {
    if (isRunning && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (seconds === 0) {
      setIsRunning(false);
      cancelOTPhandler()
    }
  }, [isRunning, seconds])

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  const cancelOTPhandler = async () => {
    try {
      await logout(gettUserId());
      closeModal(false)
    } catch (error) {
      console.log("Error cancel otp: ", error)
    }
  }

  const comfirmOTPhandler = async () => {
    try {
      await verifyOTP(gettUserId(), otp)
      navigate("/")
    } catch (error) {
      console.log("Error confirm otp: ", error)
    }
  }

  const sendEmailOTPhandler = async () => {
    try {
      const res = await sendEmailOTP(email);
      AlertSendSuccess()
      console.log("Send email successfully! ", res)
    } catch (error) {
      console.log("Err send email!")
    }
  }

  return (
    <div className="modalBackground-cofirmOTP">
      <div className="modalcontainer-confirmOTP">
        <p className="confirmOTP__title">Comfirm OTP</p>
        <div className="content-confirmOTP">
          <div className="confirmOTP">
            <FontAwesomeIcon className="faEnvelopeCircleCheck" icon={faEnvelopeCircleCheck} />
            <p>The OTP verification code has been sent to your Email. Please enter...</p>
          </div>
          <div className="countSeconds">{formatTime(seconds)}</div>
          <div className="inputConfirm">
            <input placeholder="Enter otp code..." value={otp} onChange={(e) => setOtp(e.target.value)} />
          </div>
          <div className="btn-sendOTP">
            <button className="btn_sendOTP" onClick={sendEmailOTPhandler}>Send OTP again</button>
          </div>
          <div className="btn-confirmOPT">
            <button className="btn-confirmOPT__cancel" onClick={cancelOTPhandler}>Cancel</button>
            <button className="btn-confirmOPT__confirm" onClick={comfirmOTPhandler}>Confirm</button>
          </div>
        </div>

      </div>
    </div>
  )
}
export default ConfirmOTP