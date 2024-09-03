import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      // If the query is empty, refresh the page to reset everything
      window.location.reload();
    } else {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for products..." 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
