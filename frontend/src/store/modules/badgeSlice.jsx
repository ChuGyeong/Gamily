import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   badgeData: [],
   myBadge: [],
};
export const getBadgeData = createAsyncThunk('badge/getBadgeData', async propsData => {
   const res = await axios.get(`http://localhost:3000/badge/`);
   return res.data;
});
export const getMyBadge = createAsyncThunk('badge/getMyBadge', async propsData => {
   const res = await axios.get(`http://localhost:3000/badge/${propsData}`);
   return res.data;
});
export const addBadge = createAsyncThunk('badge/addBadge', async propsData => {
   const res = await axios.post(`http://localhost:3000/badge/addBadge`, { propsData });
   return res.data;
});

const badgeSlice = createSlice({
   name: 'badge',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getBadgeData.fulfilled, (state, action) => {
            state.badgeData = action.payload;
         })
         .addCase(getMyBadge.fulfilled, (state, action) => {
            state.myBadge = action.payload;
         })
         .addCase(addBadge.fulfilled, (state, action) => {
            state.myBadge = action.payload;
         });
   },
});
export const {} = badgeSlice.actions;
export default badgeSlice.reducer;
