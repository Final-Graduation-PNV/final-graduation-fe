import React from "react";

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo"><img className="header__logo__image"src="/image/logo.png" alt=""/></div>
            <div className="header__search">
                <input className="header__search__input" placeholder="Search your products"></input>
            </div>
            <div className="header__avata">
                <img className="header__avata__avata-img" src="/image/avata.png" alt=""/>
            </div>
        </div>
    );
}
