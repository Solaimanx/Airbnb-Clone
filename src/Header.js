import React from "react";
import "./Header.css";
import logo from "./assets/airbnb_logo.png"
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="header">
      <img className="header__icon" src={logo} alt="logo"/>
      <div className="header__center">
        <input type="text" />
       <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
      </div>
    </div>
  );
}

export default Header;
