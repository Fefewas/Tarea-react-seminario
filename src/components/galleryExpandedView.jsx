/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react';

import '../stylesheets/galleryExpandedView.css';

const GalleryExpandedViwe = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery">
  {images.map((image, index) => (
    <div key={index} className="image-item">
      <img src={image} alt={`Image ${index}`} onClick={() => openImage(image)} />
    </div>
  ))}
</div>

      {selectedImage && (
        <div className="overlay">
          <div className="modal">
            <img src={selectedImage} alt="Selected Image" />
            <button onClick={closeImage}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryExpandedViwe;