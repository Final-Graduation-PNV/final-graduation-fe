import { faEdit } from "@fortawesome/fontawesome-free-regular";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import account from "../../assets/Image/account.png";
import "../../styles/Profile.scss";
function Profile() {
  return (
    <div className="container">
      <div className="container-profile">
        <p className="profile__tittle">Account Setting</p>
        <div className="profile">
          <div className="profile-text">
            <p className="profile-text__title">My profile</p>
            <FontAwesomeIcon className="faClose" icon={faClose} />
          </div>
          <div className="profile-info">
            <div className="profile-account">
              <div className="profile-info__img">
                <img src={account} style={{ width: 100, height: 100 }} />
              </div>
              <div className="profile-info-text">
                <p className="profile-info-text__name">Ngô Thị Tròn</p>
                <p className="profile-info-text__edit"><FontAwesomeIcon className="faEdit" icon={faEdit} />Edit profile</p>
              </div>
            </div>
            <div className="profile-form">
              <div className="profile-location">
                <p className="profile-location__title">Location</p>
                <input className="profile-location__text" placeholder="101B - Le Huu Trac" />
              </div>
              <div className="profile-gener">
                <div className="profile-phone">
                  <p className="profile-phone__title">Phone</p>
                  <input className="profile-phone__text" placeholder="0123456789" />
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
            <div className="btn">
              <div className="btn btn__cancel">Cancel</div>
              <div className="btn btn__save">Save</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Profile