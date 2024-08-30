import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        image_url: '',
        category_id: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch the current product data to pre-fill the form
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/products/${productId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }

                const data = await response.json();
                setProduct(data.product);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProduct();
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://127.0.0.1:5000/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(product)
            });

            if (!response.ok) {
                throw new Error('Failed to update product');
            }

            navigate('/admin-products'); // Redirect to product list after successful update
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Edit Product</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={product.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={product.description} onChange={handleChange} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={product.price} onChange={handleChange} />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="text" name="image_url" value={product.image_url} onChange={handleChange} />
                </div>
                <div>
                    <label>Category ID:</label>
                    <input type="number" name="category_id" value={product.category_id} onChange={handleChange} />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditProduct;
