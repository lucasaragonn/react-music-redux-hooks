import { createSlice } from '@reduxjs/toolkit';
import { IGenre } from 'interfaces';

interface IInitialState {
  list: IGenre[];
}

let initialState: IInitialState = {
  list: [],
};

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setGenres(state, action) {
      state.list = action.payload;
    },
  },
});

export const { setGenres } = genresSlice.actions;

export default genresSlice.reducer;
