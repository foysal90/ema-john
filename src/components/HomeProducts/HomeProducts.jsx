import React, { useEffect, useState } from 'react';
import HomeProduct from './HomeProduct';

const HomeProducts = () => {
    const [ pro, setPro ]= useState([]);
    

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setPro(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
    return (
        <div className='homeProducts'>
            
        { pro.map((product) => (
          <HomeProduct
            product={product}
            key={product.id}
          />
        ))}
           
            
        </div>
    );
};

export default HomeProducts;