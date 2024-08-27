import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const handleCardClick = () => {
    setIsDetailVisible(!isDetailVisible);
  };

  return (
    <div 
      className={`product-card ${isDetailVisible ? 'expanded' : ''}`} 
      onClick={handleCardClick}
    >
      <img src={product.image_url} alt={product.name} />
      <div className="product-content">
        <h3>{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
        {isDetailVisible && <p className="description">{product.description}</p>}
        <button onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
