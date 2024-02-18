import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import css from './DetailsMovieItem.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const DetailsMovieItem = ({
  item: { title, poster_path, release_date, budget, vote_average, overview, genres },
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className={css.container}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="360"
          height="360"
        />
        <div className={css.details}>
          <p>Release Date: {release_date}</p>
          <p>Budget: {budget}</p>
          <p>Average score: {vote_average}</p>
          <p>Overview: {overview}</p>
          <ul>
            <p>Genres: </p>
            {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
          <div className={css.navlinks}>
            <NavLink to="cast" className={buildLinkClass}>
              Cast
            </NavLink>
            <NavLink to="reviews" className={buildLinkClass}>
              Reviews
            </NavLink>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};
