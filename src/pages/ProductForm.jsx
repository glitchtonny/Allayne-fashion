//product.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ProductForm.css'; 

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [imageURL, setImageURL] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/products', {
        name,
        description,
        price,
        imageURL,
        category,
      });
      console.log(response.data);
      // Reset form fields
      setName('');
      setDescription('');
      setPrice(0);
      setImageURL('');
      setCategory('');
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  const handleRemove = async (productId) => {
    try {
      const response = await axios.delete(`/api/products/${productId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className='black'>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label className='black'>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label className='black'>
          Description:
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <br />
        <label className='black'>
          Price:
          <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
        </label >
        <br />
        <label className='black'>
          Image URL:
          <input type="text" value={imageURL} onChange={(event) => setImageURL(event.target.value)} />
        </label>
        <br />
        <label className='black'>
          Category:
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">Select a category</option>
            <option value="denims">Denims</option>
            <option value="dresses">Dresses</option>
            <option value="tops">Tops</option>
            <option value="bottoms">Bottoms</option>
            <option value="shoes">Shoes</option>
            <option value="matching-sets">Matching Sets</option>
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
