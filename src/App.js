import { Route, Switch } from 'react-router-dom';

import Container from './components/Container/Container';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import NotFoundPage from './pages/NotFoundPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import routes from './routes';
import AppBar from './components/AppBar/AppBar';

function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  );
}

export default App;
