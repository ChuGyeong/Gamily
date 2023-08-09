const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const authRouter = require('./routes/authRoute');
const cartRouter = require('./routes/cartRoute');
const storeRouter = require('./routes/storeRoute');
const quizRouter = require('./routes/quizRoute');
const badgeRouter = require('./routes/badgeRoute');
const qnaRouter = require('./routes/qnaRoute');
const noticeRouter = require('./routes/noticeRoute');
const adoptionAppRouter = require('./routes/adoptionAppRoute');

app.use(express.json());
app.use(cors());
app.use('/auth', authRouter);
app.use('/cart', cartRouter);
app.use('/store', storeRouter);
app.use('/quiz', quizRouter);
app.use('/badge', badgeRouter);
app.use('/qna', qnaRouter);
app.use('/notice', noticeRouter);
app.use('/adoptionApp', adoptionAppRouter);

app.listen(port, () => {
   console.log(`서버 실행 (:${port})`);
});
