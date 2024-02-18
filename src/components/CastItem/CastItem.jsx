export const CastItem = ({ author: { name, character, profile_path } }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} width="240" />
      <p>Name: {name}</p>
      <p>Character: {character}</p>
    </div>
  );
};
