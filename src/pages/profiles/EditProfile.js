import { faClose, faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Profile/EditProfile.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import account from "../../assets/Image/account.png";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";

function EditProfile() {
  return (
    <>
      <Header />
      <div className="container-EditProfile">
        <div className="container-Editprofile">
          <p className="editProfile__tittle">Account Setting</p>
          <div className="editProfile">
            <div className="editProfile-text">
              <p className="editProfile-text__title">Edit profile</p>
              <FontAwesomeIcon className="faClose" icon={faClose} />
            </div>
            <div className="editProfile-info">
              <div className="editProfile-account">
                <div className="editProfile-info__img">
                  <img src={account} style={{ width: 100, height: 100 }} alt="product image" />
                </div>
                <div className="editProfile-info-text">
                  <p className="editProfile-info-text__name">Ngô Thị Tròn</p>
                  <p className="editProfile-info-text__edit"><FontAwesomeIcon className="faEdit" icon={faFileArrowUp} />Upload new profile</p>
                </div>
              </div>
              <div className="editProfile-form">
                <div className="editProfile-location">
                  <p className="editProfile-location__title">Location</p>
                  <input className="editProfile-location__text" value="101B - Le Huu Trac" />
                </div>
                <div className="editProfile-gener">
                  <div className="editProfile-phone">
                    <p className="editProfile-phone__title">Phone</p>
                    <input className="editProfile-phone__text" value="0123456789" />
                  </div>
                  <div className="editProfile-gender">
                    <p className="editProfile-gender__title">Gender</p>
                    <select id="editProfile-gender_id" className="editProfile-gender_name">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>

              </div>
              <div className="btn-edit">
                <div className="btn-edit btn-edit__cancel">Cancel</div>
                <div className="btn-edit btn-edit__save">Save</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>


  )

}
export default EditProfile