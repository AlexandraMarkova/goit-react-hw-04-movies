import { Link, useLocation } from 'react-router-dom';

const FilmList = ({ films, query }) => {
  let location = useLocation();
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link
            to={{
              pathname: `/movies/${film.id}`,
              state: {
                from: location,
                query,
              },
            }}
          >
            {film.title || film.original_title || film.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FilmList;
