import React, { useState } from 'react';
import dog1 from '../../assets/Dog1Image.webp';
import dog2 from '../../assets/Dog2Image.webp';
import dog3 from '../../assets/Dog3Image.webp';
import dog4 from '../../assets/Dog4Image.webp';
import dog5 from '../../assets/DeckDog.webp';
import dog6 from '../../assets/Dog3Image.webp';

import BbImage from '../../assets/Untitled design.png';

const PhotoGallery = () => {
  const images = [dog1, dog2, dog3, dog4, dog5, dog6];
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleBackdropClick = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative py-10" style={{ backgroundImage: `url(${BbImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0  opacity-50"></div>
      <h2 className="text-3xl font-bold text-center mb-8 relative z-10">Photo Gallery</h2>
      <div className={`relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 ${selectedImage ? 'blur-md' : ''}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleClick(image)}
          >
            <img
              src={image}
              alt={`Dog ${index + 1}`}
              className="w-full h-full opacity-50 hover:opacity-100 transition-opacity duration-300 object-cover "
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleBackdropClick}
        >
          <img
            src={selectedImage}
            alt="Selected Dog"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
