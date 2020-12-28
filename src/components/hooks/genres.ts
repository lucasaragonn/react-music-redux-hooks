import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { setGenres } from 'store/features/genres';
import { apiKey, baseUrl, fetchThunkUtility } from 'utils/api';

const useGenres = (genre: string) => {
  const genres = useSelector((state: RootState) => state.genres.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (genre) {
      const url = `${baseUrl}/genres?apikey=${apiKey}&q=${genre}`;
      dispatch(
        fetchThunkUtility(url, (data) => {
          dispatch(setGenres(data));
        })
      );
    }
  }, [genre]);

  return { genres };
};

export default useGenres;
