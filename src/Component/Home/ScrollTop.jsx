// ScrollToTop.js
import React, { useState, useEffect } from 'react';
import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-2 rounded-3xl shadow-lg transition-opacity duration-300"
        >
      <FaCircleArrowUp size={35}/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
