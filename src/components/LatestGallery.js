import React from 'react';
import Catalogue from './Catalogue';
const LatestGallery = () => {
  return (
    <section id='latest-cloth'>
      <div class='section-heading py-3'>
        <h3>Latest from blog</h3>
        <h5>The frestest and most exciting news</h5>
      </div>

      <div class='container'>
        <Catalogue />
        <Catalogue />
        <Catalogue />
      </div>
    </section>
  );
};

export default LatestGallery;
