import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://img.freepik.com/free-vector/cartoon-cute-pitbull-illustration_23-2148957703.jpg?t=st=1718196443~exp=1718200043~hmac=2c01b98e0ab6434dade78094cc9b5dd8fcf9ffcb70e9b3d691676a8edff1df94&w=740',
    'https://img.freepik.com/free-vector/people-walking-dog-illustration-design_23-2148541853.jpg?t=st=1718197707~exp=1718201307~hmac=b4b76a3d97a5af387d52e2027292980bc4040aafeb0c747acd59f334727526b3&w=996',
    'https://img.freepik.com/free-vector/sleepy-man-drinking-coffee-way-work_74855-6655.jpg?t=st=1718197776~exp=1718201376~hmac=ada02da0dfebb94d4d771097a2a32d4d2b8aac3705dc1645ff60c36f031e514d&w=1380'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center"
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
