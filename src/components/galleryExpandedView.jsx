/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import '../stylesheets/galleryExpandedView.css';

const GalleryExpandedViwe = ({ images }) => {

  return (
    <div>
      <div className="gallery">
        {images.map((image, index) => (
    <div key={index} className="image-item">
      <img src={image} alt={`Image ${index}`} />
    </div>
  ))}
</div>

    </div>
  );
};

export default GalleryExpandedViwe;