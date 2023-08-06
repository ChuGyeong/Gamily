const express = require('express');
const { getAllQuizData } = require('../controllers/quizController');
const authRouter = express.Router();

authRouter.get('/', getAllQuizData);

module.exports = authRouter;
