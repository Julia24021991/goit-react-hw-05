import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
import { FcSearch } from 'react-icons/fc';
import { IconContext } from 'react-icons';

export const SearchBar = ({ value, onSearch }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.query;

    if (value === '') {
      toast.error('The string is empty!');
      return;
    }

    onSearch(value);
    event.target.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="query"
          defaultValue={value}
        />
        <IconContext.Provider value={{ color: '#D5C8BD' }}>
          <button className={css.button} type="submit">
            <FcSearch /> Click to search
          </button>
        </IconContext.Provider>
      </form>
    </header>
  );
};
