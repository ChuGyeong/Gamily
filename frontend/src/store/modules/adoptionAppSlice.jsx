import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   adoptionAppData: [],
   myAdoptionApp: [],
};
export const getAdoptionAppData = createAsyncThunk('adoptionApp/getAdoptionAppData', async () => {
   const res = await axios.get(`http://localhost:3000/adoptionApp/getAdoptionAppData`);
   return res.data;
});
export const getMyAdoptionApp = createAsyncThunk('adoptionApp/getMyAdoptionApp', async authEmail => {
   const res = await axios.get(`http://localhost:3000/adoptionApp/getMyAdoptionApp/${authEmail}`);
   return res.data;
});
export const addAdoptionApp = createAsyncThunk('adoptionApp/addAdoptionApp', async propsData => {
   const res = await axios.post(`http://localhost:3000/adoptionApp/addAdoptionApp`, { propsData });
   return res.data;
});
export const editAdoptionApp = createAsyncThunk('adoptionApp/editAdoptionApp', async propsData => {
   const res = await axios.put(`http://localhost:3000/adoptionApp/editAdoptionApp`, { propsData });
   return res.data;
});
export const delAdoptionApp = createAsyncThunk('adoptionApp/delAdoptionApp', async AdoptionAppID => {
   const res = await axios.delete(`http://localhost:3000/adoptionApp/delAdoptionApp/${AdoptionAppID}`);
   return res.data;
});
export const recognitionAdoptionApp = createAsyncThunk('adoptionApp/recognitionAdoptionApp', async AdoptionAppID => {
   const res = await axios.put(`http://localhost:3000/adoptionApp/recognitionAdoptionApp`, { AdoptionAppID });
   return res.data;
});
export const adoptionAppSlice = createSlice({
   name: 'adoptionApp',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getAdoptionAppData.fulfilled, (state, action) => {
            state.adoptionAppData = action.payload;
         })
         .addCase(getMyAdoptionApp.fulfilled, (state, action) => {
            state.myAdoptionApp = action.payload;
         })
         .addCase(addAdoptionApp.fulfilled, (state, action) => {
            state.myAdoptionApp = action.payload;
         })
         .addCase(editAdoptionApp.fulfilled, (state, action) => {
            state.myAdoptionApp = action.payload;
         })
         .addCase(delAdoptionApp.fulfilled, (state, action) => {
            state.myAdoptionApp = action.payload;
         })
         .addCase(recognitionAdoptionApp.fulfilled, (state, action) => {
            // state.myAdoptionApp = action.payload;
         });
   },
});
export const {} = adoptionAppSlice.actions;
export default adoptionAppSlice.reducer;
