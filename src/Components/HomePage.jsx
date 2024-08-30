import React from "react";
import "./HomePage.css";
import TrendingFits from "./TrendingFits";


const HomePage = () => {
  return (
    <div className="homepage-container">

      <div className="hero-section">
        <img
          src="https://img.freepik.com/premium-vector/online-shop-neon-signs-vector-design-template-neon-style_77399-1178.jpg" 
          alt="Fashion Banner"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Unique Fashion</h1>
          <p>For Women</p>
        </div>
      </div>

      <div className="categories-section">
        <TrendingFits/> 
        <h2>Women's Wear</h2>
        <div className="categories-grid">
          <div className="category-item">
            <img
              src="https://img.freepik.com/premium-vector/online-shop-neon-signs-vector-design-template-neon-style_77399-1178.jpg" 
              alt="Kurtis"
              className="category-image"
            />
            <p>Kurtis</p>
          </div>
          <div className="category-item">
            <img
              src="https://img.freepik.com/premium-vector/online-shop-neon-signs-vector-design-template-neon-style_77399-1178.jpg" 
              alt="Tops"
              className="category-image"
            />
            <p>Tops</p>
          </div>
          <div className="category-item">
            <img
              src="https://img.freepik.com/premium-vector/online-shop-neon-signs-vector-design-template-neon-style_77399-1178.jpg" 
              alt="Jeans"
              className="category-image"
            />
            <p>Jeans</p>
          </div>
          <div className="category-item">
            <img
              src="https://img.freepik.com/premium-vector/online-shop-neon-signs-vector-design-template-neon-style_77399-1178.jpg" 
              alt="Dresses"
              className="category-image"
            />
            <p>Dresses</p>
          </div>
          <div className="category-item">
            <img
              src="https://img.freepik.com/premium-vector/online-shop-neon-signs-vector-design-template-neon-style_77399-1178.jpg" 
              alt="Jeans"
              className="category-image"
            />
            <p>Jeans</p>
          </div>
          <div className="category-item">
            <img
              src="https://img.freepik.com/premium-vector/online-shop-neon-signs-vector-design-template-neon-style_77399-1178.jpg" 
              alt="Dresses"
              className="category-image"
            />
            <p>Dresses</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default HomePage;
