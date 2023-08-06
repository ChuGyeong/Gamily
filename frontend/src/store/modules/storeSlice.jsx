import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   storeData: [],
   storeItem: {},
   loading: true,
   status: null,
};
// 상품 전체 데이터 가져오기
export const getStoreData = createAsyncThunk('product/getStoreData', async () => {
   const res = await axios.get(`http://localhost:3000/store`);
   return res.data;
});
// 특정 상품 데이터 가져오기
export const getStoreItem = createAsyncThunk('product/getProduct', async productID => {
   const res = await axios.get(`http://localhost:3000/store/${productID}`);
   return res.data;
});
const storeSlice = createSlice({
   name: 'store',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getStoreData.pending, (state, action) => {
            state.status = 'loading';
            state.loading = true;
         })
         .addCase(getStoreData.fulfilled, (state, action) => {
            const { storeData } = action.payload;
            state.status = 'fulfilled';
            state.loading = false;
            state.storeData = storeData;
         })
         .addCase(getStoreData.rejected, (state, action) => {
            state.status = 'rejected';
            state.loading = false;
         })
         .addCase(getStoreItem.fulfilled, (state, action) => {
            const { storeItem } = action.payload;
            state.storeItem = storeItem;
            state.status = 'fulfilled';
         });
   },
});

export const {} = storeSlice.actions;
export default storeSlice.reducer;
