import * as apiHelper from '../api/api_helper';

const login = (payload) => ({ type: 'LOGIN', payload });
const signUp = (payload) => ({ type: 'SIGNUP', payload });
const checkLogin = (payload) => ({ type: 'CHECK_LOGIN', payload });

const initialState = {
  logged_in: false,
  user: {},
  token: null,
};

export const sessionLogin = (payload) => async (dispatch) => {
  try {
    const response = await apiHelper.login(payload);
    if (response.data.error) {
      return response.data.error;
    }
    dispatch(login(response.data));
  } catch (error) {
    return error;
  }
  return payload;
};

export const sessionSignUp = (payload) => async (dispatch) => {
  try {
    const response = await apiHelper.signUp(payload);
    dispatch(signUp(response.data));
  } catch (error) {
    return error;
  }
  return payload;
};

export const sessionIsLoggedIn = (payload) => async (dispatch) => {
  try {
    const response = await apiHelper.checkLogin();
    dispatch(checkLogin(response.data));
  } catch (error) {
    return error;
  }
  return payload;
};

const updateSession = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    case 'SIGNUP':
      return action.payload;
    case 'CHECK_LOGIN':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default updateSession;
