let { adoptionAppTable } = require('../models/adoptionAppModel');
let no = 1;

// 입양신청서 전체 데이터 가져오기
const getAdoptionAppData = (req, res) => {
   res.send(adoptionAppTable);
};
// 내 입양신청서들 가져오기
const getMyAdoptionApp = (req, res) => {
   const authEmail = req.params.email;
   const myAdoptionApp = adoptionAppTable.filter(adoptionAppItem => adoptionAppItem.email === authEmail);
   res.send(myAdoptionApp);
};
// 입양신청서 추가
const addAdoptionApp = (req, res) => {
   const { propsData } = req.body;
   adoptionAppTable.push({ ...propsData, id: no++ });
};
const editAdoptionApp = (req, res) => {
   /*  let result = {};
  result.storeData = storeTable;
  res.send(result); */
};
// 입양신청서 삭제
const delAdoptionApp = (req, res) => {
   const AdoptionAppID = parseInt(req.params.AdoptionAppID);
   adoptionAppTable = adoptionAppTable.filter(adoptionAppItem => adoptionAppItem.id !== AdoptionAppID);
};
// 입양신청서 승인
const recognitionAdoptionApp = (req, res) => {
   const AdoptionAppID = req.body;
};
// 입양신청서 거부
const rejectionAdoptionApp = (req, res) => {
   const AdoptionAppID = req.body;
};

module.exports = {
   getAdoptionAppData,
   getMyAdoptionApp,
   addAdoptionApp,
   editAdoptionApp,
   delAdoptionApp,
   recognitionAdoptionApp,
};
