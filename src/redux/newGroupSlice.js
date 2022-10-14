/* eslint-disable no-param-reassign */
/* eslint-disable  */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from './api/api_helper';

const initialState = {
  groups: [],

};


export const postGrp = async (group) => axios({
  method: 'post',
  url: `${URL}/groups`,
  headers: {
    Authorization: `Bearer ${JSON.parse(JSON.parse(localStorage['persist:session']).session).token}`,
  },
  data: group,
});
export const deleteGrp = async (group) => axios({
  method: 'delete',
  url: `${URL}/groups/${group}`,
  headers: {
    Authorization: `Bearer ${JSON.parse(JSON.parse(localStorage['persist:session']).session).token}`,
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