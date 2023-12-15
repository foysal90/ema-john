// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import logo from "../../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
     <Link to={'/'}>
     <img src={logo} alt="" /></Link>
      <div className="">
        <Link Link to="/shop">
          shop
        </Link>
        <Link Link to="/order">
          order
        </Link>
        <Link to="/inventory">inventory</Link>
        <Link to="/signIn"> Login </Link>
        <Link to={'/cart'}>Cart</Link>
      </div>
    </nav>
  );
};

export default Header;
