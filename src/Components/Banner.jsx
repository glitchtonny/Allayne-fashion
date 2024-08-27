// import React, { useState, useEffect } from 'react';
// import './Banner.css'; 

// const Banner = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); 

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="banner">
//       <img src={images[currentIndex]} alt="Banner" />
//     </div>
//   );
// };

// export default Banner;





//////////////////////////////////////////////////////////////////////////////////


import React, { useState, useEffect } from 'react';
import './Banner.css'; 

const Banner = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const image1 = images[currentIndex];
  const image2 = images[(currentIndex + 1) % images.length]; // The next image for the second column

  return (
    <div className="banner">
      <div className="banner-images">
      <div className="banner-image" style={{ backgroundImage: `url(${image1})` }} />

        <div className="banner-image" style={{ backgroundImage: `url(${image2})` }} />

      </div>
    </div>
  );
};

export default Banner;
