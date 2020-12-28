import { useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { setArtists, updateLoading } from 'store/features/artists';
import { RootState } from 'store/rootReducer';
import { baseUrl, apiKey, fetchThunkUtility } from 'utils/api';

const useArtists = (genre: number) => {
  const dispatch = useDispatch();

  const state = useSelector((state: RootState) => state.artists);
  const { artists, loading } = state;

  useEffect(() => {
    if (genre) {
      const url = `${baseUrl}/genres/${genre}/artists?apikey=${apiKey}`;

      dispatch(updateLoading(true));

      dispatch(
        fetchThunkUtility(url, (data) => {
          batch(() => {
            dispatch(setArtists(data));
            dispatch(updateLoading(false));
          });
        })
      );
    }
  }, [genre]);

  return { artists, loading };
};

export default useArtists;
