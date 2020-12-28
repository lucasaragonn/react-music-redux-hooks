import { combineReducers } from '@reduxjs/toolkit';
import artistsReducer from './features/artists';
import genresReducer from './features/genres';
import detailsReducer from './features/details';
import favoritesReducer from './features/favorites';

const rootReducer = combineReducers({
  artists: artistsReducer,
  genres: genresReducer,
  details: detailsReducer,
  favorites: favoritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
