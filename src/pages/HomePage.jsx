import React, { useState, useEffect } from 'react';
import FilmList from '../components/FilmList/FilmList';
import { fetchPopularFilms } from '../Utils/SearchApi';

const HomePage = () => {
  const [films, setfilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = () => {
    return fetchPopularFilms()
      .then(data => setfilms(data.results))
      .catch(error => setError(error));
  };

  // console.log(films);

  return (
    <>
      {error ? (
        <h1>sorry try later</h1>
      ) : (
        <div>
          <h1>Trending today</h1>
          {films && <FilmList films={films} />}
        </div>
      )}
    </>
  );
};

export default HomePage;
