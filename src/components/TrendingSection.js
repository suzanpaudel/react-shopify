import React from 'react';
import TrendingItem from './TrendingItem';
const TrendingSection = () => {
  return (
    <section id='trending-clothes'>
      <div className='section-heading py-3'>
        <h3>Trending</h3>
        <h5>Top wishes of the week</h5>
      </div>

      <div className='container' id='trending-clothes-list'>
        <TrendingItem />
        <TrendingItem />
        <TrendingItem />
        <TrendingItem />
      </div>
    </section>
  );
};

export default TrendingSection;
