import axios from 'axios';

const API_KEY = '7b4562665a42dd00b8be25ed9e213510';
const URL_TRENDING = 'https://api.themoviedb.org/3/trending/movie/day?api_key=';
const URL_MOVIE = `https://api.themoviedb.org/3/movie/`;

export const getMoviesListTrending = async () => {
  const resultData = await axios.get(`${URL_TRENDING}${API_KEY}`);

  return resultData.data.results;
};

export const getMovie = async movieId => {
  const resultData = await axios.get(
    `${URL_MOVIE}${movieId}?api_key=${API_KEY}`
  );
  return resultData.data;
};

export const getMovieCredits = async movieId => {
  const resultData = await axios.get(
    `${URL_MOVIE}${movieId}/credits?api_key=${API_KEY}`
  );
  return resultData.data;
};

export const getMovieReviews = async movieId => {
  const resultData = await axios.get(
    `${URL_MOVIE}${movieId}/reviews?api_key=${API_KEY}`
  );
  return resultData.data.results;
};

export const getMoviesList = async query => {
  const resultData = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return resultData.data.results;
};
