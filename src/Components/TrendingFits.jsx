import React, { useState, useEffect } from 'react';
import './TrendingFits.css'; // Import the CSS for styling

const TrendingFits = () => {
  const [products, setProducts] = useState([]);
  const [activeIndices, setActiveIndices] = useState([0, 1, 2, 3]);

  useEffect(() => {
    // Fetch products from the backend API
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/products'); // Replace with your actual API endpoint
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndices((prevIndices) =>
        prevIndices.map(index => (index + 1) % products.length)
      );
    }, 2000); 

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [products.length]);

  return (
    <div className="trending-fits-section">
      <h1 className="trending-fits-heading">Trending Fits</h1>
      <div className="trending-fits-container">
        {activeIndices.map((index) => (
          <div key={products[index]?.id || index} className="trending-fit-card">
            <a href='/shop'><img
              src={products[index]?.image_url}
              alt={products[index]?.name || 'Product Image'}
              className="trending-fit-image"
            /></a>
            <h3 className="trending-fit-name">
              {products[index]?.name || 'Loading...'}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingFits;
