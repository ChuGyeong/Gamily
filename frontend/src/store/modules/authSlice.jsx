import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   auth: JSON.parse(localStorage.getItem('auth')) || null,
   authData: [],
   authState: {},
};

export const getAuthData = createAsyncThunk('auth/getAuthData', async () => {
   const res = await axios.get(`http://localhost:3000/auth`);
   return res.data;
});
export const login = createAsyncThunk('auth/login', async loginData => {
   const res = await axios.post(`http://localhost:3000/auth/login`, { loginData });
   return res.data;
});
export const editAuth = createAsyncThunk('auth/editAuth', async editData => {
   const res = await axios.put(`http://localhost:3000/auth`, { editData });
   return res.data;
});

const getToday = (daysBefore = 0) => {
   const date = new Date();
   date.setDate(date.getDate() - daysBefore);
   const year = date.getFullYear();
   const month = String(date.getMonth() + 1).padStart(2, '0');
   const day = String(date.getDate()).padStart(2, '0');
   return `${year}${month}${day}`;
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
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
            {
               ...action.payload,
               cart: [],
               favDogs: [],
               badge: [],
               isManager: false,
               profileImg: './images/profile.jpg',
               date: getToday(),
            },
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
                  const newProduct = [...item.cart, { ...action.payload, quantity: 1, isChk: false }];
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
      editUser: (state, action) => {
         const { email, pw, profileImg, username } = action.payload;
         state.authData = state.authData.map(item =>
            item.email === email ? { ...item, username, profileImg, pw } : item,
         );
         state.auth = { ...state.auth, username, profileImg };
         localStorage.setItem('authData', JSON.stringify(state.authData));
         localStorage.setItem('auth', JSON.stringify({ email, username, profileImg }));
      },
      addBadge: (state, action) => {
         const { id } = action.payload;
         const { email } = state.auth;
         state.authData = state.authData.map(item => {
            if (item.email === email) {
               if (item.badge.find(badge => badge.id === id)) {
                  return item;
               } else {
                  const newBadge = [...item.badge, action.payload];
                  return { ...item, badge: newBadge };
               }
            } else return item;
         });
         state.authData = state.authData.map(item => {
            if (item.email === email) {
               if (
                  !item.badge.find(badge => badge.id === 'prize') &&
                  item.badge.find(badge => badge.id === 'basic3') &&
                  item.badge.find(badge => badge.id === 'deepen3')
               ) {
                  const newBadge = [...item.badge, { id: 'prize', img: '../images/ranking-trophy.png' }];
                  return { ...item, badge: newBadge };
               } else return item;
            } else return item;
         });
         localStorage.setItem('authData', JSON.stringify(state.authData));
      },
      quantityUp: (state, action) => {
         state.authData = state.authData.map(user =>
            user.email === state.auth.email
               ? {
                    ...user,
                    cart: user.cart.map(cartItem =>
                       cartItem.id === action.payload ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
                    ),
                 }
               : user,
         );
         localStorage.setItem('authData', JSON.stringify(state.authData));
      },
      quantityDown: (state, action) => {
         state.authData = state.authData.map(user =>
            user.email === state.auth.email
               ? {
                    ...user,
                    cart: user.cart.map(cartItem =>
                       cartItem.id === action.payload ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
                    ),
                 }
               : user,
         );
         localStorage.setItem('authData', JSON.stringify(state.authData));
      },
      onCheckbox: (state, action) => {
         state.authData = state.authData.map(user =>
            user.email === state.auth.email
               ? {
                    ...user,
                    cart: user.cart.map(cartItem =>
                       cartItem.id === action.payload ? { ...cartItem, isChk: !cartItem.isChk } : cartItem,
                    ),
                 }
               : user,
         );
         localStorage.setItem('authData', JSON.stringify(state.authData));
      },
      toggleCheckbox: (state, action) => {
         const isAllChecked = state.authData.some(user => {
            if (user.email === state.auth.email) {
               return user.cart.every(cartItem => cartItem.isChk);
            }
            return false;
         });

         // 전체 선택 상태에 따라 토글
         state.authData = state.authData.map(user =>
            user.email === state.auth.email
               ? {
                    ...user,
                    cart: user.cart.map(cartItem => ({
                       ...cartItem,
                       isChk: isAllChecked ? false : true,
                    })),
                 }
               : user,
         );
         localStorage.setItem('authData', JSON.stringify(state.authData));
      },
      checkProductDel: (state, action) => {
         state.authData = state.authData.map(user =>
            user.email === state.auth.email
               ? {
                    ...user,
                    cart: user.cart.filter(cartItem => !cartItem.isChk),
                 }
               : user,
         );
         localStorage.setItem('authData', JSON.stringify(state.authData));
      },
      allProductDel: (state, action) => {
         state.authData = state.authData.map(user =>
            user.email === state.auth.email
               ? {
                    ...user,
                    cart: [],
                 }
               : user,
         );
         localStorage.setItem('authData', JSON.stringify(state.authData));
      },
   },

   extraReducers: builder => {
      builder
         .addCase(getAuthData.fulfilled, (state, action) => {
            state.authData = action.payload;
         })
         .addCase(login.fulfilled, (state, action) => {
            const { auth, authState } = action.payload;
            state.auth = auth;
            state.authState = authState;
            localStorage.setItem('auth', JSON.stringify(auth));
         })
         .addCase(editAuth.fulfilled, (state, action) => {
            const { auth, authState } = action.payload;
            state.auth = auth;
            state.authState = authState;
            localStorage.setItem('auth', JSON.stringify(auth));
         });
   },
});
export const {
   logout,
   signUp,
   toggleFavDogs,
   addInCart,
   removeInCart,
   resetAuthState,
   editUser,
   addBadge,
   quantityUp,
   quantityDown,
   onCheckbox,
   toggleCheckbox,
   checkProductDel,
   allProductDel,
} = authSlice.actions;
export default authSlice.reducer;
