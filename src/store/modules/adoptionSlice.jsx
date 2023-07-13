import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'C2MzFfwNUIQpRgAuedoJ%2FafVFcvGGpz9bgyHhMzD2vUSwIwe31IUIbMMZgkO%2BIi1XBzMqfJ4D7zsW1kcFbnzBA%3D%3D';
const initialState = {
   data: [],
   loading: true,
   state: null,
   varietyData: [],
   varietyDataSate: null,
};
export const getAdoptions = createAsyncThunk('adoptions/getAdoptions', async filter => {
   const { currentPageNum, kindCd } = filter;

   let url = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20230101&endde=20230713&pageNo=${currentPageNum}&numOfRows=12&upkind=417000`;
   if (kindCd) {
      url += `&kind=${kindCd}`;
   }
   url += `&_type=json&serviceKey=${API_KEY}`;
   console.log(url);
   const res = await axios.get(url);
   return res.data.response.body.items.item;
});
export const getVarietyData = createAsyncThunk('adoptions/getVarietyData', async () => {
   const res = await axios.get(
      `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/kind?up_kind_cd=417000&_type=json&serviceKey=${API_KEY}`,
   );
   return res.data.response.body.items.item;
});
const adoptionSlice = createSlice({
   name: 'adoptions',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getAdoptions.pending, (state, action) => {
            state.state = 'pending';
            state.loading = true;
         })
         .addCase(getAdoptions.fulfilled, (state, action) => {
            state.state = 'fulfilled';
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(getAdoptions.rejected, (state, action) => {
            state.state = 'rejected';
            state.loading = true;
         })
         .addCase(getVarietyData.fulfilled, (state, action) => {
            state.varietyDataSate = 'fulfilled';
            state.varietyData = action.payload;
         });
   },
});

export const {} = adoptionSlice.actions;
export default adoptionSlice.reducer;
