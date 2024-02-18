import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.container}>
      <button onClick={onClick}>Load More</button>
    </div>
  );
};
