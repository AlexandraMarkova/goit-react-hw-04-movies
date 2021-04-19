const FilmPreview = ({ details }) => {
  const {
    original_title,
    vote_average,
    overview,
    poster_path,
    genres = [],
  } = details;

  return (
    <div>
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
    </div>
  );
};

export default FilmPreview;
