let { authData } = require('../models/authModel');
let no = authData.length + 1;

// get 전체데이터
const getAllAuthData = (req, res) => {
   res.send(authData);
};
// post 내 데이터 가져오기
const getMyAuth = (req, res) => {
   const { authID } = req.body;
   const myAuthData = authData.find(item => item.id === authID);
   if (myAuthData) {
      res.send(myAuthData);
   }
};
// post 로그인
const login = (req, res) => {
   let result = {};
   const { email, pw } = req.body.loginData;
   const myAuth = authData.find(item => item.email === email && item.pw === pw);
   if (myAuth) {
      const { id, email, username, isManager } = myAuth;
      result.authState = { title: 'success', text: 'login' };
      result.myAuth = myAuth;
      result.auth = { id, email, username, isManager };
   } else {
      if (authData.find(item => item.email === email)) {
         result.authState = { title: 'fail', text: 'notMatchPw' };
      } else {
         result.authState = { title: 'fail', text: 'notFoundEmail' };
      }
   }
   res.send(result);
};
// post 회원가입
const signUp = (req, res) => {
   let result = {};
   let id = null;
   const { email, username, pw, date } = req.body.signUpData;
   console.log(req.body.signUpData, email);
   if (authData.find(item => item.email === email)) {
      result.authState = { title: 'fail', text: 'duplicate' };
   } else {
      id = no++;
      authData = [
         ...authData,
         {
            id,
            email,
            username,
            pw,
            cart: [],
            favDogs: [],
            badge: [],
            isManager: false,
            profileImg: './images/profile.jpg',
            date,
         },
      ];
      result.auth = {
         id,
         email,
         username,
         isManager: false,
      };
      result.authState = { title: 'success', text: 'signUp' };
   }
   res.send(result);
};
// put 내정보 수정
const editAuth = (req, res) => {
   let result = {};
   const { editData } = req.body;
   authData = authData.map(item => (item.id === editData.id ? { ...item, ...editData } : item));
   let myAuthData = authData.find(item => item.id === editData.id);
   result.myAuth = myAuthData;
   result.auth = {
      id: myAuthData.id,
      email: myAuthData.email,
      username: myAuthData.username,
      isManager: myAuthData.isManager,
   };
   result.myAuth = res.send(result);
};
// 토글 관심있는 강아지
const toggleFavDogs = (req, res) => {
   let result = {};
   const { AdoptionItem, authID } = req.body.toggleFavDogsData;
   const { desertionNo } = AdoptionItem;

   authData = authData.map(item => {
      if (item.id === authID) {
         const newFavDogs = item.favDogs.find(dog => dog.desertionNo === desertionNo)
            ? item.favDogs.filter(dog => dog.desertionNo !== desertionNo)
            : [...item.favDogs, AdoptionItem];
         return { ...item, favDogs: newFavDogs };
      } else {
         return item;
      }
   });

   result.myAuth = authData.find(item => item.id === authID);
   res.send(result);
};
// 상품 장바구니에 넣기
const addInCart = (req, res) => {
   let result = {};
   const { cartItem, authID } = req.body.addCartData;
   authData = authData.map(item => {
      if (item.id === authID) {
         if (item.cart.find(product => product.id === cartItem.id)) {
            result.authState = { title: 'fail', text: 'addInCart' };
            return item;
         } else {
            result.authState = { title: 'success', text: 'addInCart' };
            const newProduct = [...item.cart, { ...cartItem, quantity: 1, isChk: false }];
            return { ...item, cart: newProduct };
         }
      } else {
         return item;
      }
   });
   result.myAuth = authData.find(item => item.id === authID);
   res.send(result);
};
// 상품 장바구니에서 제거
const removeInCart = (req, res) => {
   let result = {};
   const { cartItem, authID } = req.body.addCartData;
   authData = authData.map(item => {
      if (item.id === authID) {
         if (item.cart.find(product => product.id === cartItem.id)) {
            const newProduct = item.cart.filter(product => product.id !== cartItem.id);
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
   result.myAuth = authData.find(item => item.id === authID);
   res.send(result);
};
// 장바구니 상품 수량 증가
const quantityUp = (req, res) => {
   let result = {};
   const { productID, authID } = req.body.quantityUpData;
   authData = authData.map(user =>
      user.id === authID
         ? {
              ...user,
              cart: user.cart.map(cartItem =>
                 cartItem.id === productID ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
              ),
           }
         : user,
   );
   result.myAuth = authData.find(item => item.id === authID);
   res.send(result);
};
// 장바구니 상품 수량 감소
const quantityDown = (req, res) => {
   let result = {};
   const { productID, authID } = req.body.quantityDownData;
   authData = authData.map(user =>
      user.id === authID
         ? {
              ...user,
              cart: user.cart.map(cartItem =>
                 cartItem.id === productID ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
              ),
           }
         : user,
   );
   result.myAuth = authData.find(item => item.id === authID);
   res.send(result);
};
// 장바구니 해당 상품 체크 토글
const onCheckbox = (req, res) => {
   let result = {};
   const { productID, authID } = req.body.onCheckboxData;
   authData = authData.map(user =>
      user.id === authID
         ? {
              ...user,
              cart: user.cart.map(cartItem =>
                 cartItem.id === productID ? { ...cartItem, isChk: !cartItem.isChk } : cartItem,
              ),
           }
         : user,
   );
   result.myAuth = authData.find(item => item.id === authID);
   res.send(result);
};
// 장바구니 전체 체크 토글
const toggleCheckbox = (req, res) => {
   let result = {};
   const { authID } = req.body.toggleCheckboxData;

   const isAllChecked = authData.some(user => {
      if (user.id === authID) {
         return user.cart.every(cartItem => cartItem.isChk);
      }
      return false;
   });
   authData = authData.map(user =>
      user.id === authID
         ? {
              ...user,
              cart: user.cart.map(cartItem => ({
                 ...cartItem,
                 isChk: isAllChecked ? false : true,
              })),
           }
         : user,
   );
   result.myAuth = authData.find(item => item.id === authID);
   res.send(result);
};

module.exports = {
   getAllAuthData,
   login,
   signUp,
   editAuth,
   getMyAuth,
   toggleFavDogs,
   addInCart,
   removeInCart,
   quantityUp,
   quantityDown,
   onCheckbox,
   toggleCheckbox,
};