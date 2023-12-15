import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const CartProduct = () => {
  const cart = useLoaderData()
    return (
        <div className='shop-container'>
        <div className="products-container">
         <h1>view Cart</h1>
       </div>
 
       <div className="cart-container">
         <Cart cart={cart}/>
       </div>
 
     </div>
    );
};

export default CartProduct;