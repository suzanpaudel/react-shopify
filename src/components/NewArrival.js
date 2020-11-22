import React from 'react';
import NewArrivalItem from './NewArrivalItem';

const NewArrival = () => {
  return (
    <section id='arrivals'>
      <div className='arrivals-showcase'>
        <NewArrivalItem />
        <NewArrivalItem />
        <NewArrivalItem />
      </div>
    </section>
  );
};

export default NewArrival;
