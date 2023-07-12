import { configureStore } from '@reduxjs/toolkit';
import adoptionsR from './modules/adoptionSlice';
export const store = configureStore({
   reducer: { adoptionsR },
});
