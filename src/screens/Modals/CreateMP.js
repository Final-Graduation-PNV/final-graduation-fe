import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../../styles/Modal/CreateMP.scss";
import Rules from "./Rules";
function CreatePM({ closeModal }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="modalBackground-createMp">
      {isShow && <Rules closeModal={setIsShow} />}
      <div className="modalContainer-createMp">
        <div className="modal-icon-createMp">
          <FontAwesomeIcon icon={faClose} onClick={() => closeModal(false)} />
        </div>
        <div className="createMp-text">
          <p className="createMp-text__tittle">Create your marketplace</p>
          <div className="createMp-des">
            <p>Do you want create market place? </p>
          </div>
          <div className="createMp-btn">
            <button className="createMp-btn__no" onClick={() => closeModal(false)}>No</button>
            <button className="createMp-btn__yes" onClick={() => setIsShow(true)}>Yes</button>
          </div>

          {/* //  <button className="btn__checkEmail" onClick={() => closeModal(false)}><Link className="checkEmail" to="/Sin">Check your email</Link></button> */}
        </div>
      </div>
    </div>
  )
}
export default CreatePM