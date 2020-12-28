import { AppThunk } from 'store';
import axios from 'axios';

export const apiKey = '5db48e1f3a0a4580bad47849f1317bd0';
export const baseUrl = 'https://music.musicaudience.info/api/v1/music';

export const fetchThunkUtility = (
  url: string,
  callback: Function
): AppThunk => async () => {
  try {
    const response = await axios.get(url);

    if (response) {
      callback(response.data.data);
    }
  } catch (err) {
    console.error(err.toString());
  }
};
