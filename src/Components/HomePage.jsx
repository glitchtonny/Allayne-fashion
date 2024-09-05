import React from "react";
import "./HomePage.css";
import TrendingFits from "./TrendingFits";
import Footer from "../pages/Footer";


const HomePage = () => {
  return (
    <div className="homepage-container">

      <div className="hero-section">
        <img
          src="https://t4.ftcdn.net/jpg/06/10/57/75/360_F_610577574_QMoYRcv8AUUYl3SJPvXUtBCkUYbxmw8d.jpg" 
          alt="Fashion Banner"
          className="hero-image"
        />
        <div className="hero-text">
        <h1>Allayne Fashion</h1>
          <h2>Merging Style with Elegance</h2>
          <p>Unique Women's Fashion</p>
          <p></p>
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
            <p>Denims</p>
          </div>
          <div className="category-item">
            <img
              src="https://img.freepik.com/premium-vector/online-shop-neon-signs-vector-design-template-neon-style_77399-1178.jpg" 
              alt="Tops"
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
            <p>Tops</p>
          </div>
          <div className="category-item">
            <img
              src="https://img.freepik.com/premium-vector/online-shop-neon-signs-vector-design-template-neon-style_77399-1178.jpg" 
              alt="Dresses"
              className="category-image"
            />
            <p>Bottoms</p>
          </div>
          <div className="category-item">
            <img
              src="https://img.freepik.com/premium-vector/online-shop-neon-signs-vector-design-template-neon-style_77399-1178.jpg" 
              alt="Jeans"
              className="category-image"
            />
            <p>Shoes</p>
          </div>
          <div className="category-item">
            <img
              src="https://img.freepik.com/premium-vector/online-shop-neon-signs-vector-design-template-neon-style_77399-1178.jpg" 
              alt="Dresses"
              className="category-image"
            />
            <p>Matching Sets</p>
          </div>
        </div>

      </div>
      <Footer/>

    </div>
  );
};

export default HomePage;
