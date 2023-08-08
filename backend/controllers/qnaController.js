let { qnaTable } = require('../models/qnaModel');
let no = 1;

// qna 전체 데이터 가져오기
const getQnaData = (req, res) => {
   console.log('getQnaData');
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
   console.log('addQuestion작동');
   const { authEmail, title, username, question, date } = req.body.propsData;
   qnaTable = qnaTable.push({ id: no++, title, username, email: authEmail, question, answer: '', date });
   res.send(qnaTable);
};
// 질문 수정
const editQuestion = (req, res) => {
   const { questionID, question } = req.body.propsData;
   qnaTable = qnaTable.map(qnaItem => (qnaItem.id === questionID ? { ...qnaItem, question } : qnaItem));
   res.send(qnaTable);
};
// 질문 삭제
const delQuestion = (req, res) => {
   const questionID = req.params.id;
   qnaTable = qnaTable.filter(qnaItem => !(qnaItem.id === questionID));
};

// 답변
const addAnswer = (req, res) => {
   const { questionID, answer } = req.body.propsData;
   qnaTable = qnaTable.map(qnaItem => (qnaItem.id === questionID ? { ...qnaItem, answer } : qnaItem));
};

module.exports = { getQnaData, getMyQna, addQuestion, editQuestion, delQuestion, addAnswer };
