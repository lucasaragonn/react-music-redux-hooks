import { createSlice } from '@reduxjs/toolkit';
import { IArtist } from 'interfaces';

interface IInitialState {
  artists: IArtist[];
  loading: boolean;
}

let initialState: IInitialState = {
  artists: [],
  loading: false,
};

const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    setArtists(state, action) {
      state.artists = action.payload;
    },
    updateLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setArtists, updateLoading } = artistsSlice.actions;

export default artistsSlice.reducer;
