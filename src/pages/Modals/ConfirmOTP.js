import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "../../styles/Modal/CofirmOTP.scss";

const ConfirmOTP = () => {
  const [seconds, setSeconds] = useState(300);
  const [isRunning, setIsRunning] = useState(true);

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
            <input placeholder="Enter otp code..." />
          </div>
          <div className="btn-confirmOPT">
            <button className="btn-confirmOPT__cancel">Cancel</button>
            <button className="btn-confirmOPT__confirm">Confirm</button>
          </div>
        </div>

      </div>
    </div>
  )
}
export default ConfirmOTP