// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Cart = ({ cart, handleClearCart }) => {
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;

  for (const product of cart) {
    product.quantity = product.quantity || 1;
    total += product.price * product.quantity;
    totalShipping += product.shipping;
    quantity += product.quantity;
  }

  const tax = (total * 7) / 100;
  const grandTotal = total + totalShipping + tax;

  return (
    <div className="cart">
      <h1> Order Summary</h1>

      <p>Selected Items: {cart.length}</p>
      <p> Total Quantity: {quantity}</p>
      {/* Display product names and images */}
      {cart.map((product) => (
        <div key={product.id}>
          {/* <p>Name: {product.name}</p>
          <p>Quantity: {product.quantity}</p> */}
          {/* <img className="pimg" src={product.img} alt={product.name} /> */}
        </div>
      ))}
      <p>Total Price: ${total.toFixed(2)}</p>
      <p>Total Shipping: ${totalShipping.toFixed(2)} </p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h2>Grand Total: $ {grandTotal.toFixed(2)}</h2>

      <button onClick={handleClearCart} className="clear-cart">
       <span>  Clear Cart </span>
        <FontAwesomeIcon className="icon" icon={faTrashAlt} />
      </button>
      <Link to={'/order'}>
      <button className="check-out">
        Review Order
        <FontAwesomeIcon className="icon" icon={faArrowRight} />
      </button>
      </Link>
    </div>
  );
};

export default Cart;
