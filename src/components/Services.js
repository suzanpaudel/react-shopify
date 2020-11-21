import React from 'react';
import ServiceItem from './ServiceItem';
const Services = () => {
  return (
    <section id='services'>
      <div className='container py-4'>
        <ServiceItem
          iconName='fa-headset'
          serviceTitle='Support 24/7'
          serviceDesc='Contact us 24 hours a day, 7 days a week'
        />
        <ServiceItem
          iconName='fa-reply'
          serviceTitle='30 days return'
          serviceDesc='Simply return it within 24 days for an exchange'
        />
        <ServiceItem
          iconName='fa-shipping-fast'
          serviceTitle='Free Shipping'
          serviceDesc='Free shipping on all US order or order above $99'
        />
      </div>
    </section>
  );
};

export default Services;
