import React from 'react';
import './ProductDetail.css';

function ProductDetail() {
  return (
    <div className="product-container">
      <img 
        className="product-image" 
        src="src/images/Screenshot from 2024-08-24 23-17-59.png" 
        alt="Product" 
      />
      <div className="product-details">
        <div className="product-name">Name</div>
        <div className="product-price">$50</div>
        <details className="product-description">
          <summary>Description</summary>
          <p>Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.</p>
        </details>
      </div>
    </div>
  );
}

export default ProductDetail;
