/* eslint-disable no-param-reassign */
/* eslint-disable  */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  groups: [],

};
 export const base='http://localhost:3001'


export const postGrp = async (hotel) => axios({
  method: 'post',
  url: `${base}/groups`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  data: hotel,
});
export const putGroup = createAsyncThunk(
  'put_hotels',
  async (hotels) => {
    const response = await postGrp(hotels);
    return response.data;
  },
);


export const newGroupSlice = createSlice({
  name: 'newGroup',
  initialState,
  extraReducers: {
    [putGroup.fulfilled]: (state, action) => (
      state.groups = [...state,
        action.payload]

    ),
  },
});

export default newGroupSlice.reducer;
