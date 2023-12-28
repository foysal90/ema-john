// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import "./Header.css";
import logo from "../../../images/Logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../providers/AuthProviders";
import toast from "react-hot-toast";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleSingedOut = () => {
    logOut().then(() => {
      toast.success("logged Out");
    });
  };
  return (
    <div className="navbar bg-indigo-400 fixed top-0 z-10 mr-20">
      <div className="flex-1">
      <Link to={'/'}className="btn btn-ghost text-xl" >
          <img src={logo} alt="" /></Link>
     
      </div>
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
          <li>
            <Link to={"/order"}>
              <FontAwesomeIcon className="w-8 h-8" icon={faShoppingCart} />
            </Link>
          </li>
          
          <li>
            <details >
              <summary>
                {
                  user && user.email
                  //  <img className="w-10 rounded-full" src={user.photoUrl}  alt="loading" />
                
              }
              </summary>
              <ul className=" bg-indigo-700 absolute right-0 text-white font-semibold top-7" >
                <li >
                  <Link>profile</Link>
                  {/* <img className="w-10 rounded-full" src={faUserCircle} alt="loading" /> */}
                </li>
                <li className="">
                 {
                  user ?
                    <button onClick={handleSingedOut}>Sign Out</button>
                  
                  :
                  <Link to="/signIn">Login</Link>
                 }
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
    //     <div className="navbar bg-indigo-500">
    //   <div className="flex-1">
    //   <Link to={'/'}className="btn btn-ghost text-xl" >
    //      <img src={logo} alt="" /></Link>

    //   </div>
    //   <div className="flex mr-8">
    //     <div className="flex items-center justify-around ">
    //     <Link Link to="/shop">
    //            shop
    //          </Link>
    //       <div >
    //       <Link to={'/order'}>
    //         <FontAwesomeIcon className="w-8 h-8" icon={faShoppingCart} />
    //            </Link>
    //       </div>

    //     </div>
    //     <div className="dropdown dropdown-end">
    //       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    //       {
    //           user?
    //         <>
    //          <p>Welcome, {user.email}</p>
    //          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    //          <li>
    //            <Link
    //            className="justify-between">
    //              Profile
    //              <span className="badge">New</span>
    //            </Link >
    //          </li>
    //          <li><Link>Settings</Link></li>

    //          <li>  <button onClick={handleSingedOut}>Sign Out</button></li>
    //        </ul>
    //         </>

    //           :
    //            <Link to="/signIn"> Login </Link>
    //          }

    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <nav className="header text-white">
    //  <Link to={'/'}>
    //  <img src={logo} alt="" /></Link>
    //   <div className="">
    //     <Link Link to="/shop">
    //       shop
    //     </Link>

    //     {/* <Link Link to="/order">
    //       order
    //     </Link> */}
    //     <Link to="/inventory">inventory</Link>

    //   {
    //       user? <>
    //       <p>Welcome, {user.email}</p>
    //       <button onClick={handleSingedOut}>Sign Out</button>
    //       </>
    //       :
    //       <Link to="/signIn"> Login </Link>
    //     }

    //     <Link to={'/order'}>
    //     <FontAwesomeIcon className="w-8 h-8" icon={faShoppingCart} />
    //       </Link>
    //   </div>

    // </nav>
  );
};

export default Header;
