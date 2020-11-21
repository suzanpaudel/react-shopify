import React from 'react';

const NewsLetter = () => {
  return (
    <section id='newsletter'>
      <div className='container py-1'>
        <h5>Be in touch with us:</h5>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Enter your e-mail'
            className='form-field'
          />
          <span>Join Us</span>
        </div>
        <ul className='social-icons'>
          <li>
            <a href='#'>
              <i className='fab fa-facebook-f'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fab fa-google'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fab fa-instagram'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fab fa-pinterest'></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NewsLetter;
