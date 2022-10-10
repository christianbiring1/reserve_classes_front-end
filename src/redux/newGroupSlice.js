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
export const deleteGrp = async (hotel) => axios({
  method: 'delete',
  url: `${base}/groups/${hotel}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
export const delGroup = createAsyncThunk(
  'del_group',
  async (group) => {
    const response = await deleteGrp(group);
    return response.data;
  },
);
export const putGroup = createAsyncThunk(
  'put_group',
  async (groups) => {
    const response = await postGrp(groups);
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
