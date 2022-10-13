import * as apiHelper from '../api/api_helper';

const getReservation = (payload) => ({ type: 'GET_RESERVATIONS', payload });
const removeReservation = (payload) => ({ type: 'DELETE_RESERVATION', payload });

const initialState = {
  reservations: [],
};

export const fetchReservations = (payload) => async (dispatch) => {
  try {
    const response = await apiHelper.getReservation();
    dispatch(getReservation(response.data));
  } catch (error) {
    return error;
  }
  return payload;
};

export const cancelReservation = (id) => async (dispatch) => {
  try {
    await apiHelper.deleteReservation(id);
    dispatch(removeReservation(id));
  } catch (error) {
    return error;
  }
  return id;
};

const updateReservations = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RESERVATIONS':
      return { ...state, reservations: action.payload };
    case 'DELETE_RESERVATION':
      return { reservations: state.reservations.data.filter((r) => r.id !== action.payload) };
    default:
      return state;
  }
};

export default updateReservations;
