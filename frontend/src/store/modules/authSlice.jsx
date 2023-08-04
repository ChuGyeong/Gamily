import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   auth: JSON.parse(localStorage.getItem('auth')) || null, // 내 계정(일부만, ls저장용)
   myAuth: {},
   authData: [], // 전체 계정
   authState: {},
};

export const getAllAuthData = createAsyncThunk('auth/getAuthData', async () => {
   const res = await axios.get(`http://localhost:3000/auth/getAllAuth`);
   return res.data;
});
export const getMyAuth = createAsyncThunk('auth/getMyAuth', async authID => {
   const res = await axios.post(`http://localhost:3000/auth/getMyAuth`, { authID });
   return res.data;
});
export const login = createAsyncThunk('auth/login', async loginData => {
   const res = await axios.post(`http://localhost:3000/auth/login`, { loginData });
   return res.data;
});
export const signUp = createAsyncThunk('auth/signUp', async signUpData => {
   const res = await axios.post(`http://localhost:3000/auth/signUp`, { signUpData });
   return res.data;
});
export const editAuth = createAsyncThunk('auth/editAuth', async editData => {
   const res = await axios.put(`http://localhost:3000/auth`, { editData });
   return res.data;
});
export const toggleFavDogs = createAsyncThunk('auth/toggleFavDogs', async toggleFavDogsData => {
   const res = await axios.put(`http://localhost:3000/auth/toggleFavDogs`, { toggleFavDogsData });
   return res.data;
});
export const addInCart = createAsyncThunk('auth/addInCart', async addCartData => {
   const res = await axios.put(`http://localhost:3000/auth/addInCart`, { addCartData });
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
      /*  addInCart: (state, action) => {
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
      }, */
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
            }
            state.authState = authState;
            localStorage.setItem('auth', JSON.stringify(auth));
         })
         .addCase(editAuth.fulfilled, (state, action) => {
            const { auth, authState, myAuth } = action.payload;
            if ((authState.title = 'success')) {
               state.auth = auth;
               state.myAuth = myAuth;
               localStorage.setItem('auth', JSON.stringify(auth));
            }
            state.authState = authState;
         })
         .addCase(toggleFavDogs.fulfilled, (state, action) => {
            const { myAuth } = action.payload;
            state.myAuth = myAuth;
         })
         .addCase(addInCart.fulfilled, (state, action) => {
            const { myAuth, authState } = action.payload;
            state.myAuth = myAuth;
            state.authState = authState;
         });
   },
});
export const {
   logout,
   removeInCart,
   resetAuthState,
   addBadge,
   quantityUp,
   quantityDown,
   onCheckbox,
   toggleCheckbox,
   checkProductDel,
   allProductDel,
} = authSlice.actions;
export default authSlice.reducer;
