import './FilmPreviev.modules.css';

const FilmPreview = ({ details }) => {
  //  console.log(details)
  const {
    original_title,
    vote_average,
    overview,
    poster_path,
    genres = [],
  } = details;

  return (
    <>
      {details && (
        <div class="card">
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={original_title}
              width="250px"
            />
          ) : (
            <img
              src={`https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder`}
              alt={original_title}
            />
          )}
          <div class="container">
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
        </div>
      )}
    </>
  );
};

export default FilmPreview;
