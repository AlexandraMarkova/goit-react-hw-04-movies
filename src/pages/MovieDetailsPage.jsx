import { React, useState, useEffect, useLocation } from 'react';
import { Route, Link } from 'react-router-dom';

import MovieCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieReviews/MovieReviews';
import FilmPreview from '../components/FilmPreviev/FilmPreviev';

import routes from '../routes';

import axios from 'axios';

const API_KEY = 'ba5dd7d9bd81b9a15ac463967b247cdf';

const MovieDetailsPage = ({
  match: {
    params: { movieId },
    url,
  },
  location,
  query,
  history,
}) => {
  const [details, setFilmsDetails] = useState({});
  // console.log(location.state);
  const { credits, reviews = {} } = details;
  // console.log(reviews);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&&append_to_response=reviews,credits`,
      )
      .then(response => setFilmsDetails(response.data));
  }, []);

  //   console.log(details);

  const handleGoBack = () => {
    history.push(location?.state?.from || routes.home);
  };

  return (
    <>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      <FilmPreview details={details} />

      <ul>
        <li>
          <Link
            to={{
              pathname: `${url}/cast`,
              state: {
                from: location?.state?.from,
              },
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: `${url}/reviews`,
              state: {
                from: location?.state?.from,
              },
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>

      <Route
        exact
        path={routes.cast}
        render={props => <MovieCast {...props} credits={credits} />}
      />
      <Route
        exact
        path={routes.reviews}
        render={props => <MovieReviews {...props} reviews={reviews} />}
      />
    </>
  );
};

export default MovieDetailsPage;
