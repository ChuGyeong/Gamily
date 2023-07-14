import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   data: [],
   loading: true,
   status: null,
};
export const getQuiz = createAsyncThunk('quiz/getQuiz', async () => {
   const res = await axios.get(
      `https://gist.githubusercontent.com/ChuGyeong/1425da871eab0cb6526b51b385524f8b/raw/4e474a84e177b4651bcd41812090f97714fe5309/gamilyQuiz.json`,
   );
   return res.data[0];
});
const quizSlice = createSlice({
   name: 'quiz',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getQuiz.pending, (state, action) => {
            state.status = 'loading';
            state.loading = true;
         })
         .addCase(getQuiz.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(getQuiz.rejected, (state, action) => {
            state.status = 'rejected';
            state.loading = false;
         });
   },
});

export const {} = quizSlice.actions;
export default quizSlice.reducer;
