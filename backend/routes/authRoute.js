const express = require('express');
const { getAuthData, login, signUp, editAuth } = require('../controllers/authController');
const authRouter = express.Router();

authRouter.get('/', getAuthData);
authRouter.put('/', editAuth);
authRouter.post('/login', login);
authRouter.post('/signUp', signUp);

module.exports = authRouter;
