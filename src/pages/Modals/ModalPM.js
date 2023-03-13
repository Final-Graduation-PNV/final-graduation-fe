import "../../styles/Modal/ModalPM.scss";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { payment } from "../../api/paymentAPI";


function ModalPM({ closeModal, checked }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const saveHandler = async () => {
    const res = await payment(checked, name, phone, city, address);
    console.log("res bill handler: ", res)
    // dispatch(setPaymentList(res.data.paying));
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal-icon">
          <FontAwesomeIcon icon={faClose} onClick={() => closeModal(false)} />
        </div>
        <div className="modal-text">
          <p className="modal-text__tittle">Delivery Address</p>
          <div className="info-person">
            <div className="modal-name">
              <p className="modal-text__name">Name:</p>
              <input className="modal-name__input" type="text" placeholder="Please enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="model-phone">
              <p className="modal-text__phone">Phone:</p>
              <input className="modal-phone__input" type="text" placeholder="Please your phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>
          <div className="modal-city">
            <p className="modal-city__city">Province/ City:</p>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
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
          <div className="modal-despayment">
            <p>Specific address:</p>
            <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Please your address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="modal-btn">
            <button className="btn__cancel" onClick={() => closeModal(false)}>Cancel</button>
            <button className="btn__save" onClick={() => closeModal(false)} >Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ModalPM