const express = require('express');
const {
   getNoticeData,
   addNotice,
   editNotice,
   delNotice,
   increaseHitsNotice,
} = require('../controllers/noticeController');
const noticeRouter = express.Router();

noticeRouter.get('/getNoticeData', getNoticeData);
noticeRouter.post('/addNotice', addNotice);
noticeRouter.put('/editNotice', editNotice);
noticeRouter.delete('/delNotice', delNotice);
noticeRouter.put('/increaseHitsNotice', increaseHitsNotice);

module.exports = noticeRouter;
