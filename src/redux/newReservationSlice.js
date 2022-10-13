/* eslint-disable no-return-await */
/* eslint-disable camelcase */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  date: '',
  group_id: 0,
  city: '',
};

export const newreservation = createAsyncThunk(
  'new/reservation',
  async ({
    date, group_id, city, user_id,
  }) => await axios.post('http://127.0.0.1:3001/reservations', {
    date, group_id, city, user_id,
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
