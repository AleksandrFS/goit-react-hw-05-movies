const MovieDescription = ({ movieData }) => {
  const { genres, title, overview, vote_average, poster_path } = movieData;
  // console.log(movieData);
  // console.log(vote_average);

  return (
    <>
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt="Movie poster"
          />
        </div>
        <div>
          <h2>{title}</h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <div>
            <p>Overviev</p>
            <p>{overview}</p>
            <p>{genres.map(({ name }) => name).join(' ')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDescription;
