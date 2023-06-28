import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieDescription from 'components/MovieDescrirtion';
import { Spinner } from 'components/Loader';
import { getMovie } from 'fetchFilmsUtils/fetchFilmData';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const movieData = await getMovie(movieId);

        setMovie(movieData);
      } catch (error) {
        setError(error);
      }
    };

    getMovieData();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocation.current}>
        <button>Go back</button>
      </Link>
      {error && <p>Some error occurred</p>}
      {movie && <MovieDescription movieData={movie} />}
      <>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<Spinner/>}>
          <Outlet />
        </Suspense>
      </>
    </>
  );
};

export default MovieDetails;
