import React, { useState } from 'react';
import {PhotoGallery} from '../../constants/imageConstant';
import { Accomadation } from '../../constants/imageConstant';
const dogs1=PhotoGallery.Dog1;
const dogs2=PhotoGallery.Dog2;
const dogs3=PhotoGallery.Dog3;
const dogs4=PhotoGallery.Dog4;
const dogs5=PhotoGallery.Dog5;
const dogs6=PhotoGallery.Dog6;
const dog7=Accomadation.Deck;
const dog8=Accomadation.Frendly;
const dog9=Accomadation.Seperate;

const PhotoGallerys = () => {
  const images = [dogs1, dogs2, dogs3, dogs4,dogs5 , dogs6 , dog7, dog8, dog9];
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleBackdropClick = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative py-10" >
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

export default PhotoGallerys;
