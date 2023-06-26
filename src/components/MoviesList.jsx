import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
 
  return (
    <div>
      <ul>
        {movies.map(movie => {
          return (
            <Link key={movie.id} to={`movies/${movie.id}`}>
              <li>{movie.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
