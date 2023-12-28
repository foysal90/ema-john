import React from "react";


import HomeProducts from "../HomeProducts/HomeProducts";
import Shop from "../Shop/Shop";


const Home = () => {
  
 

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-96">
          <img
            src="https://www.oberlo.com/media/1603958036-new-products.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-96">
          <img
            src="https://professionalproductphotography.com/wp-content/uploads/2021/11/professional-product-photography-simple-gallery-1024x512.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-96">
          <img
            src="https://intelligynce.com/wp-content/uploads/2019/06/ecommerce-niche-product-selection-1024x529.png"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-96">
          <img
            src="https://previews.123rf.com/images/belchonock/belchonock1301/belchonock130103857/17291499-a-lot-of-different-cosmetic-products-for-personal-care-isolated-on-white.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br />

     

      <div>
        <HomeProducts/>
      </div>
    </div>
  );
};

export default Home;
