import { useState, useEffect } from 'react';
import { getMoviesListTrending } from 'fetchFilmsUtils/fetchFilmData';

import MoviesList from 'components/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        const fetch = await getMoviesListTrending();
        setMovies(fetch);
      } catch (error) {
        setError(error);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <div>Trending today</div>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {error && <p>Some server error occurred</p>}
    </>
  );
};

export default Home;
