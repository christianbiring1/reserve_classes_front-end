import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    groupList: [],
};

export const fetchGroups = createAsyncThunk('groups/fetchGroups', () => axios.get('http://127.0.0.1:3001/groups').then((response) => response.data));

const groupSlice = createSlice({
    name: 'group',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchGroups.fulfilled, (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.groupList = action.payload;
        });
    },
});

export default groupSlice.reducer;
