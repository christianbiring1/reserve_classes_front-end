import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  date: '',
  user_id: 1,
  group_id: 1,
};

export const newreservation = createAsyncThunk(
  'new/reservation',
  async ({
    date, user_id, group_id,
  }) => await axios.post('http://127.0.0.1:3001/reservations', {
    date, user_id, group_id,
  }),
);

export const newReservationSlice = createSlice({
  name: 'newreservation',
  initialState,
  extraReducers: {
    [newreservation.fulfilled]: (state, action) => ({
      ...state,
      date: action.payload.date,
      user_id: action.payload.user_id,
      group_id: action.payload.group_id,

    }),
  },
});

export default newReservationSlice.reducer;
