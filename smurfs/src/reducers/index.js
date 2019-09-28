import {
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE,
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILURE,
    UPDATE_SMURF_START,
    UPDATE_SMURF_SUCCESS,
    UPDATE_SMURF_FAILURE,
    SET_SMURF_TO_EDIT,
    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAILURE,
  } from '../actions';
  
  const initialState = {
    smurfs: [],
    error: '',
    isLoading: false,
    isEditing: false,
    smurfToEdit: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_SMURF_START:
        return {
          ...state,
          isLoading: true,
          error: '',
        };
      case ADD_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: [],
          isLoading: false,
          error: '',
        };
      case ADD_SMURF_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case GET_SMURFS_START:
        return {
          ...state,
          isLoading: true,
          error: '',
        };
      case GET_SMURFS_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          isLoading: false,
          error: '',
        };
      case GET_SMURFS_FAILURE:
        return {
          ...state,
          smurfs: [],
          isLoading: false,
          error: action.payload,
        };
      case DELETE_SMURF_START:
        return {
          ...state,
          isLoading: true,
          error: '',
        };
      case DELETE_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: [],
          isLoading: false,
          error: '',
        };
      case DELETE_SMURF_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case SET_SMURF_TO_EDIT:
        return {
          ...state,
          isEditing: true,
          smurfToEdit: action.payload,
        };
      case UPDATE_SMURF_START:
        return {
          ...state,
          isLoading: true,
          error: '',
          isEditing: true,
        };
      case UPDATE_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: [],
          isLoading: false,
          error: '',
          isEditing: false,
          smurfToEdit: null,
        };
      case UPDATE_SMURF_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
          isEditing: false,
          smurfToEdit: null,
        };
      default:
        return state;
    }
  };
  
  export default reducer;