import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import Searchbar from '../components/Searchbar/Searchbar';
import FilmList from '../components/FilmList/FilmList';

import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';

const API_KEY = 'ba5dd7d9bd81b9a15ac463967b247cdf';

function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const parsed = queryString.parse(location.search);
  const [query, setQuery] = useState(parsed?.query || '');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (query) {
      history.push({ ...location, search: `?query=${query}` });
      fetchImages();
    }
  }, [query]);

  const handleSubmit = searchQuery => {
    setQuery(searchQuery);
    if (searchQuery !== query) {
      setFilms([]);
    }
  };

  const fetchImages = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
      )
      .then(response => {
        setFilms(response.data.results);
      });
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />

      <FilmList films={films} query={query} />
    </>
  );
}

export default MoviesPage;
