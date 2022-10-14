import * as apiHelper from '../api/api_helper';

const getClasses = (payload) => ({ type: 'GET_CLASSES', payload });
const getDetails = (payload) => ({ type: 'GET_DETAILS', payload });

const initialState = {
  classes: [],
  details: {},
};

export const fetchClasses = (payload) => async (dispatch) => {
  try {
    const response = await apiHelper.getClasses();
    dispatch(getClasses(response.data));
  } catch (error) {
    return error;
  }
  return payload;
};

export const fetchDetails = (id) => async (dispatch) => {
  try {
    const response = await apiHelper.getClassDetails(id);
    dispatch(getDetails(response.data));
  } catch (error) {
    return error;
  }
  return id;
};

const updateClasses = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CLASSES':
      return { ...state, classes: action.payload };
    case 'GET_DETAILS':
      return { ...state, details: action.payload };
    default:
      return state;
  }
};

export default updateClasses;
