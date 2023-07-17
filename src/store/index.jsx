import { configureStore } from '@reduxjs/toolkit';
import adoptionsR from './modules/adoptionSlice';
import storeR from './modules/storeSlice';
import quizR from './modules/quizSlice';
import knowledgeR from './modules/knowledgeSlice';
import authR from './modules/authSlice';

export const store = configureStore({
   reducer: { adoptionsR, storeR, quizR, knowledgeR, authR },
});
