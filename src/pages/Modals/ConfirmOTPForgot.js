import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmOTPforgot } from "../../api/authAPI";
import "../../styles/Modal/CofirmOTP.scss";
import Cart from "./Cart";

const ConfirmOTPForgot = ({ closeModal, id }) => {
  const [seconds, setSeconds] = useState(300);
  const [isRunning, setIsRunning] = useState(true);
  const [otp, setOtp] = useState("");
  const { AlertSendSuccess } = Cart()
  const navigate = useNavigate();

  console.log("id", id)
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


  const comfirmOTPhandler = async () => {
    try {
      await confirmOTPforgot(id, otp)
      console.log("id:", id, "otp:", otp)
      navigate("/")
    } catch (error) {
      console.log("id:", id, "otp:", otp)
      console.log("Error confirm otp: ", error)
    }
  }

  useEffect(() => {
    const handleTabClose = event => {
      event.preventDefault();
      return (event.returnValue =
        'Are you sure you want to exit?');
    };

    window.addEventListener('beforeunload', handleTabClose);

    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, []);

  return (
    <div className="modalBackground-cofirmOTP">
      <div className="modalcontainer-confirmOTP">
        <p className="confirmOTP__title">Confirm OTP</p>
        <div className="content-confirmOTP">
          <div className="confirmOTP">
            <FontAwesomeIcon className="faEnvelopeCircleCheck" icon={faEnvelopeCircleCheck} />
            <p>The OTP verification code has been sent to your Email. Please enter...</p>
          </div>
          <div className="countSeconds">{formatTime(seconds)}</div>
          <div className="inputConfirm">
            <input placeholder="Enter otp code..." value={otp} onChange={(e) => setOtp(e.target.value)} />
          </div>
          <div className="btn-confirmOPT">
            <button className="btn-confirmOPT__cancel" onClick={() => closeModal(false)}>Cancel</button>
            <button className="btn-confirmOPT__confirm" onClick={comfirmOTPhandler}>Confirm</button>
          </div>
        </div>

      </div>
    </div>
  )
}
export default ConfirmOTPForgot