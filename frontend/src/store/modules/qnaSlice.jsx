import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
   qnaData: [],
   myQna: [],
};
export const getQnaData = createAsyncThunk('qna/getQnaData', async () => {
   const res = await axios.get(`http://localhost:3000/qna/getQnaData`);
   console.log('동작함?');
   return res.data;
});
export const getMyQna = createAsyncThunk('qna/getMyQna', async propsData => {
   const res = await axios.post(`http://localhost:3000/qna/getMyQna`, { propsData });
   return res.data;
});
export const addQuestion = createAsyncThunk('qna/addQuestion', async () => {
   const res = await axios.get(`http://localhost:3000/qna/addQuestion`);
   return res.data;
});
export const editQuestion = createAsyncThunk('qna/editQuestion', async propsData => {
   const res = await axios.put(`http://localhost:3000/qna/editQuestion`, { propsData });
   return res.data;
});
export const delQuestion = createAsyncThunk('qna/delQuestion', async () => {
   const res = await axios.delete(`http://localhost:3000/qna/delQuestion`);
   return res.data;
});
export const addAnswer = createAsyncThunk('qna/addAnswer', async () => {
   const res = await axios.put(`http://localhost:3000/qna/addAnswer`);
   return res.data;
});
export const qnaSlice = createSlice({
   name: 'qna',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getQnaData.fulfilled, (state, action) => {
            state.qnaData = action.payload;
            console.log('동작확인');
            console.log(action.payload);
            // 문제발생. 해결중
         })
         .addCase(getMyQna.fulfilled, (state, action) => {
            state.myQna = action.payload;
         })
         .addCase(addQuestion.fulfilled, (state, action) => {
            state.qnaData = action.payload;
         })
         .addCase(editQuestion.fulfilled, (state, action) => {
            state.qnaData = action.payload;
         })
         .addCase(delQuestion.fulfilled, (state, action) => {
            state.qnaData = action.payload;
         })
         .addCase(addAnswer.fulfilled, (state, action) => {
            state.qnaData = action.payload;
         });
   },
});

export const {} = qnaSlice.actions;
export default qnaSlice.reducer;
