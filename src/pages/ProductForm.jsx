import React, { useState } from 'react';
import axios from 'axios';
import './product.css'; 

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [imageURL, setImageURL] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState({});
  
  // Mapping of category names to category IDs
  const categoryMapping = {
    denims: 1,
    dresses: 2,
    tops: 3,
    bottoms: 4,
    shoes: 5,
    matching_sets: 6
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get token from local storage
    const token = localStorage.getItem('access_token');
    console.log(token)


    if (!token) {
      setErrors({ general: 'Authorization token is missing.' });
      return;
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/products',
        {
          name,
          description,
          price,
          imageURL,
          category_id: categoryMapping[category] // Use category ID
        },
        {
          headers: {
            Authorization: `Bearer ${token}` // Include the token in the Authorization header
          }
        }
      );
      console.log(response.data);
      // Reset form fields
      setName('');
      setDescription('');
      setPrice(0);
      setImageURL('');
      setCategory('');
      setErrors({});
    } catch (error) {
      setErrors(error.response.data.errors || { general: 'An error occurred' });
    }
  };

  return (
    <div className="product-form">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            value={name} 
            onChange={(event) => setName(event.target.value)} 
          />
        </label>
        <br />
        <label>
          Description:
          <textarea 
            value={description} 
            onChange={(event) => setDescription(event.target.value)} 
          />
        </label>
        <br />
        <label>
          Price:
          <input 
            type="number" 
            value={price} 
            onChange={(event) => setPrice(Number(event.target.value))} 
          />
        </label>
        <br />
        <label>
          Image URL:
          <input 
            type="text" 
            value={imageURL} 
            onChange={(event) => setImageURL(event.target.value)} 
          />
        </label>
        <br />
        <label>
          Category:
          <select 
            value={category} 
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Select a category</option>
            <option value="denims">Denims</option>
            <option value="dresses">Dresses</option>
            <option value="tops">Tops</option>
            <option value="bottoms">Bottoms</option>
            <option value="shoes">Shoes</option>
            <option value="matching_sets">Matching Sets</option>
          </select>
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
      {errors && (
        <ul>
          {Object.keys(errors).map((key) => (
            <li key={key}>{errors[key]}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductForm;
