import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Link, useLocation } from 'react-router-dom';
import MovieCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieReviews/MovieReviews';

import axios from 'axios';

const API_KEY = 'ba5dd7d9bd81b9a15ac463967b247cdf';

const MovieDetailsPage = ({
  match: {
    params: { movieId },
    url,
  },
}) => {
  const [details, setFilmsDetails] = useState({});
  const { pathname } = useLocation();

  const {
    original_title,
    vote_average,
    overview,
    poster_path,
    genres = [],
  } = details;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&&append_to_response=reviews,credits`,
      )
      .then(response => setFilmsDetails(response.data));
  }, []);

  //   console.log(details);
  return (
    <>
      {poster_path ? (
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
      ) : null}
      <h1>{original_title}</h1>
      <p>User Score: {vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>
        {genres.map(genre => (
          <li key={genre.name}>{genre.name}</li>
        ))}
      </ul>

      <ul>
        <li>
          <Link to={`${url}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`${url}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Route exact path="/movies/:movieId/cast" component={MovieCast} />
      <Route exact path="/movies/:movieId/reviews" component={MovieReviews} />
    </>
  );
};

export default MovieDetailsPage;
