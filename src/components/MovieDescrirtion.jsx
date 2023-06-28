import PropTypes from 'prop-types';
import { BsPersonSquare } from 'react-icons/bs';

const MovieDescription = ({ movieData }) => {
  const { genres, title, overview, vote_average, poster_path } = movieData;

  return (
    <>
      <div>
        <div>
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt="Movie poster"
            />
          ) : (
            <BsPersonSquare style={{ height: 300, width: 200 }} />
          )}
        </div>
        <div>
          <h2>{title ?? ''}</h2>
          <p>User score: {Math.round(vote_average * 10) ?? ''}%</p>
          <div>
            <p>Overviev</p>
            <p>{overview ?? ''}</p>
            <p>{genres.map(({ name }) => name).join(' ') ?? ''}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDescription;

MovieDescription.propTypes = {
  movieData: PropTypes.object.isRequired,
};
