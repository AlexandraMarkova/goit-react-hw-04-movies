import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const API_KEY = 'ba5dd7d9bd81b9a15ac463967b247cdf';

const HomePage = () => {
  const [films, setfilms] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then(response => setfilms(response.data.results));
  }, []);

  // console.log(films);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>
              {film.title || film.original_title || film.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
