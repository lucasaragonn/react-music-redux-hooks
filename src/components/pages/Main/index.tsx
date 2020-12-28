import React, { useState } from 'react';
import Search from 'components/Search';
import Artists from 'components/Artists';
import Menu from 'components/Menu';
import styles from './index.module.scss';

const MainPage = () => {
  const [genre, setGenre] = useState(0);

  const search = (genre: number) => {
    setGenre(genre);
  };

  return (
    <div className={styles.main}>
      <Menu items={[{ text: 'favorites', link: '/favorites' }]} />
      <Search onSearch={search} />
      <Artists genre={genre} />
    </div>
  );
};

export default MainPage;
