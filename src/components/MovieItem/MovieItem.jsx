export const MovieItem = ({ item: { poster_path, title } }) => {
  return (
    <div>
      <p>{title}</p>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width="360" />
    </div>
  );
};
