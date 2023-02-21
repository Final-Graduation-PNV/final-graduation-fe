import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

import "../../styles/Modal/ModalSignin.scss";
function ModalSigin({ closeModal }) {
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal-icon">
          <FontAwesomeIcon icon={faClose} onClick={() => closeModal(false)} />
        </div>
        <div className="modal-text">
          <p className="modal-text__tittle">Logged in successfully</p>
          <p>You have logged in successfully</p>
          {/* <p className="modal-text__check" onClick={() => closeModal(false)}><Link className="checkEmail" to="/Sin"><FontAwesomeIcon icon={faCheck} /></Link></p> */}
          <FontAwesomeIcon className="check-icon" icon={faCheck} />
        </div>
      </div>
    </div>
  )
}
export default ModalSigin