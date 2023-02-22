import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import map from "../../assets/Image/map.png";
import "../../styles/Modal/ChangePs.scss";
function ChangePs({ closeModal }) {
  return (
    <div className="modalBackground-changePs">
      <div className="modalContainer-changePs">
        <div className="modal-icon-changePs">
          <FontAwesomeIcon icon={faClose} onClick={() => closeModal(false)} />
        </div>
        <div className="changePs-text">
          <p className="changePs-text__tittle">Change position </p>
          <div className="changePs-option">
            <select>
              <option value="0">City</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
              <option value="5">Honda</option>
              <option value="6">Jaguar</option>
              <option value="7">Land Rover</option>
              <option value="8">Mercedes</option>
              <option value="9">Mini</option>
              <option value="10">Nissan</option>
              <option value="11">Toyota</option>
              <option value="12">Volvo</option>
            </select>
          </div>
          <div className="changePs__img">
            <img src={map} />
          </div>
          <div className="changePs-btn">
            <button className="changePs-btn__search" onClick={() => closeModal(false)}>Search</button>
          </div>

          {/* //  <button className="btn__checkEmail" onClick={() => closeModal(false)}><Link className="checkEmail" to="/Sin">Check your email</Link></button> */}
        </div>
      </div>
    </div>
  )
}
export default ChangePs