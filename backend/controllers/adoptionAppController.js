let { adoptionAppTable } = require('../models/adoptionAppModel');

// 입양신청서 전체 데이터 가져오기
const getStoreData = (req, res) => {
   res.send(adoptionAppTable);
};
// 내 입양신청서들 가져오기
const getMyAdoptionApp = (req, res) => {
   /* adoptionAppTable
  res.send(result); */
};
const addAdoptionApp = (req, res) => {
   /* let result = {};
  result.storeData = storeTable;
  res.send(result); */
};
const editAdoptionApp = (req, res) => {
   /*  let result = {};
  result.storeData = storeTable;
  res.send(result); */
};
const delAdoptionApp = (req, res) => {
   /* let result = {};
  result.storeData = storeTable;
  res.send(result); */
};
module.exports = { getStoreData, getMyAdoptionApp, addAdoptionApp, editAdoptionApp, delAdoptionApp };
