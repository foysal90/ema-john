// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState([])
//   cart.push()

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart =[...cart,product];
    setCart(newCart);
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map(product => 
          <Product product={product} key={product.id}
          handleAddToCart={handleAddToCart}
          
          />
        )}
      </div>

      <div className="cart-container">
        <h1> Order Summary</h1>
        <p>Selected Items : {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
