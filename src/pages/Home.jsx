import { useState, useEffect } from 'react';
import { getMoviesListTrending } from 'fetchFilmsUtils/fetchFilmData';

import MoviesList from 'components/MoviesList';

import { Spinner } from 'components/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const fetch = await getMoviesListTrending();
        setMovies(fetch);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <div>
        <div>Trending today</div>
        {isLoading && <Spinner />}
        {movies.length > 0 && <MoviesList movies={movies} />}
        {error && <p>Some server error occurred</p>}
      </div>
    </>
  );
};

export default Home;
