import React, { useState } from 'react';
//  import './Searchbar.modules.css';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.target.value);
    onSubmit(query);
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" value={query} onSubmit={handleSubmit}>
        <label>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </label>
      </form>
    </header>
  );
}

export default Searchbar;
