// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const Cart = ({ cart }) => {
  let total = 0;
  let totalShipping = 0;

  for (const product of cart) {
    // eslint-disable-next-line no-const-assign
    total = total + product.price;
    totalShipping += product.shipping;
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + totalShipping + tax;
  // const {cart} = props;
  return (
    <div className="cart">
      <h1> Order Summary</h1>

      <p>Selected Items : {cart.length}</p>
      <p>Total Price : ${total.toFixed(2)}</p>
      <p>Totaal Shipping: ${totalShipping.toFixed(2)} </p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <h5>Grand Total :$ {grandTotal.toFixed(2)}</h5>
      <button className="check-out">
        Check out
        <FontAwesomeIcon className="icon" icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Cart;
