import { configureStore } from '@reduxjs/toolkit';
import adoptionsR from './modules/adoptionSlice';
import storeR from './modules/storeSlice';

export const store = configureStore({
   reducer: { adoptionsR, storeR },
});
