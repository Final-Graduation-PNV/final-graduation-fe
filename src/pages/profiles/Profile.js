import "../../styles/Profile/Profile.scss";

import { faClose, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import account from "../../assets/Image/account.png";
import Header from "../../layout/header/Header";

function Profile() {
  return (
    <>
      <Header />
      <div className="container-Profile">
        <div className="container-profile">
          <p className="profile__tittle">My Setting</p>
          <div className="profile">
            <div className="profile-text">
              <p className="profile-text__title">My profile</p>
              <FontAwesomeIcon className="faClose" icon={faClose} />
            </div>
            <div className="profile-info">
              <div className="profile-account">
                <div className="profile-info__img">
                  <img src={account} style={{ width: 100, height: 100, borderRadius: 50 }} alt="Account image"/>
                </div>
                <div className="profile-info-text">
                  <p className="profile-info-text__name">Ngô Thị Tròn</p>
                  <Link to="/EditProfile"><p className="profile-info-text__edit"><FontAwesomeIcon className="faEdit" icon={faPen} />Edit Profile</p></Link>
                </div>
              </div>
              <div className="profile-form">
                <div className="profile-location">
                  <p className="profile-location__title">Location</p>
                  <input className="profile-location__text" value="101B - Le Huu Trac" />
                </div>
                <div className="profile-gener">
                  <div className="profile-phone">
                    <p className="profile-phone__title">Phone</p>
                    <input className="profile-phone__text" value="0123456789" />
                  </div>
                  <div className="profile-gender">
                    <p className="profile-gender__title">Gender</p>
                    <select id="profile-gender_id" className="profile-gender_name">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )

}
export default Profile