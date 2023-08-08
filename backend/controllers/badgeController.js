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
// 뱃지 추가하기
const addBadge = (req, res) => {
   const { authEmail, badgeData } = req.body.propsData;
   if (!authBadgeTable.find(badgeItem => badgeItem.email === authEmail && badgeItem.badgeID === badgeData.id))
      authBadgeTable.push({
         id: no++,
         email: authEmail,
         badgeID: badgeData.id,
         name: badgeData.name,
         img: badgeData.img,
      });
};

module.exports = { getBadgeData, getMyBadge, addBadge };
