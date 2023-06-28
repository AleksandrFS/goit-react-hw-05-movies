import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();
 
  return (
    <div>
      <ul>
        {movies.map(movie => {
          return (
            <Link key={movie.id} to={`/movies/${movie.id}`} state={{ from:  location}}>
              <li>{movie.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
}
