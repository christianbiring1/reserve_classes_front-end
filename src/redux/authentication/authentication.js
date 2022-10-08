import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as apiHelper from '../api/api_helper';

const initialState = {
  loggedIn: false,
  user: {},
  error: '',
};

export const login = createAsyncThunk('sessions', async (payload) => {
  try {
    const response = await apiHelper.login(payload);
    if (response.data.error) {
      return response.data.error;
    }
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export const signUp = createAsyncThunk('registrations', async (payload) => {
  try {
    const response = await apiHelper.signUp(payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});
