const express = require('express');
const {
   getQnaData,
   getMyQna,
   addQuestion,
   delQuestion,
   addAnswer,
   editQuestion,
} = require('../controllers/qnaController');
const qnaRouter = express.Router();

qnaRouter.get('/getQnaData', getQnaData);
qnaRouter.get('/getMyQna/:email', getMyQna);
qnaRouter.post('/addQuestion', addQuestion);
qnaRouter.put('/editQuestion', editQuestion);
qnaRouter.delete('/delQuestion/:id', delQuestion);
qnaRouter.put('/addAnswer', addAnswer);

module.exports = qnaRouter;
