import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   auth: JSON.parse(localStorage.getItem('auth')) || null, // 내 계정(일부만, ls저장용)
   myAuth: {}, // 내 계정(전체)
   authData: [], // 전체 계정
   authState: {},
};

export const getAllAuthData = createAsyncThunk('auth/getAuthData', async () => {
   const res = await axios.get(`http://localhost:3000/auth/getAllAuth`);
   return res.data;
});
export const getMyAuth = createAsyncThunk('auth/getMyAuth', async propsData => {
   const res = await axios.post(`http://localhost:3000/auth/getMyAuth`, { propsData });
   return res.data;
});
export const login = createAsyncThunk('auth/login', async propsData => {
   const res = await axios.post(`http://localhost:3000/auth/login`, { propsData });
   return res.data;
});
export const signUp = createAsyncThunk('auth/signUp', async propsData => {
   const res = await axios.post(`http://localhost:3000/auth/signUp`, { propsData });
   return res.data;
});
export const editAuth = createAsyncThunk('auth/editAuth', async propsData => {
   const res = await axios.put(`http://localhost:3000/auth`, { propsData });
   return res.data;
});
export const toggleFavDogs = createAsyncThunk('auth/toggleFavDogs', async propsData => {
   const res = await axios.put(`http://localhost:3000/auth/toggleFavDogs`, { propsData });
   return res.data;
});
export const addBadge = createAsyncThunk('auth/quiz', async propsData => {
   const res = await axios.put(`http://localhost:3000/auth/quiz`, { propsData });
   return res.data;
});

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logout: (state, action) => {
         state.auth = null;
         (state.myAuth = {}), localStorage.removeItem('auth');
         state.authState = { title: 'success', text: 'logout' };
      },
      resetAuthState: state => {
         state.authState = {};
      },
   },
   extraReducers: builder => {
      builder
         .addCase(getAllAuthData.fulfilled, (state, action) => {
            state.authData = action.payload;
         })
         .addCase(getMyAuth.fulfilled, (state, action) => {
            state.myAuth = action.payload;
         })
         .addCase(login.fulfilled, (state, action) => {
            const { auth, authState } = action.payload;
            state.auth = auth;
            state.authState = authState;
            localStorage.setItem('auth', JSON.stringify(auth));
         })
         .addCase(signUp.fulfilled, (state, action) => {
            const { auth, authState } = action.payload;
            if ((authState.title = 'success')) {
               state.auth = auth;
               state.authState = authState;
               localStorage.setItem('auth', JSON.stringify(auth));
            }
         })
         .addCase(editAuth.fulfilled, (state, action) => {
            const { auth, authState, myAuth } = action.payload;
            state.auth = auth;
            state.myAuth = myAuth;
            localStorage.setItem('auth', JSON.stringify(auth));
            state.authState = authState;
         })
         .addCase(toggleFavDogs.fulfilled, (state, action) => {
            const { myAuth } = action.payload;
            state.myAuth = myAuth;
         })
         .addCase(addBadge.fulfilled, (state, action) => {
            const { myAuth } = action.payload;
            state.myAuth = myAuth;
         });
   },
});
export const { logout, resetAuthState } = authSlice.actions;
export default authSlice.reducer;
