import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    name: "",
    description: "",
    rating: 0,
    title: "",

}


export const newgroup = createAsyncThunk(
    `new/Group`,
    async ({ name, description, rating, title }) => await axios.post(`http://localhost:3001/groups`, { name, description, rating, title })
);


export const newGroupSlice = createSlice({
    name: 'newGroup',
    initialState,
    extraReducers: {
        [newgroup.fulfilled]: (state, action) => ({
            ...state,
            name: action.payload.name,
            description: action.payload.description,
            rating: action.payload.rating,
            title: action.payload.title,

        }),
    },
});

export default newGroupSlice.reducer;
