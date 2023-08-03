let { authData } = require('../models/authModel');
let no = authData.length + 1;

// get 전체데이터
const getAuthData = (req, res) => {
   res.send(authData);
};
// post 로그인
const login = (req, res) => {
   let result = {};
   const { email, pw } = req.body.loginData;
   const myAuth = authData.find(item => item.email === email && item.pw === pw);
   if (myAuth) {
      const { id, email, username, isManager } = myAuth;
      result.authState = { title: 'success', text: 'login' };
      result.auth = { id, email, username, isManager };
   } else {
      if (authData.find(item => item.email === email)) {
         state.authState = { title: 'fail', text: 'notMatchPw' };
      } else {
         state.authState = { title: 'fail', text: 'notFoundEmail' };
      }
   }
   res.send(result);
};
// post 회원가입
const signUp = (req, res) => {
   let result = {};
   let id = null;
   const { email, username, pw, date } = req.body;
   if (state.authData.find(item => item.email === email)) {
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
// edit my auth
const editAuth = (req, res) => {
   const { editData } = req.body;
   console.log(editData);
};

module.exports = { getAuthData, login, signUp, editAuth };
