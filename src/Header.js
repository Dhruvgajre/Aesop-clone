import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header__navBar">
      <div className="navbar__Container">
        <div className="navbar__Option">Skin Care</div>
        <div className="navbar__Option">Body & Hand</div>
        <div className="navbar__Option">Hair</div>
        <div className="navbar__Option">Fragrance</div>
        <div className="navbar__Option">Home</div>
        <div className="navbar__Option">Kits & Travel</div>
        <div className="navbar__Option">Gifts</div>
        <div className="navbar__Option">Read</div>
        <div className="navbar__Option">Stores</div>

        <SearchIcon className="searchIcon" />
        <div className="navbar__Option2">Cart</div>
        <div className="navbar__Option2">Login</div>
      </div>
    </div>
  );
}

export default Header;
