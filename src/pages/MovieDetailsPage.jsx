import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
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

  const {
    original_title,
    vote_average,
    overview,
    poster_path,
    genres = [],
    credits,
    reviews = {},
  } = details;

  // console.log(reviews);

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

      <Route
        exact
        path="/movies/:movieId/cast"
        render={props => <MovieCast {...props} credits={credits} />}
      />
      <Route
        exact
        path="/movies/:movieId/reviews"
        render={props => <MovieReviews {...props} reviews={reviews} />}
      />
    </>
  );
};

export default MovieDetailsPage;
