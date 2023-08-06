let { quizTable } = require('../models/quizModel');

// 전체데이터 가져오기
const getAllQuizData = (req, res) => {
   res.send(quizTable);
};
module.exports = {
   getAllQuizData,
};
