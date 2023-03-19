import "../../styles/Modal/ChangePs.scss";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";

import map from "../../assets/Image/map.png";

function ChangePs({ closeModal, handleResult }) {
  const [city, setCity] = useState("");
  const token = localStorage.getItem("token");
  const productName = localStorage.getItem("selectedProduct")
  console.log("handle result: ", handleResult)
  const handleSearch = () => {
    axios.get(`http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/user/products/search/city-cate?category=${productName}&city=${city}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => {
        closeModal(false);
        handleResult(res.data.products);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="modalBackground-changePs">
      <div className="modalContainer-changePs">
        <div className="modal-icon-changePs">
          <FontAwesomeIcon icon={faClose} onClick={() => closeModal(false)} />
        </div>
        <div className="changePs-text">
          <p className="changePs-text__tittle">Change position </p>
          <div className="changePs-option">
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="Da Nang">Da Nang</option>
              <option value="Ho Chi Minh">Ho Chi Minh</option>
              <option value="Quang Tri">Quang Tri</option>
              <option value="Quang Nam">Quang Nam</option>
              <option value="Quang Ngai">Quang Ngai</option>
              <option value="Ha Noi">Ha Noi</option>
            </select>
          </div>
          <div className="changePs__img">
            <img src={map} />
          </div>
          <div className="changePs-btn">
            <button className="changePs-btn__search" onClick={handleSearch}>Search</button>
          </div>
          {/* //  <button className="btn__checkEmail" onClick={() => closeModal(false)}><Link className="checkEmail" to="/Sin">Check your email</Link></button> */}
        </div>
      </div>
    </div>
  )
}
export default ChangePs