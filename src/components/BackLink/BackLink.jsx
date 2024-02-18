import { NavLink } from 'react-router-dom';
import css from './BackLink.module.css';

export const BackLink = ({ href, children }) => {
  return (
    <div className={css.container}>
      <NavLink to={href}>{children}</NavLink>
    </div>
  );
};
