import React from 'react';
import LandingImg from '../images/home.png';

const MainHeader = () => {
  return (
    <div class='slideshow-container'>
      <div class='mySlides fade'>
        <img src={LandingImg} style={{ width: '100%' }} />
        <div class='showcase-content'>
          <h2>Multipurpose</h2>
          <h1>Premium</h1>
          <h1>Shopify Theme</h1>
          <p>30 skins, powerful features, get support, exculsive offer</p>
          <a href='#' class='btn'>
            Shop Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
