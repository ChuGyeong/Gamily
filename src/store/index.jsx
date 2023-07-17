import { configureStore } from '@reduxjs/toolkit';
import adoptionsR from './modules/adoptionSlice';
import storeR from './modules/storeSlice';
import quizR from './modules/quizSlice';
import knowledgeR from './modules/knowledgeSlice';
<<<<<<< HEAD
import authR from './modules/authSlice';

export const store = configureStore({
   reducer: { adoptionsR, storeR, quizR, knowledgeR, authR },
=======
import qnaR from './modules/qnaSlice';

export const store = configureStore({
   reducer: { adoptionsR, storeR, quizR, knowledgeR, qnaR },
>>>>>>> 3bebbc251494e977838cfc38531d3d151803d0ae
});
