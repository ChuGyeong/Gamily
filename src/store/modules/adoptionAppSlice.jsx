import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   data: JSON.parse(localStorage.getItem('adoptionAppData')) || [],
};
let no = JSON.parse(localStorage.getItem('adoptionAppData'))
   ? JSON.parse(localStorage.getItem('adoptionAppData')).reduce((max, current) => {
        return current.id > max ? current.id : max;
     }, 0) + 1
   : initialState.data.length + 1;

export const adoptionAppSlice = createSlice({
   name: 'adoptionApp',
   initialState,
   reducers: {
      addAdoptionApp(state, action) {
         const { tel1, tel2, tel3 } = action.payload;
         const tel = tel1 + tel2 + tel3;
         state.data = [...state.data, { id: no++, ...action.payload, tel }];
         localStorage.setItem('adoptionAppData', JSON.stringify(state.data));
      },
      editAdoptionApp(state, action) {
         state.data = state.data.map(item => (item.id === action.payload.id ? action.payload : item));
         localStorage.setItem('adoptionAppData', JSON.stringify(state.data));
      },
      delAdoptionApp(state, action) {
         state.data = state.data.filter(item => item.id !== action.payload);
         localStorage.setItem('adoptionAppData', JSON.stringify(state.data));
      },
   },
});

export const { addAdoptionApp, editAdoptionApp, delAdoptionApp } = adoptionAppSlice.actions;
export default adoptionAppSlice.reducer;
