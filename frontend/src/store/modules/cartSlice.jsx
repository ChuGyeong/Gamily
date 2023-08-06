import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   cartData: [],
   myCart: [],
   cartState: {},
};
export const getCartData = createAsyncThunk('cart/getCartData', async () => {
   const res = await axios.get(`http://localhost:3000/cart/getCartData`);
   return res.data;
});
export const getMyCart = createAsyncThunk('cart/getMyCart', async propsData => {
   const res = await axios.post(`http://localhost:3000/cart/getMyCart`, { propsData });
   return res.data;
});
export const addInCart = createAsyncThunk('cart/addInCart', async propsData => {
   const res = await axios.post(`http://localhost:3000/cart/addInCart`, { propsData });
   return res.data;
});
export const quantityUp = createAsyncThunk('cart/quantityUp', async propsData => {
   const res = await axios.put(`http://localhost:3000/cart/quantityUp`, { propsData });
   return res.data;
});
export const quantityDown = createAsyncThunk('cart/quantityDown', async propsData => {
   const res = await axios.put(`http://localhost:3000/cart/quantityDown`, { propsData });
   return res.data;
});
export const onCheckbox = createAsyncThunk('cart/onCheckbox', async propsData => {
   const res = await axios.put(`http://localhost:3000/cart/onCheckbox`, { propsData });
   return res.data;
});
export const toggleCheckbox = createAsyncThunk('cart/toggleCheckbox', async propsData => {
   const res = await axios.put(`http://localhost:3000/cart/toggleCheckbox`, { propsData });
   return res.data;
});
export const checkProductDel = createAsyncThunk('cart/checkProductDel', async propsData => {
   const res = await axios.put(`http://localhost:3000/cart/checkProductDel`, { propsData });
   return res.data;
});
export const allProductDel = createAsyncThunk('cart/allProductDel', async propsData => {
   const res = await axios.put(`http://localhost:3000/cart/allProductDel`, { propsData });
   return res.data;
});
export const checkProductOrder = createAsyncThunk('cart/checkProductOrder', async propsData => {
   const res = await axios.put(`http://localhost:3000/cart/checkProductOrder`, { propsData });
   return res.data;
});
export const allProductOrder = createAsyncThunk('cart/allProductOrder', async propsData => {
   const res = await axios.put(`http://localhost:3000/cart/allProductOrder`, { propsData });
   return res.data;
});

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      resetCartState: state => {
         state.cartState = {};
      },
   },
   extraReducers: builder => {
      builder
         .addCase(getCartData.fulfilled, (state, action) => {
            const { cartData } = action.payload;
            state.cartData = cartData;
         })
         .addCase(getMyCart.fulfilled, (state, action) => {
            const { myCart } = action.payload;
            state.myCart = myCart;
         })
         .addCase(addInCart.fulfilled, (state, action) => {
            const { myCart, cartState } = action.payload;
            state.myCart = myCart;
            state.cartState = cartState;
         })
         .addCase(quantityUp.fulfilled, (state, action) => {
            const { myCart } = action.payload;
            state.myCart = myCart;
         })
         .addCase(quantityDown.fulfilled, (state, action) => {
            const { myCart } = action.payload;
            state.myCart = myCart;
         })
         .addCase(onCheckbox.fulfilled, (state, action) => {
            const { myCart } = action.payload;
            state.myCart = myCart;
         })
         .addCase(toggleCheckbox.fulfilled, (state, action) => {
            const { myCart } = action.payload;
            state.myCart = myCart;
         })
         .addCase(checkProductDel.fulfilled, (state, action) => {
            const { myCart } = action.payload;
            state.myCart = myCart;
         })
         .addCase(allProductDel.fulfilled, (state, action) => {
            const { myCart } = action.payload;
            state.myCart = myCart;
         })
         .addCase(checkProductOrder.fulfilled, (state, action) => {
            const { myCart } = action.payload;
            state.myCart = myCart;
         })
         .addCase(allProductOrder.fulfilled, (state, action) => {
            const { myCart } = action.payload;
            state.myCart = myCart;
         });
   },
});
export const { resetCartState } = cartSlice.actions;
export default cartSlice.reducer;
