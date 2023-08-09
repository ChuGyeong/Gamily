let { qnaTable } = require('../models/qnaModel');
let no = qnaTable.length + 1 || 0;

// qna 전체 데이터 가져오기
const getQnaData = (req, res) => {
   res.send(qnaTable);
};
// 내 질문 가져오기
const getMyQna = (req, res) => {
   const authEmail = req.params.email;
   const result = qnaTable.filter(qnaItem => qnaItem.email === authEmail);
   res.send(result);
};
// 질문 추가
const addQuestion = (req, res) => {
   const { authEmail, title, username, question, date } = req.body.propsData;
   qnaTable.push({ id: no++, title, username, email: authEmail, question, answer: '', date });
   res.send(qnaTable);
};
// 질문 수정
const editQuestion = (req, res) => {
   const { id: questionID, title, question } = req.body.propsData;
   qnaTable = qnaTable.map(qnaItem => (qnaItem.id === questionID ? { ...qnaItem, title, question } : qnaItem));
   res.send(qnaTable);
   console.log(qnaTable);
};
// 질문 삭제
const delQuestion = (req, res) => {
   const questionID = parseInt(req.params.id);
   qnaTable = qnaTable.filter(qnaItem => !(qnaItem.id === questionID));
   res.send(qnaTable);
};

// 답변
const addAnswer = (req, res) => {
   const { questionID, answer } = req.body.propsData;
   qnaTable = qnaTable.map(qnaItem => (qnaItem.id === questionID ? { ...qnaItem, answer } : qnaItem));
   res.send(qnaTable);
};

module.exports = { getQnaData, getMyQna, addQuestion, editQuestion, delQuestion, addAnswer };
