import React from "react";
import "../HomeCss/HomeProducts.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HomeProduct = (props) => {
  console.log(props);
  const { title, price, image, category } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="homeProduct">
      <img src={image} alt="" />
      <div>
        <h4>{category}</h4>
        <h2>{title} </h2>
        <p>price : ${price}</p>
      </div>

      <button
        onClick={() => {
          // eslint-disable-next-line react/prop-types
          handleAddToCart(props.product);
        }}
        className=""
      >
        Add To Cart
        <FontAwesomeIcon className="icon" icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default HomeProduct;
