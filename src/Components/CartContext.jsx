import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [], total_price: 0 });

    const fetchCart = async () => {
        const response = await fetch('http://127.0.0.1:5000/cart', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        const data = await response.json();
        setCart(data);
    };

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <CartContext.Provider value={{ cart, setCart, fetchCart }}>
            {children}
        </CartContext.Provider>
    );
};
