import React from 'react';
import { useState, useEffect } from 'react';

const MovieCast = ({ credits }) => {
  const [casts, setCasts] = useState([]);

  // console.log(credits);

  // console.log(casts);

  useEffect(() => {
    setCasts(credits.cast.slice(0, 10));
  }, []);

  return (
    <>
      {casts && (
        <ul>
          {casts.map(cast => (
            <li key={cast.id}>
              {cast.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt=""
                  width="100px"
                  height="140px"
                />
              ) : null}
              <h1>{cast.name}</h1>
              <p>Popularity: {cast.popularity}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default MovieCast;
