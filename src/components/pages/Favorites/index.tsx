import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import ArtistItem from 'components/ArtistItem';
import Menu from 'components/Menu';
import styles from './index.module.scss';

const FavoritesPage = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const length = Object.keys(favorites).length;
  const noFavorites = `You don't have favorites`;

  return (
    <div className={styles.favorites}>
      <Menu items={[{ text: 'home', link: '/' }]} />

      <h1>My Favorites</h1>
      {length ? (
        <div className={styles.list}>
          {Object.keys(favorites).map((artist: string) => {
            return (
              <ArtistItem key={artist} data={favorites[artist]} favorites />
            );
          })}
        </div>
      ) : (
        <div>{noFavorites}</div>
      )}
    </div>
  );
};

export default FavoritesPage;
