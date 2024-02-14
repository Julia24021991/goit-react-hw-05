import { MovieItem } from '../MovieItem/MovieItem';
import { useLocation, NavLink } from 'react-router-dom';

import css from '../MoviesList/MoviesList.module.css';

export const MoviesList = ({ items }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id}>
          <NavLink to={`/items/${item.id}`} state={location}>
            <MovieItem item={item} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
