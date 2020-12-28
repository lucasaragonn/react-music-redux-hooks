import { createSlice } from '@reduxjs/toolkit';
import { IArtist } from 'interfaces';

interface IInitialState {
  details: IArtist;
  relatedArtists: IArtist[];
}

let initialState: IInitialState = {
  details: null,
  relatedArtists: [],
};

const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    setDetails(state, action) {
      state.details = action.payload;
    },
    setRelatedArtists(state, action) {
      state.relatedArtists = action.payload;
    },
  },
});

export const { setDetails, setRelatedArtists } = artistsSlice.actions;

export default artistsSlice.reducer;
