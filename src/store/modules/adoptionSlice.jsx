import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   data: [],
   loading: true,
   state: null,
};
export const getAdoptions = createAsyncThunk('adoptions/getAdoptions', async () => {
   const API_KEY = 'C2MzFfwNUIQpRgAuedoJ%2FafVFcvGGpz9bgyHhMzD2vUSwIwe31IUIbMMZgkO%2BIi1XBzMqfJ4D7zsW1kcFbnzBA%3D%3D';
   const res = await axios.get(
      `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&pageNo=1&numOfRows=999&upkind=417000&_type=json&state&=notice&serviceKey=${API_KEY}`,
   );
   console.log(res.data.response.body.items.item);
   return res.data.response.body.items.item.filter(item => !item.processState.includes('종료'));
});
const adoptionSlice = createSlice({
   name: 'adoptions',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getAdoptions.pending, (state, action) => {
            state.state = 'loading';
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
         });
   },
});

export const {} = adoptionSlice.actions;
export default adoptionSlice.reducer;
