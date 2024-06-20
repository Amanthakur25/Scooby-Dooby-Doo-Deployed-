import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import H1 from '../../assets/Home/H1.jpg'
import H2 from '../../assets/Home/H2.jpg'
import H3 from '../../assets/Home/H3.jpg'
import H4 from '../../assets/Home/H4.jpg'

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    H1,
    H2,
    H3,
    H4
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    },2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center transition-all ease-in-out duration-300"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
        <h1 className="text-2xl md:text-5xl lg:text-4xl text-white font-bold mb-4 text-center">
          Luxury Dog Boarding and Daycare Facility
        </h1>
        <Link to="/aboutUs">
        <button className="px-6 py-3 bg-transparent border-2 border-slate-700 text-white font-semibold rounded-md hover:bg-white hover:text-black h-26 w-60">
          Find Out More
        </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
