import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   auth: JSON.parse(localStorage.getItem('auth')) || null,
   authData: JSON.parse(localStorage.getItem('authData')) || [
      { email: '1@1.com', pw: '1', username: '임시아이디1', cart: [], favDogs: [], badge: [], isManager: false },
      { email: '2@2.com', pw: '2', username: '임시아이디2', cart: [], favDogs: [], badge: [], isManager: true },
   ],
   authState: {},
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login: (state, action) => {
         const { email, pw } = action.payload;
         const findItem = state.authData.find(item => item.email === email && item.pw === pw);
         if (findItem) {
            state.authState = { title: 'success', text: 'login' };
            state.auth = { email: findItem.email, username: findItem.username };
            localStorage.setItem('auth', JSON.stringify({ email: findItem.email, username: findItem.username }));
         } else {
            if (state.authData.find(item => item.email === email))
               state.authState = { title: 'fail', text: 'notMatchPw' };
            else {
               state.authState = { title: 'fail', text: 'notFoundEmail' };
            }
         }
      },
      logout: (state, action) => {
         state.auth = null;
         localStorage.removeItem('auth');
         state.authState = { title: 'success', text: 'logout' };
      },
      signUp: (state, action) => {
         const { email, username } = action.payload;
         if (state.authData.find(item => item.email === email)) {
            state.authState = { title: 'fail', text: 'duplicate' };
            return;
         }
         state.authData = [
            ...state.authData,
            { ...action.payload, cart: [], favDogs: [], badge: [], isManager: false },
         ];
         localStorage.setItem('authData', JSON.stringify(state.authData));
         state.auth = { email, username };
         localStorage.setItem('auth', JSON.stringify({ email, username }));
         state.authState = { title: 'success', text: 'signUp' };
      },
      toggleFavDogs: (state, action) => {
         state.authData = state.authData.map(item => {
            if (item.email === state.auth.email) {
               const newFavDogs = item.favDogs.find(dog => dog.desertionNo === action.payload.desertionNo)
                  ? item.favDogs.filter(dog => dog.desertionNo !== action.payload.desertionNo)
                  : [...item.favDogs, action.payload];
               return { ...item, favDogs: newFavDogs };
            } else {
               return item;
            }
         });
         localStorage.setItem('authData', JSON.stringify(state.authData));
      },
      addInCart: (state, action) => {
         state.authData = state.authData.map(item => {
            if (item.email === state.auth.email) {
               if (item.cart.find(product => product.id === action.payload.id)) {
                  state.authState = { title: 'fail', text: 'addInCart' };
                  return item;
               } else {
                  state.authState = { title: 'success', text: 'addInCart' };
                  const newProduct = [...item.cart, action.payload];
                  return { ...item, cart: newProduct };
               }
            } else {
               return item;
            }
         });
         localStorage.setItem('authData', JSON.stringify(state.authData));
      },
      removeInCart: (state, action) => {
         state.authData = state.authData.map(item => {
            if (item.email === state.auth.email) {
               if (item.cart.find(product => product.id === action.payload.id)) {
                  const newProduct = item.cart.filter(product => product.id !== action.payload.id);
                  state.authState = { title: 'success', text: 'removeInCart' };
                  return { ...item, cart: newProduct };
               } else {
                  state.authState = { title: 'fail', text: 'removeInCart' };
                  return item;
               }
            } else {
               return item;
            }
         });
         localStorage.setItem('authData', JSON.stringify(state.authData));
      },
      resetAuthState: state => {
         state.authState = {};
      },
   },
});
export const { login, logout, signUp, toggleFavDogs, addInCart, removeInCart, resetAuthState } = authSlice.actions;
export default authSlice.reducer;
