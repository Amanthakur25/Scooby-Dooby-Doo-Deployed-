import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Home} from '../../constants/imageConstant'

const H1=Home.H1;
const H2=Home.H2;
const H3=Home.H3;
const H4=Home.H4;
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
      className="w-full h-screen object-fill bg-cover bg-center transition-all ease-in-out duration-300"
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
