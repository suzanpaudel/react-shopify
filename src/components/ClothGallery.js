import React from 'react';
import Cloth1 from '../images/1.jpg';
import Cloth2 from '../images/2.jpg';
import Cloth3 from '../images/3.jpg';
import Cloth4 from '../images/4.jpg';
import Cloth5 from '../images/5.jpg';
import Cloth6 from '../images/6.jpg';

const ClothGallery = () => {
  return (
    <section id='img-gallery'>
      <div className='section-heading py-3'>
        <h3>
          <span className='text-primary'>@ Follow</span> Us On
        </h3>
        <h5>Instagram</h5>
      </div>

      <div className='cloth-gallery'>
        <figure className='cloth-item'>
          <img src={Cloth1} alt='' />
        </figure>
        <figure className='cloth-item'>
          <img src={Cloth2} alt='' />
        </figure>
        <figure className='cloth-item'>
          <img src={Cloth3} alt='' />
        </figure>
        <figure className='cloth-item'>
          <img src={Cloth4} alt='' />
        </figure>
        <figure className='cloth-item'>
          <img src={Cloth5} alt='' />
        </figure>
        <figure className='cloth-item'>
          <img src={Cloth6} alt='' />
        </figure>
      </div>
    </section>
  );
};

export default ClothGallery;
