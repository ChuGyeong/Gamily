let { noticeTable } = require('../models/noticeModel');
let no = noticeTable.length + 1 || 0;

// 공지사항 전체 데이터 가져오기
const getNoticeData = (req, res) => {
   res.send(noticeTable);
};
// 공지사항 추가
const addNotice = (req, res) => {
   noticeTable.push({ ...req.body, id: no++ });
   res.send(noticeTable);
};
// 공지사항 수정
const editNotice = (req, res) => {
   const { noticeItemID } = req.body.propsData;
   noticeTable = noticeTable.map(noticeItem =>
      noticeItem.id === noticeItemID ? { ...noticeItem, ...req.body.propsData } : noticeItem,
   );
   res.send(noticeTable);
};
// 공지사항 삭제
const delNotice = (req, res) => {
   const noticeID = req.params.id;
   noticeTable = noticeTable.filter(noticeItem => noticeItem.id !== noticeID);
   res.send(noticeTable);
};
// 공지사항 조회수 증가
const increaseHitsNotice = (req, res) => {
   const { noticeItemID } = req.body;
   noticeTable = noticeTable.map(noticeItem =>
      noticeItem.id === noticeItemID ? { ...noticeItem, hits: ++noticeItem.hits } : noticeItem,
   );
   res.send(noticeTable);
};
module.exports = { getNoticeData, addNotice, editNotice, delNotice, increaseHitsNotice };
