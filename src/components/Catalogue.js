import React from 'react';
import Dress1 from '../images/dress1.jpg';
const Catalogue = () => {
  return (
    <div className='latest-cloth-item'>
      <img src={Dress1} />
      <div className='card'>
        <ul>
          <li>ladies</li>
          <li>shopify</li>
          <li>wokiee</li>
        </ul>
        <h4>catalogue mode</h4>
        <p>
          It is a long established fact that by the readable content of a page
          when looking at its layout.
        </p>
        <div className='card-footer'>
          <p>by Diego Lopez on June 21, 2018</p>
          <p className='comment'>
            <i className='far fa-comment'></i> 14
          </p>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
