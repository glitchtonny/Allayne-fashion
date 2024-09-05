import React, { useState } from 'react';
import axios from 'axios';
import './Payments.css'; // Ensure you import the CSS file

const Payment = () => {
    const [paymentOption, setPaymentOption] = useState('');
    const [order_id, setOrderId] = useState('');
    const [total_price, setTotalPrice] = useState('');
    const [formData, setFormData] = useState({
        phoneNumber: ''
    });

    const handlePaymentOptionChange = (event) => {
        setPaymentOption(event.target.value);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const paymentMethod = async (order_id, total_price, paymentOption) => {
        if (paymentOption === 'Mpesa') {
            try {
                const res = await axios.post(
                    'http://127.0.0.1:5000/mpesa/stk_push',
                    {
                        phone_number: formData.phone_number,
                        total_price: 1,
                        order_id: order_id
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem('access_token')}`
                        }
                    }
                );
                if (res.status === 200) {
                    console.log(res);
                    // navigate('/paymentCompleted')
                    alert('Processing Payment!');
                }
            } catch (error) {
                console.error('Payment Method Error:', error);
            }
        } else {
            try {
                const res = await axios.post(
                    'http://127.0.0.1:5000/cashPayments',
                    {
                        phone_number: formData.phone_number,
                        total_price: total_price,
                        order_id: order_id
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem('access_token')}`
                        }
                    }
                );
                if (res.status === 201) {
                    navigate('/paymentCompleted');
                    alert('Product added to Order successfully!');
                }
            } catch (error) {
                console.error('Error removing cart item:', error);
            }
        }
    };

    return (
        <div className="payment-container">
            <h2>Checkout Page</h2>

            <div className="payment-options">
                <label>
                    <input
                        type="radio"
                        value="Mpesa"
                        checked={paymentOption === 'Mpesa'}
                        onChange={handlePaymentOptionChange}
                    />
                    <img
                        src="https://cioafrica.co/wp-content/uploads/2022/02/M-PESA.jpeg"
                        alt="Pay with M-pesa"
                    />
                </label>
                <label>
                    <input
                        type="radio"
                        value="cash"
                        checked={paymentOption === 'cash'}
                        onChange={handlePaymentOptionChange}
                    />
                    <img
                        src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/05/cashondelivery1.jpg"
                        alt="Cash on Delivery"
                    />
                </label>
            </div>

            {paymentOption === 'Mpesa' && (
                <div className="payment-details">
                    <h3>Mpesa Payment Details</h3>
                    <label>
                        Phone Number:
                        <input
                            type="text"
                            id="phone_number"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
            )}

            {paymentOption === 'cash' && (
                <div className="shipping-details">
                    <h3>Shipping Details</h3>
                    <label>
                        Full Name:
                        <input type="text" name="fullName" placeholder="Enter your full name" />
                    </label>
                    <label>
                        Address:
                        <input type="text" name="address" placeholder="Enter your shipping address" />
                    </label>
                    <label>
                        Phone Number:
                        <input type="text" name="phoneNumber" placeholder="Enter your phone number" />
                    </label>
                </div>
            )}

            <button type="submit" className="place-order-button" onClick={() => paymentMethod(order_id, total_price, paymentOption)}>Place Order</button>
        </div>
    );
};

export default Payment;
