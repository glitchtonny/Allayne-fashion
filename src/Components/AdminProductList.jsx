import React, { useEffect, useState } from 'react';
import './AdminProductList.css'; // Import the CSS file

const AdminProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    // Fetch all products when the component loads
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/products', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming JWT token is stored in localStorage
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }

            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDelete = async (productId) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to delete product');
            }

            // Remove deleted product from the state
            setProducts(products.filter(product => product.id !== productId));
        } catch (err) {
            setError(err.message);
        }
    };

    const handleEdit = (productId) => {
        // Redirect or show edit form (depending on your routing setup)
        window.location.href = `/edit-product/${productId}`;
    };

    return (
        <div className="admin-product-list">
            <h1>Admin Product List</h1>
            {error && <p className="error-message">{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td><img src={product.image_url} alt={product.name} /></td>
                            <td>{product.category}</td>
                            <td>
                                <button onClick={() => handleEdit(product.id)}>Edit</button>
                                <button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminProductList;
