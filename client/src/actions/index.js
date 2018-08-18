import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

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

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({type: FETCH_USER, payload: res.data });
}

export const fetchSurveys = () => async dispatch => {
  const res=await axios.get('/api/surveys');

  dispatch({type: FETCH_SURVEYS, payload: res.data});
}