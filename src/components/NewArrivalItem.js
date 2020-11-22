import React from 'react';
import Dress1 from '../images/dress1.jpg';

const NewArrivalItem = () => {
  return (
    <figure className='arrivals-item'>
      <img src={Dress1} alt='' />
      <div className='card'>
        <h5>
          Autumn <span className='text-primary'>2019</span>
        </h5>
        <h3>New Arrivals</h3>
      </div>
    </figure>
  );
};

export default NewArrivalItem;
