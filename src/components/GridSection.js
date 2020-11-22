import React from 'react';
import Cloth1 from '../images/1.jpg';
import Cloth2 from '../images/2.jpg';
import Cloth3 from '../images/3.jpg';
import Cloth4 from '../images/4.jpg';
import Cloth5 from '../images/5.jpg';
import Cloth6 from '../images/6.jpg';

const GridSection = () => {
  return (
    <section id='categories'>
      <div className='img-categories'>
        <figure className='categories-item sale'>
          <img src={Cloth1} alt='' className='item-img' />
          <button className='categories-btn'>Sale</button>
        </figure>
        <figure className='categories-item women'>
          <img src={Cloth5} alt='' className='item-img' />
          <button className='categories-btn'>Women</button>
        </figure>
        <figure className='categories-item male'>
          <img src={Cloth2} alt='' className='item-img' />
          <button className='categories-btn'>Male</button>
        </figure>
        <figure className='categories-item accessories'>
          <img src={Cloth3} alt='' className='item-img' />
          <button className='categories-btn'>Accessories</button>
        </figure>
        <figure className='categories-item new'>
          <img src={Cloth4} alt='' className='item-img' />
          <button className='categories-btn'>New</button>
        </figure>
        <figure className='categories-item shoes'>
          <img src={Cloth6} alt='' className='item-img' />
          <button className='categories-btn'>Shoes</button>
        </figure>
      </div>
    </section>
  );
};

export default GridSection;
