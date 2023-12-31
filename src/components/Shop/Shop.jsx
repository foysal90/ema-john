// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utility/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);


  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //getting data from database
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
      // console.log("added", addedProduct);
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    //if u use this code then comments if else statement cart component
    // let newCart = [];
    // const exsits = cart.find(pd => pd.id === product.id);
    // if(!exists){
    //   product.quantity =1;
    //   newCart = [...cart, product];
    // }
    // else{
    //   exsits.quantity = exsits.quantity + 1;
    //   const remaining = cart.filter(pd => pd.id !== product.id);
    //   newCart = [...remaining, exsits];
    // }
    const newCart = [...cart, product];

    setCart(newCart);
    addToDb(product.id);
  };
  const handleClearCart = () => {
    setCart([]);

    deleteShoppingCart();
  };


  return (
    <div className="shop-container">
   
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
            // handleRemoveCart={handleRemoveCart}
          />
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to={"/order"}>
            <button className="check-out">
              Review Order
              <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
