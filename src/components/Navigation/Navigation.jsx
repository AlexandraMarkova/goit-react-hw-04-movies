import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact
        to={routes.home}
        className="NavLink"
        activeClassName="NavLink--aktiv"
      >
        Home
      </NavLink>

      <NavLink
        to={routes.movies}
        className="NavLink"
        activeClassName="NavLink--aktiv"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
