import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  // dispatch function is like a big funnel
  const res = await axios.get('/api/current_user'); // relative path is used here -- proxy is used in dev
  dispatch({ type: FETCH_USER, payload: res.data });
};
