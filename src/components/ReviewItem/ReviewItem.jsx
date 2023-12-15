import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product }) => {
  const { name, quantity, price, img, shipping } = product;
  return (
    <div className="review">
      <img src={img} alt="" />
    
    <div className="review-details">
        <p className="review-title">Name :{name}</p>
        <p>Quantity : {quantity}</p>
        <p>Shipping Charge: ${shipping}</p>
        <p>Price : ${price}</p>
        
       
      </div>
      
        <button className="btn-delete">

        <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
        </button>
      
   
    </div>
  );
};

export default ReviewItem;
