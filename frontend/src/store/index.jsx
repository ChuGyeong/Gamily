import { configureStore } from '@reduxjs/toolkit';
import adoptionsR from './modules/adoptionSlice';
import storeR from './modules/storeSlice';
import quizR from './modules/quizSlice';
import knowledgeR from './modules/knowledgeSlice';
import authR from './modules/authSlice';
import qnaR from './modules/qnaSlice';
import noticeR from './modules/noticeSlice';
import adoptionAppR from './modules/adoptionAppSlice';
import cartR from './modules/cartSlice';
import badgeR from './modules/badgeSlice';

export const store = configureStore({
   reducer: { adoptionsR, storeR, quizR, knowledgeR, authR, qnaR, noticeR, adoptionAppR, cartR, badgeR },
});
