import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   data: [],
   loading: true,
   status: null,
};

export const getKnowledge = createAsyncThunk('knowledge/getKnowledge', async () => {
   const res = await axios.get(
      'https://gist.githubusercontent.com/ChuGyeong/e44e6ec7742c99bb7ae53e5953aa8a7e/raw/5d8b581493053be63222821287a22b3d2ba9014c/gamilyKnowledge.json',
   );
   return res.data;
});

const knowledgeSlice = createSlice({
   name: 'knowledge',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getKnowledge.pending, (state, action) => {
            state.status = 'loading';
            state.loading = true;
         })
         .addCase(getKnowledge.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(getKnowledge.rejected, (state, action) => {
            state.status = 'rejected';
            state.loading = false;
         });
   },
});

export default knowledgeSlice.reducer;
