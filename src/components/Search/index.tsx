import React, { useState } from 'react';
import useDebounce from 'components/hooks/debounce';
import useGenres from 'components/hooks/genres';
import { IGenre } from 'interfaces';
import styles from './index.module.scss';

interface SearchProps {
  onSearch: (genre: number) => void;
}

interface SearchStateProps {
  query: string;
  showSuggestions: boolean;
}

const Search = ({ onSearch }: SearchProps) => {
  const [state, setState] = useState<SearchStateProps>({
    query: '',
    showSuggestions: false,
  });

  const debouncedValue = useDebounce(state.query, 500);
  const { genres } = useGenres(debouncedValue);

  const handleClick = ({ id, name }) => {
    setState({ ...state, showSuggestions: false, query: name });
    onSearch(id);
  };

  return (
    <div className={styles.search}>
      <label htmlFor="search">Search by genre:</label>
      <input
        placeholder="What music do you like?"
        autoComplete="off"
        value={state.query}
        id="search"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setState({ query: e.target.value, showSuggestions: true });
        }}
      />
      {state.showSuggestions && debouncedValue && genres.length > 0 ? (
        <div className={styles.genres}>
          <ul>
            {genres.map((g: IGenre, i: number) => (
              <li onClick={() => handleClick(g)} key={i}>
                {g.name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Search;
