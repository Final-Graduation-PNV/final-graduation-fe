import "../../styles/Profile/Profile.scss";

import { faClose, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { seeProfile } from "../../api/authAPI";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";

function Profile() {
  const [inforProfile, setInforProfile] = useState([]);

  const navigate = useNavigate()
  useEffect(() => {
    const getUserProfile = async () => {
      const res = await seeProfile();
      console.log(res.data.user)
      setInforProfile(res.data.user)
    }
    getUserProfile()
  }, [])
  console.log("infor profile: ", inforProfile)

  return (
    <>
      <Header />
      <div className="container-Profile">
        <div className="container-profile">
          <p className="profile__tittle">My Setting</p>
          <div className="profile">
            <div className="profile-text">
              <p className="profile-text__title">My profile</p>
              <FontAwesomeIcon className="faClose" icon={faClose} onClick={() => navigate("/")} />
            </div>
            <div className="profile-info">
              <div className="profile-account">
                <div className="profile-info__img">
                  <img src={inforProfile.avatar} style={{ width: 100, height: 100, borderRadius: 50 }} alt="Account image" />
                </div>
                <div className="profile-info-text" >
                  <p className="profile-info-text__name">{inforProfile.name}</p>
                  <Link to={{ pathname: "/EditProfile" }}><p className="profile-info-text__edit"><FontAwesomeIcon className="faEdit" icon={faPen} />Edit Profile</p></Link>
                </div>
              </div>
              <div className="profile-form">
                <div className="pprofile-location">
                  <p className="profile-location__title">Date of birth:</p>
                  <input className="infor-text-birth__input" type="date" defaultValue={inforProfile.birth} />
                </div>
                <div className="profile-location">
                  <p className="profile-location__title">City: </p>
                  <input className="profile-location__text" defaultValue={inforProfile.city} />
                </div>
                <div className="profile-location">
                  <p className="profile-location__title">Address: </p>
                  <input className="profile-location__text" defaultValue={inforProfile.city} />
                </div>
                <div className="profile-gener">
                  <div className="profile-phone">
                    <p className="profile-phone__title">Phone:</p>
                    <input className="profile-phone__text" defaultValue={inforProfile.phone} />
                  </div>
                  <div className="profile-gender">
                    <p className="profile-gender__title">Gender:</p>
                    <select id="profile-gender_id" className="profile-gender_name">
                      <option value="Male">{inforProfile.gender}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )

}
export default Profile