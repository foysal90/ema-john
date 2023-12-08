
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Product = (props) => {
 

  
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { name, category, price, ratings, seller, img, quantity } = props.product;
  
  // eslint-disable-next-line react/prop-types
  const handleAddToCart = props.handleAddToCart;
  // const handleRemoveCart =props.handleRemoveCart;
 
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3> {name} </h3>
        <h4> {category}</h4>

        <h4>Seller : {seller}</h4>
        <h4> Rating : {ratings}</h4>
        <h4> Price : ${price}</h4>
      </div>

      <button
        onClick={() => {
          // eslint-disable-next-line react/prop-types
          handleAddToCart(props.product);
        }}
        className="btn-cart"
      >
        Add To Cart
        <FontAwesomeIcon className="icon" icon={faShoppingCart} />
      </button>
     
      {/* <button
        onClick={() => {
          handleRemoveCart(props.product);
        }}
        className="btn-cart"
      >
        Remove
        
      </button> */}

      
     
    </div>
    
  );
};

export default Product;
