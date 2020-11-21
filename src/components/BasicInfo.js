import React from 'react';

const BasicInfo = () => {
  return (
    <section id='basic-info'>
      <div className='container py-4'>
        <div className='info-box'>
          <h5>Categories</h5>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Accessories</li>
            <li>Shoes</li>
            <li>New Arrivals</li>
            <li>Clearence</li>
          </ul>
        </div>
        <div className='info-box'>
          <h5>Buy with us</h5>
          <ul>
            <li>About us</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className='info-box'>
          <h5>About</h5>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat tempor incididunt.
          </p>
        </div>
        <div className='info-box'>
          <h5>Contact Us</h5>
          <ul>
            <li>
              <span className='contact-title'>Address:</span> 7895 Piermont Dr
              NE Albuquerque, NM 198866, United States of America
            </li>
            <li>
              <span className='contact-title'>Phone:</span> +566 4774 9930; +566
              4774 9940
            </li>
            <li>
              <span className='contact-title'>Hours:</span> all week from 9 am
              to 9 pm
            </li>
            <li>
              <span className='contact-title'>E-mail: </span>
              <a href='mailto: info@mydomain.com'>info@mydomain.com</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BasicInfo;
