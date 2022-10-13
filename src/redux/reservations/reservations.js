import * as apiHelper from '../api/api_helper';

const getReservation = (payload) => ({ type: 'GET_RESERVATIONS', payload });

const initialState = {
    reservations: []
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



const updateReservations = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RESERVATIONS':
            return { ...state, reservations: action.payload };
        default:
            return state;
    }
};

export default updateReservations;
