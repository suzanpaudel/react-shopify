import React from 'react';
import Logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <div className='container'>
        <a href='#' className='logo'>
          <img src={Logo} alt='logo' />
        </a>
        <ul className='nav-links'>
          <li>
            <a href='#' className='active'>
              Home
            </a>
          </li>
          <li>
            <a href='#' id='shop'>
              Shop
            </a>
          </li>
          <li>
            <a href='#' id='pages'>
              Pages
            </a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Portfolio</a>
          </li>
          <li>
            <a href='#'>Women</a>
          </li>
          <li>
            <a href='#'>Men</a>
          </li>
          <li>
            <a href='#'>Buy Theme!</a>
          </li>
        </ul>
        <ul className='user-icons'>
          <li>
            <i className='fas fa-search'></i>
          </li>
          <li>
            <i className='fas fa-shopping-bag'></i>
          </li>
          <li>
            <i className='far fa-user'></i>
          </li>
          <li>
            <i className='fas fa-sliders-h'></i>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
