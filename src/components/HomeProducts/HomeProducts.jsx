import React, { useEffect, useState } from "react";
import HomeProduct from "./HomeProduct";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Welcome to Ema-John, To have exiting and awesome products please click on Get Started Button
          </p>
         <Link to='/shop'> <button className="btn btn-primary">Get Started</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
