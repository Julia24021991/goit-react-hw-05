import { CastItem } from '../CastItem/CastItem';
import css from "./CastItemList.module.css"

export const CastItemList = ({ authors }) => {
  return (
    <ul className={css.listCast}>
      {authors &&
        authors.map(author => (
          <li key={author.id}>
            <CastItem author={author} />
          </li>
        ))}
    </ul>
  );
};
