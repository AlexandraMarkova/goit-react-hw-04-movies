import React from 'react';
import { useState, useEffect } from 'react';

import './MovieReviews.modules.css';

const MovieReviews = ({ reviews }) => {
  const [results, setContent] = useState([]);

  //   console.log(reviews.results);

  //      console.log(results.content);

  useEffect(() => {
    setContent(reviews.results);
  }, []);

  return (
    <>
      {results.length > 0 ? (
        <ul>
          {results.map(result => (
            <li key={result.id}>
              Author: {result.author}
              <p>{result.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};
export default MovieReviews;
