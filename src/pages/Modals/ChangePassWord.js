import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassWord } from "../../api/authAPI";
import "../../styles/Modal/CofirmOTP.scss";
import Cart from "./Cart";

const ChangePassWord = ({ closeModal, id }) => {

  const [password, setPassword] = useState("");
  const { AlertChangePassWord, ErrorChangePassWord } = Cart()
  const navigate = useNavigate();


  const comfirmOTPhandler = async () => {
    try {
      const res = await changePassWord(id, password)
      AlertChangePassWord(res.data.message)
      closeModal(false)
      navigate("/")
    } catch (error) {
      ErrorChangePassWord(error.data.errors.password[0])

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
        <p className="confirmOTP__title">Change password</p>
        <div className="content-confirmOTP">
          <div className="confirmOTP">
            <p>Please enter your password...</p>
          </div>
          <div className="inputConfirm">
            <input placeholder="Enter otp code..." value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="btn-confirmOPT">
            <button className="btn-confirmOPT__cancel" onClick={() => closeModal(false)}>Cancel</button>
            <button className="btn-confirmOPT__confirm" onClick={comfirmOTPhandler}>Ok</button>
          </div>
        </div>

      </div>
    </div>
  )
}
export default ChangePassWord