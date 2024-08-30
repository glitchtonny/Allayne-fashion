import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OrderDetails = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const token = localStorage.getItem('token'); // Assume the token is stored in localStorage
                const response = await axios.get(`/order/${orderId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setOrder(response.data);
            } catch (err) {
                setError('Failed to fetch order details.');
            } finally {
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [orderId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Order Details</h2>
            {order ? (
                <div>
                    <p><strong>Order ID:</strong> {order.order_id}</p>
                    <p><strong>Total Price:</strong> ${order.total_price.toFixed(2)}</p>
                    <p><strong>Status:</strong> {order.status}</p>
                    <p><strong>Billing Address:</strong> {order.billing_address}</p>
                    <p><strong>Shipping Address:</strong> {order.shipping_address}</p>
                    <h3>Items</h3>
                    <ul>
                        {order.items.map((item) => (
                            <li key={item.product_id}>
                                <p><strong>Product Name:</strong> {item.product_name}</p>
                                <p><strong>Quantity:</strong> {item.quantity}</p>
                                <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No order details found.</p>
            )}
        </div>
    );
};

export default OrderDetails;
