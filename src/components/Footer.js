import React from 'react';

import Logo from '../images/logo.png';
import Stripe from '../images/stripe.png';
import Shopify from '../images/shopify.png';
import AES256 from '../images/AES256.png';
import Paypal from '../images/paypal.png';
import Visa from '../images/visa.png';
import Mastercard from '../images/mastercard.png';
import Discover from '../images/discover.png';
import AmericanExp from '../images/american-express.png';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container py-2'>
        <div className='copyright'>
          <img src={Logo} alt='logo' />
          <span className='lead'>&copy; Wokiee 2020. All Rights Reserved</span>
        </div>
        <div className='payments'>
          <ul>
            <li>
              <img src={Stripe} alt='stripe' />
            </li>
            <li>
              <img src={Shopify} alt='shopify' />
            </li>
            <li>
              <img src={AES256} alt='aes' />
            </li>
            <li>
              <img src={Paypal} alt='paypal' />
            </li>
            <li>
              <img src={Visa} alt='visa' />
            </li>
            <li>
              <img src={Mastercard} alt='mastercard' />
            </li>
            <li>
              <img src={Discover} alt='discover' />
            </li>
            <li>
              <img src={AmericanExp} alt='american-express' />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
