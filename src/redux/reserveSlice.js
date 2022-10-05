import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    reservations: [],
};

export const fetchReservation = createAsyncThunk('reservation/fetchReservation', () => axios.get('http://127.0.0.1:3001/reservations').then((response) => response.data));

const reservationSlice = createSlice({
    name: 'reservedClass',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchReservation.fulfilled, (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.reservations = action.payload;
        });
    },
});

export default reservationSlice.reducer;