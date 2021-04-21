import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import Searchbar from '../components/Searchbar/Searchbar';
import FilmList from '../components/FilmList/FilmList';
import { fetchFilmsQuery } from '../Utils/SearchApi';

import { useLocation, useHistory } from 'react-router-dom';

function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const parsed = queryString.parse(location.search);
  const [query, setQuery] = useState(parsed?.query || '');
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      history.push({ ...location, search: `?query=${query}` });
      getFilmsQuery();
    }
  }, [query]);

  const handleSubmit = searchQuery => {
    setQuery(searchQuery);
    if (searchQuery !== query) {
      setFilms([]);
    }
  };

  const getFilmsQuery = () => {
    return fetchFilmsQuery(query)
      .then(data => setFilms(data))
      .catch(error => setError(error));
  };

  return (
    <>
      {error ? (
        <h1>sorry try later</h1>
      ) : (
        <>
          <Searchbar onSubmit={handleSubmit} />

          <FilmList films={films} query={query} />
        </>
      )}
    </>
  );
}

export default MoviesPage;

//
