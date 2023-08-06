let { cartTable } = require('../models/cartModel');
let no = 1;

// 장바구니 전체 데이터 가져오기
const getCartData = (req, res) => {
   let result = {};
   result.cartData = cartTable;
   res.send(result);
};
// 내 장바구니 가져오기
const getMyCart = (req, res) => {
   const { authEmail } = req.body.propsData;
   let result = {};
   const myCart = cartTable.filter(item => item.email === authEmail);
   result.myCart = myCart || [];
   res.send(result);
};
// 상품 장바구니에 넣기
const addInCart = (req, res) => {
   const { productID, authEmail } = req.body.propsData;
   let result = {};
   if (cartTable.find(cartItem => cartItem.email === authEmail && cartItem.productID === productID)) {
      result.cartState = { title: 'fail', text: 'addInCart' };
   } else {
      result.cartState = { title: 'success', text: 'addInCart' };
      cartTable.push({ id: no++, email: authEmail, productID, quantity: 1, isChk: false });
   }
   result.myCart = cartTable.filter(item => item.email === authEmail);
   res.send(result);
};
// 장바구니 해당 상품 수량 증가
const quantityUp = (req, res) => {
   const { productID, authEmail } = req.body.propsData;
   let result = {};
   cartTable = cartTable.map(cartItem =>
      cartItem.email === authEmail && cartItem.productID === productID
         ? { ...cartItem, quantity: cartItem.quantity + 1 }
         : cartItem,
   );
   result.myCart = cartTable.filter(item => item.email === authEmail);
   res.send(result);
};
// 장바구니 상품 수량 감소
const quantityDown = (req, res) => {
   const { productID, authEmail } = req.body.propsData;
   let result = {};
   cartTable = cartTable.map(cartItem =>
      cartItem.email === authEmail && cartItem.productID === productID
         ? { ...cartItem, quantity: cartItem.quantity - 1 }
         : cartItem,
   );
   result.myCart = cartTable.filter(item => item.email === authEmail);
   res.send(result);
};
// 장바구니 해당 상품 체크 토글
const onCheckbox = (req, res) => {
   const { productID, authEmail } = req.body.propsData;
   let result = {};
   cartTable = cartTable.map(cartItem =>
      cartItem.email === authEmail && cartItem.productID === productID
         ? { ...cartItem, isChk: !cartItem.isChk }
         : cartItem,
   );
   result.myCart = cartTable.filter(item => item.email === authEmail);
   res.send(result);
};
// 장바구니 전체 체크 토글
const toggleCheckbox = (req, res) => {
   const { authEmail } = req.body.propsData;
   const myCart = cartTable.filter(cartItem => cartItem.email === authEmail);
   const isAllChecked = myCart.every(cartItem => cartItem.isChk);
   let result = {};
   cartTable = cartTable.map(cartItem =>
      cartItem.email === authEmail ? { ...cartItem, isChk: isAllChecked ? false : true } : cartItem,
   );
   result.myCart = cartTable.filter(item => item.email === authEmail);
   res.send(result);
};
// 장바구니 선택 상품 삭제
const checkProductDel = (req, res) => {
   const { authEmail } = req.body.propsData;
   let result = {};
   cartTable = cartTable.filter(cartItem => !(cartItem.email === authEmail && cartItem.isChk));
   result.myCart = cartTable.filter(item => item.email === authEmail);
   res.send(result);
};
// 장바구니 전체 상품 삭제
const allProductDel = (req, res) => {
   const { authEmail } = req.body.propsData;
   let result = {};
   cartTable = cartTable.filter(cartItem => !(cartItem.email === authEmail));
   result.myCart = [];
   res.send(result);
};
// 장바구니 선택 상품 주문
const checkProductOrder = (req, res) => {
   const { authEmail } = req.body.propsData;
   let result = {};
   cartTable = cartTable.filter(cartItem => !(cartItem.email === authEmail && cartItem.isChk));
   result.myCart = cartTable.filter(item => item.email === authEmail);
   res.send(result);
};
// 장바구니 전체 상품 주문
const allProductOrder = (req, res) => {
   const { authEmail } = req.body.propsData;
   console.log(authEmail);
   let result = {};
   cartTable = cartTable.filter(cartItem => !(cartItem.email === authEmail));
   result.myCart = [];
   res.send(result);
};

module.exports = {
   getCartData,
   getMyCart,
   addInCart,
   quantityUp,
   quantityDown,
   onCheckbox,
   toggleCheckbox,
   checkProductDel,
   allProductDel,
   checkProductOrder,
   allProductOrder,
};
