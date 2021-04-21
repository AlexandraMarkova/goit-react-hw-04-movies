import { React, useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

import MovieCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieReviews/MovieReviews';
import FilmPreview from '../components/FilmPreviev/FilmPreviev';
import { fetchFilmsDetails } from '../Utils/SearchApi';

import routes from '../routes';

const MovieDetailsPage = ({
  match: {
    params: { movieId },
    url,
  },
  location,
  history,
}) => {
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);

  // console.log(location.state);
  const { credits, reviews = {} } = details;
  // console.log(reviews);

  useEffect(() => {
    getFilmDetails();
  }, []);

  const getFilmDetails = () => {
    fetchFilmsDetails(movieId)
      .then(response => setDetails(response.data))
      .catch(error => setError(error));
  };

  const handleGoBack = () => {
    history.push(location?.state?.from || routes.home);
  };

  return (
    <>
      {error ? (
        <h1>sorry try later</h1>
      ) : (
        <>
          <button type="button" onClick={handleGoBack}>
            Go back
          </button>
          {details && <FilmPreview details={details} />}

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
      )}
    </>
  );
};

export default MovieDetailsPage;
