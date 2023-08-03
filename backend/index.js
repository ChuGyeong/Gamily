const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const authRouter = require('./routes/authRoute');
app.use(express.json());
app.use(cors());
app.use('/auth', authRouter);

app.listen(port, () => {
   console.log(`서버 실행 (:${port})`);
});
