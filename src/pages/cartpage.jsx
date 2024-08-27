import React from 'react';
import './cartpage.css'; 


const ProductCard = ({ image, name, price, quantity, removeHandler }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
        <p className="product-quantity">Quantity: {quantity}</p>
        <button onClick={removeHandler} className="remove-button">Remove</button>
      </div>
    </div>
  );
};

const App = () => {
  const [products, setProducts] = React.useState([
    {
      image: 'src/images/Screenshot from 2024-08-26 15-26-36.png',
      name: 'Silver Sandals',
      price: 45,
      quantity: 40,
    },
    {
      image: 'src/images/Screenshot from 2024-08-26 15-26-48.png',
      name: 'Red Dress',
      price: 25,
      quantity: 34,
    },
    {
      image: 'src/images/Screenshot from 2024-08-26 15-27-00.png',
      name: 'Blue Pants',
      price: 15,
      quantity: 42,
    },
  ]);

  const removeProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          removeHandler={() => removeProduct(index)}
        />
      ))}
      <button className="place-order-button">Place Order</button>
    </div>
  );
};

export default App; 
