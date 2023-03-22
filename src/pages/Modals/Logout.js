import "../../styles/Modal/Logout.scss";

import { faClose, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ls from 'localstorage-slim';
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import profile from "../../assets/Image/profile.png";
import { setLoggedIn } from "../../redux/slices/authSlice";
import { getImageUser, getUserName, removeShopOnwer, removeToken, removeUserId, removeUserName } from "../../utils/localStorageUtils";

function Logout({ closeModal }) {
  const dispatch = useDispatch()

  const handleLogout = () => {
    removeToken()
    removeUserName()
    removeShopOnwer()
    removeUserId()
    ls.remove("data", { encrypt: true });
    ls.remove("note", { encrypt: true });
    ls.remove("address", { encrypt: true });
    ls.remove("city", { encrypt: true });
    ls.remove("phone", { encrypt: true });
    localStorage.removeItem("checked")
    localStorage.removeItem("imgUser")
    localStorage.removeItem("idUser")
    localStorage.removeItem("selectedProduct")
    dispatch(setLoggedIn(false))
  }

  return (
    <div className="modalBackground-logout">
      <div className="modalContainer-logout">
        <div className="modal-icon-changePs">
          <FontAwesomeIcon icon={faClose} onClick={() => closeModal(false)} />
        </div>
        <div className="logout__account-gernal">
          <div className="logout-account">
            <img className="logout__img" src={getImageUser() == null ? profile : getImageUser()} alt="" />
            <p className="logout__name">{getUserName("user")} </p>
          </div>
          <Link to="/EditProfile"><p className="logout-profile">See all profiles</p></Link>
          <Link to="profile"><p className="logout-profile">View my order </p></Link>
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