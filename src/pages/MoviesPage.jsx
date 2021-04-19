import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import axios from 'axios';

const API_KEY = 'ba5dd7d9bd81b9a15ac463967b247cdf';

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [searchResalts, setSearchResalts] = useState([]);
  const { pathname } = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.target.value);
    fetchImages();
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const fetchImages = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
      )
      .then(response => {
        setSearchResalts(response.data.results);
      });
  };

  return (
    <>
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

      <ul>
        {searchResalts.map(result => (
          <li key={result.id}>
            <Link to={`${pathname}/${result.id}`}>{result.original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MoviesPage;
