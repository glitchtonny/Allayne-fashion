import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';
import { redirect, useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart_id, setCartID] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:5000/cart', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        if (res.data.items) {
          setCartItems(res.data.items);
          setTotalPrice(res.data.total_price);
          setCartID(res.data.cart_id);
        } else {
          setCartItems([]);
          setTotalPrice(0);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const getTotal= ()=> {
    return cartItems.map((item) => {
      const totalPrice = item.price * item.quantity;
      return {
        ...item,
        totalPrice
      }
    })
  }
  const cartWithTotal = getTotal();
  const grandTotal = cartWithTotal.reduce((acc, item) => acc + item.totalPrice, 0);

  const handleUpdateQuantity = async (itemId, quantity) => {
    try {
      const res = await axios.put(
        `http://127.0.0.1:5000/cart/${itemId}`,
        { quantity },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      );
      if (res.status === 200) {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.product_id === itemId
              ? { ...item, quantity: res.data.quantity }
              : item
          )
        );
        setTotalPrice((prevTotal) =>
          prevTotal + res.data.quantity * res.data.price
        );
      }
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      const res = await axios.delete(`http://127.0.0.1:5000/cart/${itemId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      });
      if (res.status === 200) {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.product_id !== itemId)
        );
      }
    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };

  const createOrder = async (cart_id, grandTotal, cartItems) => {
    try {
      const res = await axios.post(
        'http://127.0.0.1:5000/orders',
        {
          cart_id: cart_id,
          grandTotal: grandTotal,
          cartItems: cartItems
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        }
      );
      if (res.status === 201) {
        navigate('/payment')
        alert('Product added to Order successfully!');
      }
    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };
  
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.product_id} className="cart-item">
                <img src={item.image_url} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <p>Price: ${item.price * item.quantity}</p>
                  <div className="cart-item-actions">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleUpdateQuantity(item.product_id, parseInt(e.target.value))}
                    />
                    <button onClick={() => handleRemoveItem(item.product_id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total: ${grandTotal.toFixed(2)}</h2>
            <button className="checkout-button" onClick={() => createOrder(cart_id, grandTotal, cartItems)  }>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
