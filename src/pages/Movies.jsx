import { useEffect, useState } from 'react';
import { getMoviesList } from 'fetchFilmsUtils/fetchFilmData';
import MoviesList from 'components/MoviesList';
import {  useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [movieList, setMovieList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  // const location = useLocation()

  // const name = searchParams.get("query") ?? '';

  const handleInputAdd = e => {
    e.preventDefault();

    if (!data) {
      return;
    }
    setSearchParams({ query: `${data}` });
    // setData('');
  };

  const setControlInput = e => {
    const { value } = e.target;
    if (value === '') {
      setSearchParams({});
    }

    setData(value);
  };

  useEffect(() => {
    const getFilmsList = async () => {
      try {
        const name = searchParams.get('query');
        if (!name) {
          return;
        }

        const movieList = await getMoviesList(name);
        setMovieList(movieList);
      } catch (error) {}
    };
    getFilmsList();
  }, [searchParams]);

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

      {searchParams && <MoviesList movies={movieList} />}
    </>
  );
};

export default Movies;
