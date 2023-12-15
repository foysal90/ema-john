/* eslint-disable react/prop-types */
// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import "./Cart.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// // eslint-disable-next-line react/prop-types
// const Cart = ({ cart }) => {
//     // const {cart} = props;
//   let total = 0;
//   let totalShipping = 0;
//   let quantity = 0;
// //   let name =[];

//   for (const product of cart) {

//     // if(quantity.product === 0){
//     //     product.quantity = 1;
//     // }
//     product.quantity = product.quantity || 1;
//     total = total + product.price * product.quantity;
//     totalShipping += product.shipping;
//     quantity+= product.quantity;
//     // name = name + product.name;

//   }
//   const tax = (total * 7) / 100;
//   const grandTotal = total + totalShipping + tax;

//   return (
//     <div className="cart">
//       <h1> Order Summary</h1>

//       <p>Selected Items : {cart.length}</p>
//       <p> Quantity : {quantity}</p>
//       {/* <p>Name : {name}</p> */}
//       <p>Total Price : ${total.toFixed(2)}</p>
//       {/* <h5>Quantity : {quantity}</h5> */}
//       <p>Totaal Shipping: ${totalShipping.toFixed(2)} </p>
//       <p>Tax : ${tax.toFixed(2)}</p>
//       <h2>Grand Total :$ {grandTotal.toFixed(2)}</h2>

//      <button className="check-out" >
//         Check out
//         <FontAwesomeIcon className="icon" icon={faArrowRight} />
//       </button>

//     </div>
//   );
// };

// export default Cart;

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const Cart = ({ cart }) => {
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
          <p>Name: {product.name}</p>
          <p>Quantity: {product.quantity}</p>
          {/* <img className="pimg" src={product.img} alt={product.name} /> */}
        </div>
      ))}
      <p>Total Price: ${total.toFixed(2)}</p>
      <p>Total Shipping: ${totalShipping.toFixed(2)} </p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h2>Grand Total: $ {grandTotal.toFixed(2)}</h2>

      <button className="check-out">
        Check out
        <FontAwesomeIcon className="icon" icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Cart;
