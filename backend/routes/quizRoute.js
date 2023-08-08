const express = require('express');
const { getAllQuizData } = require('../controllers/quizController');
const quizRouter = express.Router();

quizRouter.get('/', getAllQuizData);

module.exports = quizRouter;
