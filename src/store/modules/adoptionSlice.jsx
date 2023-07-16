import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getToday = (daysBefore = 0) => {
   const date = new Date();
   date.setDate(date.getDate() - daysBefore);
   const year = date.getFullYear();
   const month = String(date.getMonth() + 1).padStart(2, '0');
   const day = String(date.getDate()).padStart(2, '0');
   return `${year}${month}${day}`;
};
const API_KEY = 'C2MzFfwNUIQpRgAuedoJ%2FafVFcvGGpz9bgyHhMzD2vUSwIwe31IUIbMMZgkO%2BIi1XBzMqfJ4D7zsW1kcFbnzBA%3D%3D';
const initialState = {
   data: [],
   loading: true,
   state: null,
   varietyData: [],
   varietyDataSate: null,
   orgData: [],
   orgDataState: null,
};
export const getAdoptions = createAsyncThunk('adoptions/getAdoptions', async filter => {
   const { kindCd, sexCd, minWeight, maxWeight, orgCd, adoptionId } = filter;
   const twentyDaysAgo = getToday(20); // 20일 전 날짜
   const tenDaysAgo = getToday(10); // 10일 전 날짜
   let url = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=${twentyDaysAgo}&endde=${tenDaysAgo}&pageNo=1&state=notice&numOfRows=1000&upkind=417000`;
   if (kindCd) url += `&kind=${kindCd}`;
   if (orgCd) url += `&upr_cd=${orgCd}`;

   url += `&_type=json&serviceKey=${API_KEY}`;
   const res = await axios.get(url);
   let resultData = await res.data.response.body.items.item;
   if (sexCd) resultData = resultData.filter(item => item.sexCd === sexCd);
   if (minWeight && maxWeight) {
      resultData = resultData.filter(item => {
         const weightValue = parseFloat(item.weight);
         return Number(minWeight) <= weightValue && weightValue <= Number(maxWeight);
      });
   }
   if (adoptionId) {
      resultData = resultData.find(item => item.desertionNo === adoptionId);
   }
   console.log(resultData);
   return resultData;
});
export const getVarietyData = createAsyncThunk('adoptions/getVarietyData', async () => {
   const res = await axios.get(
      `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/kind?up_kind_cd=417000&_type=json&serviceKey=${API_KEY}`,
   );
   return res.data.response.body.items.item;
});
export const getOrgData = createAsyncThunk('adoptions/getOrgData', async () => {
   const res = await axios.get(
      `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?numOfRows=100&pageNo=1&_type=json&serviceKey=${API_KEY}`,
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
         })
         .addCase(getOrgData.fulfilled, (state, action) => {
            state.orgDataState = 'fulfilled';
            state.orgData = action.payload;
         });
   },
});

export const {} = adoptionSlice.actions;
export default adoptionSlice.reducer;
