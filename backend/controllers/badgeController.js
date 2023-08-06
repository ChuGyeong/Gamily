let { badgeTable, authBadgeTable } = require('../models/badgeModel');
let no = authBadgeTable.length + 1 || 1;

// 뱃지 데이터 가져오기
const getBadgeData = (req, res) => {
   res.send(badgeTable);
};
// 내 뱃지 데이터 가져오기
const getMyBadge = (req, res) => {
   const userEmail = req.params.email;
   const myBadge = authBadgeTable.filter(item => item.email === userEmail);
   res.send(myBadge);
};
// 내 데이터 가져오기
/* const getMyAuth = (req, res) => {
   const { authEmail } = req.body.propsData;
   const myAuthData = authTable.find(item => item.email === authEmail);
   if (myAuthData) {
      res.send(myAuthData);
   }
}; */

module.exports = { getBadgeData, getMyBadge };
