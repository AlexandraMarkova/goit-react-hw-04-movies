import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from './components/Container/Container';
import routes from './routes';
import AppBar from './components/AppBar/AppBar';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "Home-Page" */),
);
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage' /* webpackChunkName: "Movie-Details" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "Movies" */),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "Not-Found-Page" */),
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
