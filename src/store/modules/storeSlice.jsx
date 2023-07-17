import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   data: [],
   loading: true,
   status: null,
};
export const getProduct = createAsyncThunk('product/getProduct', async category => {
   const res = await axios.get(
      `https://gist.githubusercontent.com/ChuGyeong/592f56c5bdd6781a74f303edb1cdccb6/raw/d7ee42cb5ba7131c56f3156b2838370df9ba659e/gamilyStore.json`,
   );
   let resultData = res.data;
   if (category) resultData = resultData.filter(item => item.category === category);
   //  console.log(resultData);
   return resultData;
});
const storeSlice = createSlice({
   name: 'store',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getProduct.pending, (state, action) => {
            state.status = 'loading';
            state.loading = true;
         })
         .addCase(getProduct.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(getProduct.rejected, (state, action) => {
            state.status = 'rejected';
            state.loading = false;
         });
   },
});

export const {} = storeSlice.actions;
export default storeSlice.reducer;
