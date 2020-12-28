import React from 'react';
import { IArtist } from 'interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite, setFavorite } from 'store/features/favorites';
import { RootState } from 'store/rootReducer';

interface FavoriteProps {
  artist: IArtist;
  removeCallback?: boolean;
}

export const Favorite = ({ artist, removeCallback }: FavoriteProps) => {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );

  const saveFavorite = (artist: IArtist) => {
    if (removeCallback) {
      return dispatch(removeFavorite(artist));
    }
    return dispatch(setFavorite(artist));
  };

  const isFavorited = favorites[artist.id]
    ? favorites[artist.id].favorited
    : false;

  const styles = { cursor: 'pointer', color: isFavorited ? 'red' : '#bbb' };

  return (
    <div
      title="Save as Favorite"
      style={styles}
      onClick={() => saveFavorite(artist)}
    >
      &hearts;
    </div>
  );
};

export default Favorite;
