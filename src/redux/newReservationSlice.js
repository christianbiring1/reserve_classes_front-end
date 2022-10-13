/* eslint-disable no-return-await */
/* eslint-disable camelcase */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from './api/api_helper';

const initialState = {
  date: '',
  group_id: 0,
  city: '',
};

export const newreservation = createAsyncThunk(
  'new/reservation',
  async ({
    date, group_id, city, user_id,
  }) => await axios({
    method: 'post',
    url: `${URL}/reservations`,
    data: {
      date, group_id, city, user_id,
    },
    headers: {
      Authorization: `Bearer ${JSON.parse(JSON.parse(localStorage['persist:session']).session).token}`,
    },
  }),
);

export const newReservationSlice = createSlice({
  name: 'newreservation',
  initialState,
  extraReducers: {
    [newreservation.fulfilled]: (state, action) => ({
      ...state,
      date: action.payload.date,
      group_id: action.payload.group_id,
      city: action.payload.city,

    }),
  },
});

export default newReservationSlice.reducer;
