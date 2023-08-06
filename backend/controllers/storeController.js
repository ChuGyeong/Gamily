let { storeTable } = require('../models/storeModel');

// 상품 전체 데이터 가져오기
const getStoreData = (req, res) => {
   let result = {};
   result.storeData = storeTable;
   res.send(result);
};

// 특정 상품 데이터 가져오기
const getStoreItem = (req, res) => {
   const productID = parseInt(req.params.id);
   let result = {};
   result.storeItem = storeTable.find(productItem => productItem.id === productID);
   res.send(result);
};
module.exports = {
   getStoreData,
   getStoreItem,
};
