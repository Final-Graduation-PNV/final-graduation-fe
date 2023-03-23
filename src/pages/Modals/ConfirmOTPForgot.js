import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmOTPforgot } from "../../api/authAPI";
import "../../styles/Modal/CofirmOTP.scss";
import Cart from "./Cart";
import ChangePassWord from "./ChangePassWord";

const ConfirmOTPForgot = ({ closeModal, id }) => {
  const [otp, setOtp] = useState("");
  const [isShow, setIsShow] = useState(false)
  const { AlertOPTPassWord, ErrorOTPPassWord } = Cart()
  const navigate = useNavigate();

  const comfirmOTPhandler = async () => {

    try {
      const res = await confirmOTPforgot(id, otp)
      AlertOPTPassWord(res.data.message)
      // closeModal(false)
      setIsShow(true)
    } catch (error) {
      ErrorOTPPassWord(error.data.message)
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
      {isShow && <ChangePassWord closeModal={setIsShow} id={id} />}
      <div className="modalcontainer-confirmOTP">
        <p className="confirmOTP__title">Confirm OTP</p>
        <div className="content-confirmOTP">
          <div className="confirmOTP">
            <FontAwesomeIcon className="faEnvelopeCircleCheck" icon={faEnvelopeCircleCheck} />
            <p>The OTP verification code has been sent to your Email. Please enter...</p>
          </div>
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