import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  // dispatch function is like a big funnel
  const res = await axios.get('/api/current_user'); // relative path is used here -- proxy is used in dev
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  // assumes the back-end with send back an updated user model with the correct number of credits so same dispatch
  dispatch({ type: FETCH_USER, payload: res.data });
};
