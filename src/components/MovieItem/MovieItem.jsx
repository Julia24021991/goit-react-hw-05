import css from './MovieItem.module.css';

export const MovieItem = ({ item: { poster_path, title } }) => {
  return (
    <div>
      <p>{title}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width="360"
        height="360"
        className={css.img}
      />
    </div>
  );
};
