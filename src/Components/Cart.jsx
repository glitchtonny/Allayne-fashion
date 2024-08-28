import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cart, fetchCart } = useContext(CartContext);

    const handleRemoveItem = async (itemId) => {
        await fetch(`http://127.0.0.1:5000/cart/${itemId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        fetchCart();
    };

    const handleUpdateQuantity = async (itemId, quantity) => {
        await fetch(`http://127.0.0.1:5000/cart/${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ quantity })
        });

        fetchCart();
    };

    return (
        <div>
            <h1>Your Cart</h1>
            <ul>
                {cart.items.map(item => (
                    <li key={item.product_id}>
                        <img src={item.image_url} alt={item.name} width={50} />
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                        <input 
                            type="number" 
                            value={item.quantity} 
                            onChange={(e) => handleUpdateQuantity(item.product_id, e.target.value)} 
                        />
                        <button onClick={() => handleRemoveItem(item.product_id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total Price: ${cart.total_price}</h3>
        </div>
    );
};

export default Cart;
