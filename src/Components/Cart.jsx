import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './CartPage.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/cart');
        setCartItems(response.data.items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveFromCart = async (itemId) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/cart/${itemId}`);
      setCartItems(cartItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.product_id}>
              <img src={item.image_url} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => handleRemoveFromCart(item.product_id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
