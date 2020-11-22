import React from 'react';
import Image1 from '../images/1.jpg';
const TrendingItem = () => {
  return (
    <div className='product1'>
      <img className='trending-clothes-img' src={Image1} alt='' />
      <div className='details'>
        <p className='product-type'>ANALOG</p>
        <div className='rating'>
          <ul className='rating-stars'>
            <li className='fa fa-star'></li>
            <li className='fa fa-star'></li>
            <li className='fa fa-star'></li>
            <li className='fa fa-star'></li>
            <li className='fa fa-star'></li>
          </ul>
        </div>
        <p className='product-title'>A Normal T-shirt</p>
        <p className='product-price'>$190.00</p>
        <button className='add-to-cart-btn'>
          <i className='fa fa-shopping-bag'></i> ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default TrendingItem;
