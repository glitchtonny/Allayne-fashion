import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditProduct.css';

const EditProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null); // Start with `null`
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/products/${productId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`
                    }
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch product. Status: ${response.status}`);
                }

                const data = await response.json();
                setProduct(data); // Assuming the response is the product object directly
            } catch (err) {
                console.error(err); // Log the error for more details
                setError(err.message);
            } finally {
                setLoading(false); // Stop loading when the request is complete
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
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                },
                body: JSON.stringify(product)
            });

            if (!response.ok) {
                throw new Error(`Failed to update product. Status: ${response.status}`);
            }

            navigate('/admin-products');
        } catch (err) {
            console.error(err); // Log the error for more details
            setError(err.message);
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading message
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message
    }

    if (!product) {
        return <div>No product found.</div>; // Handle the case where product is null
    }

    return (
        <div className="edit-product-container">
            <h1>Edit Product</h1>
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
                <a href="/admin-products"><button type="submit" >Save</button></a>
            </form>
        </div>
    );
};

export default EditProduct;
