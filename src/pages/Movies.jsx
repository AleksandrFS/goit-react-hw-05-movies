import { useEffect, useState } from 'react';
import { getMoviesList } from 'fetchFilmsUtils/fetchFilmData';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [movieList, setMovieList] = useState([]);

  const handleInputAdd = e => {
    e.preventDefault();

    setQuery(data);
  };

  const setControlInput = e => {
    const { value } = e.target;
    setData(value);
  };

  useEffect(() => {
    const getFilmsList = async () => {
      try {
        const movieList = await getMoviesList(query);
        setMovieList(movieList);
      } catch (error) {}
    };
    getFilmsList();
  }, [query]);

  return (
    <>
      <form onSubmit={handleInputAdd}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={data}
          onChange={setControlInput}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>

      {query && <MoviesList movies={movieList} />}
    </>
  );
};

export default Movies;
