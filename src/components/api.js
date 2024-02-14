import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDJmYTIzM2U2Y2Q5ODA5ZmIyODVjN2NiMDE1NzBlNSIsInN1YiI6IjY1Yzc2YzE1OThmMWYxMDE0OGQ2MTAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zg8HYYD-q-1Inj3bCtDFYeZqzfUiM2zsG7_n6DQOets';

export const fetchTrendingMovie = async () => {
  const url = 'trending/movie/day?language=en-US';
  const response = await axios.get(url);
  return response.data.results;
};

export const fetchSearchMovie = async (query, page) => {
  const url = `search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchMovieById = async movieId => {
  const url = `movie/${movieId}?language=en-US`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchMovieCreditsById = async movieId => {
  const url = `movie/${movieId}/credits?language=en-US`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchMovieReviewsById = async movieId => {
  const url = `movie/${movieId}/reviews?language=en-US&page=1`;
  const response = await axios.get(url);
  return response.data;
};
