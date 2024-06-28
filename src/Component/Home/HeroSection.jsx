import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {Home} from '../../constants/imageConstant'

const H1=Home.H1;
const H2=Home.H2;
const H3=Home.H3;
const H4=Home.H4;
const H6=Home.H6;
const H7=Home.H7;
const H8=Home.H8;
const H9=Home.H9;
const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);
  const images = [
    H1,
    H2,
    H3,
    H4
  ];
  const images2 = [
    H6,
    H7,
    H8,
    H9
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width: 900px)').matches) {
        containerRef.current.style.backgroundImage = `url(${images[currentImageIndex]})`;
      } else {
        containerRef.current.style.backgroundImage = `url(${images2[currentImageIndex]})`;
      }
    };

    handleResize(); // Initial check on component mount

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentImageIndex, images, images2]);

  return (
    <div ref={containerRef}
      className="w-full h-screen object-fill bg-cover bg-center transition-all ease-in-out duration-300"
      style={{ backgroundImage: `url(${images[currentImageIndex]})`, height: '100vh' }}>
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
