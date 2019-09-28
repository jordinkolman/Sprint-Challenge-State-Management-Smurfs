import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';

export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const SET_SMURF_TO_EDIT = 'SET_SMURF_TO_EDIT';

export const UPDATE_SMURF_START = 'UPDATE_SMURF_START';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';
export const UPDATE_SMURF_FAILURE = 'UPDATE_SMURF_FAILURE';

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START });
  loadProgressBar();
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: GET_SMURFS_FAILURE, payload: err.response }),
    );
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  loadProgressBar();
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({ type: ADD_SMURF_SUCCESS }))
    .catch(err => dispatch({ type: ADD_SMURF_FAILURE, payload: err.response }));
};

export const setSmurfToEdit = smurf => {
  return {
    type: SET_SMURF_TO_EDIT,
    payload: smurf,
  };
};

export const updateSmurf = (id, update) => dispatch => {
  dispatch({ type: UPDATE_SMURF_START });
  loadProgressBar();
  axios
    .put(`http://localhost:3333/smurfs/${id}`, update)
    .then(res => dispatch({ type: UPDATE_SMURF_SUCCESS }))
    .catch(err =>
      dispatch({ type: UPDATE_SMURF_FAILURE, payload: err.response }),
    );
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  loadProgressBar();
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURF_SUCCESS }))
    .catch(err =>
      dispatch({ type: DELETE_SMURF_FAILURE, payload: err.response }),
    );
};