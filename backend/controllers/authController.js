let { authTable } = require('../models/authModel');
let no = authTable.length + 1;

// 전체데이터 가져오기
const getAllAuthData = (req, res) => {
   res.send(authTable);
};
// 내 데이터 가져오기
const getMyAuth = (req, res) => {
   const { authEmail } = req.body.propsData;
   const myAuthData = authTable.find(item => item.email === authEmail);
   if (myAuthData) {
      res.send(myAuthData);
   }
};
// 로그인
const login = (req, res) => {
   let result = {};
   const { email, pw } = req.body.propsData;
   const myAuth = authTable.find(item => item.email === email && item.pw === pw);
   if (myAuth) {
      const { email, username } = myAuth;
      result.authState = { title: 'success', text: 'login' };
      result.myAuth = myAuth;
      result.auth = { email, username };
   } else {
      if (authTable.find(item => item.email === email)) {
         result.authState = { title: 'fail', text: 'notMatchPw' };
      } else {
         result.authState = { title: 'fail', text: 'notFoundEmail' };
      }
   }
   res.send(result);
};
// 회원가입
const signUp = (req, res) => {
   let result = {};
   let id = null;
   const { email, username, pw, date } = req.body.propsData;
   if (authTable.find(item => item.email === email)) {
      result.authState = { title: 'fail', text: 'duplicate' };
   } else {
      id = no++;
      authTable = [
         ...authTable,
         {
            id,
            email,
            username,
            pw,
            favDogs: [],
            badge: [],
            isManager: false,
            profileImg: './images/profile.jpg',
            date,
         },
      ];
      result.auth = {
         email,
         username,
      };
      result.authState = { title: 'success', text: 'signUp' };
   }
   res.send(result);
};
// 내정보 수정
const editAuth = (req, res) => {
   let result = {};
   const { propsData } = req.body;
   authTable = authTable.map(item => (item.email === propsData.email ? { ...item, ...propsData } : item));
   let myAuthData = authTable.find(item => item.email === propsData.email);
   result.myAuth = myAuthData;
   result.auth = {
      email: myAuthData.email,
      username: myAuthData.username,
      isManager: myAuthData.isManager,
   };
   result.myAuth = res.send(result);
};
// 토글 관심있는 강아지
const toggleFavDogs = (req, res) => {
   let result = {};
   const { AdoptionItem, authEmail } = req.body.propsData;
   const { desertionNo } = AdoptionItem;

   authTable = authTable.map(item => {
      if (item.email === authEmail) {
         const newFavDogs = item.favDogs.find(dog => dog.desertionNo === desertionNo)
            ? item.favDogs.filter(dog => dog.desertionNo !== desertionNo)
            : [...item.favDogs, AdoptionItem];
         return { ...item, favDogs: newFavDogs };
      } else {
         return item;
      }
   });
   result.myAuth = authTable.find(item => item.email === authEmail);
   res.send(result);
};

// 뱃지 추가
const addBadge = (req, res) => {
   let result = {};
   const { badgeData, authEmail } = req.body.propsData;
   authTable = authTable.map(item => {
      if (item.email === authEmail) {
         if (item.badge.find(badge => badge.id === badgeData.id)) {
            return item;
         } else {
            const newBadge = [...item.badge, badgeData];
            return { ...item, badge: newBadge };
         }
      } else return item;
   });
   //  최종뱃지2종 획득시 트로피 추가
   authTable = authTable.map(item => {
      if (item.email === authEmail) {
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
   result.myAuth = authTable.find(item => item.email === authEmail);
   res.send(result);
};

module.exports = {
   getAllAuthData,
   login,
   signUp,
   editAuth,
   getMyAuth,
   toggleFavDogs,
   addBadge,
};
