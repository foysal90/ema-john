// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../../../images/Logo.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../providers/AuthProviders";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();

  const { logOut, user } = useContext(AuthContext);

  const handleSingedOut = () => {
    logOut().then(() => {
      toast.success("logged Out");
      navigate('/')
    });
  };
  // const inputSearch = (e) => {
  //   setSearch(e.target.value);
  // };
  return (
    <div className="navbar bg-indigo-400  z-10 ">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      {/* <input
        type="search"
        value={search}
        onChange={inputSearch}
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
      /> */}

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link Link to="/shop">
              shop
            </Link>
          </li>
          <li>
            <Link to="/inventory">inventory</Link>
          </li>
          <li>{user && <Link to="/checkout">Check Out</Link>}</li>

          <li>
            <details>
              <summary>
                {
                  user ?
                   <div>
                    <p> {user.displayName} </p> <img className="w-10 h-10 rounded-full mx-auto" src={user.photoURL} alt="loading" />
                    
                    
                   

                  </div>
                  
                  
                  
                  : <p>Welcome</p>
                  //  <img className="w-10 rounded-full" src={user.photoUrl}  alt="loading" />
                }
              </summary>
              <ul className="px-5 bg-indigo-700 absolute right-0 z-10 text-white font-semibold top-7">
                <li>
                  {user && user.email}
                  {/* <Link>profile</Link> */}
                  {/* <img className="w-10 rounded-full" src={faUserCircle} alt="loading" /> */}
                </li>
                <li>
                  {user ? (
                    <button  onClick={handleSingedOut}>Sign out</button>
                  ) : (
                    <>
                    <Link to="/signIn">Login</Link>
                    <Link to="/register" >Register</Link>
                    </>
                  )}
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to={"/order"}>
              <FontAwesomeIcon className="w-8 h-8" icon={faShoppingCart} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
