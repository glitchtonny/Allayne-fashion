import React, { useState, useEffect } from 'react';
import './Banner.css'; 

const Banner = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner">
      <img src={images[currentIndex]} alt="Banner" />
    </div>
  );
};

export default Banner;
