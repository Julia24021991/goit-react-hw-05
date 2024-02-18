import { useState, useEffect } from 'react';
import { fetchTrendingMovie } from '../components/api';
import { Loader } from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { MoviesList } from '../components/MoviesList/MoviesList';

export default function HomePage() {
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const fetchedData = await fetchTrendingMovie();
        setMovie(fetchedData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <title>Trending today</title>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {movies.length > 0 && <MoviesList items={movies} />}
    </div>
  );
}
