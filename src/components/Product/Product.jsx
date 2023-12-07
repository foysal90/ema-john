// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Product.css";

const Product = (props) => {
 

  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { name, category, price, ratings, seller, img, quantity } =
    // eslint-disable-next-line react/prop-types
    props.product;
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
      <button className="btn-cart">Add To Cart</button>
    </div>

    
    

  
  );
};

export default Product;
