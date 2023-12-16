import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utility/fakedb";
import "./Order.css";

const Order = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  const handleDeleteBtn = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleClearCart = ()=> {
    setCart([]);
    deleteShoppingCart();
   
  }

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleDeleteBtn={handleDeleteBtn}
          />
        ))}
      </div>

      <div className="cart-container">
        <Cart 
        cart={cart} 
        handleClearCart={handleClearCart}
        />
      </div>
    </div>
  );
};

export default Order;
