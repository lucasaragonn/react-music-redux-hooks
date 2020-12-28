import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import { apiKey, baseUrl, fetchThunkUtility } from 'utils/api';
import { setDetails, setRelatedArtists } from 'store/features/details';

const useDetails = (id: string) => {
  const dispatch = useDispatch();

  const state = useSelector((state: RootState) => state.details);
  const { details, relatedArtists } = state;

  useEffect(() => {
    if (id) {
      const url = `${baseUrl}/artists/${id}`;

      dispatch(
        fetchThunkUtility(`${url}?apikey=${apiKey}`, (data) => {
          dispatch(setDetails(data[0]));
        })
      );

      dispatch(
        fetchThunkUtility(`${url}/similar?apikey=${apiKey}`, (data) => {
          dispatch(setRelatedArtists(data));
        })
      );
    }
  }, [id]);

  return { details, relatedArtists };
};

export default useDetails;
