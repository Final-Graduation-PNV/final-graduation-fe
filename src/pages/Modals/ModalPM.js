import "../../styles/Modal/ModalPM.scss";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ls from 'localstorage-slim';
import React, { useState } from "react";
import validator from 'validator';
import CityList from "../../components/features/city/CityList";

function ModalPM({ closeModal }) {
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("Hà Nội")
  const [address, setAddress] = useState("")
  const [isValidPhone, setIsValidPhone] = useState(false);
  ls.set("city", city, { encrypt: true })
  ls.set("phone", phone, { encrypt: true })
  ls.set("address", address, { encrypt: true })

  const saveHandler = () => {
    if (phone !== null && phone !== "" &&
      city !== null && city !== "" &&
      address !== null && address !== "" && isValidPhone == true) {
      closeModal(false)
    }
    else {
      closeModal(true)
    }
  }
  const cancelHandler = () => {
    ls.remove("city", city, { encrypt: true })
    ls.remove("phone", phone, { encrypt: true })
    ls.remove("address", address, { encrypt: true })
    closeModal(false)
  }

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="modal-icon">
            <FontAwesomeIcon icon={faClose} onClick={() => closeModal(false)} />
          </div>
          <div className="modal-text">
            <p className="modal-text__tittle">Delivery Address</p>
            <div className="info-person">
              <div className="modal-name">
                <p className="modal-text__name" >Name:</p>
                <input className="modal-name__input" type="text" placeholder="Please enter your name" value={localStorage.getItem("user_name")} />
              </div>
              <div className="model-phone">
                <p className="modal-text__phone" >Phone:</p>
                <input className="modal-phone__input" type="text" placeholder="Please your phone"
                  value={phone ? phone : ls.get("phone", { encrypt: true })}
                  onChange={
                    (e) => {
                      const phoneValue = e.target.value;
                      setPhone(phoneValue);
                      setIsValidPhone(validator.isMobilePhone(phoneValue, 'vi-VN'))
                    }
                  }
                />
                {!isValidPhone && (
                  <span style={{ color: 'red', fontSize: 12 }}>Invalid phone number</span>
                )}
              </div>
            </div>
            <div className="modal-city">
              <p className="modal-city__city" >Province/ City:</p>
              <select value={city ? city : ls.get("city", { encrypt: true })} onChange={(e) => setCity(e.target.value)}>
                {CityList.map((city, id) => (
                  <option key={id} value={city.name}>{city.name}</option>
                ))}
              </select>
            </div>
            {city.trim() === '' && (
              <span style={{ color: 'red', fontSize: 12 }}>This field is required</span>
            )}
            <div className="modal-despayment">
              <p>Specific address:</p>
              <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Please your address" value={address ? address : ls.get("address", { encrypt: true })} onChange={(e) => setAddress(e.target.value)} />
            </div>
            {address.trim() === '' && (
              <span style={{ color: 'red', fontSize: 12 }}>This field is required</span>
            )}
            <div className="modal-btn">
              <button className="btn__cancel" onClick={() => cancelHandler()}>Cancel</button>
              <button className="btn__save" onClick={() => saveHandler()} >Save</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
export default ModalPM