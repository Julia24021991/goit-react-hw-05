import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from '../components/api';
import { Loader } from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { BackLink } from '../components/BackLink/BackLink';
import { DetailsMovieItem } from '../components/DetailsMovieItem/DetailsMovieItem';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location.state);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchMovieById(movieId, { abortController: controller });

        setDetails(fetchedData);
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
      <title>Details</title>
      <BackLink href={backLinkHref.current ?? '/'}>Back to movies</BackLink>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {details && <DetailsMovieItem item={details} />}
    </div>
  );
}
