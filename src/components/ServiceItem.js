import React from 'react';

const ServiceItem = (props) => {
  const iconClassName = `fas ${props.iconName} fa-3x`;
  return (
    <div className='service'>
      <i className={iconClassName}></i>
      <div>
        <h5>{props.serviceTitle}</h5>
        <p>{props.serviceDesc}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
