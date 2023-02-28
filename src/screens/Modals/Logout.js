import { faClose, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import account from "../../assets/Image/account.png";
import "../../styles/Modal/Logout.scss";

function Logout({ closeModal }) {
  const navigate = useNavigate();
  const URLLogout = "http://ec2-54-193-79-196.us-west-1.compute.amazonaws.com/api/logout";
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    axios.post(`${URLLogout}`, {}, {
      headers: { 'Authorization': `Bearer ${token}` }
    }).then((response) => {
      alert(response.data.message);
      navigate("/Sin")
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      localStorage.removeItem("shopOnwer")
      localStorage.removeItem("user_id")
    }).catch((error) => {
      console.error('Error logging out user:', error);
    });
  }

  return (
    <div className="modalBackground-logout">
      <div className="modalContainer-logout">
        <div className="modal-icon-changePs">
          <FontAwesomeIcon icon={faClose} onClick={() => closeModal(false)} />
        </div>
        <div className="logout__account-gernal">
          <div className="logout-account">
            <img className="logout__img" src={account} />
            <p className="logout__name">{user} </p>
          </div>
          <Link to="profile"><p className="logout-profile">See all profiles</p></Link>
        </div>
        <div className="logout-icon">
          <p className="logout-icon__user"><FontAwesomeIcon className="faRightFromBracket" icon={faRightFromBracket} /></p>
          <p className="logout-icon__name" onClick={handleLogout}>Log out</p>
        </div>
      </div>
    </div>
  )
}
export default Logout