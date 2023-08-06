import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   quizData: [],
   loading: true,
   status: null,
};
export const getQuiz = createAsyncThunk('quiz/getQuiz', async () => {
   const res = await axios.get(`http://localhost:3000/quiz`);
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
            state.quizData = action.payload;
         })
         .addCase(getQuiz.rejected, (state, action) => {
            state.status = 'rejected';
            state.loading = false;
         });
   },
});

export const {} = quizSlice.actions;
export default quizSlice.reducer;
