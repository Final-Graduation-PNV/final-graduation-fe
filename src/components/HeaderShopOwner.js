import React from "react";

export default function HeaderShopOwner() {
    return (
        <div className="header-shopOwner">
            <div className="header-shopOwner__logo"><img className="header-shopOwner__logo__image"src="/image/logo.png" alt=""/></div>
            <div className="header-shopOwner__search">
                <input className="header-shopOwner__search__input" placeholder="Search your products"></input>
            </div>
            <div className="header-shopOwner__avata">
                <img className="header-shopOwner__avata__avata-img" src="/image/avata.png" alt=""/>
            </div>
        </div>
    );
}
