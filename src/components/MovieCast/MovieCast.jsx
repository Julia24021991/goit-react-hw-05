import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCreditsById } from '../api';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { CastItemList } from '../CastItemList/CastItemList';

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchMovieCreditsById(movieId, {
          abortController: controller,
        });
        setCast(fetchedData.cast);
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
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {cast && <CastItemList authors={cast} />}
    </div>
  );
}
