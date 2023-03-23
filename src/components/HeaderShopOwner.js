import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearch} from "@fortawesome/free-solid-svg-icons";
import { getImageUser } from "../utils/localStorageUtils";

export default function HeaderShopOwner() {
    return (
        <div className="header-shopOwner">
            <div className="header-shopOwner__logo"><img className="header-shopOwner__logo__image" src="/image/logo.png" alt=""/></div>
            <div className="header-shopOwner__search">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" className="header-shopOwner__search__input" placeholder="Search your products"></input>
            </div>
            <div className="header-shopOwner__avata">
                <img className="header-shopOwner__avata__avata-img" src={getImageUser() == null ? "/image/avata.png" : getImageUser()} alt=""/>
            </div>
        </div>
    );
}
