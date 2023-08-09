import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   noticeData: [],
};
export const getNoticeData = createAsyncThunk('notice/getNoticeData', async () => {
   const res = await axios.get(`http://localhost:3000/notice/getNoticeData`);
   return res.data;
});
export const addNotice = createAsyncThunk('notice/addNotice', async propsData => {
   const res = await axios.post(`http://localhost:3000/notice/addNotice`, propsData);
   return res.data;
});
export const editNotice = createAsyncThunk('notice/editNotice', async propsData => {
   const res = await axios.put(`http://localhost:3000/notice/editNotice`, propsData);
   return res.data;
});
export const delNotice = createAsyncThunk('notice/delNotice', async noticeItemID => {
   const res = await axios.delete(`http://localhost:3000/notice/delNotice/${noticeItemID}`);
   return res.data;
});
export const increaseHitsNotice = createAsyncThunk('notice/increaseHitsNotice', async propsData => {
   const res = await axios.put(`http://localhost:3000/notice/increaseHitsNotice`, propsData);
   return res.data;
});
//
export const noticeSlice = createSlice({
   name: 'notice',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getNoticeData.fulfilled, (state, action) => {
            state.noticeData = action.payload;
         })
         .addCase(addNotice.fulfilled, (state, action) => {
            state.noticeData = action.payload;
         })
         .addCase(editNotice.fulfilled, (state, action) => {
            state.noticeData = action.payload;
         })
         .addCase(delNotice.fulfilled, (state, action) => {
            state.noticeData = action.payload;
         })
         .addCase(increaseHitsNotice.fulfilled, (state, action) => {
            state.noticeData = action.payload;
         });
   },
});

export const {} = noticeSlice.actions;
export default noticeSlice.reducer;
