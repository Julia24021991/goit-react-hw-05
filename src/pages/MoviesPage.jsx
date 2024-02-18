import { useState, useEffect, useRef } from 'react';
import { fetchSearchMovie } from '../components/api';
import { Loader } from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { LoadMoreBtn } from '../components/LoadMoreBtn/LoadMoreBtn';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar/SearchBar';
import toast from 'react-hot-toast';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [params, setParams] = useSearchParams();
  const movieName = params.get('query') ?? '';

  const totalResults = useRef(0);
  const totalPages = useRef(0);

  // LoadMoreBtn
  const handleClick = () => {
    setPage(page + 1);
  };

  const searchMovies = async newQuery => {
    if (movieName === newQuery) {
      toast.error('Your query completed already');
    }
    setPage(1);
    setMovies([]);
    setParams({ query: newQuery });
  };

  useEffect(() => {
    const controller = new AbortController();
    if (movieName === '') {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);

        const fetchedData = await fetchSearchMovie(movieName, page, {
          abortController: controller,
        });
        setMovies(prevMovie => [...prevMovie, ...fetchedData.results]);
        totalPages.current = fetchedData.total_pages;
        totalResults.current = fetchedData.total_results;

        if (totalResults === 0) {
          toast.error('Not found any movie!');
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [page, movieName]);

  return (
    <div>
      <title>Movies</title>
      {error && <ErrorMessage />}
      <SearchBar value={movieName} onSearch={searchMovies} />
      {loading && <Loader />}
      {movies.length && <MoviesList items={movies} />}
      {movies.length > 0 && !loading && <LoadMoreBtn onClick={handleClick} />}
    </div>
  );
}
