import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  favorites: {},
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorite(state, action) {
      const artist = action.payload;

      if (!state.favorites[artist.id]) {
        state.favorites[artist.id] = { ...artist, favorited: true };
      } else {
        state.favorites[artist.id] = {
          ...artist,
          favorited: !state.favorites[artist.id].favorited,
        };
      }
    },
    removeFavorite(state, action) {
      const artistId = action.payload.id;
      delete state.favorites[artistId];
    },
  },
});

export const { setFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
